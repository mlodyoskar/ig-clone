### Issue 2: Backend - Implement Authentication Endpoints

**Title:** Backend - Implement Authentication Endpoints

**Description:**

This issue focuses on implementing the core backend API endpoints for user registration, login, and logout, building upon the database setup from the previous task. It also covers secure password handling and initial session management.

**Sub-tasks:**

- **User Registration (`POST /api/auth/register`):**
  - Create an endpoint to handle new user registrations.
  - Validate incoming `email` and `password` payload (e.g., email format, minimum password length).
  - Hash the user's password securely (e.g., using `bcrypt`).
  - Store the new user's `email` and `password_hash` in the database.
  - Return appropriate success or error responses (e.g., 201 Created, 400 Bad Request, 409 Conflict for existing email).
- **User Login (`POST /api/auth/login`):**
  - Create an endpoint to handle user logins.
  - Validate incoming `email` and `password` payload.
  - Retrieve the user from the database by `email`.
  - Compare the provided password with the stored password hash.
  - If credentials are valid, generate and return an authentication token/session identifier (e.g., JWT, session ID in a cookie).
  - Return appropriate success or error responses (e.g., 200 OK, 401 Unauthorized).
- **User Logout (`POST /api/auth/logout`):**
  - Create an endpoint to handle user logouts.
  - Invalidate the user's current session or authentication token.
  - Return a success response (e.g., 204 No Content).
- **Security Considerations:**
  - Implement appropriate error handling to avoid leaking sensitive information.
  - Ensure secure transmission of credentials (e.g., via HTTPS).

**Acceptance Criteria:**

- New users can successfully register via the `/api/auth/register` endpoint.
- Existing users can successfully log in via the `/api/auth/login` endpoint and receive an authentication token/session.
- Authenticated users can successfully log out via the `/api/auth/logout` endpoint, invalidating their session.
- Passwords are securely hashed and stored.
- Error messages are informative but do not expose sensitive server details.

**Labels:** `backend`, `authentication`, `API`, `MVP`


