# Visual Effects

> Part of the [alexcarpenter.me design reference](overview.md)

## Borders & Radii

| Element | Border Radius | Border |
|---------|--------------|--------|
| `<mark>` highlights | 4px | None |
| CTA buttons | 0px (square) | None |
| Everything else | 0px | None |

Separators use `--separator` token color. No box borders on cards or sections.

## Shadows

**None.** Zero box-shadows anywhere on the site. The design is flat, paper-like, single-plane. No depth, no elevation, no layering illusion.

## The Details/Accordion Transition

The single most expressive interaction on the site:

```css
details {
  --duration: .2s;
  interpolate-size: allow-keywords;

  &::details-content {
    opacity: 0;
    block-size: 0px;
    overflow-y: clip;
    filter: blur(2px);
    transition:
      content-visibility var(--duration) allow-discrete,
      opacity var(--duration),
      block-size var(--duration),
      filter var(--duration);
  }

  &[open]::details-content {
    opacity: 1;
    block-size: auto;
    filter: blur(0px);
  }
}
```

| Property | Closed | Open | Duration |
|----------|--------|------|----------|
| opacity | 0 | 1 | 0.2s |
| block-size | 0px | auto | 0.2s |
| filter: blur | 2px | 0px | 0.2s |

The blur transition is a focus-pull effect — content sharpens into existence, like adjusting a camera lens. `interpolate-size: allow-keywords` is cutting-edge CSS that enables animating from `0px` to `auto` height without JavaScript.

## Mark/Highlight Treatment

```css
mark {
  background: oklch(0.922 0 0);  /* achromatic light gray */
  padding: 0 4px;
  border-radius: 4px;
  color: var(--foreground);      /* promoted from muted */
}
```

Highlighted text gets a subtle pill-shaped background. The highlight is achromatic (gray, not yellow), maintaining grayscale discipline. Text inside `<mark>` is promoted to foreground color.

## Blockquote Treatment

```css
.prose blockquote {
  display: flex;
  column-gap: var(--spacing);
}
.prose blockquote::before {
  content: "»";
}
```

No left border, no italics, no background color. A guillemet character prepended via CSS — typographic punctuation as structural indicator.

## CTA Button Style

| Property | Value |
|----------|-------|
| Background | blue-600 `oklch(0.546 0.245 262.881)` |
| Text color | white |
| Padding | 6px 12px |
| Border radius | 0px |
| Font size | 12px (same as everything) |

The only element with a filled background. Against the achromatic palette, it commands attention through color contrast alone.

## Transitions & Animations

Only the `<details>` blur transition. No scroll-triggered animations, no page transitions, no hover transforms. The site's sole animation is the most technically sophisticated one possible — using the newest CSS features.

## Decorative Elements

None. No gradients, overlays, backdrop filters, background patterns, or decorative shapes.
