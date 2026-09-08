---
paths:
  - 'resources/js/config/**'
---

# Config

## Design Token System
Multi-layer color system: PHP `config/colors.php` -> Inertia shared props -> React context (`useColors()`) -> CSS custom properties -> Tailwind `@theme` tokens. Use `theme.ts` for reusable Tailwind class strings (fontPrimary, sectionPadding, headingSection, bodyText, ctaMobile, ctaDesktop, imageRoundedLg).

## Premium Design Token System
Follow multi-layer design token architecture:
1. **PHP Source of Truth**: Define hex values in `config/colors.php`
2. **Inertia Shared Props**: Share colors via HandleInertiaRequests middleware
3. **React Context**: Provide colors via `ColorsContext` + `useColors()` hook
4. **CSS Custom Properties**: Map to `--color-*` variables via `setRootColors()`
5. **Tailwind @theme**: Define tokens in `app.css` under `@theme {}` block
6. **TypeScript Constants**: Export reusable class strings in `theme.ts`
7. **Responsive Patterns**: Use `sectionPadding`, `headingSection`, `bodyText`
8. **CTA Patterns**: Define `ctaMobile` and `ctaDesktop` for button styles

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

**resources/js/config/colors.ts** - useColors() hook + setRootColors()
**resources/js/config/navigation.ts** - desktopNav + mobileNav arrays

**Pattern**: Edit constant → all components using it update automatically
