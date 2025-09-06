### Issue 8: Backend - Feed Retrieval (Following-based)

**Title:** Backend - Feed Retrieval (Following-based)

**Description:**

This issue covers the backend implementation for retrieving a chronological feed of posts for an authenticated user. The feed should primarily consist of posts from users the current user follows, aligning with a typical Instagram feed experience.

**Sub-tasks:**

- **Following System Schema (Preliminary):**
  - Define a preliminary schema for a `follows` relationship (e.g., `follower_id`, `following_id`). This doesn't need full CRUD yet, just enough to support feed logic.
- **Feed Retrieval Endpoint (`GET /api/feed`):**
  - Create an authenticated API endpoint to retrieve posts for the user's feed.
  - Identify users that the authenticated user is `following`.
  - Fetch posts created by these `following` users.
  - Sort the posts chronologically (newest first).
  - Implement pagination for efficient loading of the feed (e.g., `limit`, `offset` or cursor-based pagination).
  - Include necessary post details (e.g., `image_url`, `caption`, `user_id`, `created_at`, `username`, `profile_picture_url` of the post creator).
- **Performance Considerations:**
  - Ensure efficient database queries for fetching posts and following relationships.
  - Consider indexing relevant fields to optimize performance.

**Acceptance Criteria:**

- The backend can identify users a given user is following.
- The `/api/feed` endpoint successfully returns a paginated list of posts from followed users, sorted chronologically.
- Each post in the feed includes details of the post and its creator.
- The feed retrieval process is optimized for performance.
- Only authenticated users can access the feed endpoint.

**Labels:** `backend`, `feed`, `API`, `MVP`


