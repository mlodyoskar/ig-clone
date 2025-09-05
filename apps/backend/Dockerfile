FROM node:22-alpine AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat

# Enable pnpm and set version
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN corepack prepare pnpm@10.15.1 --activate
# Set working directory
WORKDIR /app
RUN pnpm add -g turbo@^2
COPY . .
RUN turbo prune backend --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat

RUN corepack enable
RUN corepack prepare pnpm@10.15.1 --activate

WORKDIR /app


COPY --from=builder /app/out/json/ .
RUN pnpm install

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .

RUN pnpm turbo build

FROM base AS runner
WORKDIR /app


RUN addgroup --system --gid 1001 expressjs
RUN adduser --system --uid 1001 expressjs
USER expressjs
COPY --from=installer /app .

EXPOSE 4000

CMD ["node", "apps/backend/dist/index.js"]