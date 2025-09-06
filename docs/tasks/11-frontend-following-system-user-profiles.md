### Issue 11: Frontend - Following System and User Profiles

**Title:** Frontend - Following System and User Profiles

**Description:**

This issue covers the frontend implementation for the following system, allowing users to follow and unfollow other users, and displaying basic user profiles. This enables users to discover and connect with other users on the platform.

**Sub-tasks:**

- **User Profile Page (`/users/:id`):**
  - Create a user profile page that displays:
    - User's profile picture, username, and bio (if available).
    - Count of followers and following.
    - A grid of the user's posts.
    - A follow/unfollow button (if viewing another user's profile).
- **Follow/Unfollow Functionality:**
  - Implement follow/unfollow buttons on user profiles.
  - Make authenticated requests to the backend's `/api/users/:id/follow` and `/api/users/:id/unfollow` endpoints.
  - Update the UI dynamically to reflect the follow status (e.g., change button text from "Follow" to "Unfollow").
  - Handle errors gracefully (e.g., display error messages for failed follow/unfollow attempts).
- **User Discovery (Basic):**
  - Add a simple way for users to discover other users (e.g., a "Discover Users" page or section).
  - Display a list of users with their basic information and follow buttons.
- **Navigation to User Profiles:**
  - Make usernames in the feed clickable, linking to the respective user's profile page.
  - Ensure proper routing for user profile pages.

**Acceptance Criteria:**

- Users can view other users' profiles, including their posts and follower/following counts.
- Users can successfully follow and unfollow other users from their profile pages.
- The UI updates dynamically to reflect follow status changes.
- Users can navigate to other users' profiles from the feed.
- A basic user discovery mechanism is in place.

**Labels:** `frontend`, `social`, `UI/UX`, `MVP`


