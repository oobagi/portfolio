<p align="center">
  <img src="assets/portfolio-icon.png" width="128" height="128" alt="portfolio icon">
</p>

<h1 align="center">Portfolio</h1>

<p align="center">
  <strong>Personal portfolio and blog showcasing my best GitHub projects.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js 15">
  <img src="https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss" alt="Tailwind v4">
  <img src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT License">
</p>

<p align="center">
  <a href="#quickstart"><strong>Quickstart</strong></a>
  ·
  <a href="#features"><strong>Features</strong></a>
  ·
  <a href="ROADMAP.md"><strong>Roadmap</strong></a>
</p>

---

## Features

- **[Project Showcase](#)** — Animated grid pulling my best repos from the GitHub API
- **[MDX Blog](#)** — Self-hosted blog with syntax highlighting and reading time
- **[Dark Mode](#)** — System-aware theme toggle
- **[RSS Feed](#)** — Subscribe to new blog posts
- **[Static Export](#)** — Fast, CDN-friendly builds deployed on Vercel

## Quickstart

```bash
git clone https://github.com/oobagi/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing Blog Posts

Add MDX files to `content/blog/`:

```
content/blog/my-post.mdx
```

With frontmatter:

```mdx
---
title: "My Post"
date: "2026-03-29"
description: "A short description."
---

Your content here.
```

## License

MIT
