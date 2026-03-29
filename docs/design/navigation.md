# Navigation

> Part of the [alexcarpenter.me design reference](overview.md)

## Header

**There is no navigation bar.** The header contains exactly one link: the site title linking to `/`. No menu items, no hamburger, no `<nav>` element.

This works because the site has two page types: homepage and paginated notes. With one navigation decision possible, a nav bar would be over-engineering.

## Primary Navigation Strategy

Navigation is achieved through embedded section CTAs:

| Section | CTA | Destination |
|---------|-----|-------------|
| Intro | "View notes →" | /notes |
| Experience | "Connect on LinkedIn →" | LinkedIn profile |
| OSS | "Follow on GitHub →" | GitHub profile |
| Notes page | "Subscribe via RSS →" | RSS feed |

Each CTA appears at the end of its relevant section, offering deeper engagement without breaking scroll flow.

## Footer Links

Social platforms via definition list: GitHub, Twitter, Bluesky, LinkedIn. Each formatted as `@handle` with external link icon.

## Notes Page Navigation

- **Pagination:** "1 / 5" with "Next →" link
- **RSS:** "Subscribe via RSS" — for the attention-averse: "don't come back, let the content come to you"

## Mobile Navigation

Not needed. At 468px max-width, the site is already narrower than phone viewports. Same experience everywhere. No responsive nav adaptation.

## Accessibility

- **Skip link:** "Skip to content" targeting `#main` — hidden until focused
- **Keyboard:** Native `<details>` elements are keyboard-accessible by default
- **Screen readers:** Semantic HTML (headings, landmarks) provides navigation structure even without visual hierarchy
