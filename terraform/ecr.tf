# ECR Repository
resource "aws_ecr_repository" "frontend" {
  name = "${var.project_name}-frontend"

  tags = {
    Name = "${var.project_name}-frontend"
    Environment = var.environment
    ManagedBy = "Terraform"
  }
}