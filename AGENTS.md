# Portfolio

Personal portfolio website and blog built with Next.js 15 (App Router), Tailwind CSS v4, TypeScript, and MDX.

## Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS v4 (configured via CSS, not JS config)
- **Language:** TypeScript 5
- **Blog:** MDX via `next-mdx-remote` + `gray-matter` for frontmatter
- **Syntax highlighting:** `rehype-pretty-code` + `shiki`
- **Deploy:** Vercel (static export)

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build (static export)
npm run start    # Serve production build locally
npm run lint     # ESLint
```

## Structure

```
src/
  app/           # Next.js App Router pages and layouts
    blog/        # Blog listing and [slug] pages
    projects/    # Projects section (if separate route needed)
  components/    # Reusable React components
  lib/           # Utilities — MDX parsing, GitHub API, helpers
content/
  blog/          # MDX blog posts with frontmatter
public/          # Static assets served at root
assets/          # Project assets (icon, screenshots)
docs/            # Documentation
```

## Conventions

- Tailwind v4: theme configuration lives in `src/app/globals.css` via `@theme`, not in a JS config file
- Blog posts go in `content/blog/*.mdx` with `title`, `date`, and `description` frontmatter
- Components use named exports
- File naming: kebab-case for files, PascalCase for components
