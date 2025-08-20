import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  timestamp: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Simulate fetching posts from an API with SSR
async function getPosts(): Promise<Post[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      cache: "no-store", // Force SSR on every request
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await response.json();

  // Add timestamp to show SSR
  return posts.map((post: Omit<Post, "timestamp">) => ({
    ...post,
    timestamp: new Date().toISOString(),
  }));
}

// Fetch user data
async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

export default async function PostsPage() {
  const [posts, users] = await Promise.all([getPosts(), getUsers()]);

  const getUserName = (userId: number) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : "Unknown User";
  };

  const serverTime = new Date().toISOString();

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1>📸 Instagram Clone - Posts Feed</h1>
        <p style={{ color: "#666" }}>
          🚀 <strong>Server-Side Rendered</strong> at: {serverTime}
        </p>
        <Link
          href="/"
          style={{
            color: "#0070f3",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          ← Back to Home
        </Link>
      </header>

      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      >
        <h3>🔍 SSR Features Demonstrated:</h3>
        <ul>
          <li>✅ Data fetched on server during build</li>
          <li>✅ Fresh server timestamp on each request</li>
          <li>✅ External API calls (JSONPlaceholder)</li>
          <li>✅ SEO-friendly pre-rendered HTML</li>
          <li>✅ No loading states needed</li>
        </ul>
      </div>

      <div style={{ display: "grid", gap: "1rem" }}>
        {posts.map((post) => (
          <article
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1.5rem",
              backgroundColor: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <header style={{ marginBottom: "1rem" }}>
              <h2
                style={{
                  margin: "0 0 0.5rem 0",
                  fontSize: "1.2rem",
                  color: "#333",
                }}
              >
                {post.title}
              </h2>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>
                  👤 By: <strong>{getUserName(post.userId)}</strong>
                </span>
                <span>
                  🕒 Rendered: {new Date(post.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </header>

            <p
              style={{
                lineHeight: "1.6",
                color: "#555",
                margin: 0,
              }}
            >
              {post.body}
            </p>
          </article>
        ))}
      </div>

      <footer
        style={{
          marginTop: "3rem",
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <p>
          🐳 This page is rendered server-side in Docker container
          <br />
          🚀 Ready for deployment on GCP Cloud Run
        </p>
      </footer>
    </div>
  );
}
