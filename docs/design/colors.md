# Colors

> Part of the [alexcarpenter.me design reference](overview.md)

## Semantic Tokens

| Token | Light Mode | Dark Mode | Role |
|-------|-----------|-----------|------|
| `--background` | `white` (#ffffff) | `neutral-950` (~#0a0a0a) | Page background |
| `--foreground` | `neutral-950` (~#0a0a0a) | `neutral-50` (~#fafafa) | Primary text, headings |
| `--muted` | `neutral-200` (~#e5e5e5) | `neutral-700` (~#404040) | Mark/highlight backgrounds |
| `--muted-foreground` | `neutral-500` (~#737373) | `neutral-400` (~#a3a3a3) | Secondary text, body copy |
| `--separator` | `neutral-200` (~#e5e5e5) | `neutral-800` (~#262626) | Divider lines |
| `--pre-background` | `white` | `neutral-950` | Code block backgrounds |

## Accent Colors (Semantic Only)

| Color | OKLCH Value | Approx Hex | Purpose |
|-------|-------------|-----------|---------|
| Blue-600 | `oklch(54.6% .245 262.9)` | ~#2563eb | Primary action (button bg), links |
| Blue-500 | `oklch(62.3% .214 259.8)` | ~#3b82f6 | Link hover states |
| Green-400 | `oklch(79.2% .209 151.7)` | ~#4ade80 | Status: active/available |
| Red-600 | `oklch(57.7% .245 27.3)` | ~#dc2626 | Status: error |
| Yellow-500 | `oklch(79.5% .184 86.0)` | ~#eab308 | Status: warning |
| Purple-600 | `oklch(55.5% .249 302.4)` | ~#9333ea | Category accent |

## Mark/Highlight

| Property | Value |
|----------|-------|
| Background | `oklch(0.922 0 0)` (~#e5e5e5, achromatic) |
| Text color | foreground (promoted from muted) |
| Padding | `0 4px` |
| Border radius | `4px` |

## Color Strategy

The base palette is **achromatic** — every chroma value is 0. Foreground and background are pure luminance with zero color. The OKLCH color space makes this explicit: `oklch(0.145 0 0)` is 14.5% luminance, zero chroma, zero hue.

Color is applied only at the semantic level — one blue action button, status indicators for GitHub labels. This creates a terminal/IDE aesthetic where color means something specific rather than decoration.

Dark mode uses `prefers-color-scheme` media query — no toggle, no JavaScript, no stored preference. It trusts the OS setting. `color-scheme: dark` flips native controls automatically.

## Contrast

| Pair | Ratio | Context |
|------|-------|---------|
| Foreground on background (light) | ~19:1 | Primary text — exceeds AAA |
| Muted-foreground on background (light) | ~4.6:1 | Secondary text — passes AA |
| Blue-600 on white | ~4.6:1 | CTA buttons — passes AA for large text |
| White on blue-600 | ~4.6:1 | Button text — passes AA |
