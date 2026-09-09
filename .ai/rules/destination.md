---
paths:
  - 'resources/js/pages/components/destination/**'
---

# Destination

## Destination page uses shared config + tokens, mobile-first
Destination page content lives in resources/js/config/destination.ts (cards, tabs). Shared text/button patterns go in resources/js/config/theme.ts, sizes/colors/radii in resources/css/app.css @theme. Components use Tailwind classes + cn() only, no px arbitrary values. Desktop views get added later in the same files via md:/lg: variants. Reuse shared Header/Footer untouched.

## Overlap heading via px-fixed absolute overlay
To run display text across the text/image boundary (e.g. white "Peaks" over the photo), keep the word inline in the heading for mobile, then pin it with xl:absolute + px-fixed offset (xl:left-130) relative to an xl:relative heading with xl:top-0 — anchoring to the heading (not the column) locks the same baseline even when the column content is vertically centered. Px-fixed (not %) keeps the heading visually continuous at every width; the 1440 Figma canvas is the anchor. Row breaks full-bleed via lg:-mx-24 to match section lg:px-24.
