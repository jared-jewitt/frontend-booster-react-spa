terraform {
  required_providers {
    github = {
      source = "hashicorp/github"
      version = "~> 2.9.2"
    }
    google = {
      source = "hashicorp/google"
      version = "~> 3.34.0"
    }
    docker = {
      source = "hashicorp/docker"
      version = "~> 2.7.2"
    }
  }
  backend "remote" {
    workspaces {
      prefix = "client-"
    }
  }
}

provider "google" {
  project = var.project_id
  region = var.region
  credentials = base64decode(var.service_account_key)
}

provider "docker" {
  registry_auth {
    username = "_json_key"
    password = base64decode(var.service_account_key)
    address = var.registry
  }
}
