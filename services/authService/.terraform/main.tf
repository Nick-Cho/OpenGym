resource "aws_cognito_user_pool" "userpool" {
  name = "opengym-userpool"

  schema {
    attribute_data_type      = "String"
    name                     = "email"
    required                 = true
    developer_only_attribute = false
    mutable                  = true
  }

  email_configuration {
    email_sending_account = "COGNITO_DEFAULT"
  }

  auto_verified_attributes = ["email"]

  password_policy {
    minimum_length    = 8
    require_lowercase = true
    require_numbers   = true
    require_symbols   = true
    require_uppercase = true
  }

  username_attributes = ["email"]
  username_configuration {
    case_sensitive = true
  }

  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }
}

resource "aws_cognito_user_pool_client" "userpool_client" {
  name                                 = "opengym-userpool-client"
  user_pool_id                         = aws_cognito_user_pool.userpool.id
  explicit_auth_flows                  = ["ALLOW_SRP_AUTH", "ALLOW_REFRESH_TOKEN_AUTH", "ALLOW_USER_PASSWORD_AUTH"]
  allowed_oauth_flows_user_pool_client = true
  allowed_oauth_flows                  = ["code"]
  allowed_oauth_scopes                 = ["email", "openid", "phone"]
  # To be configured later to get user back into site
  # callback_urls = [] 
  # default_redirect_uri = 
  generate_secret               = false
  prevent_user_existence_errors = "LEGACY"
  refresh_token_validity        = 1
  access_token_validity         = 1
  id_token_validity             = 1
  token_validity_units {
    access_token  = "hours"
    id_token      = "hours"
    refresh_token = "hours"
  }
}

# resource "aws_api_gateway_rest_api" "auth_api" {
#     name = "opengym-auth-api"
#     description = "This is the OpenGym Auth API to handle user authentication and getting user information"
# }

# resource "aws_api_gateway_resource" "auth_resource" {
#     rest_api_id = aws_api_gateway_rest_api.api.id
#     parent_id = aws_api_gateway_rest_api.api.root_resource_id
#     path_part = "auth"
# }

# resource "aws_api_gateway_method" "auth_gw_method" {
#     rest_api_id = aws_api_gateway_rest_api.api.id
#     resource_id = aws_api_gateway_resource.auth_resource.id
#     http_method = "GET"
#     authorization = "NONE"
# }

# For integration with lambda function
# resource "aws_api_gateway_integration" "auth_gw_integration" {
#     rest_api_id = aws_api_gateway_rest_api.auth_api.id
#     resource_id = aws_api_gateway_resource.auth_resource.id
#     http_method = aws_api_gateway_method.MyDemoMethod.http_method
#     integration_http_method = "POST"
#     type = "AWS_PROXY"
#     uri = # Lambda Function ARN here later
# }

# resource "aws_lambda_permission" "apigw_lambda" {
#     statement_id = "AllowAPIGatewayInvoke"
#     action = "lambda:InvokeFunction"
#     function_name = # Lambda Function ARN here later
#     principal = "apigateway.amazonaws.com"
#     source_arn = # API Gateway ARN here later
# }

# resource "aws_api_gateway_deployment" "auth-gw-deploy" {
#     depends_on = [aws_api_gateway_integration.MyDemoIntegration]
#     rest_api_id = aws_api_gateway_rest_api.auth_api.id
#     stage_name = "dev"
# }
