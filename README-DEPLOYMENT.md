# Deployment Instructions

## Prerequisites

- AWS CLI installed and configured with appropriate credentials
- Docker installed
- Terraform installed

## Architecture Overview

This application is deployed using AWS ECS Fargate for container orchestration. The frontend is a Next.js (TypeScript) application served behind an Application Load Balancer (ALB). The infrastructure is provisioned using Terraform, and Docker is used for containerization.

The architecture consists of the following components:

1. **VPC**: A Virtual Private Cloud (VPC) with public and private subnets across two Availability Zones (AZs).
2. **ECS Cluster**: An Elastic Container Service (ECS) cluster running on Fargate.
3. **ECR Repository**: An Elastic Container Registry (ECR) repository to store the frontend Docker image.
4. **ALB**: An Application Load Balancer (ALB) to distribute traffic to the frontend service.
5. **ECS Service**: An ECS service running the frontend task definition.
6. **CloudWatch Logs**: Log groups for capturing container logs.

## Deployment Steps

1. Clone the repository and navigate to the project directory.

2. Create an ECR repository for the frontend image (if not already created):
   ```
   aws ecr create-repository --repository-name my-app-frontend
   ```

3. Build and push the frontend Docker image to ECR:
   ```
   ./deploy.sh
   ```
   This script will authenticate with ECR, build the Docker image, tag it with the Git commit SHA and 'latest', push the images to ECR, apply Terraform changes, and update the ECS service with the new image.

4. After the deployment is complete, the script will output the URL to access the application.

## Accessing the Application

The application can be accessed using the URL printed by the `deploy.sh` script after a successful deployment. It will be in the format `http://<alb-dns-name>`.

## Troubleshooting

- If the deployment fails, check the container logs in CloudWatch Logs for any errors.
- Ensure that the required AWS resources (VPC, subnets, security groups, etc.) are created correctly by reviewing the Terraform output.
- Verify that the Docker image is built and pushed correctly to the ECR repository.

## Cost Estimates

The main cost components of this architecture are:

- **ECS Fargate**: Charged based on vCPU and memory usage.
- **ECR**: Charged based on the amount of data stored.
- **ALB**: Charged based on the number of load balancer hours and data processed.
- **CloudWatch Logs**: Charged based on the amount of log data ingested and stored.

The exact cost will depend on the usage patterns and the AWS region. You can use the AWS Pricing Calculator to estimate the costs based on your specific requirements.

## Tearing Down Infrastructure

To tear down the infrastructure, navigate to the `infrastructure` directory and run:

```
terraform destroy
```

This will delete all the resources provisioned by Terraform, including the VPC, ECS cluster, ECR repository, and ALB.

Note: Make sure to delete any remaining resources (e.g., ECR repository) manually if they were not created by Terraform.