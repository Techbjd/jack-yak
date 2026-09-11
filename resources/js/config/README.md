# Config — human edit guide

All page content lives here. Components are pure UI: they `map()` over
these files. **Edit the file below, save, done — no component changes needed.**

Import from one place: `import { popularDestinations } from '@/config';`
(the barrel `index.ts` only re-exports; values live in the source files).

## I want to change… → edit this file

| I want to change…                                    | Edit this file                                                                                                      | Used by (pages / components)                                                                 |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Destination cards, tabs, view-all listing (15 cards) | `destination.ts`                                                                                                    | Destination, ViewAll, Home/TopDestination, Guide                                             |
| Guide explore cards, plan steps, trust badges        | `guide.ts`                                                                                                          | Guide (WhyExplore, PlanTripSteps, TrustStrip, GuideTopDestinations data in `destination.ts`) |
| Home about-jackyak info blocks (2, order matters)    | `home.ts`                                                                                                           | Home/AboutJackyak (mobile uses [0]/[1] positionally)                                         |
| About copy (pillars, story, newsletter)              | `about.ts`                                                                                                          | About (AboutHero, DifferenceSection, JourneyStory, NewsletterCta)                            |
| Quiz questions + dropdown options                    | `quiz.ts`                                                                                                           | Quiz (QuizForm)                                                                              |
| Review places, limits                                | `review.ts`                                                                                                         | review/GiveReview (`MAX_REVIEW_LENGTH`, `MAX_REVIEW_PHOTOS`)                                 |
| User profile placeholder copy + counts               | `user.ts`                                                                                                           | User (ProfileCard, SavedCard, SettingsCard)                                                  |
| Header / mobile nav items                            | `navigation.ts`                                                                                                     | shared/Header, shared/ResponsiveHeader                                                       |
| Footer link columns                                  | `navigation.ts` (`footerColumns`)                                                                                   | shared/Footer (mobile + desktop)                                                             |
| Any image URL                                        | `images.ts` (`IMAGES` registry)                                                                                     | everything via `IMAGES.<feature>.<name>`                                                     |
| Colors                                               | `colors.ts` (`COLORS`) — mirrored in `resources/css/app.css` `@theme`, enforced by `tests/Unit/ColorTokensTest.php` | all                                                                                          |
| Fonts, spacing, buttons, card/text styles            | `theme.ts`                                                                                                          | all (import the constant, never hardcode)                                                    |

## Colors — what is what (newcomer map)

Class names are the kebab-case token: `bg-brand`, `text-ink`, `border-quiz-line`,
`placeholder:text-fog`. (GitHub renders each hex below as a swatch.)

| Token (class suffix)                      | Hex                                           | What it is / where it's used                                            |
| ----------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------- |
| `brand`                                   | `#0E1B2B`                                     | Footer + dark surfaces                                                  |
| `ink`                                     | `#253A55`                                     | Text/icons on light backgrounds                                         |
| `cta`                                     | `#2D8A8A`                                     | Desktop CTA buttons, rings, panels                                      |
| `cta-accent`                              | `#FF7A00`                                     | Mobile CTAs + active accents                                            |
| `cta-ember`                               | `#FF5728`                                     | Destination mobile CTA surfaces, sign-out label                         |
| `surface-warm`                            | `#F9F4F0`                                     | Alternating section backgrounds                                         |
| `surface-cream`                           | `#F7F2EE`                                     | CTA icon circles, card badges                                           |
| `icon-accent`                             | `#60A5FA`                                     | CTA glyph icons                                                         |
| `quote-blush`                             | `#F8E2D3`                                     | Testimonial quote mark                                                  |
| `canvas`                                  | `#F8FAFC`                                     | View-all page background                                                |
| `steel`                                   | `#667085`                                     | Pagination inactive text                                                |
| `pine`                                    | `#162D3A`                                     | Login sign-in button                                                    |
| `frost`                                   | `#F7FBFF`                                     | Login input background (desktop)                                        |
| `frost-line`                              | `#E5E9F1`                                     | Login input border                                                      |
| `fog`                                     | `#B7B5BB`                                     | Login input placeholder                                                 |
| `divider`                                 | `#E7EFF0`                                     | Login "Or" divider lines                                                |
| `midnight`                                | `#172738`                                     | Quiz labels + primary button                                            |
| `mist`                                    | `#768091`                                     | Quiz placeholder + option text                                          |
| `quiz-line`                               | `#E2E5EA`                                     | Quiz input/select/segment borders                                       |
| `hairline`                                | `#F1F3F5`                                     | Quiz row dividers                                                       |
| `subtle`                                  | `#858D99`                                     | Quiz helper note                                                        |
| `haze`                                    | `#989EAD`                                     | User email + card subtitles                                             |
| `text-primary`                            | `#334155`                                     | Default body text (no semantic twin — use as-is)                        |
| `text-white`                              | `#ffffff`                                     | Text on dark surfaces                                                   |
| `bg-placeholder`                          | `#D9D9D9`                                     | Image fallback blocks (no twin — use as-is)                             |
| `progress`                                | `#4B5563`                                     | Progress indicators                                                     |
| `navy` / `navy-light` / `navy-gradient`   | `#0E1B2B` / `#253A55` / `#5180BB`             | Primitives: Hero gradient blend, map fills only                         |
| `teal` / `orange` / `ember` / `blue-icon` | `#2D8A8A` / `#FF7A00` / `#FF5728` / `#60A5FA` | Primitives: decorative blends + map (semantic twins above for UI parts) |

**To add a color** (3 lines, test enforces all of them):

1. `colors.ts` → one entry in `COLORS` (`my_token: '#......'`).
2. `resources/css/app.css` → one var in `@theme` (`--color-my-token: #......;`).
3. `resources/js/lib/utils.ts` → one entry in the `color:` list (`'my-token'`).
   Then use `bg-my-token` / `text-my-token` anywhere. `useColors()` is only for
   runtime values Tailwind can't reach (SVG fills in `NepalMap`).

## Rules (keep it reliable)

1. **Content files** (`destination`, `about`, `quiz`, `review`, `user`, `navigation`):
   edit freely. Keep the exported **shape** (field names) — components depend on it.
2. **Asset/design files** (`images`, `colors`, `theme`): do NOT edit for a copy
   change. Renaming/moving an image? Edit `images.ts` only — one line fixes the app.
3. **Images on disk**: `public/images/**`, kebab-case, grouped by feature
   (`home/`, `destination/`, `about/`, `featured/`, `logo/`).
4. **Backend handover**: routes currently send **no props** (`Route::inertia()`),
   so these files ARE the data. When the backend takes over, it must send the
   same shapes declared in `@/types/page-props` (which reuses these interfaces).
   Pages will then do `function ViewAll({ destinations = viewAllDestinations })`
   — props win, config stays as fallback. Never invent a second shape.
5. **Types**: strict TS. `npm run types:check` must pass before pushing.
