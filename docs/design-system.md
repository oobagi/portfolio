# Design System -- Jaden Watson Portfolio

Visual identity for a developer who builds AI tools and macOS utilities. The palette draws from terminal aesthetics and warm amber tones -- technical precision with human warmth. Dark mode is the primary experience.

---

## Color Philosophy

The identity avoids the overused blue-purple spectrum of generic developer portfolios. Instead, it centers on **amber/warm gold** as the primary accent -- evoking the warm glow of a terminal cursor, code editor highlights, and the golden hour of productive focus. The secondary palette uses **sage green** for a grounded, natural counterpoint. The result feels like a well-crafted dev tool: precise, warm, distinctive.

---

## 1. Color Palette

### Brand Colors

| Role       | Token             | Light Mode  | Dark Mode   | Usage                                        |
|------------|-------------------|-------------|-------------|----------------------------------------------|
| Primary    | `--color-primary` | `#B45309`   | `#F59E0B`   | CTAs, links, active states, brand accent     |
| Secondary  | `--color-secondary` | `#4D7C0F` | `#84CC16`   | Tags, badges, secondary actions              |
| Accent     | `--color-accent`  | `#9333EA`   | `#A855F7`   | Highlights, code decorations, special states |

### Primary Scale (Amber)

| Step | Hex       | Usage                            |
|------|-----------|----------------------------------|
| 50   | `#FFFBEB` | Tinted backgrounds (light mode)  |
| 100  | `#FEF3C7` | Hover backgrounds (light mode)   |
| 200  | `#FDE68A` | Borders, dividers (light mode)   |
| 300  | `#FCD34D` | Icons, decorative (light mode)   |
| 400  | `#FBBF24` | Strong accents                   |
| 500  | `#F59E0B` | Primary dark mode accent         |
| 600  | `#D97706` | Primary mid-tone                 |
| 700  | `#B45309` | Primary light mode accent        |
| 800  | `#92400E` | Dark accents                     |
| 900  | `#78350F` | Deepest accent tone              |
| 950  | `#451A03` | Near-black amber                 |

### Secondary Scale (Lime/Sage)

| Step | Hex       | Usage                            |
|------|-----------|----------------------------------|
| 50   | `#F7FEE7` | Tinted backgrounds (light mode)  |
| 100  | `#ECFCCB` | Hover backgrounds                |
| 200  | `#D9F99D` | Borders                          |
| 300  | `#BEF264` | Decorative                       |
| 400  | `#A3E635` | Strong accents                   |
| 500  | `#84CC16` | Secondary dark mode accent       |
| 600  | `#65A30D` | Secondary mid-tone               |
| 700  | `#4D7C0F` | Secondary light mode accent      |
| 800  | `#3F6212` | Dark tones                       |
| 900  | `#365314` | Deepest green                    |
| 950  | `#1A2E05` | Near-black green                 |

### Accent Scale (Purple)

| Step | Hex       | Usage                            |
|------|-----------|----------------------------------|
| 50   | `#FAF5FF` | Tinted backgrounds               |
| 100  | `#F3E8FF` | Hover backgrounds                |
| 200  | `#E9D5FF` | Borders                          |
| 300  | `#D8B4FE` | Decorative                       |
| 400  | `#C084FC` | Mid accents                      |
| 500  | `#A855F7` | Accent dark mode                 |
| 600  | `#9333EA` | Accent light mode                |
| 700  | `#7E22CE` | Deep accent                      |
| 800  | `#6B21A8` | Dark accent                      |
| 900  | `#581C87` | Deepest                          |
| 950  | `#3B0764` | Near-black purple                |

### Semantic Colors

| Role    | Token              | Light Mode  | Dark Mode   |
|---------|--------------------|-------------|-------------|
| Success | `--color-success`  | `#16A34A`   | `#4ADE80`   |
| Warning | `--color-warning`  | `#CA8A04`   | `#FACC15`   |
| Error   | `--color-error`    | `#DC2626`   | `#F87171`   |
| Info    | `--color-info`     | `#2563EB`   | `#60A5FA`   |

### Neutral Scale (Warm Gray -- tinted slightly warm to match amber identity)

These are the backbone colors. Note the slight warm undertone that differentiates from cold generic grays.

| Step | Hex       | Dark Mode Usage                  | Light Mode Usage                 |
|------|-----------|----------------------------------|----------------------------------|
| 50   | `#FAFAF9` | --                               | Page background                  |
| 100  | `#F5F5F4` | --                               | Surface / card background        |
| 200  | `#E7E5E4` | --                               | Borders, dividers                |
| 300  | `#D6D3D1` | --                               | Disabled text, placeholders      |
| 400  | `#A8A29E` | Muted text, placeholders         | --                               |
| 500  | `#78716C` | Secondary text                   | Secondary text                   |
| 600  | `#57534E` | Borders (dark)                   | Body text                        |
| 700  | `#44403C` | Elevated surface borders         | Headings                         |
| 800  | `#292524` | Elevated surface / cards         | --                               |
| 900  | `#1C1917` | Primary surface                  | --                               |
| 950  | `#0C0A09` | Page background (dark)           | --                               |

### Dark Mode Specifics

| Token                  | Value     | Description                        |
|------------------------|-----------|------------------------------------|
| `--bg-primary`         | `#0C0A09` | Main page background               |
| `--bg-secondary`       | `#1C1917` | Cards, sections, nav               |
| `--bg-elevated`        | `#292524` | Modals, dropdowns, tooltips        |
| `--bg-code`            | `#1C1917` | Code blocks                        |
| `--border-primary`     | `#292524` | Default borders                    |
| `--border-secondary`   | `#44403C` | Emphasized borders                 |
| `--text-primary`       | `#FAFAF9` | Headings, primary content          |
| `--text-secondary`     | `#A8A29E` | Descriptions, metadata             |
| `--text-muted`         | `#78716C` | Timestamps, captions               |

### Light Mode Specifics

| Token                  | Value     | Description                        |
|------------------------|-----------|------------------------------------|
| `--bg-primary`         | `#FAFAF9` | Main page background               |
| `--bg-secondary`       | `#F5F5F4` | Cards, sections, nav               |
| `--bg-elevated`        | `#FFFFFF` | Modals, dropdowns, tooltips        |
| `--bg-code`            | `#F5F5F4` | Code blocks                        |
| `--border-primary`     | `#E7E5E4` | Default borders                    |
| `--border-secondary`   | `#D6D3D1` | Emphasized borders                 |
| `--text-primary`       | `#1C1917` | Headings, primary content          |
| `--text-secondary`     | `#57534E` | Descriptions, metadata             |
| `--text-muted`         | `#78716C` | Timestamps, captions               |

---

## 2. Typography

### Font Families

| Role     | Font                  | Fallback Stack                                      | Rationale                                              |
|----------|-----------------------|-----------------------------------------------------|--------------------------------------------------------|
| Heading  | **Inter**             | `Inter, ui-sans-serif, system-ui, sans-serif`       | Geometric, technical, excellent weight range            |
| Body     | **Inter**             | `Inter, ui-sans-serif, system-ui, sans-serif`       | Unified brand voice, optimized for screen reading      |
| Mono     | **JetBrains Mono**    | `"JetBrains Mono", ui-monospace, "Fira Code", monospace` | Developer-grade mono with ligatures, distinctive       |

Inter is chosen over the generic system stack for its precise geometry and excellent variable font support. JetBrains Mono signals "developer" without being cliche (vs. Fira Code) and supports ligatures for code display.

### Type Scale

| Token  | Size (rem) | Size (px) | Line Height | Letter Spacing | Usage                     |
|--------|------------|-----------|-------------|----------------|---------------------------|
| `xs`   | 0.75       | 12        | 1.5         | 0.025em        | Captions, fine print       |
| `sm`   | 0.875      | 14        | 1.5         | 0.015em        | Metadata, timestamps       |
| `base` | 1.0        | 16        | 1.625       | 0              | Body text                  |
| `lg`   | 1.125      | 18        | 1.6         | -0.01em        | Lead paragraphs            |
| `xl`   | 1.25       | 20        | 1.5         | -0.015em       | Section subheadings        |
| `2xl`  | 1.5        | 24        | 1.35        | -0.02em        | Section headings           |
| `3xl`  | 1.875      | 30        | 1.25        | -0.025em       | Page titles                |
| `4xl`  | 2.25       | 36        | 1.2         | -0.03em        | Hero heading               |
| `5xl`  | 3.0        | 48        | 1.1         | -0.035em       | Hero display (mobile)      |
| `6xl`  | 3.75       | 60        | 1.05        | -0.04em        | Hero display (desktop)     |

### Weight Scale

| Token      | Value | Usage                                  |
|------------|-------|----------------------------------------|
| `light`    | 300   | Decorative large text only             |
| `normal`   | 400   | Body text, descriptions                |
| `medium`   | 500   | Navigation, labels, metadata emphasis  |
| `semibold` | 600   | Subheadings, card titles               |
| `bold`     | 700   | Page headings, hero text               |

### Typography Rules

- Body text is always `base` (16px) at `normal` (400) weight with `1.625` line height for comfortable reading
- Headings use tighter letter spacing as size increases (negative tracking prevents large text from looking loose)
- Mono font is used for: code blocks, inline code, file paths, terminal output, and GitHub usernames
- Maximum prose width: 65ch (for blog content readability)
- No font size below 12px (accessibility minimum)

---

## 3. Spacing Scale

Base unit: **4px** (0.25rem)

| Token  | Multiplier | Value (px) | Value (rem) | Usage                                |
|--------|------------|------------|-------------|--------------------------------------|
| `0.5`  | 0.5x       | 2          | 0.125       | Hairline gaps, icon-to-text micro    |
| `1`    | 1x         | 4          | 0.25        | Tight inline spacing                 |
| `1.5`  | 1.5x       | 6          | 0.375       | Tag padding, compact items           |
| `2`    | 2x         | 8          | 0.5         | Button padding (y), icon gaps        |
| `3`    | 3x         | 12         | 0.75        | Button padding (x), input padding    |
| `4`    | 4x         | 16         | 1.0         | Card padding (compact), list gaps    |
| `5`    | 5x         | 20         | 1.25        | Standard element gap                 |
| `6`    | 6x         | 24         | 1.5         | Card padding (standard), nav gaps    |
| `8`    | 8x         | 32         | 2.0         | Section padding (y), card gaps       |
| `10`   | 10x        | 40         | 2.5         | Large component spacing              |
| `12`   | 12x        | 48         | 3.0         | Section gaps                         |
| `16`   | 16x        | 64         | 4.0         | Major section padding                |
| `20`   | 20x        | 80         | 5.0         | Hero section padding                 |
| `24`   | 24x        | 96         | 6.0         | Page-level top/bottom margins        |

### Layout Breakpoints

| Token | Value   | Usage                           |
|-------|---------|--------------------------------|
| `sm`  | 640px   | Mobile landscape               |
| `md`  | 768px   | Tablet                         |
| `lg`  | 1024px  | Small desktop                  |
| `xl`  | 1280px  | Standard desktop               |
| `2xl` | 1536px  | Large desktop                  |

### Container Widths

| Context        | Max Width | Usage                          |
|----------------|-----------|--------------------------------|
| Prose/Blog     | 680px     | Article content (approx. 65ch) |
| Content        | 1024px    | Project grid, main content     |
| Page           | 1280px    | Overall page container         |

---

## 4. Border Radii

| Token   | Value (px) | Value (rem) | Usage                                    |
|---------|------------|-------------|------------------------------------------|
| `sm`    | 4          | 0.25        | Tags, badges, small chips                |
| `md`    | 8          | 0.5         | Buttons, inputs, small cards             |
| `lg`    | 12         | 0.75        | Cards, code blocks, images               |
| `xl`    | 16         | 1.0         | Large cards, modals, hero elements       |
| `2xl`   | 24         | 1.5         | Feature cards, prominent containers      |
| `full`  | 9999px     | 9999px      | Pills, avatars, circular elements        |

---

## 5. Shadow Scale

Shadows are subtle and warm-tinted in dark mode (not pure black), invisible-border style in dark mode (border-based elevation instead of shadow).

### Light Mode Shadows

| Token | Value                                                              | Usage                      |
|-------|--------------------------------------------------------------------|----------------------------|
| `sm`  | `0 1px 2px 0 rgba(28, 25, 23, 0.05)`                              | Subtle lift (tags, chips)  |
| `md`  | `0 4px 6px -1px rgba(28, 25, 23, 0.07), 0 2px 4px -2px rgba(28, 25, 23, 0.05)` | Cards, buttons on hover   |
| `lg`  | `0 10px 15px -3px rgba(28, 25, 23, 0.08), 0 4px 6px -4px rgba(28, 25, 23, 0.04)` | Dropdowns, elevated cards |
| `xl`  | `0 20px 25px -5px rgba(28, 25, 23, 0.1), 0 8px 10px -6px rgba(28, 25, 23, 0.05)` | Modals, hero cards        |

### Dark Mode Shadows

In dark mode, elevation is primarily communicated through background color steps (950 -> 900 -> 800) and border lightness, not box-shadow. Shadows are used sparingly:

| Token | Value                                                              | Usage                      |
|-------|--------------------------------------------------------------------|----------------------------|
| `sm`  | `0 1px 2px 0 rgba(0, 0, 0, 0.3)`                                  | Subtle depth               |
| `md`  | `0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)` | Cards                     |
| `lg`  | `0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.35)` | Dropdowns                 |
| `xl`  | `0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.4)` | Modals                    |

### Glow Effect (Dark Mode Only)

For the primary accent, a warm glow effect for interactive elements:

| Token         | Value                                        | Usage                  |
|---------------|----------------------------------------------|------------------------|
| `glow-sm`     | `0 0 8px rgba(245, 158, 11, 0.15)`           | Subtle accent glow     |
| `glow-md`     | `0 0 16px rgba(245, 158, 11, 0.2)`           | Button hover glow      |
| `glow-lg`     | `0 0 32px rgba(245, 158, 11, 0.25)`          | Feature highlight glow |

---

## 6. Transitions & Animation

### Duration Scale

| Token    | Value  | Usage                                    |
|----------|--------|------------------------------------------|
| `fast`   | 100ms  | Color changes, opacity toggles           |
| `normal` | 200ms  | Hover states, button interactions        |
| `slow`   | 350ms  | Drawer/panel transitions, page elements  |
| `slower` | 500ms  | Page transitions, hero animations        |

### Easing Functions

| Token       | Value                          | Usage                           |
|-------------|--------------------------------|---------------------------------|
| `ease-out`  | `cubic-bezier(0.16, 1, 0.3, 1)` | Enter animations, hover expand |
| `ease-in`   | `cubic-bezier(0.7, 0, 0.84, 0)` | Exit animations                |
| `ease-both` | `cubic-bezier(0.87, 0, 0.13, 1)` | Symmetrical transitions       |
| `spring`    | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bouncy micro-interactions  |

---

## 7. Code Block Theme

Syntax highlighting colors (for rehype-pretty-code / Shiki). Based on the warm palette:

| Element          | Dark Mode   | Light Mode  |
|------------------|-------------|-------------|
| Background       | `#1C1917`   | `#F5F5F4`   |
| Foreground       | `#E7E5E4`   | `#44403C`   |
| Comment          | `#78716C`   | `#A8A29E`   |
| Keyword          | `#F59E0B`   | `#B45309`   |
| String           | `#84CC16`   | `#4D7C0F`   |
| Function         | `#60A5FA`   | `#2563EB`   |
| Variable         | `#FAFAF9`   | `#1C1917`   |
| Type             | `#A855F7`   | `#9333EA`   |
| Constant/Number  | `#FB923C`   | `#EA580C`   |
| Operator         | `#A8A29E`   | `#78716C`   |
| Line highlight   | `rgba(245, 158, 11, 0.08)` | `rgba(180, 83, 9, 0.06)` |

---

## 8. Design Principles

1. **Dark-first**: Design for dark mode, then adapt to light. Dark mode is the showcase.
2. **Warm technical**: Amber warmth over cold blue sterility. This portfolio belongs to a human, not a corporation.
3. **Content density**: Developer audiences expect information density. Do not over-space.
4. **Motion restraint**: Animations serve function (state feedback, spatial orientation), not decoration. Respect `prefers-reduced-motion`.
5. **Monospace moments**: Use the mono font strategically in UI (nav items, project tags, dates) to reinforce the developer identity without overdoing it.
6. **Contrast ratios**: All text meets WCAG AA minimum (4.5:1 for body, 3:1 for large text). Primary amber on dark backgrounds is verified at 7.2:1 contrast.
