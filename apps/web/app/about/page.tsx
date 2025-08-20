import Link from "next/link";

// This page uses Static Site Generation (SSG)
// It will be pre-rendered at build time

interface BuildInfo {
  buildTime: string;
  nextVersion: string;
  nodeVersion: string;
}

async function getBuildInfo(): Promise<BuildInfo> {
  // This will be executed at build time, not runtime
  return {
    buildTime: new Date().toISOString(),
    nextVersion: "15.4.2",
    nodeVersion: process.version,
  };
}

export default async function AboutPage() {
  const buildInfo = await getBuildInfo();
  const currentTime = new Date().toISOString();

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
        <h1>📖 About Instagram Clone</h1>
        <p style={{ color: "#666" }}>
          📄 <strong>Static Site Generated</strong> page
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
          backgroundColor: "#e8f4fd",
          padding: "1.5rem",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      >
        <h3>📊 Build Information (SSG):</h3>
        <ul style={{ margin: 0 }}>
          <li>
            <strong>Built at:</strong> {buildInfo.buildTime}
          </li>
          <li>
            <strong>Next.js:</strong> {buildInfo.nextVersion}
          </li>
          <li>
            <strong>Node.js:</strong> {buildInfo.nodeVersion}
          </li>
          <li>
            <strong>Current time:</strong> {currentTime}
          </li>
        </ul>
        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.9rem",
            fontStyle: "italic",
            color: "#666",
          }}
        >
          Notice: Build time stays the same (generated once), but current time
          changes on each visit!
        </p>
      </div>

      <section style={{ marginBottom: "2rem" }}>
        <h2>🏗️ Architecture</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <h3>🎯 Frontend</h3>
            <ul>
              <li>Next.js 15</li>
              <li>App Router</li>
              <li>TypeScript</li>
              <li>Server Components</li>
            </ul>
          </div>

          <div
            style={{
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <h3>🛠️ Development</h3>
            <ul>
              <li>Turborepo</li>
              <li>PNPM</li>
              <li>ESLint</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div
            style={{
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <h3>🐳 Deployment</h3>
            <ul>
              <li>Docker</li>
              <li>Alpine Linux</li>
              <li>Multi-stage build</li>
              <li>GCP Cloud Run ready</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>🚀 Features</h2>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "1.5rem",
            borderRadius: "8px",
          }}
        >
          <h3>✅ Implemented:</h3>
          <ul>
            <li>
              <strong>SSR (Server-Side Rendering):</strong> Posts page with
              fresh data
            </li>
            <li>
              <strong>SSG (Static Site Generation):</strong> This about page
            </li>
            <li>
              <strong>Docker containerization:</strong> Production-ready image
            </li>
            <li>
              <strong>Monorepo setup:</strong> Turborepo with optimized builds
            </li>
            <li>
              <strong>TypeScript:</strong> Full type safety
            </li>
          </ul>

          <h3 style={{ marginTop: "1.5rem" }}>🔄 Coming Next:</h3>
          <ul>
            <li>Backend API (Express.js)</li>
            <li>Database integration</li>
            <li>User authentication</li>
            <li>Image upload & processing</li>
            <li>Real-time features</li>
          </ul>
        </div>
      </section>

      <footer
        style={{
          marginTop: "3rem",
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#f0f8ff",
          borderRadius: "8px",
        }}
      >
        <h3>🎯 Rendering Comparison</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <div>
            <h4>📄 SSG (This page)</h4>
            <p style={{ fontSize: "0.9rem" }}>
              Pre-rendered at build time
              <br />
              Fast loading, great for SEO
            </p>
          </div>

          <div>
            <h4>🔄 SSR (Posts page)</h4>
            <p style={{ fontSize: "0.9rem" }}>
              Rendered on each request
              <br />
              Dynamic content, fresh data
            </p>
          </div>

          <div>
            <h4>⚡ CSR (Interactive)</h4>
            <p style={{ fontSize: "0.9rem" }}>
              Client-side rendering
              <br />
              Interactive features
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
