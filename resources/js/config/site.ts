/**
 * Site-wide constants: brand, routes, contact, legal.
 *
 * RULE: never hardcode a route path, the brand name, or contact links in a
 * component. Import from here so URL/brand changes touch exactly one file.
 * `as const` keeps every value a literal type for Wayfinder/route helpers.
 */

export const siteBrand = {
    name: 'JackYak',
    /** Logo `alt` text (logo says "Jack Yak" with a space). */
    logoAlt: 'Jack Yak Logo',
    /** Screen-reader label for the logo link. */
    homeLabel: 'JackYak home',
} as const;

export const siteRoutes = {
    home: '/home',
    destinations: '/destinations',
    itinerary: '/itinerary',
    viewAll: '/view-all',
    guide: '/guide',
    about: '/about',
    /** Quiz / trip-finder form. */
    quiz: '/form',
    login: '/login',
    register: '/register',
    user: '/user',
    logout: '/logout',
    /** In-page anchors on the itinerary page. */
    booking: '#booking',
    reviews: '#reviews',
    google:'/auth/google'
} as const;

/**
 * Temporary target for links whose pages do not exist yet (footer columns,
 * settings rows, social icons). Replace with real routes in one place when
 * the pages land — do NOT scatter new '#' literals in components.
 */
export const placeholderHref = '#' as const;

export const siteContact = {
    whatsapp: 'https://wa.me/9779800000000',
} as const;

export const siteLegal = {
    copyright: '© 2026 JackYak. All rights reserved.',
} as const;

/**
 * Browser-tab / layout titles, one per page. RULE: pages pass these to
 * `<Head>` / `AppLayout` instead of string literals (keeps casing
 * consistent — always Title Case — and titles translatable in one file).
 */
export const pageTitles = {
    home: 'Home',
    destinations: 'Destinations',
    guide: 'Guide',
    about: 'About',
    viewAll: 'Top Destinations',
    itinerary: 'Itinerary',
    login: 'Login',
    register: 'Sign up',
    quiz: 'Find Your Destination',
    user: 'User',
} as const;

/** Copy for the shared site header (desktop icons, mobile menu). */
export const headerCopy = {
    savedLabel: 'Saved',
    searchLabel: 'Search destinations',
    profileLabel: (name: string) => `Profile for ${name}`,
    signInLabel: 'Sign in',
    openMenuLabel: 'Open menu',
    closeMenuLabel: 'Close menu',
    menuLabel: 'Site menu',
    greeting: (name: string) => `Hi, ${name}`,
    signInNudge: 'Sign in to plan your trip',
    accountLabel: 'My account',
} as const;

/** Copy for the shared site footer. */
export const footerCopy = {
    tagline: 'Helping travelers explore Nepal with trusted information.',
    navLabel: 'Footer',
    socialLabels: {
        instagram: 'Instagram',
        facebook: 'Facebook',
        whatsapp: 'WhatsApp',
    },
} as const;

/** Copy for the shared modal dialog shell. */
export const modalCopy = {
    closeLabel: 'Close dialog',
} as const;
