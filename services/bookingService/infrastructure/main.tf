# -----------------------------------------------------------
# AWS RDS Configuration
# -----------------------------------------------------------
resource "aws_db_instance" "booking_db" {
    allocated_storage = 10 # Min in the console is 20
    db_name = "booking_db"
    engine = "mysql"
    engine_version = "5.7"
    instance_class = "db.t2.micro" # Min in the console is db.t3.micro
    username = "master"
    password = "master"
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
# Lambda Configurations
# -----------------------------------------------------------
resource 
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
    uri = 
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
    uri = 
}

resource "aws_api_gateway_resource" "create_slots_resource" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    parent_id = aws_api_gateway_rest_api.booking_api.root_resource_id
    path_part = "create_slots"
}

resource "aws_api_gateway_method" "create_slots_method" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    resource_id = awS_api_gateway_resource.create_slots_resource.id
    http_method = "POST"
    authorization = "NONE"
}

resource "aws_api_gateway_integration" "create_slots_integration" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    resource_id = aws_api_gateway_resource.create_slots_resource.id
    http_method = aws_api_gateway_method.create_slots_method.http_method
    integration_http_method = "POST"
    type = "AWS_PROXY"
    uri = 
}

resource "aws_api_gateway_resource" "get_bookings_resource" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    parent_id = aws_api_gateway_rest_api.booking_api.root_resource_id
    path_part = "get_bookings"
}

resource "aws_api_gateway_method" "get_bookings_method" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    resource_id = awS_api_gateway_resource.get_bookings_resource.id
    http_method = "POST"
    authorization = "NONE"
}

resource "aws_api_gateway_integration" "get_bookings_integration" {
    rest_api_id = aws_api_gateway_rest_api.booking_api.id
    resource_id = aws_api_gateway_resource.get_bookings_resource.id
    http_method = aws_api_gateway_method.get_bookings_method.http_method
    integration_http_method = "POST"
    type = "AWS_PROXY"
    uri = 
}

