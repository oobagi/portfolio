# Layout Architecture

> Part of the [alexcarpenter.me design reference](overview.md)

## Page Structure

### Homepage (top to bottom)

| Order | Section | Purpose | Visual Weight |
|-------|---------|---------|--------------|
| 1 | Skip link | Accessibility (hidden) | None |
| 2 | Header | Identity — name, role, location | Light |
| 3 | Intro | Philosophy/voice — bio paragraphs + "View notes" CTA | Medium |
| 4 | Projects | Proof of craft — image cards | Heavy (images) |
| 5 | Experience | Career timeline — collapsible `<details>` entries | Variable (user controls) |
| 6 | Recommendations | Social proof — testimonials with `<mark>` | Medium |
| 7 | OSS Contributions | Community signal — list of 17 PRs | Dense |
| 8 | Footer | Contact + version metadata | Light |

The flow is a **persuasion funnel**: identity → philosophy → proof → endorsement → community → contact.

### Notes Page

Header → Intro heading → Article list (date, title, domain, optional blockquote) → Pagination ("1 / 5" + Next) → RSS link → Footer.

Some notes expand inline via `<details>` with code blocks and prose.

## Grid System

**There is none.** This is a deliberate architectural choice.

The entire site is block-level elements flowing vertically in a single column:

```css
body {
  padding: 80px 0;
}

[content-wrapper] {
  max-width: 468px;
  padding-inline: 16px;
  margin-inline: auto;
}
```

No CSS Grid. No Flexbox at the page level. Spacing via unidirectional `margin-top` only.

## Responsive Strategy

**There are no breakpoints.** At 468px max-width, the content is already narrower than most phone viewports. The site is mobile-first by being mobile-only in layout. On wider screens, content centers with whitespace flanking.

This eliminates: media queries, responsive grid configs, component variants, image srcset complexity.

## Section Patterns

### Header/Banner
- **Layout:** Block stack — h1 link, role paragraph, location paragraph
- **Background:** Transparent
- **Padding:** 16px horizontal
- **Unique:** h1 is same size as everything else. No logo, no nav items.

### Intro
- **Layout:** h2-as-prose (heading IS the content, not a label), paragraphs, CTA link
- **Background:** Transparent
- **Key pattern:** Collapses heading-then-body into a single element

### Projects
- **Layout:** Vertical list of cards (image → title → description)
- **Background:** Transparent
- **Images:** Full column width (~468px). No grid — one card per row.

### Experience
- **Layout:** List of `<details>` elements with summary (logo + text) and hidden body
- **Progressive disclosure:** User controls density. Default is compact.
- **Ends with:** "Connect on LinkedIn" CTA

### Recommendations
- **Layout:** List of blockquotes with `<mark>` highlights, author name, role
- **Key pattern:** Highlighted phrases are editorial — curated emphasis

### OSS Contributions
- **Layout:** Flat list of 17 entries (icon + repo link + description)
- **Quantity is the message:** No grouping, no categorization
- **Ends with:** "Follow on GitHub" CTA

### Footer
- **Layout:** Definition list (`<dl>`) of social links, version metadata
- **Key pattern:** `<dl>` is semantically precise — platform name as term, URL as definition

## Whitespace Rhythm

Generous vertical gaps between sections. Whitespace does the work a large heading normally does. The rhythm: dense text block → breath → dense text block → breath. Content type alternation (text, images, interactive, quotes, links) creates varied texture despite flat typography.
