# Design System

> Monospace minimalism with oversized display text. Terminal/IDE aesthetic with bold typographic moments. Achromatic palette + blue accent. The site feels like a beautifully typeset plaintext document with dramatic headings.

## Font

**JetBrains Mono** is the only font. Everything is monospace. Loaded via `next/font/google` as `--font-jetbrains`, mapped to `--font-mono` in the theme.

## Typography

| Element | Size | Weight | Tracking | Color | Notes |
|---------|------|--------|----------|-------|-------|
| Hero name | 64px / 96px | 700 | -0.04em | `--fg` | THE signature. Oversized display. |
| Blog post title | 36px / 48px | 700 | -0.04em | `--fg` | Same dramatic style, slightly smaller |
| Section heading (h2) | 12px | 500 | 0.1em | `--fg-muted` | UPPERCASE, small label style |
| Subheading (h3) | 14px | 500 | 0 | `--fg` | Same size as body, heavier weight |
| Body text | 14px | 400 | 0 | `--fg` | Line-height 1.714 (24px) |
| Small/meta | 12px | 400 | 0 | `--fg-muted` | Dates, reading time, captions |
| Badge | 11px | 400 | 0.1em | `--fg-muted` | UPPERCASE, no background |

The dramatic contrast between the oversized hero name and the small, muted section labels defines the visual identity.

## Colors

Fully achromatic with one accent color for links and CTAs.

### Light

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#ffffff` | Page background |
| `--bg-secondary` | `#fafafa` | Code blocks, secondary surfaces |
| `--fg` | `#0a0a0a` | Primary text |
| `--fg-muted` | `#737373` | Secondary text, labels, meta |
| `--border` | `#e5e5e5` | Separators, borders |
| `--accent` | `#2563eb` | Links, CTAs, focus rings |
| `--mark-bg` | `#f5f5f5` | Inline code background |

### Dark

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0a0a0a` | Page background |
| `--bg-secondary` | `#141414` | Code blocks, secondary surfaces |
| `--fg` | `#fafafa` | Primary text |
| `--fg-muted` | `#a3a3a3` | Secondary text, labels, meta |
| `--border` | `#262626` | Separators, borders |
| `--accent` | `#3b82f6` | Links, CTAs, focus rings |
| `--mark-bg` | `#1a1a1a` | Inline code background |

## Layout

| Property | Value |
|----------|-------|
| Max content width | 560px |
| Body top padding | 80px (pt-20) |
| Body bottom padding | 40px (pb-10) |
| Horizontal padding | 20px (px-5) |
| Section spacing | 80px (mt-20) between sections |
| Header to content | 80px (mb-20) |

The narrow column (560px) with generous whitespace creates a reading-optimized experience.

## Components

### Header
Simple flex row: name link (left) + "Notes" link + theme toggle (right). 14px, no sticky, no blur, no mobile menu.

### Footer
Definition list (`<dl>`) with @handle-style social links. Year/copyright line below.

### Hero Section
Oversized name (64px mobile, 96px desktop) with tight tracking. Bio in muted 14px below. Blue pill CTA "View blog" + text social handle.

### Projects
Small uppercase "Projects" label. List of items separated by 1px border lines. Each item: name (linked, 14px medium), language badge (11px uppercase), star count, description.

### Blog Listing
Small uppercase "Notes" label. List of posts separated by borders. Title (14px medium) + date (12px muted).

### Blog Post
Oversized title (36-48px). Date + reading time (12px muted). Body in prose style. Back link at top.

### UI Primitives
- **Button**: Blue bg, white text, square (no border-radius), 14px
- **Badge**: Text-only, 11px uppercase letter-spaced, muted color
- **Section**: Margin-top wrapper (mt-20)
- **SectionHeading**: 12px uppercase muted letter-spaced label
- **Skeleton**: Pulsing with `--border` color
- **AnimateIn**: Intersection Observer fade-in-up

## Dark Mode

`.dark` class on `<html>` + localStorage. Blocking `<script>` in `<head>` prevents FOUC. Semantic CSS variables remap under `.dark`.

## Prose/Blog Styles

- Links: underlined with `--accent` color
- Code blocks: `--bg-secondary` background, no border, no border-radius
- Inline code: `--mark-bg` background, minimal padding
- Blockquotes: prefixed with right-pointing double angle (>>) character, no left border

## Accessibility

- All text meets WCAG AA contrast ratios
- `prefers-reduced-motion` disables all animations
- `focus-visible` ring on all interactive elements (2px solid, accent color)
- Semantic HTML throughout (nav, article, header, footer, dl)
