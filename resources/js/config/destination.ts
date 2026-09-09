// ============================================
// Destination Page Data — Single Source of Truth
// ============================================
// Edit content here → all destination components update.
// Desktop shows the 5 shared cards; mobile scrolls all 7 (incl. 2 mobile-only extras).
// ============================================

export interface DestinationCard {
    name: string;
    province: string;
    image: string;
    /** Mobile-only extras — hidden on desktop */
    mobileOnly?: boolean;
}

/** Popular destinations — 5 shared + 2 mobile-only extras */
export const popularDestinations: DestinationCard[] = [
    {
        name: 'Mount Everest (Sagarmatha)',
        province: 'Koshi Province',
        image: '/destination/mount_everest.png',
    },
    {
        name: 'Langtang Valley',
        province: 'Bagmati Province',
        image: '/destination/langtang_mountain.png',
    },
    {
        name: 'Pokhara',
        province: 'Gandaki Province',
        image: '/destination/pokhara_lake.png',
    },
    {
        name: 'Mardi Himal',
        province: 'Gandaki Province',
        image: '/destination/Mardi_mountain.png',
    },
    {
        name: 'Mustang (Upper Mustang)',
        province: 'Gandaki Province',
        image: '/destination/upper_mustang.png',
    },
    {
        name: 'Chitwan Rhino',
        province: 'Terai Region',
        image: '/destination/mobile_rihno.png',
        mobileOnly: true,
    },
    {
        name: 'Kathmandu Temple',
        province: 'Bagmati Province',
        image: '/destination/mobile_temple.png',
        mobileOnly: true,
    },
];

/** Featured destinations filter tabs */
export const featuredTabs: string[] = [
    'All',
    'Trekking',
    'Safari',
    'Spiritual',
    'Heritage',
    'Lakes',
];

/** Featured tab icons — Figma artwork in public/destination/ */
export const featuredTabIcons: Record<string, string> = {
    All: '/destination/icon-all.png',
    Trekking: '/destination/icon-treaking.png',
    Safari: '/destination/icon-safari.png',
    Spiritual: '/destination/icon-spritual.png',
    Heritage: '/destination/icon-heritage.png',
    Lakes: '/destination/icon-lake.png',
};

export interface FeaturedCard {
    src: string;
    label: string;
    /** Desktop card portrait ratio from Figma */
    ratio: string;
    /** Desktop mosaic span (full literal so Tailwind scans it) */
    span: string;
}

/** Featured grid — 2-col uniform on mobile, mosaic on desktop */
export const featuredCards: FeaturedCard[] = [
    {
        src: '/Group_35.png',
        label: 'Elephant Safari',
        ratio: '292 / 350',
        span: 'md:col-span-3',
    },
    {
        src: '/Group_36.png',
        label: 'Jeep Safari',
        ratio: '606 / 351',
        span: 'md:col-span-6',
    },
    {
        src: '/Group_37.png',
        label: 'Canoe Safari',
        ratio: '292 / 350',
        span: 'md:col-span-3',
    },
    {
        src: '/discover-nepal-1.png',
        label: 'Bird Watching Safari',
        ratio: '506 / 351',
        span: 'md:col-span-5',
    },
    {
        src: '/discover-nepal-2.png',
        label: 'Crocodile Watching',
        ratio: '394 / 349',
        span: 'md:col-span-4',
    },
    {
        src: '/Group_35.png',
        label: 'Tiger Tracking',
        ratio: '292 / 350',
        span: 'md:col-span-3',
    },
];
