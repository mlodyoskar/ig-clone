### Issue 4: Backend - Image Storage Setup and Pre-signed URL Generation

**Title:** Backend - Image Storage Setup and Pre-signed URL Generation

**Description:**

This issue focuses on setting up the image storage infrastructure, specifically Google Cloud Storage for production and Minio for local development. It also involves creating a backend service to generate pre-signed URLs, enabling direct and secure image uploads from the frontend to the storage bucket.

**Sub-tasks:**

- **Cloud Storage Configuration (Production):**
  - Set up a Google Cloud Storage bucket for storing user-uploaded images.
  - Configure necessary IAM roles and permissions for the backend to interact with the bucket.
  - Set up CORS policies on the GCS bucket to allow direct uploads from the frontend.
  - Store GCS credentials securely (e.g., environment variables, secret manager).
- **Local Storage Configuration (Development):**
  - Ensure Minio is properly installed and running locally (as established in Issue 1).
  - Configure a local Minio bucket to mimic the GCS setup for development purposes.
  - Configure backend to switch between GCS and Minio based on the environment.
- **Backend Service for Pre-signed URLs:**
  - Create a dedicated service or module in the backend for cloud storage interactions.
  - Implement an authenticated endpoint (e.g., `POST /api/uploads/presigned-url`) that:
    - Receives `file_name` and `file_type` from the frontend.
    - Generates a time-limited, pre-signed upload URL for the configured storage (GCS/Minio).
    - Ensures the generated URL allows direct PUT requests from the frontend.
    - Returns the pre-signed URL to the frontend.
- **Security and Best Practices:**
  - Ensure only authenticated users can request pre-signed URLs.
  - Set appropriate expiration times for generated pre-signed URLs.
  - Implement robust error handling for storage interactions.

**Acceptance Criteria:**

- A Google Cloud Storage bucket is configured and accessible by the backend for production.
- A local Minio instance is running and configured to work with the backend for development.
- The backend can successfully generate secure, time-limited pre-signed URLs for direct image uploads.
- The backend endpoint for generating pre-signed URLs is authenticated.
- CORS policies are correctly set up on the storage buckets to allow frontend uploads.

**Labels:** `backend`, `storage`, `cloud`, `MVP`


