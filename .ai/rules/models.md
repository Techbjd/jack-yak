---
paths:
  - 'app/Models/**'
---

# Models

## Model Conventions
Singular PascalCase naming. Use PHP 8 constructor property promotion. Define `casts()` method for attribute casting. Always create factories and migrations when creating new models. Use `CarbonImmutable` for timestamps (configured in AppServiceProvider).
