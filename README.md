# HubEarn

A production-ready rewards dashboard built with React, Cloudflare Workers, and D1.

## Features

- Responsive React dashboard for rewards and point tracking
- Cloudflare Worker API with D1 persistence
- Local seed data fallback for immediate onboarding
- Simple build and local dev workflow

## Getting started

```bash
npm install
npm run build
npm run dev
```

Then open the Vite app at http://localhost:5173.

For the worker API, run:

```bash
npx wrangler dev
```

## Project structure

- `src/` — React application UI
- `worker/` — Cloudflare Worker API logic
- `wrangler.jsonc` — Worker and D1 configuration
