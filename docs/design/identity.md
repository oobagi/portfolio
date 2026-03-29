# What Makes This Site Unique

> Part of the [alexcarpenter.me design reference](overview.md)

## Distinctive Design Decisions

### 1. Absolute typographic flatness
No size hierarchy. h1 through p are all 12px/400 weight. This is genuinely rare — most "minimal" portfolios still use size for headings.

### 2. The 468px constraint
Content width is aggressively narrow — closer to a mobile viewport rendered on desktop. Creates intimate reading, like a letter or code file.

### 3. `<details>` with blur+opacity transitions
Native HTML accordion with cutting-edge CSS (`interpolate-size: allow-keywords`). The blur is a focus-pull effect — content sharpens into existence.

### 4. `<mark>` in testimonials
Semantically meaningful highlighting of key phrases in quotes. Achromatic gray background, not yellow. Editorial curation as design.

### 5. Version number + commit hash in footer
Reframes the portfolio from "website" to "shipped software product" with a release history.

### 6. Blue CTA buttons as sole color
The only filled-background elements on an achromatic page. The constraint makes them dramatically effective.

### 7. Color as primary hierarchy tool
Two tones (foreground + muted) doing the work of an entire type scale.

### 8. Dark mode via OS only
`prefers-color-scheme` with no toggle. Trusts the platform convention.

### 9. Project screenshots as only imagery
No headshot, no illustrations. "Judge me by what I built."

### 10. No navigation bar
One link in the header (site title). Section CTAs replace global nav.

## Unconventional Choices That Work

- **12px body text** — below most readability guidelines, but the generous 1.667 line-height ratio compensates
- **No heading size differentiation** — forces content to do the hierarchy work
- **Single monospace font for everything** — turns the portfolio into a terminal/IDE experience
- **80px body padding** — enormous breathing room before any content appears

## Micro-Interactions

- **Details blur transition** — the sole animation, using the newest CSS features
- **CTA hover states** — likely background color shift or opacity change; outsized weight on a restrained site
- **Link styling** — differentiated by color rather than underline to keep monospace text clean

## Visual Pacing & Flow

Spacing as punctuation. Content type alternation (text → images → interactive → quotes → links) creates varied texture despite flat typography. The user controls density in the Experience section via `<details>` expansion.

---

## Rebuild Notes

### Priority Order

1. **Font** — GeistMono self-hosted, 12px/20px everywhere
2. **Color tokens** — 6 semantic variables, achromatic base, one blue accent
3. **Layout** — 468px max-width, 80px body padding, 16px content padding
4. **Spacing** — 20px prose rhythm, margin-top only (unidirectional)
5. **Components** — native HTML elements (`<details>`, `<mark>`, `<dl>`)
6. **Effects** — details blur transition, mark highlight
7. **Dark mode** — `prefers-color-scheme` media query

### Critical Details

- GeistMono weight range is 400-500 only — not 100-900
- The h2 in the intro section IS the content, not a label — the bio text lives inside the heading
- `<mark>` background is achromatic gray, NOT yellow
- Blockquote prefix is `»` (guillemet), not `>` or a left border
- Button border-radius is 0px (square), not rounded
- `interpolate-size: allow-keywords` is required for the details height animation
- The `filter: blur(2px)` on closed details content is what creates the focus-pull effect

### Common Pitfalls

- Using different font sizes for headings — the flatness IS the design
- Making the column wider than 468px — the narrowness IS the identity
- Adding shadows, gradients, or depth — the single-plane flatness is intentional
- Adding a navigation bar — the absence is a deliberate architectural choice
- Using yellow for `<mark>` highlights — achromatic gray maintains the palette discipline
- Adding decorative images — only project screenshots and company logos
