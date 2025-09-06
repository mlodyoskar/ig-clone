### Issue 13: Frontend - Likes and Comments UI

**Title:** Frontend - Likes and Comments UI

**Description:**

This issue covers the frontend implementation for displaying and interacting with likes and comments on posts. This includes UI components for liking posts, viewing comments, and adding new comments.

**Sub-tasks:**

- **Like/Unlike Functionality:**
  - Add like/unlike buttons to post cards in the feed.
  - Display the current like count for each post.
  - Make authenticated requests to the backend's like/unlike endpoints.
  - Update the UI dynamically to reflect like status and count changes.
  - Handle errors gracefully (e.g., display error messages for failed like/unlike attempts).
- **Comments Display:**
  - Add a comments section to each post card.
  - Display existing comments with user details (username, profile picture, comment content, timestamp).
  - Implement pagination or "Load More" functionality for comments.
  - Handle loading states while fetching comments.
- **Add Comment Functionality:**
  - Add an input field for users to write new comments.
  - Implement comment submission, sending data to the backend's comment endpoint.
  - Update the UI to show the new comment immediately after successful submission.
  - Handle errors during comment submission.
- **User Experience Enhancements:**
  - Ensure smooth interactions (e.g., optimistic updates for likes).
  - Provide visual feedback for user actions (e.g., loading states, success indicators).

**Acceptance Criteria:**

- Users can like and unlike posts, with the UI updating to reflect the current like status and count.
- Users can view comments on posts, with proper pagination for large comment threads.
- Users can add new comments to posts.
- The UI provides clear feedback for all user interactions.
- Error handling is implemented for all like and comment operations.

**Labels:** `frontend`, `social`, `UI/UX`, `MVP`


