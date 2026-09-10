// ============================================
// Theme Configuration — Single Source of Truth
// ============================================
// Any designer/developer can change values here
// and they propagate across the entire app.
// ============================================
//
// NOTE: Color hex values live in resources/js/config/colors.ts (COLORS)
// and resources/css/app.css @theme (keep in sync). Use useColors() hook
// to access them from components.
// The raw values here are fallbacks for SSR/static contexts.
// ============================================

// --------------------------------------------
// Font
// --------------------------------------------
export const fontPrimary = 'font-manrope';

/** Display serif for destination titles (EB Garamond) */
export const fontDisplay = 'font-display';

/** Quote body for testimonial cards (Poppins) — Figma Travel Stories */
export const fontQuote = 'font-poppins';

/** Quote mark glyph for testimonial cards (Roboto) — Figma Travel Stories */
export const fontQuoteMark = 'font-roboto';

/** Eyebrow label — tiny bold label above headings */
export const eyebrow = 'font-manrope text-xs-md font-bold text-text-primary';

/** Destination card name + province (10px bold navy) */
export const destCardTitle =
    'font-manrope text-xs-sm leading-tight font-bold text-ink';

// --------------------------------------------
// Layout: Section & Container
// --------------------------------------------

/** Page shell — centered max-width column shared by Home/About/Destination */
export const pageShell =
    'mx-auto flex w-full max-w-container flex-col items-center';

/** Full-width section with responsive vertical padding */
export const sectionPadding = 'py-0  md:py-24';

/** Muted section background — replaces hardcoded bg-slate-50 */
export const sectionMuted = 'w-full bg-surface-warm';

/** Centered content container — standard section layout */
export const sectionContainer =
    'mx-auto flex max-w-container flex-col gap-16 px-6 md:gap-24 md:px-12 lg:px-24';

/** Narrow section container — single-line px rhythm reused ~8x */
export const sectionInner =
    'mx-auto w-full max-w-container px-6 md:px-12 lg:px-24';

// --------------------------------------------
// Typography: Reusable text patterns
// --------------------------------------------

/** Section heading — bold, uppercase, primary text */
export const headingSection =
    'font-manrope text-lg-xl leading-[1.05] font-bold text-text-primary uppercase md:text-3xl-4xl';

/** Subsection heading — bold, primary text */
export const headingSubsection =
    'font-manrope text-xl-2xl leading-[1.05] font-bold text-text-primary md:text-3xl-4xl';

/** Body paragraph — normal weight, primary text */
export const bodyText =
    'font-manrope text-sm-base leading-[1.05] font-normal text-text-primary md:text-xl-2xl';

/** Body paragraph — smaller variant */
export const bodyTextSmall =
    'font-manrope text-sm-base leading-[1.05] font-normal text-text-primary';

// --------------------------------------------
// Buttons: CTA patterns
// --------------------------------------------

/** Mobile CTA button — orange pill */
export const ctaMobile =
    'font-manrope flex h-[25px] w-fit items-center justify-center gap-2 rounded-full bg-cta-accent px-3 text-xs-sm leading-[16px] font-bold text-white';

/** Desktop CTA button — teal pill */
export const ctaDesktop =
    'font-manrope hidden h-[42px] w-fit items-center justify-center gap-2 rounded-full bg-cta px-3 text-md-lg leading-[22px] font-bold text-white md:flex';

/** Cream circle for icon inside CTA */
export const ctaIconCircle =
    'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-cream';

// --------------------------------------------
// Cards: Image patterns
// --------------------------------------------

/** Placeholder image — gray background, cover, center */
export const imagePlaceholder = 'bg-bg-placeholder bg-contain bg-center';

/** Image with 17px rounded corners (AboutJackyak) */
export const imageRoundedLg = `${imagePlaceholder} rounded-image`;

/** Image with 2xl rounded corners (DiscoverNepal) */
export const imageRoundedXl = `${imagePlaceholder} rounded-2xl`;

/** Absolute cover image — dedupes `absolute inset-0 h-full w-full object-cover` (~10x) */
export const coverImageAbsolute = 'absolute inset-0 h-full w-full object-cover';

/** Card with small radius — replaces hardcoded rounded-xl */
export const cardRounded = 'rounded-dest-card';

/** Panel with medium radius — replaces hardcoded rounded-xl on figures/panels */
export const panelRounded = 'rounded-immersive';

/** View-all link — teal/ink responsive pattern reused in Popular + TopDestinations */
export const viewAllLink =
    'font-manrope flex items-center gap-1 text-2xs font-bold tracking-wide text-cta-accent md:text-md-lg md:text-ink';

/** Carousel dot row — shared flex wrapper */
export const carouselDotsWrap = 'flex items-center justify-center gap-2';

/** Single carousel dot — size handled by component, color by active state */
export const carouselDot = 'rounded-full';

// --------------------------------------------
// Mobile card dimensions
// --------------------------------------------

/** Mobile destination card — image area */
export const cardMobileImage = 'h-card-h w-card-w';

/** Mobile destination card — text area */
export const cardMobileContent = 'h-[37px] w-card-w';

// --------------------------------------------
// Auth: Login patterns (Figma mobile + desktop)
// --------------------------------------------

/** Login heading — 24px bold ink */
export const authTitle = 'font-manrope text-2xl font-bold text-ink';

/** Login subtitle / field label — 14px bold ink */
export const authLabel = 'font-manrope text-sm font-bold text-ink';

/** Login text input — 38px, 9px radius, white mobile / frost desktop */
export const authInput =
    'font-manrope h-9.5 w-full rounded-[9px] border border-frost-line bg-white px-3 text-xs font-bold text-ink outline-none placeholder:text-fog focus:border-ink lg:bg-frost';

/** Login primary button — dark pine pill */
export const authButton =
    'font-manrope flex h-9.5 w-full items-center justify-center rounded-[9px] bg-pine text-sm font-bold text-white';

/** Login social button — same shell as inputs, icon + label row */
export const authSocialButton =
    'font-manrope flex h-9.5 w-full items-center justify-center gap-2.5 rounded-[9px] border border-frost-line bg-white text-xs font-bold text-ink lg:bg-frost';

/** Login "Or" divider hairline */
export const authDividerLine = 'h-px flex-1 bg-divider';

// --------------------------------------------
// Quiz: Destination-finder form patterns (Figma desktop)
// --------------------------------------------

/** Quiz field label / question — 15px medium midnight */
export const quizLabel =
    'font-manrope text-[15px] leading-5 font-medium text-midnight';

/** Quiz text input / select — 47px, 6px radius, quiz-line border */
export const quizInput =
    'font-manrope h-[47px] w-full rounded-md border border-quiz-line bg-white px-4 text-[15px] font-medium text-midnight outline-none placeholder:text-mist focus:border-midnight';

/** Quiz segmented option text — 14px mist */
export const quizOption = 'font-manrope text-base-md font-medium text-mist';

/** Quiz primary button — midnight 48px bar, 20px bold white */
export const quizButton =
    'font-manrope flex h-12 w-full items-center justify-center rounded-md bg-midnight text-lg-xl font-bold text-white';

/** Quiz helper note — 15px subtle */
export const quizNote =
    'font-manrope text-[15px] leading-5 font-medium text-subtle';
/** Quiz inline error — small red, mirrors login errors */
export const quizError = 'font-manrope pt-1.5 text-xs font-medium text-red-500';

// --------------------------------------------
// About: page patterns (Figma mobile + desktop, token-only)
// --------------------------------------------

/** About hero title — EB Garamond navy on mobile, giant white on desktop */
export const aboutHeroTitle =
    'font-display text-display leading-about font-medium text-ink md:text-about-display md:leading-about-display md:text-white';

/** About centered section title — 16px mobile, 60px desktop */
export const aboutSectionTitle =
    'font-manrope text-md-lg leading-snug font-bold text-ink md:text-section-xl md:leading-section-xl';

/** About left-aligned heading — 16px mobile, 36px desktop */
export const aboutHeading =
    'font-manrope text-md-lg leading-snug font-bold text-ink md:text-3xl-4xl';

/** About subheading with accent bar — 14px mobile, 32px desktop */
export const aboutSubhead =
    'font-manrope text-base-md leading-snug font-bold text-ink md:text-2xl-3xl';

/** About body copy — 10px mobile, 24px desktop */
export const aboutBody =
    'font-manrope text-xs-sm leading-snug font-medium text-text-primary md:text-xl-2xl';

/** About accent bar — placeholder tick beside subheads */
export const aboutBar = 'bg-bg-placeholder h-3.5 w-1.5 shrink-0 md:h-7 md:w-3';

/** About newsletter CTA — navy pill on mobile, teal bar on desktop */
export const aboutCta =
    'font-manrope flex h-5.5 w-43 items-center justify-center rounded-full bg-ink text-xs-sm font-normal text-white md:h-18 md:w-full md:max-w-content-md md:bg-cta md:text-xl-2xl';

/** About newsletter note — black 10px mobile, 24px desktop */
export const aboutNote =
    'font-manrope text-xs-sm leading-snug font-medium text-black md:text-xl-2xl';

// --------------------------------------------
// User: profile section patterns (Figma mobile + desktop, token-only)
// --------------------------------------------

/** User name — 16px mobile, 32px desktop ink */
export const userName =
    'font-manrope text-md-lg leading-snug font-medium text-ink md:text-2xl-3xl';

/** User email + card subtitles — 12px mobile, 20px desktop haze */
export const userMuted =
    'font-manrope text-xs-md leading-snug font-medium text-haze md:text-lg-xl';

/** User Saved title — 16px mobile, 24px desktop, black on desktop */
export const userSectionTitle =
    'font-manrope text-md-lg leading-snug font-medium text-ink md:text-xl-2xl md:text-black';

/** User settings title + row labels — 12px mobile, 16px desktop, black on desktop */
export const userRowDark =
    'font-manrope text-xs-md leading-snug font-medium text-ink md:text-black md:text-md-lg';

/** User saved rows + counts — 12px mobile, 20px desktop ink */
export const userRow =
    'font-manrope text-xs-md leading-snug font-medium text-ink md:text-lg-xl';

/** User edit-profile button — orange pill mobile, teal bar desktop */
export const userEditButton =
    'font-manrope flex h-7 w-32 items-center justify-center gap-2 rounded-md bg-cta-accent text-xs-sm font-medium text-white md:h-14 md:w-61.5 md:gap-3 md:bg-cta md:text-lg-xl';

/** User sign-out label — ember semibold */
export const userSignOut =
    'font-manrope text-xs-md leading-snug font-semibold text-cta-ember md:text-md-lg';

// --------------------------------------------
// Modals: dialog form patterns (token-only)
// --------------------------------------------

/** Modal title — 40px semibold ink */
export const modalTitle =
    'font-manrope text-modal leading-tight font-semibold text-ink';

/** Modal subtitle — 16px medium ink */
export const modalSubtitle =
    'font-manrope text-md-lg leading-relaxed font-medium text-ink';

/** Modal field label — 16px medium midnight */
export const modalLabel =
    'font-manrope text-md-lg leading-snug font-medium text-midnight';

/** Modal text input / select — 68px, 6px radius, quiz-line border */
export const modalInput =
    'font-manrope h-17 w-full rounded-md border border-quiz-line bg-white px-4 text-md-lg font-medium text-ink outline-none placeholder:text-mist focus:border-ink';

/** Modal hint + counter — 16px/14px mist */
export const modalHint =
    'font-manrope text-md-lg leading-snug font-medium text-mist';

/** Modal textarea — haze border, 8px radius */
export const modalTextarea =
    'font-manrope h-38 w-full rounded-lg border border-haze bg-white p-4 text-md-lg leading-snug font-medium text-ink outline-none placeholder:text-mist focus:border-ink';

/** Modal primary button — ink fill, 143x38 */
export const modalPrimary =
    'font-manrope flex h-9.5 w-36 items-center justify-center rounded-lg bg-ink text-base-md font-bold text-white transition-opacity hover:opacity-90';

/** Modal ghost button — black outline, pine text */
export const modalGhost =
    'font-manrope flex h-9.5 w-36 items-center justify-center rounded-lg border border-black bg-white text-base-md font-bold text-pine transition-opacity hover:opacity-80';

// --------------------------------------------
// Colors: For inline styles (SVG, dynamic)
// --------------------------------------------
// For runtime access, use useColors() hook from @/config/colors.
// --------------------------------------------
