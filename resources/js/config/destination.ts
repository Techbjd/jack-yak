import { IMAGES } from './images';
import { siteRoutes } from './site';

export const viewAllPageHref = siteRoutes.viewAll;

export const itineraryPageHref = siteRoutes.itinerary;

/** Cards per page on the view-all grid. */
export const viewAllPageSize = 12;

export const destinationHeroTagline =
    "Nepal is a land of extraordinary diversity where the Himalayas, ancient heritage, vibrant cultures, and abundant wildlife come together. From the world's highest peaks to lush subtropical jungles, Nepal offers unforgettable experiences for every traveler.";

export const immersiveExperiences = {
    heading: 'IMMERSIVE EXPERIENCES',
    body: 'Explore Nepal through cinematic destination stories, travel guides, local insights, trekking routes, and hidden gems designed to inspire your next adventure.',
};

export const journeyNepalCopy = {
    eyebrow: 'DISCOVER NEPAL',
    titleLead: 'Journey Beyond',
    titleAccent: 'Peaks',
    body: "JackYak is your gateway to Nepal's breathtaking landscapes, timeless traditions, and unforgettable adventures.",
    meetHeading: 'Meet the Yak',
    meetBody:
        "For centuries, the Himalayan yak has been a symbol of strength, resilience, and exploration. Inspired by this remarkable companion of the mountains, JackYak invites you to journey through Nepal's most extraordinary landscapes and cultures.",
    mascotAlt: 'JackYak mascot',
} as const;

export const immersivePlanCopy = {
    cta: 'Start Planning',
    imageAltMobile: 'Swayambhu Stupa at dusk',
    imageAltDesktop: 'Boudhanath Stupa panorama',
} as const;

export const popularHeader = {
    eyebrow: 'POPULAR DESTINATIONS',
    link: 'VIEW ALL',
    question: 'Where will you go?',
} as const;

export const viewAllHeaderCopy = {
    back: 'Back',
    title: 'Top Destinations',
} as const;

export const featuredHeader = {
    eyebrow: 'Discover',
    title: 'Featured Destinations',
    side: "Discover the country's most remarkable destinations.",
    /** Tab selected on first paint (mobile + desktop stay in sync). */
    defaultTab: 'Safari',
} as const;

export interface DestinationCard {
    name: string;
    province: string;
    image: string;
    href: string;
    mobileOnly?: boolean;
}

export const popularDestinations: DestinationCard[] = [
    {
        name: 'Mount Everest (Sagarmatha)',
        province: 'Koshi Province',
        image: IMAGES.destination.mountEverest,
        href: itineraryPageHref,
    },
    {
        name: 'Langtang Valley',
        province: 'Bagmati Province',
        image: IMAGES.destination.langtangMountain,
        href: itineraryPageHref,
    },
    {
        name: 'Pokhara',
        province: 'Gandaki Province',
        image: IMAGES.destination.pokharaLake,
        href: itineraryPageHref,
    },
    {
        name: 'Mardi Himal',
        province: 'Gandaki Province',
        image: IMAGES.destination.mardiHimal,
        href: itineraryPageHref,
    },
    {
        name: 'Mustang (Upper Mustang)',
        province: 'Gandaki Province',
        image: IMAGES.destination.upperMustang,
        href: itineraryPageHref,
    },
    {
        name: 'Chitwan Rhino',
        province: 'Terai Region',
        image: IMAGES.destination.chitwanRhino,
        href: itineraryPageHref,
        mobileOnly: true,
    },
    {
        name: 'Kathmandu Temple',
        province: 'Bagmati Province',
        image: IMAGES.destination.kathmanduTemple,
        href: itineraryPageHref,
        mobileOnly: true,
    },
];

export const featuredTabs: string[] = [
    'All',
    'Trekking',
    'Safari',
    'Spiritual',
    'Heritage',
    'Lakes',
];

export const featuredTabIcons: Record<string, string> = {
    All: IMAGES.destination.icons.all,
    Trekking: IMAGES.destination.icons.trekking,
    Safari: IMAGES.destination.icons.safari,
    Spiritual: IMAGES.destination.icons.spiritual,
    Heritage: IMAGES.destination.icons.heritage,
    Lakes: IMAGES.destination.icons.lakes,
};

export interface FeaturedCard {
    src: string;
    label: string;
    ratio: string;
    span: string;
    href: string;
}

export interface ViewAllDestination {
    name: string;
    tagline: string;
    province: string;
    days: string;
    image: string;
    href: string;
}

export const viewAllDestinations: ViewAllDestination[] = [
    {
        name: 'Mount Everest',
        tagline: 'Highest Peak',
        province: 'Koshi Province',
        days: '12–16 Days',
        image: IMAGES.viewAll.mounteverestFirst,
        href: itineraryPageHref,
    },
    {
        name: 'Swayambhu Stupa',
        tagline: 'Heritage Site',
        province: 'Bagmati Province',
        days: '1–2 Days',
        image: IMAGES.viewAll.swayambhuStupa,
        href: itineraryPageHref,
    },
    {
        name: 'Pokhara Lakeside',
        tagline: 'Lake City',
        province: 'Gandaki Province',
        days: '3–5 Days',
        image: IMAGES.viewAll.pokharaFirst,
        href: itineraryPageHref,
    },
    {
        name: 'Langtang Valley',
        tagline: 'Glacier Valley',
        province: 'Bagmati Province',
        days: '7–10 Days',
        image: IMAGES.viewAll.langtangValley,
        href: itineraryPageHref,
    },
    {
        name: 'Mardi Himal',
        tagline: 'Ridge Trek',
        province: 'Gandaki Province',
        days: '5–7 Days',
        image: IMAGES.viewAll.mardiHimal,
        href: itineraryPageHref,
    },
    {
        name: 'Upper Mustang',
        tagline: 'Forbidden Kingdom',
        province: 'Gandaki Province',
        days: '10–14 Days',
        image: IMAGES.viewAll.upperMustang,
        href: itineraryPageHref,
    },
    {
        name: 'Chitwan Safari',
        tagline: 'Wildlife Safari',
        province: 'Terai Region',
        days: '2–3 Days',
        image: IMAGES.viewAll.chitwanSafari,
        href: itineraryPageHref,
    },
    {
        name: 'Kathmandu Durbar',
        tagline: 'Heritage Sites',
        province: 'Bagmati Province',
        days: '2–3 Days',
        image: IMAGES.viewAll.kathmanduDurbar,
        href: itineraryPageHref,
    },
    {
        name: 'Stupa Panorama',
        tagline: 'Mountain Views',
        province: 'Bagmati Province',
        days: '1–2 Days',
        image: IMAGES.viewAll.stupaPanorama,
        href: itineraryPageHref,
    },
    {
        name: 'Elephant Safari',
        tagline: 'Jungle Safari',
        province: 'Terai Region',
        days: '1–2 Days',
        image: IMAGES.viewAll.elephantSafari,
        href: itineraryPageHref,
    },
    {
        name: 'Jeep Safari',
        tagline: 'Jungle Safari',
        province: 'Terai Region',
        days: '1–2 Days',
        image: IMAGES.viewAll.jeepSafari,
        href: itineraryPageHref,
    },
    {
        name: 'Canoe Safari',
        tagline: 'River Safari',
        province: 'Terai Region',
        days: '1–2 Days',
        image: IMAGES.viewAll.canoeSafari,
        href: itineraryPageHref,
    },
    {
        name: 'Tilicho Lake',
        tagline: 'Highest Lake',
        province: 'Gandaki Province',
        days: '8–12 Days',
        image: IMAGES.viewAll.tilichoLake,
        href: itineraryPageHref,
    },
    {
        name: 'Everest Flags',
        tagline: 'Prayer Flags',
        province: 'Koshi Province',
        days: '12–16 Days',
        image: IMAGES.viewAll.everestFlags,
        href: itineraryPageHref,
    },
    {
        name: 'Gokyo Lakes',
        tagline: 'Turquoise Lakes',
        province: 'Koshi Province',
        days: '10–13 Days',
        image: IMAGES.viewAll.gokyoLakes,
        href: itineraryPageHref,
    },
];
export const destinationFeaturedCards: FeaturedCard[] = [
    {
        src: IMAGES.destination.featured.elephantSafari,
        label: 'Elephant Safari',
        ratio: '292 / 350',
        span: 'md:col-span-3',
        href: itineraryPageHref,
    },
    {
        src: IMAGES.destination.featured.jeepSafari,
        label: 'Jeep Safari',
        ratio: '606 / 351',
        span: 'md:col-span-6',
        href: itineraryPageHref,
    },
    {
        src: IMAGES.destination.featured.canoeSafari,
        label: 'Canoe Safari',
        ratio: '292 / 350',
        span: 'md:col-span-3',
        href: itineraryPageHref,
    },
    {
        src: IMAGES.destination.featured.birdWatchingSafari,
        label: 'Bird Watching Safari',
        ratio: '506 / 351',
        span: 'md:col-span-5',
        href: itineraryPageHref,
    },
    {
        src: IMAGES.destination.featured.crocodileWatching,
        label: 'Crocodile Watching',
        ratio: '394 / 349',
        span: 'md:col-span-4',
        href: itineraryPageHref,
    },
    {
        src: IMAGES.destination.featured.tigerWatching,
        label: 'Tiger Tracking',
        ratio: '292 / 350',
        span: 'md:col-span-3',
        href: itineraryPageHref,
    },
];

export interface GuideTopDestination {
    name: string;
    subtitle: string;
    province: string;
    duration: string;
    image: string;
    href: string;
}

export const guideTopDestinations: GuideTopDestination[] = [
    {
        name: 'Mount Everest',
        subtitle: 'Highest Peak on Earth',
        province: 'Koshi Province',
        duration: '12–16 Days',
        image: IMAGES.guide.everest,
        href: itineraryPageHref,
    },
    {
        name: 'Pokhara',
        subtitle: 'Lakeside Paradise',
        province: 'Gandaki Province',
        duration: '2–5 Days',
        image: IMAGES.guide.pokhara,
        href: itineraryPageHref,
    },
    {
        name: 'Chitwan',
        subtitle: 'Wildlife Safari',
        province: 'Bagmati Province',
        duration: '2–3 Days',
        image: IMAGES.guide.chitwan,
        href: itineraryPageHref,
    },
];

export interface HomeTopDestination {
    name: string;
    subtitle: string;
    image: string;
    variant: 'sm' | 'lg';
}

export const homeTopDestinations: HomeTopDestination[] = [
    {
        name: 'Tilicho Lake',
        subtitle: 'Scenic Lake',
        image: IMAGES.featured.tilichoLake,
        variant: 'sm',
    },
    {
        name: 'Mount Everest',
        subtitle: 'Highest Peak',
        image: IMAGES.featured.everestPrayerFlags,
        variant: 'lg',
    },
    {
        name: 'Gokyo Lake',
        subtitle: 'Sacred Lake',
        image: IMAGES.featured.gokyoLake,
        variant: 'sm',
    },
];

export const topDestinationsHeading = "Explore Nepal's Top Destinations";

export const journeyImageAlt = 'Journey Nepal';

export interface DestinationHeroSlide {
    name: string;
    image: string;
    /**
     * Exact overlay geometry that covers a title baked into the source
     * image (measured in source-image pixels). Rendered as an SVG overlay
     * with `preserveAspectRatio="slice"`, so it tracks the image
     * pixel-perfectly on any screen, like the image itself.
     */
    titleOverlay?: {
        viewBox: string;
        /** Baseline anchor: center-x + alphabetic baseline in viewBox units. */
        x: number;
        y: number;
        fontSize: number;
        /** Horizontal squeeze applied about x so advance width fits. */
        scaleX: number;
        color: string;
    };
}

/** Time each destination hero slide stays on screen before rotating. */
export const destinationHeroSlideIntervalMs = 5000;

export const destinationHeroSlides: DestinationHeroSlide[] = [
    {
        name: 'Ama Dablam',
        image: IMAGES.destination.hero.amaDablam,
        // Pixel-measured from hero/ama_dablam.png (2928x1916): title sits
        // in the transparent sky, baseline y 704, color #334155. Same EB
        // Garamond overlay technique as before, scaled from the original
        // 1440x958 panorama geometry (x2.033).
        titleOverlay: {
            viewBox: '0 0 2928 1916',
            x: 1470,
            y: 704,
            fontSize: 514,
            scaleX: 0.9851,
            color: '#334155',
        },
    },
    {
        name: 'Chitwan',
        image: IMAGES.destination.hero.chitwan,
        // Pixel-measured from hero/chitwan.png (2880x1940): jungle top
        // starts ~row 464; baseline sits just below the sky line so the
        // title bottom tucks slightly behind the trees.
        titleOverlay: {
            viewBox: '0 0 2880 1940',
            x: 1440,
            y: 500,
            fontSize: 514,
            scaleX: 1,
            color: '#334155',
        },
    },
    {
        name: 'Pokhara',
        image: IMAGES.destination.hero.pokhara,
        // Pixel-measured from hero/pokhara.png (2880x1940): mountain tops
        // start ~row 742, title seated in the sky zone like Ama Dablam.
        titleOverlay: {
            viewBox: '0 0 2880 1940',
            x: 1440,
            y: 690,
            fontSize: 514,
            scaleX: 1,
            color: '#334155',
        },
    },
];
