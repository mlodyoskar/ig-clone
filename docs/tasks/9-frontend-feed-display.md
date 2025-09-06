### Issue 9: Frontend - Display User Feed

**Title:** Frontend - Display User Feed

**Description:**

This issue covers the development of the frontend UI to display the user's personalized feed, consuming the backend's feed retrieval API. It involves rendering posts chronologically and displaying relevant user and post information.

**Sub-tasks:**

- **Feed Page/Component:**
  - Create a main feed page or component that authenticated users are redirected to after login.
  - Fetch posts from the backend's `/api/feed` endpoint (implementing pagination as needed).
  - Handle loading states while fetching posts.
- **Post Card Component:**
  - Develop a reusable component to display individual posts.
  - Each post card should display:
    - The post creator's username and profile picture.
    - The post image.
    - The post caption.
    - The time the post was created.
    - Placeholders for like and comment counts (to be implemented later).
- **Infinite Scrolling/Pagination:**
  - Implement infinite scrolling or explicit pagination controls to load more posts as the user scrolls down the feed.
- **Image Optimization:**
  - Utilize Next.js image optimization features to efficiently display post images.

**Acceptance Criteria:**

- Authenticated users can view a chronological feed of posts from users they follow.
- Each post is displayed with the image, caption, and creator's details.
- The feed loads more posts as the user scrolls or requests them.
- Post images are optimized for fast loading.
- A visually appealing and responsive feed layout is implemented.

**Labels:** `frontend`, `feed`, `UI/UX`, `MVP`


