# Deployment

This repository uses a CI/CD flow via GitHub Actions. Deploying the app is as simple as making a pull request and 
merging it. That being said, there are still some pre-requisites to fulfill before running your first deployment. Please
follow the steps below in order.

#### Requirements:

- [Google Cloud Console Account](https://console.cloud.google.com)
- [Terraform Cloud Account](https://app.terraform.io/signup/account)
- [GitHub Account](https://github.com/join)

---

#### Google Cloud Console

1. [Create a new project](https://console.cloud.google.com/projectcreate)

2. [Create a new Service Account with the following roles](https://console.cloud.google.com/iam-admin/serviceaccounts/create): 
    - Service account User
    - Cloud Run Admin
    - Storage Admin

3. You should now see your newly created Service Account in the table. Click on it, then click the "ADD KEY" dropdown, 
and create a new JSON key.

4. Base64 encode the key that was just downloaded to your computer: `cat key.json | base64`

5. Copy the encoded string and keep it handy for a later step. **DO NOT** show this to anyone or check this into source
control.
 
 ---
    
#### Terraform Cloud

1. [Create a new Organization](https://app.terraform.io/app/organizations/new)

2. [Create an API token](https://app.terraform.io/app/settings/tokens). Keep it handy for a later step. 
**DO NOT** show this to anyone or check this into source control.

3. Create 3 workspaces and select "CLI-driven workflow" each time you create one. The workspace names must match the following:
    - `client-development`
    - `client-staging`
    - `client-master`

4. Under each workspace, add the following variables:
    
    ```hcl-terraform
    # ☐ HCL ✅Sensitive 
    project_id = "<project_id>"
    
    # ☐ HCL ✅Sensitive 
    service_account_key = "<service_account_key>"
    
    # ☐ HCL ☐ Sensitive 
    region = "us-central1"
    
    # ☐ HCL ☐ Sensitive 
    cloud_run_service_name = "client-<development|staging|master>"
    
    # ☐ HCL ☐ Sensitive 
    registry = "gcr.io"
    
    # ☐ HCL ✅Sensitive
    repository = "<project_id>/client"
    
    # ☐ HCL ☐ Sensitive 
    image_tag = "<development|staging|master>"
    
    # ✅HCL ✅Sensitive
    # These are your application environment variables. Check the .env.example file for reference.
    # Note: It's a good practice to use different values for each environment.
    container_environment_variables = {
      "KEY_1" = "VALUE"
      "KEY_2" = "VALUE"
      "KEY_3" = "VALUE"
    }
    ```

---

#### GitHub Actions

1. Navigate to your GitHub repository. Select `Settings / Secrets`. Create the following secrets:

    ```hcl
    TERRAFORM_CLOUD_API_TOKEN = "<token>"
    TERRAFORM_CLOUD_ORGANIZATION = "<organization_name>"
    GCR_USERNAME = "_json_key"
    GCR_PASSWORD = "<service_account_key>"
    GCR_REGISTRY = "gcr.io"
    GCR_REPOSITORY = "<project_id>/client"
    ```
