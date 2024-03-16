resource "aws_opensearch_domain" "opengym-os" {
    domain_name = "opengym-os"
    engine_version = "Elasticsearch_7.10"
    
    cluster_config {
        instance_type = "t2.small.search"
    }

    advanced_security_options {
        enabled                        = false
        anonymous_auth_enabled         = true
        internal_user_database_enabled = true
        master_user_options {
            master_user_name     = "master"
            master_user_password = "master"
        }
    }
    
    ebs_options {
        ebs_enabled = true
        volume_size = 10
    }
}

resource "aws_opensearch_domain_policy" "main" {
  domain_name     = aws_opensearch_domain.opengym-os.domain_name
  access_policies = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Principal = {
          "Service": "lambda.amazonaws.com"
        },
        Action    = [
          "es:ESHttpGet",
          "es:ESHttpHead",
          "es:ESHttpPost",
          "es:ESHttpPut",
          "es:ESHttpDelete"
        ],
        Resource  = aws_opensearch_domain.opengym-os.arn
      }
    ]
  })
}

data "aws_iam_policy_document" "assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_policy" "uploadGym_invoke_policy" {
  name        = "lambda_invoke_policy"
  description = "Policy for invoking lambda"
  policy      = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect   = "Allow",
        Action   = "lambda:InvokeFunction",
        Resource = aws_lambda_function.os_uploadGym.arn
      }
    ]
  })
}

resource "aws_iam_role" "uploadGym_lambda_role" {
  name               = "uploadGym_lambda_role"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

resource "aws_cloudwatch_log_group" "os_uploadGym" {
  name = "/aws/lambda/os_uploadGym"
  retention_in_days = 7
}

resource "aws_iam_policy" "lambda_logging_policy" {
  name        = "lambda_logging_policy"
  description = "Policy for logging lambda"
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Action    = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],
        Resource = "arn:aws:logs:*:*:*"
      }
    ]
    }
  )
}

resource "aws_iam_policy_attachment" "uploadGym_lambda_logging" {
  name       = "uploadGym_lambda_logging"
  policy_arn = aws_iam_policy.lambda_logging_policy.arn
  roles      = [aws_iam_role.uploadGym_lambda_role.name]
}

resource "aws_iam_policy_attachment" "uploadGym_lambda_invoke_attachment" {
  name        = "uploadGym_lambda_invoke_attachment"
  policy_arn  = aws_iam_policy.uploadGym_invoke_policy.arn
  roles       = [aws_iam_role.uploadGym_lambda_role.name]
}

data "archive_file" "uploadGym_lambda" {
  type        = "zip"
  source_file = "../lambdas/uploadGym/bootstrap"
  output_path = "../lambdas/uploadGym/bootstrap.zip"
}

resource "aws_lambda_function" "os_uploadGym" {
  function_name = "os_uploadGym"
  role          = aws_iam_role.uploadGym_lambda_role.arn
  handler       = "main"
  source_code_hash = data.archive_file.uploadGym_lambda.output_base64sha256

  filename      = data.archive_file.uploadGym_lambda.output_path

  runtime       = "provided.al2023"
  depends_on    = [
    aws_iam_policy_attachment.uploadGym_lambda_logging,
    aws_cloudwatch_log_group.os_uploadGym
  ]
}


resource "aws_iam_policy" "getNearbyGyms_invoke_policy" {
  name        = "lambda_invoke_policy"
  description = "Policy for invoking lambda"
  policy      = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect   = "Allow",
        Action   = "lambda:InvokeFunction",
        Resource = aws_lambda_function.os_getNearbyGyms.arn
      }
    ]
  })
}

resource "aws_iam_role" "getNearbyGyms_lambda_role" {
  name               = "getNearbyGyms_lambda_role"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

resource "aws_cloudwatch_log_group" "os_getNearbyGyms" {
  name = "/aws/lambda/os_getNearbyGyms"
  retention_in_days = 7
}

resource "aws_iam_policy_attachment" "getNearbyGyms_lambda_logging" {
  name       = "getNearbyGyms_lambda_logging"
  policy_arn = aws_iam_policy.lambda_logging_policy.arn
  roles      = [aws_iam_role.getNearbyGyms_lambda_role.name]
}

resource "aws_iam_policy_attachment" "getNearbyGyms_lambda_invoke_attachment" {
  name        = "getNearbyGyms_lambda_invoke_attachment"
  policy_arn  = aws_iam_policy.getNearbyGyms_invoke_policy.arn
  roles       = [aws_iam_role.getNearbyGyms_lambda_role.name]
}

data "archive_file" "getNearbyGyms_lambda" {
  type        = "zip"
  source_file = "../lambdas/getNearbyGyms/bootstrap"
  output_path = "../lambdas/getNearbyGyms/bootstrap.zip"
}

resource "aws_lambda_function" "os_getNearbyGyms" {
  function_name = "os_getNearbyGyms"
  role          = aws_iam_role.getNearbyGyms_lambda_role.arn
  handler       = "main"
  source_code_hash = data.archive_file.getNearbyGyms_lambda.output_base64sha256

  filename      = data.archive_file.getNearbyGyms_lambda.output_path

  runtime       = "provided.al2023"
  depends_on    = [
    aws_iam_policy_attachment.getNearbyGyms_lambda_logging,
    aws_cloudwatch_log_group.os_getNearbyGyms
  ]
}


resource "aws_api_gateway_rest_api" "search_api" {
  name        = "search_api"
  description = "API for searching Gyms in OpenSearch"
}

resource "aws_api_gateway_resource" "uploadGym_route" {
  rest_api_id = aws_api_gateway_rest_api.search_api.id
  parent_id   = aws_api_gateway_rest_api.search_api.root_resource_id
  path_part   = "uploadGym"
}

# resource "aws_api_gateway_model" "gymModel" {
#   rest_api_id  = aws_api_gateway_rest_api.search_api.id
#   name         = "gymModel"
#   content_type = "application/json"
#   schema = <<EOF
#   {
#     "type": "object",
#     "properties": {
#       "name": {
#         "type": "string"
#       },
#       "address": {
#         "type": "string"
#       },
#       "owner_id": {
#         "type": "string"
#       },
#       "is_commercial": {
#         "type": "boolean"
#       },
#       "fee": {
#         "type": "number"
#       },
#       "lat": {
#         "type": "number"
#       },
#       "lng": {
#         "type": "number"
#       }
#     }
#   }
#   EOF
# }

resource "aws_api_gateway_method" "uploadGym_method" {
  rest_api_id   = aws_api_gateway_rest_api.search_api.id
  resource_id   = aws_api_gateway_resource.uploadGym_route.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "uploadGym_integration" {
  rest_api_id             = aws_api_gateway_rest_api.search_api.id
  resource_id             = aws_api_gateway_resource.uploadGym_route.id
  http_method             = aws_api_gateway_method.uploadGym_method.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.os_uploadGym.invoke_arn
}

resource "aws_api_gateway_resource" "getNearbyGyms_route" {
  rest_api_id = aws_api_gateway_rest_api.search_api.id
  parent_id   = aws_api_gateway_rest_api.search_api.root_resource_id
  path_part   = "getNearbyGyms"
}

resource "aws_api_gateway_method" "getNearbyGyms_method" {
  rest_api_id   = aws_api_gateway_rest_api.search_api.id
  resource_id   = aws_api_gateway_resource.getNearbyGyms_route.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "getNearbyGyms_integration" {
  rest_api_id             = aws_api_gateway_rest_api.search_api.id
  resource_id             = aws_api_gateway_resource.getNearbyGyms_route.id
  http_method             = aws_api_gateway_method.getNearbyGyms_method.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.os_getNearbyGyms.invoke_arn
}

resource "aws_api_gateway_stage" "test_stage" {
  deployment_id = aws_api_gateway_deployment.search_api_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.search_api.id
  stage_name    = "test"
}

resource "aws_api_gateway_deployment" "search_api_deployment" {
  depends_on = [aws_api_gateway_integration.uploadGym_integration, aws_api_gateway_intergration.getNearbyGyms_integration]
  rest_api_id = aws_api_gateway_rest_api.search_api.id
  stage_name  = "dev"
}