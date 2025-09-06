### Issue 7: Frontend - Post Creation UI and Integration

**Title:** Frontend - Post Creation UI and Integration

**Description:**

This issue covers the development of the frontend user interface for creating new posts, integrating the image upload functionality (from Issue 5) with the ability to add a caption and submit the post to the backend (from Issue 6).

**Sub-tasks:**

- **Post Creation Page/Modal:**
  - Create a new page or a modal component for users to create a new post.
  - Integrate the image selection and direct upload UI from Issue 5.
  - Add an input field for the post `caption`.
- **Post Submission:**
  - When the user submits the post, use the public `image_url` (obtained from the direct upload) and the `caption`.
  - Make an authenticated request to the backend's `/api/posts` endpoint to create the new post.
  - Handle successful post creation (e.g., redirect to the new post, display a success message).
  - Handle errors during post creation (e.g., display error messages).
- **User Experience and Feedback:**
  - Provide clear visual feedback during image upload and post submission (e.g., loading states, progress indicators).
  - Ensure a smooth user flow from image selection to post completion.

**Acceptance Criteria:**

- Authenticated users can access a dedicated UI for creating new posts.
- Users can select an image, add a caption, and submit a new post.
- The frontend successfully sends the `image_url` and `caption` to the backend post creation endpoint.
- Successful post creation leads to appropriate user feedback and navigation.
- Error handling is implemented for post creation failures.

**Labels:** `frontend`, `posts`, `UI/UX`, `MVP`


