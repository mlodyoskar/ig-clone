### Issue 1: Backend - Database Setup for User Management

**Title:** Backend - Database Setup for User Management

**Description:**

This issue covers the setup of the database for storing user information and integrating it with the backend application. This is a foundational step for implementing user authentication and authorization.

**Sub-tasks:**

- **Database Selection and Configuration:**
  - Choose and configure a database for user storage (e.g., PostgreSQL, MongoDB).
  - Set up local development database (e.g., Dockerized PostgreSQL/MongoDB).
  - Configure connection strings and environment variables for both local and production environments.
- **User Schema/Model Definition:**
  - Define the user schema/model to store essential user information.
  - Fields should include at minimum: `id`, `email` (unique), `password_hash`, `created_at`, `updated_at`.
  - Consider adding fields for `username` and `profile_picture_url` for future use.
- **Database Integration:**
  - Integrate an ORM/ODM (e.g., Prisma, TypeORM, Mongoose) with the backend.
  - Create migrations (if using a relational database) for the user table.
  - Implement basic CRUD operations for users within the backend (though direct `create` will be handled by registration, `read` for login, `update` for profile, `delete` if needed later).
- **Local Development (Minio):**
  - Set up Minio for local development for testing image storage later on. (Although not directly related to user management, it's a good time to set up local dev dependencies).

**Acceptance Criteria:**

- A chosen database is successfully set up and accessible by the backend.
- A user table/collection is defined with the necessary fields (`id`, `email`, `password_hash`).
- The backend can connect to and interact with the user database.
- Local Minio instance is running and accessible for future image storage development.

**Labels:** `backend`, `database`, `setup`, `MVP`


