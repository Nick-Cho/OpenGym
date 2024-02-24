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

# resource "aws_db_instance" "gym_db_read_replica" {
#   count = 1
#   allocated_storage    = 20
#   backup_retention_period = 1
#   backup_target = "region"
#   db_name              = "gym_db_master"  
#   storage_type         = "gp2"
#   engine               = "mysql"
#   engine_version       = "5.7"
#   instance_class       = "db.t2.micro"
#   username             = "gym_admin"
#   password             = "gym_admin"
#   db_subnet_group_name = aws_db_subnet_group.gym_db_subnet_group.name
#   vpc_security_group_ids = [aws_security_group.gym_db_security_group.id]
#   parameter_group_name = "default.mysql5.7"
#   skip_final_snapshot = true
#   enabled_cloudwatch_logs_exports = ["general", "slowquery", "audit"]
# }

resource "aws_api_gateway_rest_api" "gym_apigw" {
  name                = "Gym_Service_ApiGW"
}

resource "aws_api_gateway_resource" "gym_apigw_res" {
  rest_api_id         = aws_api_gateway_rest_api.gym_apigw.id
  parent_id           = aws_api_gateway_rest_api.gym_apigw.root_resource_id
  path_part           = "gym"
}

resource "aws_api_gateway_method" "get_gym" {
  rest_api_id         = aws_api_gateway_rest_api.gym_apigw.id
  resource_id         = aws_api_gateway_resource.gym_apigw_res.id
  http_method         = "GET"
  authorization       = "NONE"

  request_parameters  = {
    "method.request.querystring.gym_id" = true
  }
}

resource "aws_api_gateway_method" "add_gym" {
  rest_api_id         = aws_api_gateway_rest_api.gym_apigw.id
  resource_id         = aws_api_gateway_resource.gym_apigw_res.id
  http_method         = "POST"
  authorization       = "NONE"

  # request_parameters = {
  #   "method.request.body.name" = true
  #   "method.request.body.address" = true
  #   "method.request.body.owner_id" = true
  #   "method.request.body.is_commercial" = true
  #   "method.request.body.fee" = true
  #   "method.request.body.lat" = true
  #   "method.request.body.lng" = true
  # }
}

resource "aws_api_gateway_method" "update_gym" {
  rest_api_id         = aws_api_gateway_rest_api.gym_apigw.id
  resource_id         = aws_api_gateway_resource.gym_apigw_res.id
  http_method         = "PUT"
  authorization       = "NONE"

  # request_parameters = {
  #   "method.request.body.gym_id" = true
  # }
}

resource "aws_api_gateway_method" "delete_gym" {
  rest_api_id         = aws_api_gateway_rest_api.gym_apigw.id
  resource_id         = aws_api_gateway_resource.gym_apigw_res.id
  http_method         = "DELETE"
  authorization       = "NONE"

  request_parameters = {
    "method.request.querystring.gym_id" = true
  }
}

resource "aws_api_gateway_integration" "get_gym_integration" {
  rest_api_id           = aws_api_gateway_rest_api.gym_apigw.id
  resource_id           = aws_api_gateway_method.get_gym.resource_id
  http_method           = aws_api_gateway_method.get_gym.http_method

  type                  = "AWS_PROXY"
  integration_http_method = "GET"
  uri                   = aws_lambda_function.get_gym_lambda.invoke_arn

  # Transforms incoming XML request to JSON
  request_templates = {
    "application/xml" = <<EOF
  {
    "body" : $input.json('$')
  }
  EOF
  }
}

resource "aws_api_gateway_integration" "update_gym_integration" {
  rest_api_id           = aws_api_gateway_rest_api.gym_apigw.id
  resource_id           = aws_api_gateway_method.update_gym.resource_id
  http_method           = aws_api_gateway_method.update_gym.http_method

  type                  = "AWS_PROXY"
  integration_http_method = "PUT"
  uri                   = aws_lambda_function.update_gym_lambda.invoke_arn

  # Transforms incoming XML request to JSON
  request_templates = {
    "application/xml" = <<EOF
  {
    "body" : $input.json('$')
  }
  EOF
  }
}

resource "aws_api_gateway_integration" "add_gym_integration" {
  rest_api_id           = aws_api_gateway_rest_api.gym_apigw.id
  resource_id           = aws_api_gateway_method.add_gym.resource_id
  http_method           = aws_api_gateway_method.add_gym.http_method

  type                  = "AWS_PROXY"
  integration_http_method = "POST"
  uri                   = aws_lambda_function.add_gym_lambda.invoke_arn

  # Transforms incoming XML request to JSON
  request_templates = {
    "application/xml" = <<EOF
  {
    "body" : $input.json('$')
  }
  EOF
  }
}

resource "aws_api_gateway_integration" "delete_gym_integration" {
  rest_api_id           = aws_api_gateway_rest_api.gym_apigw.id
  resource_id           = aws_api_gateway_method.delete_gym.resource_id
  http_method           = aws_api_gateway_method.delete_gym.http_method

  type                  = "AWS_PROXY"
  integration_http_method = "DELETE"
  uri                   = aws_lambda_function.delete_gym_lambda.invoke_arn

  # Transforms incoming XML request to JSON
  request_templates = {
    "application/xml" = <<EOF
  {
    "body" : $input.json('$')
  }
  EOF
  }
}

resource "aws_lambda_permission" "get_gym_lambda_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.get_gym_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  # More: http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
  source_arn = "arn:aws:execute-api:${var.region}:${var.accountID}:${aws_api_gateway_rest_api.gym_apigw.id}/*/${aws_api_gateway_method.get_gym.http_method}${aws_api_gateway_resource.gym_apigw_res.path}"
}

resource "aws_lambda_permission" "add_gym_lambda_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.add_gym_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  # More: http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
  source_arn = "arn:aws:execute-api:${var.region}:${var.accountID}:${aws_api_gateway_rest_api.gym_apigw.id}/*/${aws_api_gateway_method.add_gym.http_method}${aws_api_gateway_resource.gym_apigw_res.path}"
}

resource "aws_lambda_permission" "delete_gym_lambda_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.delete_gym_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  # More: http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
  source_arn = "arn:aws:execute-api:${var.region}:${var.accountID}:${aws_api_gateway_rest_api.gym_apigw.id}/*/${aws_api_gateway_method.delete_gym.http_method}${aws_api_gateway_resource.gym_apigw_res.path}"
}

resource "aws_lambda_permission" "update_gym_lambda_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.update_gym_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  # More: http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
  source_arn = "arn:aws:execute-api:${var.region}:${var.accountID}:${aws_api_gateway_rest_api.gym_apigw.id}/*/${aws_api_gateway_method.update_gym.http_method}${aws_api_gateway_resource.gym_apigw_res.path}"
}

resource "aws_iam_role" "role" {
  name = "gym_lambda_role"
  assume_role_policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": "sts:AssumeRole",
        "Principal": {
          "Service": "lambda.amazonaws.com"
        },
        "Effect": "Allow",
        "Sid": ""
      }
    ]
  })
}

resource "aws_lambda_function" "get_gym_lambda" {
  filename        = "../lambdas/getGymDetails/main.zip"
  function_name   = "get_gym"
  role            = aws_iam_role.role.arn
  handler         = "main.main"
  runtime         = "provided.al2023"

  source_code_hash = filebase64sha256("../lambdas/getGymDetails/main.zip")
}

resource "aws_lambda_function" "add_gym_lambda" {
  filename        = "../lambdas/addGym/main.zip"
  function_name   = "add_gym"
  role            = aws_iam_role.role.arn
  handler         = "main.main"
  runtime         = "provided.al2023"

  source_code_hash = filebase64sha256("../lambdas/addGym/main.zip")
}

resource "aws_lambda_function" "delete_gym_lambda" {
  filename        = "../lambdas/deleteGym/main.zip"
  function_name   = "delete_gym"
  role            = aws_iam_role.role.arn
  handler         = "main.main"
  runtime         = "provided.al2023"

  source_code_hash = filebase64sha256("../lambdas/deleteGym/main.zip")
}

resource "aws_lambda_function" "update_gym_lambda" {
  filename        = "../lambdas/updateGym/main.zip"
  function_name   = "update_gym"
  role            = aws_iam_role.role.arn
  handler         = "main.main"
  runtime         = "provided.al2023"

  source_code_hash = filebase64sha256("../lambdas/updateGym/main.zip")
}