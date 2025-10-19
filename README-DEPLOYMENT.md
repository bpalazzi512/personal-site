# Deployment Instructions

This document provides step-by-step instructions for deploying the application to AWS using the provided Terraform infrastructure and deployment script.

## Prerequisites

- AWS CLI installed and configured with appropriate credentials
- Docker installed
- Terraform installed

## Architecture Overview

The application is deployed using AWS ECS Fargate for container orchestration. The frontend is a Next.js (TypeScript) application served behind an Application Load Balancer (ALB). The infrastructure is defined using Terraform and includes the following components:

- VPC with public and private subnets across two Availability Zones
- ECS Cluster and Task Definitions
- ECR repositories for storing container images
- ALB with target groups for routing traffic to the frontend
- Security groups with least-privilege access
- Auto-scaling policies for ECS services
- CloudWatch log groups for container logs

## Deployment Steps

1. Clone the repository and navigate to the project root directory.

2. Create a `.env` file based on the provided `.env.example` and fill in the required values, such as the AWS region, project name, and ECR repository URIs.

3. Run the `deploy.sh` script:

   ```bash
   bash deploy.sh
   ```

   This script will perform the following actions:
   - Authenticate with AWS ECR
   - Build the frontend Docker image
   - Push the Docker images to ECR
   - Initialize Terraform
   - Apply Terraform changes (with approval prompt)
   - Update ECS services with the new Docker images
   - Wait for the deployment to complete
   - Output the Application Load Balancer DNS name

4. Once the deployment is complete, you can access the application using the provided Application Load Balancer DNS name.

## Troubleshooting

- If you encounter any issues during deployment, check the CloudWatch logs for the ECS tasks and services.
- Ensure that you have the necessary permissions to create and manage the required AWS resources.
- Verify that the provided environment variables and configurations are correct.

## Cost Estimates

The cost of running this infrastructure will depend on various factors, such as the AWS region, the number of containers running, and the amount of data transfer. You can use the AWS Pricing Calculator to estimate the costs based on your specific requirements.

## Tear Down Infrastructure

To tear down the deployed infrastructure, navigate to the `terraform/` directory and run the following command:

```bash
terraform destroy
```

This will remove all the resources created by Terraform, including the VPC, ECS cluster, ECR repositories, and other related resources.

Note: Make sure to remove any manually created resources or configurations that are not managed by Terraform.