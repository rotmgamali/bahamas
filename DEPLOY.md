# Deployment

## Overview

SerenitySpaces Bahamas is a Next.js 16 app deployed on [Railway](https://railway.app) using a multi-stage Docker build. CI runs via GitHub Actions on every PR and push to `main`.

## Railway

**Build:** Uses the project `Dockerfile` (multi-stage, `node:20-alpine`). Next.js is configured with `output: "standalone"` for minimal container size.

**Auto-deploy:** Railway connects to the GitHub repo and deploys automatically on push to `main`.

**Environment variables:** Railway injects `PORT` automatically. Add any app-specific vars (SMTP config, site URL) in the Railway dashboard under the service's Variables tab. See `.env.example` for reference.

**Health check:** Configured in `railway.toml` — hits `/` with a 30-second timeout.

### Setup steps (one-time)

1. Create a new project in the Railway dashboard.
2. Add a service and connect it to `https://github.com/rotmgamali/bahamas.git`.
3. Railway will detect `railway.toml` and use the Dockerfile builder.
4. Set any required environment variables in the Railway dashboard.
5. Deploy. Railway assigns a `*.up.railway.app` domain by default; add a custom domain in Settings > Networking.

## CI (GitHub Actions)

The workflow at `.github/workflows/ci.yml` runs on every PR and push to `main`:

- **Lint** — `npm run lint` (ESLint)
- **Type-check** — `npx tsc --noEmit`
- **Build** — `npm run build` (verifies production build)

## Local build verification

```bash
npm ci
npm run build        # production build
npm start            # serve at http://localhost:3000
```

Docker:

```bash
docker build -t serenity-bahamas .
docker run -p 3000:3000 serenity-bahamas
```
