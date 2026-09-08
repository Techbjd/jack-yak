---
paths:
  - 'database/migrations/**'
---

# Migrations

## Migration Conventions
Use timestamped naming: `YYYY_MM_DD_HHMMSS_snake_case_description.php`. Use anonymous classes. Always include `down()` method for rollbacks. Use `foreignId()->constrained()` for relationships. SQLite is the primary database.
