# Typography

> Part of the [alexcarpenter.me design reference](overview.md)

## Font Stack

| Role | Family | Source | Weight Range | Fallbacks |
|------|--------|--------|-------------|-----------|
| Everything | **GeistMono** | Self-hosted woff2 (variable) | 400-500 | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` |

One font. One size. One weight. No sans-serif. No display font. No heading font. GeistMono is Vercel's monospace typeface — choosing it signals alignment with the modern frontend ecosystem.

## Type Scale

There is no type scale. This is the defining typographic decision.

| Element | Font Size | Font Weight | Line Height | Color |
|---------|-----------|-------------|-------------|-------|
| h1 | 12px | 400 | 20px | foreground |
| h2 | 12px | 400 | 20px | muted-foreground |
| h3 | 12px | 400 | 20px | foreground |
| p | 12px | 400 | 20px | muted-foreground |
| a | 12px | 400 | 20px | varies (blue for CTAs) |
| mark | 12px | 400 | 20px | foreground (promoted) |
| code | 12px | 400 | 20px | inherits |

Every element is typographically identical in size and weight. Hierarchy is established through:

1. **Color** — foreground (near-black) vs muted-foreground (gray). Two tiers only.
2. **Spatial position** — headings come first; context creates importance.
3. **Content structure** — readers parse hierarchy from document flow, not visual weight.
4. **Semantic HTML** — h1/h2/h3 exist for accessibility/SEO even though they look identical.

## Line Height Ratio

12px at 20px line-height = **1.667 ratio**. This is unusually generous for body text, compensating for monospace's inherent density — every character occupies the same horizontal space, so generous vertical rhythm prevents the page from feeling like a wall of code.

## Reading Measure

At 12px monospace in a 468px column: **~55-60 characters per line**. This is within the optimal readability range (45-75 characters) recommended by typographic research.

## Font Loading

```css
@font-face {
  font-family: GeistMono;
  src: url("/fonts/GeistMono[wght].woff2") format("woff2");
  font-weight: 400 500;
  font-style: normal;
  font-display: swap;
}
```

Variable font format with a narrow weight range (400-500) means a small file. `font-display: swap` ensures text is visible immediately with system fallback, then swaps when GeistMono loads.

## What This Achieves

The flat typography communicates: "I am an engineer. I communicate through structure, not ornamentation." It signals deep comfort with constraint — the entire visual system is built from 6 tokens. The site reads like a terminal, a code editor, or a man page rendered with care.
