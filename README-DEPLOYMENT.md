# Deployment Instructions

## Prerequisites

- AWS CLI installed and configured with appropriate credentials
- Docker installed
- Terraform installed

## Architecture Overview

This application is deployed using AWS ECS Fargate, with the frontend containerized and running behind an Application Load Balancer (ALB). The infrastructure is defined using Terraform and includes the following components:

- VPC with public and private subnets across two Availability Zones
- ECS Cluster and Task Definitions
- ECR Repository for storing container images
- ALB and Target Groups
- Security Groups with least-privilege access
- CloudWatch Log Groups for container logs
- Auto Scaling policies for ECS services

## Deployment Steps

1. Clone the repository and navigate to the project root directory.
2. Copy the `.env.example` file to `.env` and update the values with your AWS account ID and other configurations.
3. Run the `deploy.sh` script:

```
bash deploy.sh
```

This script will perform the following steps:

- Create the ECR repository if it doesn't exist
- Build the frontend Docker image
- Tag the Docker image with the Git commit SHA and `latest`
- Push the Docker images to ECR
- Apply Terraform changes to create or update the infrastructure
- Update the ECS service to use the new task definition

4. After the deployment is complete, the script will output the URL of the deployed application.

## Accessing the Application

The deployment script will output the URL of the deployed application, which should be accessible via a web browser.

## Troubleshooting

- If the deployment fails, check the CloudWatch logs for the ECS tasks and the Terraform output for any error messages.
- Ensure that you have the necessary AWS permissions to create and manage the required resources.
- Verify that the Docker images are built correctly and pushed to ECR successfully.

## Cost Estimates

The main cost drivers for this architecture are:

- ECS Fargate: Charged based on vCPU and memory usage
- Application Load Balancer: Charged based on load balancer hours and data processed
- ECR: Charged based on storage and data transfer
- CloudWatch Logs: Charged based on log data ingestion and storage

The exact costs will depend on your usage patterns and the specific configurations you choose. You can use the AWS Pricing Calculator to estimate the costs based on your requirements.

## Tearing Down Infrastructure

To tear down the infrastructure and delete all resources, run the following commands:

```
cd infrastructure
terraform destroy
```

This will prompt you to confirm the destruction of resources. Review the plan carefully before proceeding.

Note: Destroying resources may still incur some costs for the time the resources were provisioned.