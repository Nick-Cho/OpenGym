# -----------------------------------------------------------
# AWS RDS Configuration
# -----------------------------------------------------------
resource "aws_db_instance" "booking_db" {
    allocated_storage = 10 # Min in the console is 20
    db_name = "booking_db"
    engine = "postgresql"
    engine_version = "16.1-R2"
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
# API Gateway Configuration
# -----------------------------------------------------------
resource "aws_api_gateway_rest_api" "booking_api" {
    name = "booking_api"
    description = "Booking API"
}