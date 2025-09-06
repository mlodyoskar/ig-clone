### Issue 5: Frontend - Direct Image Upload with Pre-signed URLs

**Title:** Frontend - Direct Image Upload with Pre-signed URLs

**Description:**

This issue covers the frontend implementation for directly uploading images to cloud storage (GCS/Minio) using pre-signed URLs obtained from the backend. This enables efficient and secure image handling for user posts.

**Sub-tasks:**

- **Image Selection UI:**
  - Create a user interface element (e.g., file input, drag-and-drop area) for users to select images for upload.
  - Provide visual feedback for selected images (e.g., preview thumbnails).
- **Obtain Pre-signed URL:**
  - When a user selects an image, make an authenticated request to the backend's `/api/uploads/presigned-url` endpoint.
  - Pass the `file_name` and `file_type` of the selected image in the request.
  - Receive and store the pre-signed URL returned by the backend.
- **Direct Image Upload:**
  - Use the obtained pre-signed URL to perform a direct `PUT` request of the image file to the cloud storage bucket.
  - Ensure correct `Content-Type` header is set for the upload request.
  - Handle upload progress and completion.
- **Post-Upload Handling:**
  - Upon successful upload, receive the public URL of the uploaded image (this might be returned by the storage service or constructed based on conventions).
  - Prepare to use this URL when creating a new post.
- **Error Handling and User Feedback:**
  - Implement error handling for failed requests to the backend for pre-signed URLs.
  - Implement error handling for failed direct image uploads.
  - Provide clear user feedback during the upload process (e.g., loading indicators, success/error messages).

**Acceptance Criteria:**

- Users can select an image from their device.
- The frontend successfully requests and obtains a pre-signed URL from the backend.
- The frontend successfully uploads the selected image directly to the cloud storage using the pre-signed URL.
- The frontend can retrieve or construct the public URL of the uploaded image.
- Robust error handling and user feedback are in place for the entire upload process.

**Labels:** `frontend`, `image-upload`, `storage`, `MVP`


