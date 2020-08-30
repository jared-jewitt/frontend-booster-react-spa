# Deployment

This repository uses a CI/CD flow via GitHub Actions. Deploying the app is as simple as making a pull request and 
merging it. That being said, there are still some pre-requisites to fulfill before running your first deployment.
Please follow the steps below in order.

#### Requirements:

- [Google Cloud Console Account](https://console.cloud.google.com)
- [GitHub Account](https://github.com/join)
- [Terraform Cloud Account](https://app.terraform.io/signup/account)

---

#### Google Cloud Console

1. [Create a new project](https://console.cloud.google.com/projectcreate). You will see a project id gets randomly 
generated for you. You will use this in a later step.

2. [Create a new Service Account with the following roles](https://console.cloud.google.com/iam-admin/serviceaccounts/create):
    - Service account User
    - Cloud Run Admin
    - Storage Admin
   
    (Skip step 3 and click **"DONE"**)

3. You should now see your newly created Service Account in the table. Click on it, then click the "**ADD KEY**" 
dropdown, and create a new JSON key.

4. Base64 encode the key that was just downloaded to your computer: `cat key.json | base64`

5. Copy the encoded string and keep it handy for a later step. **DO NOT** show this to anyone or check this into source
control.    

---

#### Terraform Cloud

1. [Create an API token](https://app.terraform.io/app/settings/tokens). Copy this for a later step and **DO NOT** show 
this to anyone or check this into source control.

2. [Create a new Organization](https://app.terraform.io/app/organizations/new)

3. Create 3 workspaces for the organization - one for each environment (development, staging, master).
Follow the steps below for each workspace:

    - Choose Type: **"CLI-driven workflow"**
    - Configure settings:
        - Workspace Name: `<client-development|client-staging|client-master>`

4. After creating the workspaces, add the following variables to **each** workspace:
    
    ```
    # ☐ HCL ☐ Sensitive 
    project_id = <project_id>
    
    # ☐ HCL ✅ Sensitive 
    service_account_key = <service_account_key>
    
    # ☐ HCL ☐ Sensitive 
    service_name = <client-development|client-staging|client-master>
    
    # ☐ HCL ☐ Sensitive 
    image_tag = <development|staging|master>
    
    # ✅ HCL ✅ Sensitive (optional)
    # These are your application environment variables. Check the .env.example file for reference.
    # Note: It's a good practice to use different values for each environment.
    container_environment_variables = {
      "KEY_1" = "VALUE"
      "KEY_2" = "VALUE"
      "KEY_3" = "VALUE"
    }
    ```

---

#### GitHub

1. Navigate to your GitHub repository and create the following branches:
    - `master`
    - `staging`
    - `development`

2. Select `Settings / Secrets`. Create the following secrets:

    ```
    SERVICE_ACCOUNT_KEY = <service_account_key>
    PROJECT_ID = <project_id>
    TERRAFORM_CLOUD_API_TOKEN = <token>
    TERRAFORM_CLOUD_ORGANIZATION = <organization>
    ```
