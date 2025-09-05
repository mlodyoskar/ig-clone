This is a [Next.js](https://nextjs.org) project in a Turborepo monorepo setup.

## Development

For development, run locally with hot reload (recommended):

```bash
# From project root
pnpm dev

# Or run only the web app
pnpm --filter web dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Production (Docker)

For production deployment, use Docker:

```bash
# Build the image (from project root)
docker build -f apps/web/Dockerfile -t ig-clone-frontend .

# Run the container
docker run -p 3000:3000 ig-clone-frontend
```

The Docker build uses Turborepo's `prune` feature to create an optimized image with only the necessary dependencies.

## 🚀 GCP Cloud Run Deployment

### Quick Deploy

```bash
# Set your GCP project ID
export GCP_PROJECT_ID="your-project-id"

# Run deployment script
./deploy.sh
```

### Manual Deploy

```bash
# 1. Build and push to Artifact Registry
docker build -f apps/web/Dockerfile \
  -t europe-west1-docker.pkg.dev/YOUR_PROJECT_ID/ig-clone-repo/ig-clone-frontend:latest .

gcloud auth configure-docker europe-west1-docker.pkg.dev
docker push europe-west1-docker.pkg.dev/YOUR_PROJECT_ID/ig-clone-repo/ig-clone-frontend:latest

# 2. Deploy to Cloud Run
gcloud run deploy ig-clone-frontend \
  --image europe-west1-docker.pkg.dev/YOUR_PROJECT_ID/ig-clone-repo/ig-clone-frontend:latest \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated \
  --port 3000
```

### CI/CD with GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys on push to main branch.

**Required secrets:**

- `GCP_PROJECT_ID`: Your Google Cloud project ID
- `GCP_SA_KEY`: Service account key JSON (base64 encoded)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
