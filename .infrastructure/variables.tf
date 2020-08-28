variable "project_id" {
  type = string
  description = "Google Cloud project id"
}

variable "service_account_key" {
  type = string
  description = "Google Cloud service account base64 encoded key"
}

variable "region" {
  type = string
  description = "Google Cloud region"
}

variable "cloud_run_service_name" {
  type = string
  description = "Google Cloud Run service name"
}

variable "registry" {
  type = string
  description = "Google Container Registry host"
}

variable "repository" {
  type = string
  description = "Google Container Registry repository"
}

variable "image_tag" {
  type = string
  description = "Google Container Registry image tag"
}

variable "container_environment_variables" {
  type = map(string)
  description = "Application environment variables"
}
