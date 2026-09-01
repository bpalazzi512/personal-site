#!/bin/bash

# Set default values
AWS_REGION="us-east-1"
PROJECT_NAME="my-app"
ENVIRONMENT="dev"

# Load environment variables
set -o allexport
source .env
set +o allexport

# Check if ECR repository exists, create if not
ECR_REPOSITORY_NAME="${PROJECT_NAME}-frontend"
ECR_REPOSITORY_ARN=$(aws ecr describe-repositories --repository-names $ECR_REPOSITORY_NAME --query 'repositories[0].repositoryArn' --output text || true)

if [ -z "$ECR_REPOSITORY_ARN" ]; then
  echo "Creating ECR repository: $ECR_REPOSITORY_NAME"
  aws ecr create-repository --repository-name $ECR_REPOSITORY_NAME
fi

# Authenticate with AWS ECR
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

# Build frontend Docker image
docker build -t $ECR_REPOSITORY_NAME .

# Tag images with commit SHA and 'latest'
COMMIT_SHA=$(git rev-parse --short HEAD)
docker tag $ECR_REPOSITORY_NAME:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY_NAME:$COMMIT_SHA
docker tag $ECR_REPOSITORY_NAME:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY_NAME:latest

# Push images to ECR
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY_NAME:$COMMIT_SHA
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY_NAME:latest

# Initialize Terraform
cd infrastructure
terraform init

# Apply Terraform changes (with approval prompt)
terraform apply -auto-approve

# Update ECS services to use new images
aws ecs update-service --cluster $PROJECT_NAME-cluster --service $PROJECT_NAME-frontend --force-new-deployment

# Show deployment status and output URLs
echo "Deployment completed. Access the application at:"
echo "http://$(terraform output alb_dns_name)"