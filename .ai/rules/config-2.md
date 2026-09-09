---
paths:
  - 'config/**'
---

# Config 2

## Configuration Conventions
Config files are lowercase singular. Use typed return arrays. Colors are frontend-owned (`resources/js/config/colors.ts` + `@theme`) — no PHP color config.

## PHP Config Files
**config/app.php** - App name, environment, debug settings
**config/database.php** - SQLite database configuration
**config/inertia.php** - Inertia SSR enabled, pages path: `resources/js/pages`

**Pattern**: HandleInertiaRequests middleware shares `name` + `auth` → React page props
