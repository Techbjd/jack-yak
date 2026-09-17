# Frontend — team edit guide

**One rule: content lives in `config/`, UI lives in `components/`, pages compose.**
Components are pure UI: they `map()` over config files. **Edit the config file
below, save, done — no component changes needed.**

Import from one place: `import { popularDestinations } from '@/config';`
(the barrel `index.ts` only re-exports; values live in the source files).

## Folder map (`resources/js/`)

```
config/            ← ALL editable content: copy, routes, images, colors, tokens
components/
  ui/              ← shared UI: Header, Footer, SectionHeading, DestinationCard,
                     HeroFrame, CtaButton, Modal, Stars, CarouselDots, ...
  forms/           ← shared form primitives: TextField, SelectField, FieldError,
                     FormSuccess, GuestNudge, FormActions
pages/
  *.tsx            ← 10 top-level pages (thin: title + layout + sections)
  components/<p>/  ← sections co-located with their page (Hero, Gallery, ...)
lib/               ← useAutoRotate, form-utils (EMAIL_PATTERN, todayISODate),
                     utils (cn + Tailwind token allowlist)
layouts/           ← AppLayout (PageShell + Footer)
types/             ← shared TS types + page-props shapes
```

New page? Add `pages/X.tsx` + `pages/components/x/`. New section used twice?
Promote it to `components/ui/` — never duplicate markup.

## I want to change… → edit this file

| I want to change…                                    | Edit this file                                                                                                      | Used by (pages / components)                                                                 |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Any route / URL, brand name, logo alt, WhatsApp, ©   | `site.ts` (`siteRoutes`, `siteBrand`, `siteContact`, `siteLegal`)                                                   | everything (nav hrefs alias it; see `placeholderHref` below)                                 |
| Any page `<title>`, header/footer/modal strings      | `site.ts` (`pageTitles`, `headerCopy`, `footerCopy`, `modalCopy`)                                                    | all 10 pages, Header, Footer, Modal                                                          |
| Destination cards, tabs, view-all listing (15 cards) | `destination.ts`                                                                                                    | Destination, ViewAll, Home/TopDestination, Guide                                              |
| Section headers, hero slides, hero tagline           | `destination.ts` (`popularHeader`, `featuredHeader`, `journeyNepalCopy`, `immersiveExperiences`, `destinationHeroTagline`) | Destination sections                                                                  |
| Guide explore cards, plan steps, trust badges        | `guide.ts`                                                                                                          | Guide (WhyExplore, PlanTripSteps, TrustStrip, GuideTopDestinations)                          |
| Home hero, map quote, about-jackyak, discover        | `home.ts`                                                                                                           | Home (Hero, MapQuote, AboutJackyak, DiscoverNepal, TopDestination)                           |
| About copy (pillars, story, newsletter, difference)  | `about.ts`                                                                                                          | About (AboutHero, DifferenceSection, JourneyStory, NewsletterCta)                            |
| Login / register form strings                        | `auth.ts` (`loginCopy`, `registerCopy`)                                                                             | login/LoginForm, login/RegisterForm                                                          |
| Quiz questions + form strings + endpoint             | `quiz.ts` (`quizQuestions`, `quizFormCopy`, `quizEndpoint`)                                                          | Quiz (QuizForm)                                                                              |
| Review places, limits, form strings + endpoint       | `review.ts`                                                                                                         | review/GiveReview                                                                            |
| Availability strings, traveler cap, endpoint         | `booking.ts` (`availabilityCopy`, `availabilityMaxTravelers`, `availabilityEndpoint`)                               | booking/CheckAvailability                                                                    |
| Itinerary display copy (units, gallery, booking)     | `itinerary.ts` (`trekBooking`, `trekWeather`, `altitudeProfile`, `galleryTiles`, …)                                 | Itinerary sections                                                                           |
| User profile placeholder copy + counts               | `user.ts`                                                                                                           | User (ProfileCard, SavedCard, SettingsCard, SignOutCard)                                     |
| Header / mobile nav items, footer columns            | `navigation.ts` (hrefs come from `siteRoutes`)                                                                      | ui/Header, ui/ResponsiveHeader, ui/Footer                                                    |
| Any image URL                                        | `images.ts` (`IMAGES` registry)                                                                                     | everything via `IMAGES.<feature>.<name>`                                                     |
| Colors                                               | `colors.ts` (`COLORS`) — mirrored in `resources/css/app.css` `@theme`, enforced by `tests/Unit/ColorTokensTest.php` | all                                                                                          |
| Fonts, spacing, buttons, card/text styles            | `theme.ts`                                                                                                          | all (import the constant, never hardcode)                                                    |

## Shared pieces — reuse, don't rebuild

| Need…                          | Use                                                                 | Notes                                                  |
| ------------------------------ | ------------------------------------------------------------------- | ------------------------------------------------------ |
| Section eyebrow + title        | `SectionHeading` (`components/ui/`)                                 | Pass eyebrow size per site; keep inside flex rows via `className="contents"` |
| Destination card               | `DestinationCard` (`components/ui/`)                                | Flat props; `className` override for mobile layouts    |
| Hero (title locked to image)   | `HeroFrame` + `HeroTitleSvg`                                        | Title SVG uses `currentColor` + `text-text-primary` (`#334155`) |
| CTA pill / button              | `CtaButton`                                                         | Link/button poly; override shape with `rounded-none` if needed |
| Text input / select + error    | `TextField` / `SelectField` (`components/forms/`, tone prop)        | `auth` \| `quiz` \| `modal` tones                      |
| Success panel / guest nudge / form buttons | `FormSuccess` / `GuestNudge` / `FormActions`             | Endpoints + strings come from config                   |
| Auto-rotating carousel index   | `useAutoRotate(length, intervalMs)` (`lib/`)                        | Handles reduced-motion + cleanup                       |
| Email regex / today string     | `EMAIL_PATTERN` / `todayISODate()` (`lib/form-utils`)               | Single source — never re-declare                       |
| Star rating display            | `Stars` (`components/ui/`)                                          | `label` defaults to computed `Rated X out of 5 stars`  |

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

1. **Content files** (`site`, `auth`, `booking`, `destination`, `about`, `quiz`,
   `review`, `user`, `navigation`, `itinerary`, `home`, `guide`): edit freely.
   Keep the exported **shape** (field names) — components depend on it.
2. **Asset/design files** (`images`, `colors`, `theme`): do NOT edit for a copy
   change. Renaming/moving an image? Edit `images.ts` only — one line fixes the app.
3. **Routes**: always use `siteRoutes`. `placeholderHref` (`'#'`) marks links to
   pages that don't exist yet — when a page ships, replace that one constant.
4. **Images on disk**: `public/images/**`, kebab-case, grouped by feature
   (`home/`, `destination/`, `about/`, `featured/`, `logo/`).
5. **Inline `style={{}}` is banned except 4 data-driven cases** (documented, keep):
   `backgroundImage` from config URLs, FeaturedGrid `--card-ratio` var,
   `Stars` fractional width, TopDestination measured aspect ratio. Static ratios
   use Tailwind (`aspect-[257/387]`); SVG transitions use classes.
6. **Spelling**: booking uses `travelerUnit()` from `booking.ts` — keep the
   original `traveller` (double-l) UI spelling; never "fix" it per-file.
7. **Exceptions are deliberate**: `TrekAbout` rail heading and `ItineraryDayList`
   h2 don't use `SectionHeading` (different visuals); FeaturedGrid's `defaultTab`
   drives mobile + desktop together; SavedCard row labels stay inline (config
   counts describe a different state).
8. **Backend handover**: routes currently send **no props** (`Route::inertia()`),
   so these files ARE the data. When the backend takes over, it must send the
   same shapes declared in `@/types/page-props` (which reuses these interfaces).
   Pages will then do `function ViewAll({ destinations = viewAllDestinations })`
   — props win, config stays as fallback. Never invent a second shape.
9. **Types**: strict TS. `npm run types:check` must pass before pushing.
