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
  <img src="https://img.shields.io/badge/MDX-blog-f9ac00?logo=mdx" alt="MDX Blog">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT License">
</p>

<p align="center">
  <a href="#quickstart"><strong>Quickstart</strong></a>
  ·
  <a href="#features"><strong>Features</strong></a>
  ·
  <a href="#writing-blog-posts"><strong>Blog</strong></a>
  ·
  <a href="ROADMAP.md"><strong>Roadmap</strong></a>
</p>

---

## Features

- **Project Showcase** — Animated grid pulling top repos from the GitHub API, sorted by stars, with language badges and topic tags
- **MDX Blog** — Full blog with syntax highlighting (Shiki), reading time estimates, and custom MDX components
- **Dark Mode** — System-aware theme toggle with `localStorage` persistence and zero-FOUC blocking script
- **Scroll Animations** — Fade-in-up entrance animations triggered by `IntersectionObserver`, with `prefers-reduced-motion` support
- **RSS Feed** — Auto-generated `feed.xml` at build time so readers can subscribe
- **SEO** — OpenGraph and Twitter Card meta on every page, `sitemap.xml`, `robots.txt`, and per-post OG metadata
- **Self-Hosted Fonts** — Inter and JetBrains Mono loaded via `next/font/google` with `display: swap` for zero layout shift
- **Static Export** — Full static site generation (`next build` + `output: "export"`), served from a CDN on Vercel

## Quickstart

```bash
git clone https://github.com/oobagi/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build + generate RSS feed and sitemap |
| `npm run start` | Serve the static `out/` directory locally |
| `npm run lint` | Run ESLint |

## Writing Blog Posts

1. Create a new file in `content/blog/` — the filename becomes the URL slug:

```
content/blog/my-post.mdx
```

2. Add the required frontmatter:

```mdx
---
title: "My Post"
date: "2026-03-29"
description: "A short description."
tags: ["optional", "tags"]
---

Your content here. Code blocks get syntax highlighting automatically.
```

3. Run `npm run build` to regenerate the static site, RSS feed, and sitemap. The post appears at `/blog/my-post`.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, static export) |
| Styling | Tailwind CSS v4 (CSS-based `@theme` config) |
| Language | TypeScript 5 |
| Blog | MDX via `next-mdx-remote/rsc` + `gray-matter` |
| Syntax Highlighting | `rehype-pretty-code` + Shiki (`github-dark` theme) |
| Fonts | Inter + JetBrains Mono (`next/font/google`) |
| RSS | `rss` package, generated at build time |
| Deploy | Vercel (static) |

## Design System

The full design system lives in [`DESIGN.md`](DESIGN.md) and [`docs/design-system.md`](docs/design-system.md). All tokens are implemented as Tailwind v4 `@theme` values and semantic CSS custom properties in `src/app/globals.css` — no JS config file.

**Colors**: Amber/gold primary, lime/sage secondary, purple accent, warm stone neutrals. Dark mode is the primary experience.

**Typography**: Inter for body and headings, JetBrains Mono for code, navigation, tags, and dates.

## License

MIT
