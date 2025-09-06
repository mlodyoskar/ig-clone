### Issue 14: Backend - User Search Functionality

**Title:** Backend - User Search Functionality

**Description:**

This issue covers the backend implementation for searching and discovering other users on the platform. This enables users to find and connect with other users by searching for usernames or other identifying information.

**Sub-tasks:**

- **User Search Endpoint (`GET /api/users/search`):**
  - Create an authenticated API endpoint for searching users.
  - Accept query parameters: `q` (search query), `limit`, `offset` for pagination.
  - Implement search functionality to find users by username (and optionally email for admin purposes).
  - Return user details including: `id`, `username`, `profile_picture_url`, `follower_count`, `following_count`.
  - Include the current user's follow status for each returned user (whether they are following them or not).
- **Search Algorithm:**
  - Implement case-insensitive partial matching for usernames.
  - Consider implementing fuzzy matching for better user experience (optional for MVP).
  - Order results by relevance (exact matches first, then partial matches).
- **Performance Optimization:**
  - Add appropriate database indexes on searchable fields (e.g., username).
  - Implement efficient database queries to handle search requests.
  - Consider implementing search result caching for frequently searched terms (optional for MVP).
- **Security Considerations:**
  - Ensure search results don't expose sensitive user information (e.g., email addresses to non-admin users).
  - Implement rate limiting on search endpoints to prevent abuse.

**Acceptance Criteria:**

- Users can search for other users by username using the `/api/users/search` endpoint.
- Search results are returned in a paginated format with relevant user information.
- The search functionality is case-insensitive and supports partial matching.
- Search results include the current user's follow status for each returned user.
- The search endpoint is properly authenticated and includes appropriate rate limiting.

**Labels:** `backend`, `search`, `API`, `MVP`


