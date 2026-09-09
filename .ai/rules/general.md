---
paths:
  - '**/*'
---

# General

## Project Architecture Overview
Laravel 13 + Inertia.js v3 + React 19 + Tailwind CSS v4 stack. Single-page app pattern: pages in `resources/js/pages/`, no Blade views except `app.blade.php`. Routes use `Route::inertia()` or controllers with `Inertia::render()`. No separate API layer. SQLite database. Vite 8 with vite-plus wrapper.

## Code Quality & CI Pipeline
PHP: `vendor/bin/pint` for formatting (laravel preset), `phpstan analyse` (level 7). JS/TS: `npm run check` for linting, `npm run types:check` for TypeScript. Run `composer ci:check` for full pipeline. Always run Pint after modifying PHP files: `vendor/bin/pint --dirty --format agent`.

## Jack-Yak Project: Color System & Design Tokens
**Brand Colors (resources/js/config/colors.ts COLORS + @theme — frontend truth):**
- `navy`: #0E1B2B (primary dark)
- `navy_light`: #253A55 (secondary dark)
- `navy_gradient`: #5180BB (gradient endpoint)
- `teal`: #2D8A8A (CTA desktop, accents)
- `orange`: #FF7A00 (CTA mobile, highlights)
- `blue_icon`: #60A5FA (icon color)

**Text Colors:**
- `text_primary`: #334155 (main text)
- `text_white`: #ffffff (on dark backgrounds)

**Background Colors:**
- `bg_cream`: #F7F2EE (light sections)
- `bg_warm`: #F9F4F0 (alternating sections)
- `bg_placeholder`: #D9D9D9 (image placeholders)

**Font Sizes (design tokens):**
- `2xs`: 8px, `xs-sm`: 10px, `sm-base`: 13px, `base-md`: 14px
- `md-lg`: 16px, `lg-xl`: 20px, `xl-2xl`: 24px, `2xl-3xl`: 32px, `3xl-4xl`: 36px

**Container Widths:**
- `content-sm`: 300px, `content`: 342px, `content-md`: 575px
- `content-lg`: 605px, `map`: 900px, `quote`: 1011px
- `page`: 1200px, `container`: 1440px

**Border Radius:**
- `card`: 5px, `image`: 17px

**Spacing:**
- `card-w`: 117px, `card-h`: 97px, `logo`: 91px, `sidebar`: 183px

## Jack-Yak Project: Component Architecture
**Page Structure:**
```
Home.tsx
├── Hero.tsx (header + hero content)
│   └── Header.tsx (shared)
├── NepalMap.tsx (interactive map)
├── MapQuote.tsx (quote section)
├── AboutJackyak.tsx (about section)
├── DiscoverNepal.tsx (discovery section)
├── TopDestination.tsx (destinations carousel)
└── Footer.tsx (shared)
```

**Component Patterns:**
1. **Hero**: Full-width with background image, gradient overlay, CTA button
2. **NepalMap**: Uses `useColors()` for dynamic SVG colors, Figma coordinate system
3. **TopDestination**: Mobile horizontal scroll + desktop grid carousel
4. **AboutJackyak**: Two-column layout with images and text
5. **DiscoverNepal**: Staggered image pair with decorative patches

**Responsive Patterns:**
- Mobile-first with `md:` breakpoints
- Separate mobile/desktop layouts using `md:hidden` / `hidden md:block`
- Horizontal scroll on mobile, grid on desktop
- CTA buttons: orange (mobile) / teal (desktop)

## Jack-Yak Project: Data Structures & Navigation
**Navigation Items (config/navigation.ts):**
```typescript
interface NavItem {
  label: string;
  href: string;
}

desktopNav: ['Destination', 'Guides', 'About']
mobileNav: ['Home', 'Destinations', 'Guides', 'About', 'Favorites', 'Search', 'Profile']
```

**Destination Data Structure:**
```typescript
{
  name: string;        // "Mount Everest"
  subtitle: string;    // "Highest Peak"
  image: string;       // "/Group_36.png"
  ratio: string;       // "258 / 391"
  raised: boolean;     // translate up on desktop
  size: 'lg' | 'sm';  // card size variant
}
```

**Theme Constants (config/theme.ts):**
- `fontPrimary`: 'font-manrope'
- `sectionPadding`: 'py-16 md:py-24'
- `sectionContainer`: centered max-w-container
- `headingSection`: bold uppercase text
- `ctaMobile`: orange pill button
- `ctaDesktop`: teal pill button
- `imageRoundedLg`: 17px rounded corners
- `imageRoundedXl`: 2xl rounded corners

**Color Access:**
- React: `useColors()` hook from `@/config/colors` (static `COLORS`, no provider needed)
- CSS: `var(--color-navy)` or Tailwind `text-navy`

## Jack-Yak Project: Features & Business Logic
**Core Features:**
1. **Hero Section**: Full-screen hero with parallax background, gradient overlay, CTA
2. **Nepal Map**: Interactive SVG map with leader lines, CHINA/INDIA labels
3. **Map Quote**: Quote section with decorative elements
4. **About JackYak**: Company story with popular destinations and travel tips
5. **Discover Nepal**: Staggered image gallery with discovery content
6. **Top Destinations**: Carousel of destinations (Everest, etc.)

**Image Assets:**
- Hero: `/Hero-bg.png`, `/Herosecond.png`, `/Mountain.png`
- Map: `/image.png`, leader lines SVG
- About: `/aboutJackyak.png`, `/patch2.png`
- Discover: `/discover-nepal-1.png`, `/discover-nepal-2.png`, `/patch3.png`
- Destinations: `/Group_36.png`
- Logo: `/jack-yak-logo.png`

**UI Elements:**
- Hamburger menu with mobile sidebar overlay
- Search, Heart (favorites), User icons from lucide-react
- Decorative rotated patches behind sections
- Card shadows with `shadow-card` token

**Responsive Breakpoints:**
- Mobile: default (< md)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)

## Quick Reference - Where to Edit What
**Want to change a color?**
→ Edit hexes in `resources/js/config/colors.ts` (`COLORS`) AND `resources/css/app.css` @theme (keep in sync)
→ React components auto-update via `useColors()` hook + Tailwind utilities

**Want to change fonts?**
→ Edit `resources/css/app.css` @theme block (font families)
→ Edit `resources/js/config/theme.ts` (fontPrimary constant)

**Want to change layout/spacing?**
→ Edit `resources/js/config/theme.ts` (sectionPadding, sectionContainer)

**Want to change headings/text styles?**
→ Edit `resources/js/config/theme.ts` (headingSection, bodyText)

**Want to change button styles?**
→ Edit `resources/js/config/theme.ts` (ctaMobile, ctaDesktop)

**Want to change navigation items?**
→ Edit `resources/js/config/navigation.ts` (desktopNav, mobileNav)

**Want to change footer content?**
→ Edit `resources/js/pages/components/shared/Footer.tsx` (footerColumns array)

**Want to change destinations?**
→ Edit `resources/js/pages/components/home/TopDestination.tsx` (destinations array)

**Want to add a new section?**
→ Create component in `resources/js/pages/components/home/`
→ Import in `Home.tsx`

**Want to change container widths?**
→ Edit `resources/css/app.css` @theme block (--max-w-*)
