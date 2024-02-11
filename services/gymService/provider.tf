terraform {
  required_providers {
    aws = {
      source    = "hashicorp/aws"
      version   = "~> 5.0"
      accountID = var.accountID
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}
