#!/bin/bash

# Set default values
AWS_REGION="us-east-1"
PROJECT_NAME="my-app"
ENVIRONMENT="dev"
FRONTEND_ECR_URI=""

# Load environment variables
if [ -f ".env" ]; then
  source .env
fi

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
  echo "AWS CLI is not installed. Please install it and configure your credentials."
  exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
  echo "Docker is not installed. Please install Docker."
  exit 1
fi

# Check if Terraform is installed
if ! command -v terraform &> /dev/null; then
  echo "Terraform is not installed. Please install Terraform."
  exit 1
fi

# Authenticate with AWS ECR
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $FRONTEND_ECR_URI

# Build frontend Docker image
docker build -t $FRONTEND_ECR_URI:latest -t $FRONTEND_ECR_URI:$(git rev-parse --short HEAD) .

# Push images to ECR
docker push $FRONTEND_ECR_URI:latest
docker push $FRONTEND_ECR_URI:$(git rev-parse --short HEAD)

# Initialize Terraform
cd terraform
terraform init

# Apply Terraform changes
read -p "Do you want to apply the Terraform changes? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  terraform apply -auto-approve
else
  echo "Deployment canceled."
  exit 0
fi

# Update ECS services with new images
aws ecs update-service --cluster $PROJECT_NAME-cluster --service $PROJECT_NAME-frontend --force-new-deployment --region $AWS_REGION

# Check deployment status
echo "Deployment in progress..."
aws ecs wait services-stable --cluster $PROJECT_NAME-cluster --services $PROJECT_NAME-frontend --region $AWS_REGION

# Get ALB DNS name
ALB_DNS=$(terraform output -raw alb_dns_name)

echo "Deployment completed successfully!"
echo "Application URL: http://$ALB_DNS"