import Link from "next/link";
import Image, { type ImageProps } from "next/image";

import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ThemeImage
          className={styles.logo}
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Instagram Clone logo"
          width={180}
          height={38}
          priority
        />

        <h1 style={{ fontSize: "2rem", margin: "1rem 0" }}>
          📸 Instagram Clone
        </h1>

        <p
          style={{ textAlign: "center", margin: "1rem 0", fontSize: "1.2rem" }}
        >
          Built with Next.js 15, Turborepo & Docker
        </p>

        <div style={{ margin: "2rem 0" }}>
          <h2>🚀 Features Demo:</h2>
          <ul style={{ textAlign: "left", maxWidth: "400px" }}>
            <li>✅ Next.js 15 App Router</li>
            <li>✅ Server-Side Rendering (SSR)</li>
            <li>✅ Static Site Generation (SSG)</li>
            <li>✅ Docker containerization</li>
            <li>✅ Turborepo monorepo</li>
          </ul>
        </div>

        <div className={styles.ctas}>
          <Link
            href="/posts"
            className={styles.primary}
            style={{ textDecoration: "none" }}
          >
            🔍 View Posts (SSR Demo)
          </Link>
          <Link
            href="/about"
            className={styles.secondary}
            style={{ textDecoration: "none" }}
          >
            📖 About (SSG Demo)
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p style={{ margin: "1rem 0" }}>
          🐳 Running in Docker • 🚀 Ready for Cloud Run
        </p>
      </footer>
    </div>
  );
}
