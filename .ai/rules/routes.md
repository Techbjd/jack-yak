---
paths:
  - 'routes/**'
---

# Routes

## Routing Conventions
Use named routes with `->name()`. Prefer `Route::inertia()` for simple pages. Use controllers with `Inertia::render()` for complex logic. Group routes by feature. Wayfinder generates TypeScript route functions from `@/actions/` or `@/routes/`.
