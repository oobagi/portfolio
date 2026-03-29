# Component Inventory

> Part of the [alexcarpenter.me design reference](overview.md)

## SiteHeader

- **Content slots:** Name (linked to /), role description, location
- **Layout:** Block stack, 16px horizontal padding
- **Variants:** None. Static across all pages.
- **Note:** h1 is the only link. Role and location are plain text — no links to employer.

## IntroSection

- **Content slots:** h2-as-prose (the heading IS the bio text), CTA link
- **Layout:** Block flow
- **Key pattern:** h2 contains the content itself, not a section label
- **Variants:** None

## ProjectCard

- **Content slots:** Image (full width), title (linked, external), description
- **Layout:** Vertical stack — image on top
- **Variants:** None — all cards identical structure
- **Note:** Images are full column width (~468px)

## ExperienceEntry

- **Content slots:** Company logo (small), company name (h3), role title, date range, expandable body
- **Element:** Native `<details>` with CSS transitions
- **States:** Collapsed (default), expanded (blur/opacity transition)
- **Layout:** Summary uses flex for logo + text alignment
- **Note:** Zero JavaScript. Browser manages expand/collapse state.

## RecommendationCard

- **Content slots:** Quote text with `<mark>` highlights, author name, author role/company
- **Layout:** Block stack
- **CSS:** Blockquotes prefixed with `»` via `::before`
- **Key pattern:** `<mark>` elements are editorial — site author chose which phrases to emphasize

## OSSContributionEntry

- **Content slots:** GitHub icon (SVG), repo name (linked), PR description
- **Layout:** Inline icon + text
- **Variants:** None — all 17 entries identical
- **Note:** Quantity is the signal

## CTALink (Button)

- **Styling:** `background: blue-600`, `color: white`, `padding: 6px 12px`
- **Used in:** Intro ("View notes"), Experience ("Connect on LinkedIn"), OSS ("Follow on GitHub"), Notes ("Subscribe via RSS")
- **Note:** The only filled-background element. Highest contrast on any page.

## NoteEntry (Notes page)

- **Content slots:** Date (linked), title (linked with external icon), source domain, optional blockquote
- **Variants:** External link (with icon) vs inline note (with `<details>` expand)
- **Reuses:** Same `<details>` progressive disclosure pattern from ExperienceEntry

## FooterConnect

- **Content slots:** "Connect" heading, `<dl>` of platform/link pairs, version metadata (v6.0.0, last modified, commit hash)
- **Semantic choice:** `<dl>` for social links — platform name as `<dt>`, URL as `<dd>`
- **Note:** Version + commit hash treats the site as a software product
