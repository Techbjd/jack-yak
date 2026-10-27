import { IMAGES } from '@/config/images';
import { pageTitles, siteBrand, siteRoutes } from '@/config/site';

/**
 * Site-wide SEO constants and per-page metadata presets.
 *
 * RULE: pages never hardcode titles, descriptions, canonical paths, or
 * robots directives. Import a preset from `pageSeo` (or build on
 * `siteSeo` defaults) and pass it to `<Seo>` / `AppLayout`.
 *
 * Domain + OG image placeholders: `siteUrl` falls back to the placeholder
 * domain below until `VITE_APP_URL` is set (see `.env.example`), and
 * `defaultOgImage` reuses the logo until a dedicated 1200x630 OG image
 * ships — swap both in this file only.
 */

/** Absolute site origin. Replace the fallback with the real domain. */

const configuredURL: string | undefined = import.meta.env.VITE_APP_URL;
if (!configuredURL && import.meta.env.PROD) {
    console.error(
        'VITE_APP_URL is not set — canonical/og:url/og:image will be omitted.',
    );
}

export const siteUrl: string = (configuredURL ?? '').replace(/\/$/, '');
export function absoluteUrl(path: string): string | undefined {
    return siteUrl ? `${siteUrl}${path}` : undefined;
}

export const siteSeo = {
    siteName: siteBrand.name,
    locale: 'en_US',
    twitterCard: 'summary_large_image',
    /**
     * Default social share image (absolute URL). Placeholder: logo file
     * until a dedicated 1200x630 OG image is provided.
     */
    defaultOgImage: `${siteUrl}${IMAGES.logo.jackYak}`,
    type: 'website',
} as const;

export interface PageSeo {
    title: string;
    description: string;
    /** Path (not full URL) used to build the canonical + og:url. */
    path: string;
    /** Social image; defaults to `siteSeo.defaultOgImage`. */
    image?: string;
    /** `true` for private/tool pages (login, register, quiz, user). */
    noindex?: boolean;
    /** JSON-LD nodes rendered by `<Seo>`. */
    jsonLd?: Record<string, unknown>[];
}

function organizationJsonLd(description: string): Record<string, unknown> {
    return {
        '@context': 'https://jackyak.org',
        '@type': 'TravelAgency',
        name: siteSeo.siteName,
        url: siteUrl,
        logo: siteSeo.defaultOgImage,
        description,
    };
}

const aboutDescription =
    'Learn about JackYak — our mission to help travelers explore Nepal with trusted information and local expertise.';

/**
 * One preset per page, keyed to match `pageTitles`. Public pages are
 * indexable; private/tool pages set `noindex`.
 */
export const pageSeo = {
    home: {
        title: pageTitles.home,
        description:
            'JackYak helps you explore Nepal — discover top destinations, plan Himalayan treks, and book trusted local guides.',
        path: siteRoutes.home,
        jsonLd: [
            organizationJsonLd(aboutDescription),
            {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: siteSeo.siteName,
                url: siteUrl,
            },
        ],
    },
    destinations: {
        title: pageTitles.destinations,
        description:
            "Browse Nepal's top destinations — Everest, Pokhara, Chitwan and more. Find treks, sights and travel inspiration with JackYak.",
        path: siteRoutes.destinations,
        jsonLd: [
            {
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                name: 'Nepal destinations',
                url: `${siteUrl}${siteRoutes.destinations}`,
            },
        ],
    },
    viewAll: {
        title: pageTitles.viewAll,
        description:
            'Explore all top destinations across Nepal, from Himalayan treks to cultural cities. Find your next adventure with JackYak.',
        path: siteRoutes.viewAll,
    },
    guide: {
        title: pageTitles.guide,
        description:
            "Plan your Nepal trip with JackYak's travel guide — itineraries, tips, stories and trusted advice from local experts.",
        path: siteRoutes.guide,
    },
    about: {
        title: pageTitles.about,
        description: aboutDescription,
        path: siteRoutes.about,
    },
    itinerary: {
        title: pageTitles.itinerary,
        description:
            "Plan your trek day by day — gallery, altitude profile, weather, reviews and booking for Nepal's best itineraries.",
        path: siteRoutes.itinerary,
        jsonLd: [
            {
                '@context': 'https://schema.org',
                '@type': 'TouristTrip',
                name: 'Nepal trek itinerary',
                url: `${siteUrl}${siteRoutes.itinerary}`,
                touristType: 'Trekkers',
            },
        ],
    },
    quiz: {
        title: pageTitles.quiz,
        description:
            'Answer a few questions and find your perfect Nepal destination with JackYak’s trip finder.',
        path: siteRoutes.quiz,
        noindex: true,
    },
    login: {
        title: pageTitles.login,
        description: 'Sign in to your JackYak account to plan and save trips.',
        path: siteRoutes.login,
        noindex: true,
    },
    forgotPassword: {
        title: 'Forgot Password?',
        description: 'Reset your JackYak account password via email.',
        path: siteRoutes.login,
        noindex: true,
    },
    resetPassword: {
        title: 'Reset Password',
        description: 'Set a new password for your JackYak account.',
        path: siteRoutes.login,
        noindex: true,
    },
    register: {
        title: pageTitles.register,
        description: 'Create a JackYak account to plan and save Nepal trips.',
        path: siteRoutes.register,
        noindex: true,
    },
    user: {
        title: pageTitles.user,
        description:
            'Your JackYak account — profile, saved trips and settings.',
        path: siteRoutes.user,
        noindex: true,
    },
} as const satisfies Record<string, PageSeo>;
