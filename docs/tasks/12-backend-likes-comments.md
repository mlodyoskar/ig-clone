### Issue 12: Backend - Implement Likes and Comments System

**Title:** Backend - Implement Likes and Comments System

**Description:**

This issue covers the backend implementation for the likes and comments system, allowing users to interact with posts by liking them and adding comments. This adds social engagement features to the platform.

**Sub-tasks:**

- **Likes Schema/Model Definition:**
  - Define a `likes` schema/model to track which users have liked which posts.
  - Fields should include: `user_id`, `post_id`, `created_at`.
  - Ensure uniqueness constraint on `(user_id, post_id)` pair to prevent duplicate likes.
  - Add appropriate indexes for efficient querying.
- **Comments Schema/Model Definition:**
  - Define a `comments` schema/model to store comments on posts.
  - Fields should include: `id`, `user_id`, `post_id`, `content`, `created_at`, `updated_at`.
  - Add appropriate indexes for efficient querying by `post_id`.
- **Like/Unlike Post Endpoints:**
  - Create `POST /api/posts/:id/like` endpoint to allow users to like a post.
  - Create `DELETE /api/posts/:id/like` endpoint to allow users to unlike a post.
  - Handle cases where the user has already liked the post or tries to like their own post.
  - Return the updated like count with the response.
- **Comment on Post Endpoint:**
  - Create `POST /api/posts/:id/comments` endpoint to allow users to add comments to a post.
  - Validate the comment content (e.g., length, not empty).
  - Store the comment with the associated user and post IDs.
  - Return the created comment with user details.
- **Get Post Comments Endpoint:**
  - Create `GET /api/posts/:id/comments` endpoint to retrieve comments for a specific post.
  - Implement pagination for comments.
  - Include user details (username, profile picture) with each comment.

**Acceptance Criteria:**

- The `likes` and `comments` schemas are correctly defined and integrated with the database.
- Users can successfully like and unlike posts.
- Users can add comments to posts.
- Users can view comments on posts with proper pagination.
- Like counts are accurately tracked and returned.
- All endpoints are properly authenticated and handle edge cases gracefully.

**Labels:** `backend`, `social`, `API`, `MVP`


