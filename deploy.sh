#!/bin/bash

# Set project name and environment
PROJECT_NAME="my-app"
ENVIRONMENT="dev"

# Create ECR repository if it doesn't exist
aws ecr describe-repositories --repository-names $PROJECT_NAME-frontend > /dev/null 2>&1
if [ $? -ne 0 ]; then
  aws ecr create-repository --repository-name $PROJECT_NAME-frontend > /dev/null
fi

# Build frontend Docker image
docker build -t $PROJECT_NAME-frontend .

# Get Git commit SHA
GIT_SHA=$(git rev-parse --short HEAD)

# Tag Docker images
docker tag $PROJECT_NAME-frontend:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$PROJECT_NAME-frontend:$GIT_SHA
docker tag $PROJECT_NAME-frontend:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$PROJECT_NAME-frontend:latest

# Push Docker images to ECR
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$PROJECT_NAME-frontend:$GIT_SHA
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$PROJECT_NAME-frontend:latest

# Apply Terraform changes
cd infrastructure
terraform init
terraform apply -auto-approve

# Update ECS service with new task definition
aws ecs update-service --cluster $PROJECT_NAME-cluster --service $PROJECT_NAME-frontend-service --force-new-deployment

# Wait for deployment to complete
aws ecs wait services-stable --cluster $PROJECT_NAME-cluster --services $PROJECT_NAME-frontend-service

# Get ALB DNS name
ALB_DNS=$(terraform output alb_dns_name)

echo "Deployment completed successfully!"
echo "Application URL: http://$ALB_DNS"