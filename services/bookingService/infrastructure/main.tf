# -----------------------------------------------------------
# AWS RDS Configuration
# -----------------------------------------------------------
resource "aws_db_instance" "booking_db" {
    allocated_storage = 10 # Min in the console is 20
    db_name = "booking_db"
    engine = "mysql"
    engine_version = "5.7"
    instance_class = "db.t3.micro" # Min in the console is db.t3.micro
    username = "master_username"
    password = "master_password"
    skip_final_snapshot = true    
    vpc_security_group_ids = [aws_security_group.booking_db_sg.id]
}

resource "aws_security_group" "booking_db_sg" {
    name = "booking_db_sg"
    description = "Open security group for booking db"

    ingress {
        from_port = 0
        to_port = 65535
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    egress {
        from_port = 0
        to_port = 65535
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
}

# -----------------------------------------------------------
# CloudWatch Configuration
# -----------------------------------------------------------

resource "aws_cloudwatch_log_group" "book_log_group" {
    name = "/aws/lambda/book"
    retention_in_days = 1
}
resource "aws_cloudwatch_log_group" "createSlots_log_group" {
    name = "/aws/lambda/createSlots"
    retention_in_days = 1
}
resource "aws_cloudwatch_log_group" "cancelBooking_log_group" {
    name = "/aws/lambda/cancelBooking"
    retention_in_days = 1
}
resource "aws_cloudwatch_log_group" "getBooking_log_group" {
    name = "/aws/lambda/getBooking"
    retention_in_days = 1
}

# -----------------------------------------------------------
# IAM Role Configuration
# ----------------------------------------------------------- 
resource "aws_iam_policy" "invoke_policy" {
  name        = "invoke_policy"
  description = "Policy for invoking lambda"
  policy      = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect   = "Allow",
        Action   = "lambda:InvokeFunction",
        Resource = "*",
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

resource "aws_iam_policy" "lambda_logging_policy" {
  name        = "bookingSerivce_lambda_logging_policy"
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

resource "aws_iam_role" "book_lambda_role" {
  name               = "book_lambda_role"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

resource "aws_iam_role" "cancelBooking_lambda_role" {
  name               = "cancelBooking_lambda_role"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

resource "aws_iam_role" "createSlots_lambda_role" {
  name               = "createSlots_lambda_role"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

resource "aws_iam_role" "getBookings_lambda_role" {
  name               = "getBookings_lambda_role"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

resource "aws_iam_policy_attachment" "book_invoke_attachment" {
  name        = "book_lambda_invoke_attachment"
  policy_arn  = aws_iam_policy.invoke_policy.arn
  roles       = [aws_iam_role.book_lambda_role.name]
}

resource "aws_iam_policy_attachment" "cancelBooking_invoke_attachment" {
  name        = "cancelBooking_lambda_invoke_attachment"
  policy_arn  = aws_iam_policy.invoke_policy.arn
  roles       = [aws_iam_role.cancelBooking_lambda_role.name]
}

resource "aws_iam_policy_attachment" "createSlots_invoke_attachment" {
  name        = "createSlots_lambda_invoke_attachment"
  policy_arn  = aws_iam_policy.invoke_policy.arn
  roles       = [aws_iam_role.createSlots_lambda_role.name]
}

resource "aws_iam_policy_attachment" "getBookings_invoke_attachment" {
  name        = "getBookings_lambda_invoke_attachment"
  policy_arn  = aws_iam_policy.invoke_policy.arn
  roles       = [aws_iam_role.getBookings_lambda_role.name]
}

resource "aws_iam_policy_attachment" "book_lambda_logging" {
  name       = "book_lambda_logging"
  policy_arn = aws_iam_policy.lambda_logging_policy.arn
  roles      = [aws_iam_role.book_lambda_role.name]
}

resource "aws_iam_policy_attachment" "cancelBooking_lambda_logging" {
  name       = "cancelBooking_lambda_logging"
  policy_arn = aws_iam_policy.lambda_logging_policy.arn
  roles      = [aws_iam_role.cancelBooking_lambda_role.name]
}

resource "aws_iam_policy_attachment" "createSlots_lambda_logging" {
  name       = "createSlots_lambda_logging"
  policy_arn = aws_iam_policy.lambda_logging_policy.arn
  roles      = [aws_iam_role.createSlots_lambda_role.name]
}

resource "aws_iam_policy_attachment" "getBookings_lambda_logging" {
  name       = "getBookings_lambda_logging"
  policy_arn = aws_iam_policy.lambda_logging_policy.arn
  roles      = [aws_iam_role.getBookings_lambda_role.name]
}

# -----------------------------------------------------------
# Lambda Configurations
# -----------------------------------------------------------

data "archive_file" "book_lambda" {
    type = "zip"
    source_file = "../lambdas/book/bootstrap"
    output_path = "../lambdas/book/bootstrap"
}

data "archive_file" "cancelBooking_lambda" {
    type = "zip"
    source_file = "../lambdas/cancelBooking/bootstrap"
    output_path = "../lambdas/cancelBooking/bootstrap"
}

data "archive_file" "createSlots_lambda" {
    type = "zip"
    source_file = "../lambdas/createSlots/bootstrap"
    output_path = "../lambdas/createSlots/bootstrap"
}

data "archive_file" "getBookings_lambda" {
    type = "zip"
    source_file = "../lambdas/getBookings/bootstrap"
    output_path = "../lambdas/getBookings/bootstrap"
}

resource "aws_lambda_function" "book_lambda" {
    function_name = "book_lambda"
    role = aws_iam_role.book_lambda_role.arn
    handler = "main"
    runtime = "provided.al2023"
    filename = data.archive_file.book_lambda.output_path
    source_code_hash = data.archive_file.book_lambda.output_base64sha256
}

resource "aws_lambda_function" "cancelBooking_lambda" {
    function_name = "cancelBooking_lambda"
    role = aws_iam_role.cancelBooking_lambda_role.arn
    handler = "main"
    runtime = "provided.al2023"
    filename = data.archive_file.cancelBooking_lambda.output_path
    source_code_hash = data.archive_file.cancelBooking_lambda.output_base64sha256
}

resource "aws_lambda_function" "createSlots_lambda" {
    function_name = "createSlots_lambda"
    role = aws_iam_role.createSlots_lambda_role.arn
    handler = "main"
    runtime = "provided.al2023"
    filename = data.archive_file.createSlots_lambda.output_path
    source_code_hash = data.archive_file.createSlots_lambda.output_base64sha256
}

resource "aws_lambda_function" "getBookings_lambda" {
    function_name = "getBookings_lambda"
    role = aws_iam_role.getBookings_lambda_role.arn
    handler = "main"
    runtime = "provided.al2023"
    filename = data.archive_file.getBookings_lambda.output_path
    source_code_hash = data.archive_file.getBookings_lambda.output_base64sha256
}


# -----------------------------------------------------------
# API Gateway Configuration
# -----------------------------------------------------------
resource "aws_api_gateway_rest_api" "booking_api" {
    name = "booking_api"
    description = "Booking API"
}

resource "aws_api_gateway_resource" "booking_resource" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    parent_id = aws_api_gateway_rest_api.booking_api.root_resource_id
    path_part = "book"
}

resource "aws_api_gateway_method" "booking_method" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    resource_id = aws_api_gateway_resource.booking_resource.id
    http_method = "POST"
    authorization = "NONE"
}

resource "aws_api_gateway_integration" "booking_integration" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    resource_id = aws_api_gateway_resource.booking_resource.id
    http_method = aws_api_gateway_method.booking_method.http_method
    integration_http_method = "POST"
    type = "AWS_PROXY"
    uri = aws_lambda_function.book_lambda.invoke_arn
}

resource "aws_api_gateway_resource" "cancel_resource" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    parent_id = aws_api_gateway_rest_api.booking_api.root_resource_id
    path_part = "cancel_booking"
}

resource "aws_api_gateway_method" "cancel_method" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    resource_id = aws_api_gateway_resource.cancel_resource.id
    http_method = "POST"
    authorization = "NONE"
}

resource "aws_api_gateway_integration" "cancel_integration" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    resource_id = aws_api_gateway_resource.cancel_resource.id
    http_method = aws_api_gateway_method.cancel_method.http_method
    integration_http_method = "POST"
    type = "AWS_PROXY"
    uri = aws_lambda_function.cancelBooking_lambda.invoke_arn
}

resource "aws_api_gateway_resource" "create_slots_resource" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    parent_id = aws_api_gateway_rest_api.booking_api.root_resource_id
    path_part = "create_slots"
}

resource "aws_api_gateway_method" "create_slots_method" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    resource_id = aws_api_gateway_resource.create_slots_resource.id
    http_method = "POST"
    authorization = "NONE"
}

resource "aws_api_gateway_integration" "create_slots_integration" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    resource_id = aws_api_gateway_resource.create_slots_resource.id
    http_method = aws_api_gateway_method.create_slots_method.http_method
    integration_http_method = "POST"
    type = "AWS_PROXY"
    uri = aws_lambda_function.createSlots_lambda.invoke_arn
}

resource "aws_api_gateway_resource" "get_bookings_resource" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    parent_id = aws_api_gateway_rest_api.booking_api.root_resource_id
    path_part = "get_bookings"
}

resource "aws_api_gateway_method" "get_bookings_method" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    resource_id = aws_api_gateway_resource.get_bookings_resource.id
    http_method = "POST"
    authorization = "NONE"
}

resource "aws_api_gateway_integration" "get_bookings_integration" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    resource_id = aws_api_gateway_resource.get_bookings_resource.id
    http_method = aws_api_gateway_method.get_bookings_method.http_method
    integration_http_method = "POST"
    type = "AWS_PROXY"
    uri = aws_lambda_function.getBookings_lambda.invoke_arn
}

resource "aws_api_gateway_stage" "bookingService_test_stage" {
  deployment_id = aws_api_gateway_deployment.booking_api_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.booking_api.id
  stage_name    = "test_bookingService"
}

resource "aws_api_gateway_deployment" "booking_api_deployment" {
  depends_on = [aws_api_gateway_integration.booking_integration, aws_api_gateway_integration.cancel_integration, aws_api_gateway_integration.create_slots_integration, aws_api_gateway_integration.get_bookings_integration]
  rest_api_id = aws_api_gateway_rest_api.booking_api.id
  stage_name  = "dev_bookingService"
}
