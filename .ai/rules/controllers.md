---
paths:
  - 'app/Http/Controllers/**'
---

# Controllers

## Controller Conventions
Extend abstract `Controller` base class. Use `Inertia::render('PageName', [...props])` for responses. Prefer `Route::inertia()` for simple pages. Use form requests for validation. Return type declarations required on all methods.
