# Design System

> Clean minimalism with Geist Sans. Achromatic palette + blue accent. Narrow column, generous whitespace. The site reads like well-typeset prose.

## Font

**Geist Sans** is the only font. Loaded via `geist/font/sans` as `--font-geist-sans`, mapped to `--font-sans` in the theme.

## Typography

| Element | Size | Weight | Color | Notes |
|---------|------|--------|-------|-------|
| Tagline / bio | 22px | 400 | `--fg` | Flowing prose with inline icons and links |
| Body text | 17px | 400 | `--fg` | Line-height 1.6 |
| List item title | 17px | 500 | `--fg` | Project names, post titles |
| Muted text | 17px | 400 | `--fg-muted` | Descriptions, secondary info |
| Blog h2 | 17px | 400 | `--fg` | Border-bottom separator |
| Blog h3 | 17px | 400 | `--fg` | No separator |
| Inline code | 0.9em | 400 | `--fg` | `--mark-bg` background, 4px border-radius |

## Colors

Fully achromatic with one accent color for links.

### Light

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#ffffff` | Page background |
| `--bg-secondary` | `#fafafa` | Code blocks, secondary surfaces |
| `--fg` | `#0a0a0a` | Primary text |
| `--fg-muted` | `#737373` | Secondary text, labels, meta |
| `--border` | `#e5e5e5` | Separators, borders |
| `--accent` | `#2563eb` | Links, focus rings |
| `--mark-bg` | `#f5f5f5` | Inline code background |

### Dark

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0a0a0a` | Page background |
| `--bg-secondary` | `#141414` | Code blocks, secondary surfaces |
| `--fg` | `#fafafa` | Primary text |
| `--fg-muted` | `#a3a3a3` | Secondary text, labels, meta |
| `--border` | `#262626` | Separators, borders |
| `--accent` | `#3b82f6` | Links, focus rings |
| `--mark-bg` | `#1a1a1a` | Inline code background |

## Layout

| Property | Value |
|----------|-------|
| Max content width | 650px |
| Site padding | 40px top, 24px sides |
| Header to content | 80px |
| Footer margin-top | 80px |

## Components

### Tagline Nav
Flowing prose paragraph: avatar + name link + description + icon/link pairs for projects, thoughts, resume. Icons and labels are wrapped in `nowrap` spans to prevent splitting across lines.

### Footer
Centered: theme toggle, GitHub + Email links, last commit hash link.

### Home Page
Single `<p>` in tagline style (22px). Bio text with indented paragraphs using `<br>` + `&nbsp;` indentation. "Let's talk" links to email.

### Projects Page
Projects with images: 2-column grid (1.5fr text / 1fr image card). Image cards have grid-pattern background, 20px border-radius, 1px border. Projects without images: plain list items. Responsive breakpoint at 550px stacks to 1 column.

### Blog
Post list with empty state text. Post page: title, date + reading time, `.prose` wrapper for MDX content.

### 404
Centered ASCII starfield with "404" in the middle. "Nothing here." below.

## Prose/Blog Styles

- Links: underlined with `--accent` color, 2px thickness
- Bold: font-weight 600
- Code blocks: `--bg-secondary` background, 12px border-radius, 1px border, 15px font size
- Inline code: `--mark-bg` background, 4px border-radius, 0.9em font size
- Blockquotes: 3px left border, `--fg-muted` color, 20px padding-left
- Tables: full width, `--border` bottom on cells, 2px border on thead
- Horizontal rules: 1px `--border`, 48px margin
- Headings (h2): border-bottom separator

## Underlines

All underlines sitewide are 2px thick, including hover states, tagline links, and prose links.

## Dark Mode

`.dark` class on `<html>` + localStorage. Blocking `<script>` in `<head>` prevents FOUC. Semantic CSS variables remap under `.dark`.

## Accessibility

- All text meets WCAG AA contrast ratios
- `focus-visible` ring on all interactive elements (2px solid, accent color)
- Semantic HTML throughout (nav, article, header, footer)
