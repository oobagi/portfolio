# Portfolio

Personal portfolio website and blog built with Next.js 15 (App Router), Tailwind CSS v4, TypeScript, and MDX. Statically exported and deployed on Vercel.

## Stack

- **Framework:** Next.js 15 with App Router (`output: "export"` for static site generation)
- **Styling:** Tailwind CSS v4 (configured via `@theme` in CSS, not a JS config file)
- **Language:** TypeScript 5
- **Blog:** MDX via `next-mdx-remote/rsc` (server components) + `gray-matter` for frontmatter
- **Syntax highlighting:** `rehype-pretty-code` + `shiki` (theme: `github-dark`)
- **Fonts:** Inter (body/headings) + JetBrains Mono (code/nav/tags) via `next/font/google`
- **RSS:** `rss` package, generated at build time via `scripts/generate-rss.mjs`
- **Deploy:** Vercel (static export served from `out/`)

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build → static export + RSS feed + sitemap
npm run start    # Serve the out/ directory locally via `npx serve out`
npm run lint     # ESLint (next lint)
```

The `build` script chains three steps: `next build && node scripts/generate-rss.mjs && node scripts/generate-sitemap.mjs`. RSS and sitemap are written to both `public/` and `out/`.

## Structure

```
src/
  app/
    layout.tsx              # Root layout — fonts, metadata, OG tags, Header/Footer
    page.tsx                # Home page — Hero → Projects → Contact
    globals.css             # Tailwind v4 @theme tokens + semantic CSS custom properties
    blog/
      page.tsx              # Blog listing page
      [slug]/page.tsx       # Individual blog post (MDX rendering + syntax highlighting)
  components/
    header.tsx              # Sticky header with nav, mobile hamburger menu, theme toggle
    footer.tsx              # Footer with copyright + GitHub link
    hero-section.tsx        # Full-viewport hero with name, tagline, social links, CTA
    projects-section.tsx    # Animated project grid (data from GitHub API)
    contact-section.tsx     # Contact CTA with email button + social links
    project-card.tsx        # Card displaying a single GitHub repo
    social-links.tsx        # Reusable social icon links (currently GitHub)
    theme-provider.tsx      # Blocking <script> to prevent FOUC on theme load
    theme-toggle.tsx        # Dark/light toggle button with localStorage persistence
    blog/
      blog-post-card.tsx    # Card for blog listing (date, reading time, title, description)
      blog-post-list.tsx    # List of blog post cards with empty state
      mdx-components.tsx    # Custom MDX component overrides (headings, links, code, etc.)
    ui/
      animate-in.tsx        # Scroll-triggered fade-in-up animation (IntersectionObserver)
      badge.tsx             # Pill badge (default, primary, secondary, accent variants)
      button.tsx            # Polymorphic button/link (primary, secondary, ghost × sm, md)
      card.tsx              # Polymorphic card/link with hover lift + glow effects
      section.tsx           # Consistent section wrapper (max-width + padding)
      section-heading.tsx   # Section title + subtitle
      skeleton.tsx          # Loading skeleton placeholder
  lib/
    github.ts               # Fetches repos from GitHub API, sorts by stars, maps to Project type
    blog.ts                 # Reads MDX files from content/blog/, parses frontmatter + reading time
    rss.ts                  # Generates RSS XML from blog posts (used by generate-rss.mjs)
scripts/
  generate-rss.mjs          # Post-build script: writes feed.xml to public/ and out/
  generate-sitemap.mjs      # Post-build script: writes sitemap.xml to public/ and out/
content/
  blog/                     # MDX blog posts with frontmatter
public/
  robots.txt                # Crawl rules
  feed.xml                  # RSS feed (generated at build time)
  sitemap.xml               # XML sitemap (generated at build time)
assets/                     # Project assets (icon, screenshots)
docs/
  design-system.md          # Full design system reference
```

## Conventions

### Styling

- Tailwind v4: all design tokens live in `src/app/globals.css` under `@theme {}`. There is no `tailwind.config.js`.
- Semantic CSS custom properties (`--bg-primary`, `--text-secondary`, `--brand-primary`, etc.) remap under the `.dark` class on `<html>`. Components reference these variables directly instead of using `dark:` prefixes.
- The full design system (colors, typography, spacing, effects) is documented in `DESIGN.md` and `docs/design-system.md`.

### Components

- All components use **named exports** (no default exports).
- File naming: **kebab-case** for files, **PascalCase** for component names.
- UI primitives live in `src/components/ui/`. Page-level sections live in `src/components/`.
- Polymorphic components (`Button`, `Card`) accept an optional `href` prop to render as either a `<button>`/`<div>` or an `<a>` tag.

### Dark Mode

- Theme is stored in `localStorage` under the key `"theme"` (`"dark"` or `"light"`).
- A blocking inline script in `<head>` (`ThemeScript`) reads the stored preference (falling back to `prefers-color-scheme`) and sets the `.dark` class before first paint to prevent FOUC.
- The `ThemeToggle` component toggles the class and persists the choice.

### Blog Post Workflow

1. Create a new `.mdx` file in `content/blog/` (filename becomes the URL slug).
2. Add required frontmatter: `title`, `date` (YYYY-MM-DD), `description`. Optional: `tags`.
3. Write content using standard MDX. Code blocks get syntax highlighting automatically via `rehype-pretty-code`.
4. Run `npm run build` to generate the static site, RSS feed, and sitemap. The blog post appears at `/blog/<slug>`.

### GitHub Projects

- `src/lib/github.ts` fetches public repos from the GitHub API (`/users/oobagi/repos`).
- Repos are filtered (no forks), sorted by stars then by last push date, and capped at 6.
- Language colors are mapped from a hardcoded lookup table in the same file.
- Data is fetched at build time (static export); no runtime API calls.

### SEO

- Root layout defines `metadataBase`, OpenGraph tags, Twitter card, and robots directives.
- Each blog post generates its own OG metadata via `generateMetadata`.
- `robots.txt`, `sitemap.xml`, and `feed.xml` are served from the static export root.
- RSS feed is linked via `alternates.types` in the root layout metadata.
