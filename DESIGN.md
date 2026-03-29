# Design System

> Warm, technical, distinctive. Amber/gold primary accent evoking terminal cursor warmth. Dark mode is the primary experience. Warm stone neutrals throughout — no cold grays.

## Colors

### Brand

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `primary` | `#B45309` (700) | `#F59E0B` (500) | CTAs, links, active states |
| `secondary` | `#4D7C0F` (700) | `#84CC16` (500) | Tags, badges, secondary actions |
| `accent` | `#9333EA` (600) | `#A855F7` (500) | Code types, highlights, special states |

### Semantic

| Token | Light | Dark |
|-------|-------|------|
| `success` | `#16A34A` | `#4ADE80` |
| `warning` | `#CA8A04` | `#FACC15` |
| `error` | `#DC2626` | `#F87171` |
| `info` | `#2563EB` | `#60A5FA` |

### Neutrals (Warm Stone)

| Step | Hex | Light Usage | Dark Usage |
|------|-----|-------------|------------|
| 50 | `#FAFAF9` | Page bg | Text primary |
| 100 | `#F5F5F4` | Cards, surfaces | — |
| 200 | `#E7E5E4` | Borders | — |
| 400 | `#A8A29E` | — | Text secondary |
| 500 | `#78716C` | Text secondary | Text muted |
| 600 | `#57534E` | Text secondary | — |
| 700 | `#44403C` | — | Borders (elevated) |
| 800 | `#292524` | — | Cards, elevated surfaces |
| 900 | `#1C1917` | — | Primary surface |
| 950 | `#0C0A09` | — | Page bg |

### Dark Mode: Semantic Surfaces

Dark mode uses background lightness steps for elevation (950 → 900 → 800), not box-shadows. The `.dark` class on `<html>` remaps CSS custom properties — no `dark:` prefix needed in markup.

| Token | Value | Purpose |
|-------|-------|---------|
| `--bg-primary` | `#0C0A09` | Page background |
| `--bg-secondary` | `#1C1917` | Cards, nav |
| `--bg-elevated` | `#292524` | Modals, dropdowns |

## Typography

**Inter** (variable, 100-900) for headings and body. **JetBrains Mono** (variable) for code, nav, tags, dates.

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `6xl` | 60px | 700 | 1.05 | Hero display (desktop) |
| `5xl` | 48px | 700 | 1.1 | Hero display (mobile) |
| `4xl` | 36px | 700 | 1.2 | Hero heading |
| `3xl` | 30px | 700 | 1.25 | Section headings |
| `2xl` | 24px | 600 | 1.35 | Section subtitles |
| `xl` | 20px | 600 | 1.5 | Card titles |
| `lg` | 18px | 400 | 1.6 | Lead paragraphs |
| `base` | 16px | 400 | 1.625 | Body text |
| `sm` | 14px | 500 | 1.5 | Metadata, timestamps |
| `xs` | 12px | 400 | 1.5 | Captions |

Headings use progressively tighter letter-spacing as size increases. Mono font used for: code, file paths, terminal output, nav items, project tags, dates.

## Spacing

Base unit: 4px. Uses Tailwind defaults plus custom section tokens:

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-section` | 80px (`py-20`) | Vertical gap between sections |
| `--spacing-section-md` | 112px (`py-28`) | Section gap at md+ |
| `--spacing-content` | 24px (`px-6`) | Horizontal page padding |

## Containers

| Context | Max Width | Usage |
|---------|-----------|-------|
| Prose | 680px | Blog content (~65ch) |
| Content | 1024px | Project grid, main content |
| Page | 1280px | Overall page container |

## Effects

### Shadows

Light mode: warm-tinted (`rgba(28, 25, 23, ...)`). Dark mode: deep black (`rgba(0, 0, 0, ...)`).

### Glow (Dark Mode)

Warm amber glow for interactive elements: `glow-sm`, `glow-md`, `glow-lg` using primary-500 (`#F59E0B`).

### Transitions

| Token | Duration | Usage |
|-------|----------|-------|
| `fast` | 100ms | Color, opacity |
| `normal` | 200ms | Hover states |
| `slow` | 350ms | Panels, theme toggle |
| `slower` | 500ms | Page transitions |

Easing: `ease-out` (enter), `ease-in` (exit), `ease-both` (symmetrical), `spring` (bouncy micro-interactions).

## Components

### Primitives

| Component | Variants | States |
|-----------|----------|--------|
| `Button` | primary, secondary, ghost × sm, md | default, hover, focus-visible, disabled |
| `IconButton` | — | default, hover, focus-visible |
| `Badge` | — | static |
| `Skeleton` | — | pulsing animation |
| `Avatar` | sm, lg | loaded, loading (skeleton), error (initials fallback) |
| `SectionHeading` | — | — |
| `ThemeToggle` | — | light-active, dark-active |

### Composites

| Component | States |
|-----------|--------|
| `ProjectCard` | default, hover (lift + border accent), loading (skeleton) |
| `ProjectGrid` | loading (6 skeletons), error (message + retry), empty, success |
| `BlogPostCard` | default, hover (title color shift) |
| `BlogPostList` | empty ("No posts yet"), populated |
| `HeroSection` | static |
| `ContactSection` | static |
| `SocialLinks` | static row of IconButtons |

### Layout

| Component | Purpose |
|-----------|---------|
| `Header` | Nav links + ThemeToggle |
| `Footer` | Copyright + social links |
| `Section` | Consistent section wrapper (`mx-auto max-w-5xl px-6 py-20 md:py-28`) |
| `PageLayout` | Header + main + Footer |
| `BlogPostLayout` | Prose constraint + optional ToC sidebar at lg+ |

## Layout Patterns

### Breakpoints

| Breakpoint | Width | Grid Columns |
|------------|-------|-------------|
| Default | <640px | 1 col |
| `md` | 768px | 2 col project grid |
| `lg` | 1024px | 3 col project grid, blog gets ToC sidebar |
| `xl` | 1280px | Max width, content centers |

### Page Templates

**Home:** `Hero → Projects → Contact` (single-page scroll, anchor nav)
**Blog Listing:** `SectionHeading → BlogPostList`
**Blog Post:** `BlogPostLayout (prose + ToC sidebar at lg+)`

## State Patterns

Use discriminated union: `{ status: 'loading' | 'error' | 'empty' | 'success' }`. Blog posts are static MDX (no runtime loading/error). Project grid fetches at build time but keeps loading/error states for dev experience.

## Dark Mode Architecture

Theme toggle uses `.dark` class on `<html>` + `localStorage`. Blocking `<script>` in `<head>` prevents flash. Semantic CSS variables remap under `.dark` — no `dark:` prefix needed in component markup.

## Accessibility

- All text meets WCAG AA (4.5:1 body, 3:1 large). Primary amber on dark bg: 7.2:1.
- `prefers-reduced-motion` disables all animations.
- `focus-visible` ring on all interactive elements (2px solid, primary color).
- No color as sole state indicator.

## References

- Full token reference: `docs/design-system.md`
- Implementation: `src/app/globals.css` (Tailwind v4 `@theme` + CSS custom properties)
