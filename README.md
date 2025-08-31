# GitHub README Generator (React + Vite + Tailwind)

![pages-deploy](https://img.shields.io/github/actions/workflow/status/MrShahzodbek/Github_Readme_Generator/deploy.yml?branch=main&label=Pages%20deploy)
![react](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![tailwind](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss&logoColor=white)
![license](https://img.shields.io/badge/License-MIT-green)

A zero-backend, **client-side** generator for GitHub profile READMEs. Toggle sections (badges, social links, tools, pinned repos, stats, streaks, trophies, activity graph, 🐍 snake), then copy or download the Markdown.

**Live demo:** https://mrshahzodbek.github.io/Github_Readme_Generator/

---

## Table of Contents
- [Features](#features)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Deploy (GitHub Pages)](#deploy-github-pages)
- [Deploy (Other Hosts)](#deploy-other-hosts)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- ⚡ **Instant** Markdown generation (no servers, no APIs)
- 🎯 **Pick your sections**: badges row, social icons, About, tools, featured repos, stats cards, top languages, streaks, trophies, activity graph, optional snake
- 🖼 **Icon picker** for popular stacks (PHP, Laravel, Python, Vue, React, Docker, etc.)
- 🎨 Stats **theme selector** (dracula, tokyonight, onedark, etc.)
- 📋 **Copy** to clipboard & **Download** as `README.md`
- 🔒 100% **client-side** (privacy-friendly)

---

## Quick Start

> Node.js **18+** recommended

```bash
npm i
npm run dev
````

Open [http://localhost:5173](http://localhost:5173)

Build & preview:

```bash
npm run build
npm run preview
```

---

## Configuration

This project is intended for a **project page** at:

```
https://username.github.io/Github_Readme_Generator/
```

Set the Vite base path (already pre-set here):

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/Github_Readme_Generator/', // <- repo name (case-sensitive)
})
```

For **user/organization** pages (e.g. `https://username.github.io`), set:

```js
base: '/'
```

---

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow: `.github/workflows/deploy.yml`.

1. Push to `main`.
2. In **Repo → Settings → Pages**, set **Source** = **GitHub Actions**.
3. Wait for the **Pages** deploy action to go green.
4. Visit: `https://username.github.io/Github_Readme_Generator/`

> SPA fallback is handled by the build script copying `index.html` → `404.html`.

---

## Deploy (Other Hosts)

### Netlify

* **Build command:** `npm run build`
* **Publish directory:** `dist`
* Make sure Vite `base` matches the subpath you deploy under (usually `'/'` on Netlify).

### Vercel

* Framework preset: **Vite**
* **Build command:** `npm run build`
* **Output:** `dist`
* For subpaths, adjust `base` in `vite.config.js`.

---

## How It Works

* A single React component (`src/ReadmeGenerator.jsx`) builds Markdown from your inputs.
* External images (badges/stats/cards) are referenced by URL; GitHub may proxy them through **camo.githubusercontent.com** for HTTPS and caching.
* No data leaves your browser.

---

## Project Structure

```
.
├─ .github/workflows/deploy.yml      # GitHub Pages CI
├─ src/
│  ├─ ReadmeGenerator.jsx            # The generator UI + logic
│  ├─ main.jsx
│  └─ index.css                      # Tailwind directives
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js                    # base path for Pages
└─ .gitignore
```

---

## Customization

* **Add/Remove tools**: edit `ALL_ICONS` in `src/ReadmeGenerator.jsx`.
* **Add themes** for stats cards: edit the `THEMES` array.
* **Default choices** (selected icons, sections on/off): edit component state defaults.
* **Styling**: update `src/index.css` (Tailwind) or tweak component classes.

---

## Troubleshooting

**Blank page on GitHub Pages**

* Settings → Pages → **Source = GitHub Actions**
* `vite.config.js` `base` must equal your repo name **exactly** (`/Github_Readme_Generator/`)
* View Source → ensure built script paths look like:

  ```
  <script type="module" src="/Github_Readme_Generator/assets/index-*.js">
  ```

  If you see `/src/main.jsx`, you’re serving unbuilt files.

**Assets 404**

* Re-deploy (push any change) to retrigger the workflow.
* Hard refresh (Ctrl/Cmd + Shift + R).

**Some images don’t render in README previews**

* Ensure URLs are **HTTPS**.
* Badge/stat providers can rate-limit; try again later or refresh cache by appending a query (e.g., `?v=2`).

---

## FAQ

**Q: Can I host this in a different repo name?**
Yes—just change `base` in `vite.config.js` to `'/YOUR_REPO/'`.

**Q: Does it store my data?**
No. Everything runs in your browser.

**Q: How do I enable the 🐍 Snake in my own profile README?**
Add a workflow in your **profile repo** (`username/username`) that generates `output/snake.svg`, then include the image in your README. (This generator can insert the correct `<img>` tag for you.)

---

## Contributing

PRs welcome!

* Keep it dependency-light and client-only.
* Prefer Tailwind utility classes for UI.
* Add new icons/themes to the arrays with a sensible label.

---

## License

MIT © 2025 MrShahzodbek
