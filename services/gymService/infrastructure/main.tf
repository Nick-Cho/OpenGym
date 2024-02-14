resource "aws_vpc" "gym_db_vpc" {
    cidr_block = "10.0.0.0/16"
    enable_dns_support = true
    enable_dns_hostnames = true
}

resource "aws_subnet" "gym_db_subnet" {
    vpc_id = aws_vpc.gym_db_vpc.id
    cidr_block = "10.0.1.0/24"
    availability_zone = "us-east-1a"
}

resource "aws_subnet" "gym_db_subnet2" {
    vpc_id = aws_vpc.gym_db_vpc.id
    cidr_block = "10.0.2.0/24"
    availability_zone = "us-east-1b"
}

resource "aws_db_subnet_group" "gym_db_subnet_group" {
  name       = "gym_db_subnet_group"
  subnet_ids = [aws_subnet.gym_db_subnet.id, aws_subnet.gym_db_subnet2.id]
}

resource "aws_security_group" "gym_db_security_group" {
  name        = "gym_db_security_group"
  description = "Allow inbound traffic"
  vpc_id      = aws_vpc.gym_db_vpc.id

  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "All"
    cidr_blocks = ["0.0.0.0/16"]
    }
}

resource "aws_s3_bucket" "gym_images_bucket" {
    bucket = "gym-images-bucket"
}

resource "aws_s3_bucket_cors_configuration" "gym_images_config" {
    bucket = aws_s3_bucket.gym_images_bucket.id

    cors_rule {
        allowed_headers = ["*"]
        allowed_methods = ["GET", "POST", "PUT", "DELETE"]
        allowed_origins = ["*"]
        expose_headers  = ["ETag"]
        max_age_seconds = 3000
    }
} 

# resource "aws_s3_bucket_logging" "gym_images_logging" {
#     bucket = aws_s3_bucket.gym_images_bucket.id
#     target_bucket = "gym-images-logs"
#     target_prefix = "gym-images-logs/"
# }

resource "aws_s3_bucket_server_side_encryption_configuration" "gym_images_encryption" {
  bucket = aws_s3_bucket.gym_images_bucket.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm     = "aws:kms"
    }
  }
}

resource "aws_db_instance" "gym_db" {
  allocated_storage    = 20
  backup_retention_period = 1
  backup_target = "region"
  db_name              = "gym_db_master"  
  storage_type         = "gp2"
  engine               = "mysql"
  engine_version       = "5.7"
  instance_class       = "db.t2.micro"
  username             = "gym_admin"
  password             = "gym_admin"
  db_subnet_group_name = aws_db_subnet_group.gym_db_subnet_group.name
  vpc_security_group_ids = [aws_security_group.gym_db_security_group.id]
  parameter_group_name = "default.mysql5.7"
  skip_final_snapshot = true
  enabled_cloudwatch_logs_exports = ["general", "slowquery", "audit"]
}

