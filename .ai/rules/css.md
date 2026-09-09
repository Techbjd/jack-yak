---
paths:
  - 'resources/css/**'
---

# Css

## Width tokens use --container-* namespace
Tailwind v4 max-width utilities read the --container-* theme namespace, NOT --max-w-*. Custom width tokens in app.css @theme must be named --container-<name> to produce max-w-<name> utilities (verified: --max-w-content generated nothing). Numbered widths like max-w-40/max-w-70 still come from the spacing scale and are unaffected.

## xs breakpoint for sub-402 layouts
Custom xs breakpoint at 25rem (400px) exists for sub-402 compact layouts: base classes target ≤399px viewports, xs: variants restore the 402 Figma spec (e.g. pl-6 xs:pl-8, grid-cols-3 xs:grid-cols-2). Use it when 320px safety and 402px fidelity conflict; never use arbitrary min-[400px] variants.
