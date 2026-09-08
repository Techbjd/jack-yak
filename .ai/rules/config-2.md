---
paths:
  - 'config/**'
---

# Config 2

## Configuration Conventions
Config files are lowercase singular. Use typed return arrays. Custom configs like `colors.php` define design tokens. Share config values via Inertia middleware for frontend access.

## PHP Config Files - Single Source of Truth
**config/colors.php** - All color hex values defined here
- Change color → auto-propagates to CSS + React via Inertia middleware
- Colors: navy, navy_light, navy_gradient, teal, orange, blue_icon, text_primary, text_white, bg_cream, bg_warm, bg_placeholder, progress

**config/app.php** - App name, environment, debug settings
**config/database.php** - SQLite database configuration
**config/inertia.php** - Inertia SSR enabled, pages path: `resources/js/pages`

**Pattern**: PHP config → HandleInertiaRequests middleware → React useColors() hook → CSS variables
