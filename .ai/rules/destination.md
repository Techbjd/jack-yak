---
paths:
  - 'resources/js/pages/components/destination/**'
---

# Destination

## Destination page uses shared config + tokens, mobile-first
Destination page content lives in resources/js/config/destination.ts (cards, tabs). Shared text/button patterns go in resources/js/config/theme.ts, sizes/colors/radii in resources/css/app.css @theme. Components use Tailwind classes + cn() only, no px arbitrary values. Desktop views get added later in the same files via md:/lg: variants. Reuse shared Header/Footer untouched.
