---
paths:
  - 'resources/js/**/*.tsx'
  - 'resources/js/**/*.css'
  - 'resources/js/**'
---

# Js

## React Component Patterns
Use React 19 features. Mobile-first responsive design with Tailwind breakpoints (`sm:`, `md:`, `lg:`). Use `md:hidden` / `hidden md:block` for responsive visibility. Import icons from `lucide-react` or `react-icons`. Use React Compiler (babel-plugin-react-compiler) for automatic optimization.

## Premium React Component Patterns (shadcn/ui style)
Follow shadcn/ui composition patterns:
1. **Compound Component Pattern**: Split complex UI into related sub-components (Card.Root, Card.Header, Card.Content)
2. **asChild Pattern**: Use Slot from Radix for element polymorphism
3. **CVA Variants**: Use class-variance-authority for component variants
4. **cn() Utility**: Use `cn()` (clsx + tailwind-merge) for class merging
5. **data-slot Attributes**: Add `data-slot="component-name"` for CSS targeting
6. **Two-Layer Architecture**: Keep shadcn primitives in `components/ui/`, extend in `components/`
7. **Controlled + Uncontrolled**: Support both state management patterns
8. **Context for Complex Components**: Use React Context for shared state in compound components

## Premium Tailwind CSS Patterns
Follow Tailwind v4 best practices:
1. **CSS Variables for Theming**: Use `:root` and `.dark` for theme tokens
2. **OKLCh Color Space**: Define colors in OKLCh for perceptual uniformity
3. **Semantic Tokens**: Use `bg-background`, `text-foreground`, `border-border` - never raw colors
4. **@theme Directive**: Map CSS variables to Tailwind utilities via `@theme inline`
5. **Mobile-First**: Write base styles first, layer breakpoints (`sm:`, `md:`, `lg:`)
6. **Opacity Modifiers**: Use `bg-success/10`, `text-primary/60` for tints
7. **No Hardcoded Colors**: Never use `text-red-500`, always use semantic tokens
8. **Component Classes**: Use `@layer components` for reusable class patterns

## Premium TypeScript Patterns
Follow TypeScript best practices:
1. **Strict Mode**: Enable `strict: true`, `noImplicitAny`, `strictNullChecks`
2. **Interface over Type**: Prefer `interface` for object shapes, `type` for unions
3. **Explicit Return Types**: Always declare return types on public functions
4. **Generic Constraints**: Use `<T extends SomeType>` for flexible generics
5. **Discriminated Unions**: Use tagged unions for state management
6. **Zod Schemas**: Validate runtime data with Zod, infer types from schemas
7. **Barrel Exports**: Use `index.ts` for clean module imports
8. **Path Aliases**: Use `@/*` for clean imports from `resources/js/`

## Premium Code Quality Standards
Follow production-grade code quality:
1. **Component Size**: Keep components under 200 lines, extract helpers
2. **Single Responsibility**: One component = one purpose
3. **Memoization**: Use `React.memo()` for expensive renders
4. **Custom Hooks**: Extract logic to `hooks/` directory
5. **Constants**: Define magic numbers/strings in `config/constants.ts`
6. **Error Handling**: Use try-catch with proper error boundaries
7. **Accessibility**: Use semantic HTML, ARIA labels, keyboard navigation
8. **Performance**: Lazy load heavy components with `React.lazy()`

## Tailwind Best Practices - Do's and Don'ts
**❌ DON'T - Arbitrary Values (Hardcoded)**
```tsx
blur-[70px] text-[clamp(1.15rem,2vw,2rem)]
h-[10px] gap-[4px] top-[67px]
```

**✅ DO - Use Design Tokens**
```tsx
blur-hero-sm text-xl-2xl
h-hamburger gap-hamburger top-sidebar-logo-left
```

**❌ DON'T - String Concatenation**
```tsx
className={`${fontPrimary} font-bold`}
```

**✅ DO - Use cn() Utility**
```tsx
import { cn } from '@/lib/utils';
className={cn(fontPrimary, "font-bold")}
```

**❌ DON'T - Inline Styles**
```tsx
style={{ backgroundImage: `url(${image})` }}
```

**✅ DO - Use CSS Classes**
```tsx
className="bg-cover bg-center"
style={{ backgroundImage: `url(${image})` }} // Only for dynamic values
```

**Rule: If you use a value 3+ times, add it to @theme as a token**
