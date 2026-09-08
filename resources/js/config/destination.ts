// ============================================
// Destination Page Data — Single Source of Truth
// ============================================
// Edit content here → all destination components update.
// Desktop layouts reuse the same data as mobile.
// ============================================

export interface DestinationCard {
    name: string;
    province: string;
    image: string;
}

/** Popular destinations — desktop shows all 5, mobile scrolls */
export const popularDestinations: DestinationCard[] = [
    {
        name: 'Mount Everest (Sagarmatha)',
        province: 'Koshi Province',
        image: '/Group_36.png',
    },
    {
        name: 'Langtang Valley',
        province: 'Bagmati Province',
        image: '/Group_35.png',
    },
    {
        name: 'Pokhara',
        province: 'Gandaki Province',
        image: '/Group_37.png',
    },
    {
        name: 'Mardi Himal',
        province: 'Gandaki Province',
        image: '/Group_35.png',
    },
    {
        name: 'Mustang (Upper Mustang)',
        province: 'Gandaki Province',
        image: '/Group_36.png',
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
