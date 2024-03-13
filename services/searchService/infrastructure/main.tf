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
        Principal = "*",
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