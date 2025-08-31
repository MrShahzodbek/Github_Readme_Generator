# README Generator (React + Vite + Tailwind)

A zero-backend, client-side generator for GitHub profile READMEs.

## Dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
```

## Deploy on GitHub Pages
- For project pages (https://username.github.io/REPO_NAME), set `base: '/REPO_NAME/'` in `vite.config.js`.
- For user/organization pages (https://username.github.io), set `base: '/'`.

The repository includes a GitHub Action that builds and deploys to Pages automatically on pushes to `main`.