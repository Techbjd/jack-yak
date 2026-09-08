---
paths:
  - 'tests/**'
---

# Tests

## Testing Conventions
Use Pest v5 with functional API. Create tests via `php artisan make:test --pest {name}`. Feature tests use `RefreshDatabase`. Run with `php artisan test --compact` or `vendor/bin/pest`. Use factories for test data. Tests should be narrow and focused.
