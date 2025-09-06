### Issue 6: Backend - Post Creation and Storage

**Title:** Backend - Post Creation and Storage

**Description:**

This issue covers the backend implementation for creating and storing user posts. It involves defining the post schema, creating an API endpoint for post submission, and associating posts with users and their uploaded images.

**Sub-tasks:**

- **Post Schema/Model Definition:**
  - Define the post schema/model in the database to store post information.
  - Fields should include at minimum: `id`, `user_id` (foreign key to users), `image_url`, `caption`, `created_at`, `updated_at`.
  - Ensure proper indexing for `user_id` and `created_at` for efficient querying.
- **Post Creation Endpoint (`POST /api/posts`):**
  - Create an authenticated API endpoint to handle new post submissions.
  - Validate incoming payload (e.g., `image_url` is a valid URL, `caption` length).
  - Associate the post with the authenticated user's `user_id`.
  - Store the `image_url` and `caption` in the database.
  - Return appropriate success or error responses (e.g., 201 Created, 400 Bad Request).
- **Security and Authorization:**
  - Ensure only authenticated users can create posts.
  - Validate that the `image_url` provided by the frontend is from a trusted source (e.g., your cloud storage bucket) to prevent malicious links.

**Acceptance Criteria:**

- A post table/collection is defined in the database with the necessary fields.
- Authenticated users can successfully create new posts via the `/api/posts` endpoint.
- Posts are correctly associated with the user who created them.
- The `image_url` and `caption` are successfully stored in the database.
- The backend validates the `image_url` to prevent security vulnerabilities.

**Labels:** `backend`, `posts`, `API`, `MVP`


