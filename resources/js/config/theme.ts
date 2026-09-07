// ============================================
// Theme Configuration — Single Source of Truth
// ============================================
// Any designer/developer can change values here
// and they propagate across the entire app.
// ============================================
//
// NOTE: Color values are defined in config/colors.php
// and shared via Inertia. Use useColors() hook to access them.
// The raw values here are fallbacks for SSR/static contexts.
// ============================================

// --------------------------------------------
// Font
// --------------------------------------------
export const fontPrimary = 'font-manrope';

// --------------------------------------------
// Layout: Section & Container
// --------------------------------------------

/** Full-width section with responsive vertical padding */
export const sectionPadding = 'py-16 md:py-24';

/** Centered content container — standard section layout */
export const sectionContainer =
    'mx-auto flex max-w-container flex-col gap-16 px-6 md:gap-24 md:px-12 lg:px-24';

/** Centered content container — tight variant (DiscoverNepal) */
export const sectionContainerTight =
    'mx-auto flex max-w-container flex-col items-center gap-12 px-6 md:flex-row md:gap-16 md:px-12 lg:px-24';

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
    'font-manrope flex h-[25px] w-fit items-center justify-center gap-2 rounded-full bg-orange px-3 text-xs-sm leading-[16px] font-bold text-white';

/** Desktop CTA button — teal pill */
export const ctaDesktop =
    'font-manrope hidden h-[42px] w-fit items-center justify-center gap-2 rounded-full bg-teal px-3 text-md-lg leading-[22px] font-bold text-white md:flex';

/** Cream circle for icon inside CTA */
export const ctaIconCircle =
    'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bg-cream';

// --------------------------------------------
// Cards: Image patterns
// --------------------------------------------

/** Placeholder image — gray background, cover, center */
export const imagePlaceholder = 'bg-bg-placeholder bg-cover bg-center';

/** Image with 17px rounded corners (AboutJackyak) */
export const imageRoundedLg = `${imagePlaceholder} rounded-image`;

/** Image with 2xl rounded corners (DiscoverNepal) */
export const imageRoundedXl = `${imagePlaceholder} rounded-2xl`;

// --------------------------------------------
// Mobile card dimensions
// --------------------------------------------

/** Mobile destination card — image area */
export const cardMobileImage = 'h-card-h w-card-w';

/** Mobile destination card — text area */
export const cardMobileContent = 'h-[37px] w-card-w';

// --------------------------------------------
// Colors: For inline styles (SVG, dynamic)
// --------------------------------------------
// These values match config/colors.php.
// For runtime access, use useColors() hook from @/config/colors.
// --------------------------------------------

/** Map base color (navy) */
export const MAP_BASE_COLOR = '#253A55';

/** Map active color (teal) */
export const MAP_ACTIVE_COLOR = '#2D8A8A';
