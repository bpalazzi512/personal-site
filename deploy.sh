#!/bin/bash

# Set AWS region
export AWS_REGION=us-east-1

# Check if ECR repository exists, create if not
ECR_REPO=$(aws ecr describe-repositories --repository-names "${PROJECT_NAME}-frontend" --query 'repositories[0].repositoryUri' --output text 2>/dev/null || true)
if [ -z "$ECR_REPO" ]; then
  echo "Creating ECR repository for frontend..."
  aws ecr create-repository --repository-name "${PROJECT_NAME}-frontend" >/dev/null
fi

# Build and push Docker images
echo "Building and pushing Docker images..."
docker build -t "${PROJECT_NAME}-frontend" .
docker tag "${PROJECT_NAME}-frontend:latest" "$ECR_REPO:latest"
docker tag "${PROJECT_NAME}-frontend:latest" "$ECR_REPO:$GIT_COMMIT_SHA"
aws ecr get-login-password --region "$AWS_REGION" | docker login --username AWS --password-stdin "$ECR_REPO"
docker push "$ECR_REPO:latest"
docker push "$ECR_REPO:$GIT_COMMIT_SHA"

# Apply Terraform changes
echo "Applying Terraform changes..."
cd terraform
terraform init
terraform apply -auto-approve

# Update ECS service with new image
echo "Updating ECS service with new image..."
SERVICE_ARN=$(aws ecs list-services --cluster "${PROJECT_NAME}-cluster" --query 'serviceArns[0]' --output text)
aws ecs update-service --cluster "${PROJECT_NAME}-cluster" --service "$SERVICE_ARN" --force-new-deployment

# Wait for deployment to complete
echo "Waiting for deployment to complete..."
aws ecs wait services-stable --cluster "${PROJECT_NAME}-cluster" --services "$SERVICE_ARN"

# Get ALB DNS name
ALB_DNS=$(terraform output -raw alb_dns_name)

echo "Deployment complete! Application is available at http://$ALB_DNS"