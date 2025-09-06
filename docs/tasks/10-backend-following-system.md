### Issue 10: Backend - Implement Following System

**Title:** Backend - Implement Following System

**Description:**

This issue covers the backend implementation of the user following system, allowing users to follow and unfollow other users. This is crucial for personalizing the user's feed.

**Sub-tasks:**

- **Following Schema/Model Definition:**
  - Refine the `follows` schema/model (introduced preliminarily in Issue 8) to accurately represent the relationship between a `follower` and a `following` user.
  - Fields should include: `follower_id`, `following_id`, `created_at`.
  - Ensure uniqueness constraint on `(follower_id, following_id)` pair.
  - Add appropriate indexes for efficient querying.
- **Follow User Endpoint (`POST /api/users/:id/follow`):**
  - Create an authenticated API endpoint to allow a user to follow another user.
  - Accept the `id` of the user to be followed.
  - Create a new entry in the `follows` table/collection.
  - Handle cases where the user is already following the target user or tries to follow themselves.
  - Return appropriate success/error responses.
- **Unfollow User Endpoint (`DELETE /api/users/:id/follow`):**
  - Create an authenticated API endpoint to allow a user to unfollow another user.
  - Accept the `id` of the user to be unfollowed.
  - Remove the corresponding entry from the `follows` table/collection.
  - Handle cases where the user is not following the target user.
  - Return appropriate success/error responses.
- **Get User Following/Followers (Optional for MVP, but good for profile):**
  - Consider creating endpoints to retrieve a user's list of following and followers. This will be useful for user profiles later.

**Acceptance Criteria:**

- The `follows` schema is correctly defined and integrated with the database.
- Authenticated users can successfully follow other users.
- Authenticated users can successfully unfollow other users.
- Edge cases (already following, not following, self-follow) are handled gracefully.
- The following/unfollowing actions are securely handled and associated with the authenticated user.

**Labels:** `backend`, `social`, `API`, `MVP`


