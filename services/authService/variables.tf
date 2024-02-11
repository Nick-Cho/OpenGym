variable "accountID" {
  description = "AWS Account ID"
  type        = string
}

variable "region" {
  description = "AWS Region"
  type        = string
  default     = "us-east-1"
}

variable "endpoint_path" {
  description = "API Gateway endpoint path"
  type        = string
  default     = "getUser?username="
}