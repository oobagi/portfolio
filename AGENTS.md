# Portfolio

Personal portfolio website and blog built with Next.js 15 (App Router), native CSS, TypeScript, and MDX. Deployed on Vercel at jadenwatson.me.

## Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Native CSS with custom properties (no Tailwind)
- **Language:** TypeScript 5
- **Blog:** MDX via `next-mdx-remote/rsc` (server components) + `gray-matter` for frontmatter + `remark-gfm` for tables
- **Syntax highlighting:** `rehype-pretty-code` + `shiki` (theme: `github-dark`)
- **Font:** Geist Sans via `geist/font/sans`
- **RSS:** `rss` package, generated at build time via `scripts/generate-rss.mjs`
- **Deploy:** Vercel

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build + RSS feed + sitemap
npm run start    # Serve the out/ directory locally via `npx serve out`
npm run lint     # ESLint (next lint)
```

The `build` script chains three steps: `next build && node scripts/generate-rss.mjs && node scripts/generate-sitemap.mjs`. RSS and sitemap are written to both `public/` and `out/`.

## Structure

```
src/
  app/
    layout.tsx              # Root layout — font, metadata, TaglineNav header, footer
    page.tsx                # Home page — bio text in tagline style
    not-found.tsx           # Custom 404 page with ASCII starfield
    globals.css             # All styles — CSS custom properties, no Tailwind
    blog/
      page.tsx              # Blog listing page
      [slug]/page.tsx       # Individual blog post (MDX rendering + syntax highlighting)
    projects/
      page.tsx              # Projects page — 2-col grid for featured, list for rest
  components/
    tagline-nav.tsx         # Header — flowing prose tagline with inline nav links + icons
    footer.tsx              # Footer with copyright + GitHub link
    hero-section.tsx        # Hero with name and tagline
    projects-section.tsx    # Project list (data from GitHub API)
    contact-section.tsx     # Contact CTA with email link
    project-card.tsx        # Card displaying a single GitHub repo (2-col or plain list)
    contributions-section.tsx # OSS contributions section
    last-updated.tsx        # Git commit hash link in footer
    social-links.tsx        # Reusable social icon links
    theme-provider.tsx      # Blocking <script> to prevent FOUC on theme load
    theme-toggle.tsx        # Dark/light toggle button with localStorage persistence
    blog/
      blog-article.tsx      # Blog post renderer (MDXRemote + rehype-pretty-code + remark-gfm)
      blog-post-card.tsx    # Card for blog listing (date, reading time, title, description)
      blog-post-list.tsx    # List of blog post cards with empty state
      mdx-components.tsx    # MDX component overrides (currently empty — .prose handles styling)
    ui/
      icon.tsx              # Lucide icon wrapper
      list-item.tsx         # Generic list item (link or internal)
      page-layout.tsx       # Page layout wrapper
      section.tsx           # Section with label + content grid
      stack.tsx             # HStack, VStack, ZStack layout primitives
      text.tsx              # Text component with muted variant
      text-link.tsx         # Styled link component
      badge.tsx             # Pill badge
      button.tsx            # Button component
      skeleton.tsx          # Loading skeleton placeholder
  lib/
    github.ts               # Fetches repos from GitHub API, sorts by stars, maps to Project type
    blog.ts                 # Reads MDX files from content/blog/, parses frontmatter + reading time
    git.ts                  # Gets latest git commit hash for footer
    contributions.ts        # Fetches OSS contributions
    rss.ts                  # Generates RSS XML from blog posts
scripts/
  generate-rss.mjs          # Post-build script: writes feed.xml to public/ and out/
  generate-sitemap.mjs      # Post-build script: writes sitemap.xml to public/ and out/
content/
  blog/                     # MDX blog posts with frontmatter
public/
  robots.txt                # Crawl rules
  feed.xml                  # RSS feed (generated at build time)
  sitemap.xml               # XML sitemap (generated at build time)
  projects/                 # Project icon images (yap.png, notebook-cli.png, portfolio.png)
  jaden.jpg                 # Avatar photo
  resume.pdf                # Resume
docs/
  design-system.md          # Full design system reference
```

## Conventions

### Styling

- Native CSS only. All design tokens live in `src/app/globals.css` as CSS custom properties (`:root` and `.dark`).
- No Tailwind, no CSS-in-JS. Classes are defined in globals.css and referenced directly.
- Semantic CSS custom properties (`--bg`, `--fg`, `--fg-muted`, `--border`, `--accent`, `--mark-bg`) remap under the `.dark` class on `<html>`.

### Components

- All components use **named exports** (no default exports).
- File naming: **kebab-case** for files, **PascalCase** for component names.
- UI primitives live in `src/components/ui/`. Page-level sections live in `src/components/`.

### Dark Mode

- Theme is stored in `localStorage` under the key `"theme"` (`"dark"` or `"light"`).
- A blocking inline script in `<head>` (`ThemeScript`) reads the stored preference (falling back to `prefers-color-scheme`) and sets the `.dark` class before first paint to prevent FOUC.
- The `ThemeToggle` component toggles the class and persists the choice.

### Blog Post Workflow

1. Create a new `.mdx` file in `content/blog/` (filename becomes the URL slug).
2. Add required frontmatter: `title`, `date` (YYYY-MM-DD), `description`. Optional: `tags`.
3. Write content using standard MDX. Code blocks get syntax highlighting automatically via `rehype-pretty-code`. Tables work via `remark-gfm`.
4. All blog styling is handled by `.prose` in globals.css. The `mdx-components.tsx` file is empty.
5. Run `npm run build` to generate the site, RSS feed, and sitemap. The blog post appears at `/blog/<slug>`.

### GitHub Projects

- `src/lib/github.ts` fetches public repos from the GitHub API (`/users/oobagi/repos`).
- Repos are filtered (no forks), sorted by stars then by last push date, and capped at 6.
- Projects with images (defined in `PROJECT_IMAGES` map) get a 2-column card layout with a grid-pattern image card.
- Language colors are mapped from a hardcoded lookup table in the same file.

### SEO

- Root layout defines `metadataBase` (jadenwatson.me), OpenGraph tags, Twitter card, and robots directives.
- Each blog post generates its own OG metadata via `generateMetadata`.
- `robots.txt`, `sitemap.xml`, and `feed.xml` are served from the public directory.
- RSS feed is linked via `alternates.types` in the root layout metadata.
