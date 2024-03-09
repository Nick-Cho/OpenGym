resource "aws_vpc" "vpc" {
  cidr_block = "10.0.0.0/22"
}

data "aws_availability_zones" "azs" {
  state = "available"
}

resource "aws_subnet" "subnet_az1" {
  availability_zone = data.aws_availability_zones.azs.names[0]
  cidr_block        = "10.0.0.0/24"
  vpc_id            = aws_vpc.vpc.id
}

resource "aws_subnet" "subnet_az2" {
  availability_zone = data.aws_availability_zones.azs.names[1]
  cidr_block        = "10.0.1.0/24"
  vpc_id            = aws_vpc.vpc.id
}

resource "aws_subnet" "subnet_az3" {
  availability_zone = data.aws_availability_zones.azs.names[2]
  cidr_block        = "10.0.2.0/24"
  vpc_id            = aws_vpc.vpc.id
}

resource "aws_security_group" "sg" {
  vpc_id = aws_vpc.vpc.id
}

resource "aws_cloudwatch_log_group" "kafka-logs" {
  name = "msk-broker-logs"
}

resource "aws_msk_cluster" "openGym-kafka-cluster" {
    cluster_name = "openGym-kafka-cluster"
    kafka_version = "2.4.1.1"
    number_of_broker_nodes = 3

    broker_node_group_info {
        instance_type = "kafka.t3.small"
        client_subnets = [
            aws_subnet.subnet_az1.id,
            aws_subnet.subnet_az2.id,
            aws_subnet.subnet_az3.id
        ]
        security_groups = [aws_security_group.sg.id]
        storage_info {
            ebs_storage_info {
                volume_size = 100
            }
        }
    }

    open_monitoring {
        prometheus {
            jmx_exporter {
                enabled_in_broker = true
            }
            node_exporter {
                enabled_in_broker = true
            }
        }
    }

    logging_info {
      broker_logs {
        cloudwatch_logs {
          enabled   = true
          log_group = aws_cloudwatch_log_group.kafka-logs.name
        }
      }
  }
}

resource "aws_msk_cluster_policy" "openGym-kafka-cluster-policy" {
    cluster_arn = aws_msk_cluster.openGym-kafka-cluster.arn
    policy = jsonencode({
        "Version": "2012-10-17",
        "Statement": [
          {
            "Principal": "*",
            "Action": "kafka:*",
            "Effect": "Allow",
            "Resource": "${aws_msk_cluster.openGym-kafka-cluster.arn}"
          }
        ]
    })
}

resource "aws_msk_configuration" "openGym-kafka-config" {
    name = "openGym-kafka-config"
    kafka_versions = ["2.4.1.1"]
    server_properties = <<PROPERTIES
        auto.create.topics.enable=true
        default.replication.factor=3
        delete.topic.enable=true
        group.initial.rebalance.delay.ms=1000
        min.insync.replicas=2
        log.retention.hours=168
        log.segment.bytes=1073741824
        log.cleanup.policy = delete
        log.segment.bytes = 1073741824
        num.io.threads=8
        num.network.threads=3
        num.partitions=1
        num.replica.fetchers=2
        min.insync.replicas=1
        socket.receive.buffer.bytes=102400
        socket.request.max.bytes=104857600
        socket.send.buffer.bytes=102400
        unclean.leader.election.enable=false
        zookeeper.connection.timeout.ms=6000
        zookeeper.session.timeout.ms=18000
        num.io.threads=8
        num.network.threads=3
        num.partitions=1
        num.replica.fetchers=2
        socket.receive.buffer.bytes=102400
        socket.request.max.bytes=104857600
        socket.send.buffer.bytes=102400
        unclean.leader.election.enable=false
        zookeeper.connection.timeout.ms=6000
        zookeeper.session.timeout.ms=18000      
    PROPERTIES
}

resource "aws_iam_role" "msk_replicator_role" {
  name = "msk-replicator-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "kafka.amazonaws.com"
        }
      }
    ]
  })
}


# ----------------------------------------------------------------
# For use when I actually create multiple clusters for redundency
# ----------------------------------------------------------------
# resource "aws_msk_replicator" "openGym-kafka-replicator" {
#   replicator_name = "openGym-kafka-replicator"
#   description = "Replicator for openGym-kafka-cluster"
#   service_execution_role_arn = aws_iam_role.msk_replicator_role.arn

#   kafka_cluster {
#     amazon_msk_cluster {
#       msk_cluster_arn = aws_msk_cluster.openGym-kafka-cluster.arn
#     }
#     vpc_config {
#       security_groups = [aws_security_group.sg.id]
#       subnet_ids = aws_subnet.source[*].id
#     }
#   }
# }