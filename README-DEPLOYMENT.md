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
- ALB with target groups for routing traffic to the frontend
- Security Groups for controlling inbound and outbound traffic
- CloudWatch Log Groups for container logs
- IAM Roles and Policies for ECS tasks

## Deployment Steps

1. Clone the repository and navigate to the project root directory.
2. Create a `.env` file based on the `.env.example` template and fill in the required values.
3. Run `./deploy.sh` to create the ECR repository (if it doesn't exist), build and push the Docker images to ECR, and apply the Terraform configuration.
4. The script will prompt for approval before applying the Terraform changes. Review the plan and enter `yes` to proceed.
5. Once the deployment is complete, the script will output the DNS name of the Application Load Balancer.

## Accessing the Deployed Application

After a successful deployment, you can access the frontend application by navigating to the ALB DNS name in your web browser.

## Troubleshooting

- If the deployment fails, check the CloudWatch logs for the ECS tasks and the Terraform output for any error messages.
- Ensure that you have the necessary AWS permissions to create and manage the required resources.
- Verify that the Docker images are built correctly and pushed to the ECR repository.

## Cost Estimates

The main cost components of this deployment are:

- ECS Fargate tasks (based on vCPU and memory usage)
- Application Load Balancer
- ECR Repository storage
- Data transfer costs (if applicable)

The exact costs will depend on your usage patterns and the AWS region you choose. You can use the AWS Pricing Calculator to estimate the costs based on your specific requirements.

## Tearing Down Infrastructure

To tear down the deployed infrastructure, navigate to the `infrastructure/` directory and run:

```
terraform destroy
```

This will remove all the resources created by Terraform, including the ECS cluster, ECR repository, and VPC.

Note: Terraform will prompt for confirmation before destroying the resources. Review the plan carefully and enter `yes` to proceed.