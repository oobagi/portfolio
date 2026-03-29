# Spacing & Rhythm

> Part of the [alexcarpenter.me design reference](overview.md)

## Base Unit

**4px** (inferred from Tailwind's `--spacing` variable).

## Core Measurements

| Element | Value | Multiple |
|---------|-------|----------|
| Body top/bottom padding | 80px | 20x |
| Content horizontal padding | 16px | 4x |
| Max content width | **468px** | 117x |
| Prose element spacing (`* + *`) | 20px (`spacing * 5`) | 5x |
| Line height | 20px | 5x |
| Button vertical padding | 6px | 1.5x |
| Button horizontal padding | 12px | 3x |
| Mark horizontal padding | 4px | 1x |
| Mark border-radius | 4px | 1x |

## Vertical Rhythm

The prose spacing (20px) equals the line height (20px). This means every block-level gap equals exactly one blank line:

```
line of text      -- 20px
line of text      -- 20px
                  -- 20px gap (margin-top)
line of text      -- 20px
```

The vertical rhythm is perfectly metronomic on a strict 20px grid.

## The 468px Constraint

| Site | Content Width | Comparison |
|------|--------------|------------|
| **alexcarpenter.me** | **468px** | — |
| Typical blog | 680-720px | 1.5x wider |
| Medium.com | 680px | 1.45x wider |
| GitHub README | 768px | 1.64x wider |
| Typical marketing site | 1200px | 2.56x wider |

On a 1440px monitor, content occupies ~32% of screen width. The rest is negative space.

### What it enables

- **Reading measure:** ~55-60 chars/line at 12px monospace — optimal range
- **Image simplicity:** Every image renders at a known fixed width. No responsive image calculus.
- **No layout decisions:** Never enough room for two columns. Everything is forced into a single stack.
- **Mobile parity:** Identical on phone and desktop. No "mobile version."
- **Performance:** No layout thrashing, no reflow, minimal CSS, small images.

## Section Spacing

Large vertical gaps between sections act as paragraph breaks. The whitespace does the work that a large heading normally does — it signals "new section starts here." The rhythm: dense text block → breath → dense text block → breath.

## Content Width Implementation

```css
[content wrapper] {
  max-width: 468px;
  padding-inline: 16px;
  margin-inline: auto;
}

body {
  padding-top: 80px;
  padding-bottom: 80px;
}
```

No media queries needed. One layout. Works everywhere.
