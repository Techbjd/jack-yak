---
paths:
  - 'resources/js/config/**'
---

# Config

## Design Token System
Frontend-owned color system: static `COLORS` in `resources/js/config/colors.ts` + matching tokens in `resources/css/app.css` @theme (keep in sync). Use `theme.ts` for reusable Tailwind class strings (fontPrimary, sectionPadding, headingSection, bodyText, ctaMobile, ctaDesktop, imageRoundedLg).

## Frontend Color Tokens
1. **Source of Truth**: Hex values in `resources/js/config/colors.ts` (`COLORS`)
2. **Tailwind @theme**: Mirror tokens in `app.css` under `@theme {}` (`--color-*`)
3. **React Access**: `useColors()` hook (static context, no provider needed)
4. **CSS Custom Properties**: Set via `setRootColors()` in `app.tsx`

## Frontend Config Files - Reusable Constants
**resources/js/config/theme.ts** - All reusable Tailwind class patterns:
- `fontPrimary` = 'font-manrope' (single font reference)
- `sectionPadding` = 'py-16 md:py-24' (responsive padding)
- `sectionContainer` = centered max-w-container layout
- `headingSection` = bold uppercase heading
- `headingSubsection` = bold heading
- `bodyText` / `bodyTextSmall` = paragraph styles
- `ctaMobile` = orange pill button (mobile)
- `ctaDesktop` = teal pill button (desktop)
- `ctaIconCircle` = cream circle for icons
- `imagePlaceholder` / `imageRoundedLg` / `imageRoundedXl` = image styles
- `cardMobileImage` / `cardMobileContent` = card dimensions

**resources/js/config/colors.ts** - `COLORS` palette + useColors() hook + setRootColors()
**resources/js/config/navigation.ts** - desktopNav + mobileNav arrays

**Pattern**: Edit constant → all components using it update automatically
