# Design Reference — alexcarpenter.me

> Scraped from https://alexcarpenter.me/ on 2026-03-29
>
> This directory captures the complete visual identity, layout architecture,
> and design philosophy — detailed enough to rebuild the site from scratch.

## Design Philosophy

### Aesthetic & Identity

Ultra-minimalist monospace terminal aesthetic. The entire site uses a single font (GeistMono) at a single size (12px) with a single weight (400). This is brutalist minimalism — not Swiss minimalism. It rejects type scale, color decoration, and visual spectacle in favor of structure, spacing, and content hierarchy. The site reads like a well-formatted plaintext document rendered in a browser.

### Core Principles

1. **Reduction as identity** — Strip away every decorative layer until only structure remains. The site communicates through what it does NOT have.
2. **Monospace as worldview** — Using monospace for everything says "I think in fixed-width. My portfolio is an extension of my working environment."
3. **Constraint as confidence** — 468px max-width on a wide screen leaves enormous negative space. Most designers fill space; this one surrenders it.
4. **Hierarchy through color, not scale** — Using only foreground vs. muted-foreground to establish importance requires exceptional content structure.
5. **Technical sophistication hidden in simplicity** — The site looks simple. The implementation uses cutting-edge CSS (OKLCH, interpolate-size, CSS nesting, variable fonts).

### Emotional Target

Quiet confidence. "I do not need to impress you with visual complexity. The work speaks." The narrow column creates intimacy — like reading someone's personal notes, not a marketing page. The testimonials with highlighted `<mark>` phrases inject human warmth into the technical austerity.

## Documents

| File | Scope |
|------|-------|
| [colors.md](colors.md) | Achromatic palette, semantic tokens, dark mode |
| [typography.md](typography.md) | GeistMono single-size system, hierarchy without scale |
| [spacing.md](spacing.md) | 4px base, 468px constraint, 20px vertical rhythm |
| [effects.md](effects.md) | Details blur transition, mark highlights, zero shadows |
| [layout.md](layout.md) | Single-column architecture, section patterns |
| [components.md](components.md) | Component inventory with structure and slots |
| [navigation.md](navigation.md) | No nav bar — CTAs and scroll as navigation |
| [media.md](media.md) | Project screenshots only, no decorative imagery |
| [identity.md](identity.md) | 10 distinctive decisions, rebuild notes |
