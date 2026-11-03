# JackYak

A Nepal travel discovery site: curated destinations, itineraries, travel guides, a trip-finder quiz, reviews, availability requests, and a newsletter — built as a server-driven React SPA with Inertia.

## Features

- **Public pages** — home, destinations, top destinations, itinerary, guide, about, and a quiz that recommends a destination.
- **Accounts** — email/password registration and login, Google OAuth (Laravel Socialite), and a branded password reset flow with rate limiting.
- **User area** — saved trips and profile at `/user`.
- **Lead capture** — availability requests, reviews, quiz submissions, and newsletter signups, each throttled per IP.
- **SEO** — generated `/sitemap.xml` and `/robots.txt`.

## Tech stack

| Layer    | Tools                                                                 |
| -------- | --------------------------------------------------------------------- |
| Backend  | PHP 8.5, Laravel 13, Inertia Laravel 3, Laravel Socialite, Wayfinder  |
| Frontend | React 19, Inertia React 3, Tailwind CSS 4, TypeScript, Recharts       |
| Build    | Vite 8 via `vite-plus` (`vp`), Laravel Vite plugin                    |
| Quality  | Pest, Laravel Pint, Larastan/PHPStan (level 7), oxlint/oxfmt via `vp` |

## Requirements

- PHP 8.5 with `pdo_pgsql` (SQLite is used by default in development)
- Composer 2
- Node.js 22+ and npm

## Getting started

```bash
# Install PHP + JS dependencies, create .env, generate a key, migrate, build assets
composer setup

# Start the app (PHP server, queue listener, Vite) in one process
composer dev
```

The app is served at `http://localhost:8000` by default. If assets look stale, run `npm run build` or make sure `composer dev` (or `npm run dev`) is running.

### Environment

Copy `.env.example` to `.env` and fill in what you need:

- `APP_URL` — base URL used for links and password reset emails.
- `DB_CONNECTION` — `sqlite` by default; set PostgreSQL credentials for production.
- `MAIL_*` — mail delivery. `log` in development; the example file documents Gmail SMTP app-password setup for real mail.
- `GOOGLE_*` — Google OAuth client ID/secret for social login.

## Project structure

```text
app/
├── Http/Controllers/        # Inertia page controllers + form endpoints
├── Http/Requests/           # Form request validation
├── Models/                  # User, Review, AvailabilityRequest, QuizSubmission, NewsletterSubscription
├── Notifications/           # Branded password reset email
└── Providers/

resources/js/
├── pages/                   # Inertia page components (+ co-located components)
├── components/              # Shared UI (Header, Footer, cards, dialogs)
├── config/                  # Design tokens, navigation, copy, images
├── layouts/                 # AppLayout
├── routes/                  # Wayfinder-generated route helpers
└── types/                   # TypeScript definitions

routes/web.php               # All routes
database/migrations/         # Schema
tests/                       # Pest suite (kept local — see Testing)
```

## Routes

Public pages: `/home`, `/destinations`, `/view-all`, `/guide`, `/about`, `/itinerary`, `/form` (quiz). `/` redirects to `/home`.

Auth: `/login`, `/register`, `/forgot-password`, `/reset-password/{token}`, `/auth/google` (+ callback), `POST /logout`.

Form endpoints (all throttled): `POST /availability`, `POST /reviews`, `POST /quiz`, `POST /newsletter`.

## Commands

```bash
composer dev              # Run app, queue, and Vite together
composer ci:check         # Full CI pipeline: vp check, tsc, Pint, PHPStan, Pest
php artisan test --compact # Run the Pest suite
vendor/bin/pest --filter=name

vendor/bin/pint --dirty   # Format changed PHP files
npm run check             # Lint + format check (JS/TS/MD)
npm run check:fix         # Apply lint/format fixes
npm run types:check       # TypeScript type check
```

## Conventions

See `AGENTS.md` for the full coding standards (PHP style, React/Tailwind patterns, commit workflow, and review checklist). In short:

- PHP: constructor property promotion, explicit return types, braces always, PHPDoc over inline comments.
- React: co-locate components with pages, pull design tokens from `resources/js/config/theme.ts`, mobile-first Tailwind.
- Routes: import helpers from `resources/js/config/site.ts` / `@/routes` — never hardcode paths or brand strings.
- Commits: conventional prefixes (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`).

## Deployment

CI (`.github/workflows/tests.yml`) runs `composer ci:check` on pushes to `main` and on pull requests. Production deploys run from `main`; the app expects PostgreSQL, a configured mail transport, and Google OAuth credentials in the environment.
