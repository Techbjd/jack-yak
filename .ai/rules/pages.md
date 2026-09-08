---
paths:
  - 'resources/js/pages/**'
---

# Pages

## Frontend Component Architecture
Components co-located under `resources/js/pages/components/{page-section}/`. Shared components in `components/shared/`. Use PascalCase for component files. Export default for pages/components. Path alias `@/*` maps to `resources/js/*`. Use `useColors()` hook for design tokens. Use Tailwind utility classes via theme.ts constants.

## Premium Page Component Architecture
Follow feature-based page architecture:
1. **Page = Composition Layer**: Pages wire together modules, contain no business logic
2. **Feature Modules**: Group related components/hooks/services in `features/` directory
3. **Co-location**: Keep tests in `__tests__/` folders at same level as source
4. **Layout Components**: Extract layouts to `components/layout/` for reuse
5. **Loading States**: Use Skeleton components for deferred props
6. **Error Boundaries**: Wrap pages in ErrorBoundary components
7. **Empty States**: Use dedicated EmptyState components
8. **Data Fetching**: Use Inertia's `useForm` or `useHttp` for mutations

## Component Patterns - Data Extraction
**Pattern: Extract repeated data to config arrays**

Footer columns defined as config:
```typescript
const footerColumns: FooterColumnData[] = [
  { title: 'Explore', links: ['Destinations', 'Trek Routes', ...] },
  { title: 'Travel Guide', links: ['Travel Safety', ...] },
  ...
];
```

Navigation items defined as config:
```typescript
const desktopNav: NavItem[] = [
  { label: 'Destination', href: '#destination' },
  ...
];
```

Destinations defined as config:
```typescript
const destinations = [
  { name: 'Mount Everest', subtitle: 'Highest Peak', image: '/Group_36.png', ... },
  ...
];
```

**Pattern**: Data in config → Components are pure UI → Easy to edit content

## Component Patterns - Responsive Layout
**Pattern: Mobile-first with separate layouts**

```tsx
{/* Mobile only */}
<div className="md:hidden">Mobile content</div>

{/* Desktop only */}
<div className="hidden md:block">Desktop content</div>

{/* Both with responsive classes */}
<div className="text-sm md:text-lg">Responsive text</div>
```

**Pattern: CTA buttons**
- Mobile: orange pill (`ctaMobile`)
- Desktop: teal pill (`ctaDesktop`)

**Pattern: Grid layouts**
- Mobile: horizontal scroll with snap
- Desktop: grid with gap

**Pattern: Section backgrounds**
- Alternating: bg-white, bg-bg-warm, bg-bg-cream
- Decorative patches: absolute positioned rotated images

## Component Patterns - Theme Usage
**Pattern: Import and compose theme constants**

```tsx
import { fontPrimary, sectionPadding, headingSection, bodyText } from '@/config/theme';

const MyComponent = () => (
  <section className={`w-full ${sectionPadding}`}>
    <h2 className={headingSection}>Title</h2>
    <p className={bodyText}>Content</p>
  </section>
);
```

**Pattern: Use useColors() for dynamic colors**
```tsx
import { useColors } from '@/config/colors';
const colors = useColors();
// Use: colors.navy, colors.teal, etc.
```

**Pattern: Compose multiple constants**
```tsx
className={`${fontPrimary} ${sectionPadding} bg-bg-warm`}
```

**Pattern: Conditional responsive classes**
```tsx
className="flex flex-col md:flex-row gap-4 md:gap-8"
```
