---
paths:
  - 'resources/js/types/**'
---

# Types

## TypeScript Type Definitions
Types live in `resources/js/types/`. Use lowercase filenames. Define `PageProps` interface in `index.ts` for Inertia shared props. Augment module types in `global.d.ts`. Use strict TypeScript with no implicit any.

## TypeScript Types - Interface Definitions
**resources/js/types/index.ts** - PageProps interface
- Defines all shared props from Inertia (auth, colors)
- Add new shared data here first

**resources/js/types/auth.ts** - User type definition
- id, name, email, avatar, email_verified_at, created_at, updated_at
- [key: string]: unknown for additional properties

**resources/js/types/global.d.ts** - Module augmentations
**resources/js/types/vite-env.d.ts** - Vite environment types

**Pattern**: Define type → use in components → TypeScript catches errors
