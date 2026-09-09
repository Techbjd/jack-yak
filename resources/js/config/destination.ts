// ============================================
// Destination Page Data — Single Source of Truth
// ============================================
// Edit content here → all destination components update.
// Desktop shows the 5 shared cards; mobile scrolls all 7 (incl. 2 mobile-only extras).
// Image URLs come from @/config/images (IMAGES registry).
// ============================================

import { IMAGES } from './images';

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
        image: IMAGES.destination.mountEverest,
    },
    {
        name: 'Langtang Valley',
        province: 'Bagmati Province',
        image: IMAGES.destination.langtangMountain,
    },
    {
        name: 'Pokhara',
        province: 'Gandaki Province',
        image: IMAGES.destination.pokharaLake,
    },
    {
        name: 'Mardi Himal',
        province: 'Gandaki Province',
        image: IMAGES.destination.mardiHimal,
    },
    {
        name: 'Mustang (Upper Mustang)',
        province: 'Gandaki Province',
        image: IMAGES.destination.upperMustang,
    },
    {
        name: 'Chitwan Rhino',
        province: 'Terai Region',
        image: IMAGES.destination.chitwanRhino,
        mobileOnly: true,
    },
    {
        name: 'Kathmandu Temple',
        province: 'Bagmati Province',
        image: IMAGES.destination.kathmanduTemple,
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

/** Featured tab icons — Figma artwork (@/config/images registry) */
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
    /** Desktop card portrait ratio from Figma */
    ratio: string;
    /** Desktop mosaic span (full literal so Tailwind scans it) */
    span: string;
}

/** Featured grid — 2-col uniform on mobile, mosaic on desktop */




export const destinationFeaturedCards: FeaturedCard[] = [
    {
        src: IMAGES.destination.featured.elephantSafari,
        label: 'Elephant Safari',
        ratio: '292 / 350',
        span: 'md:col-span-3',
    },
    {
        src: IMAGES.destination.featured.jeepSafari,
        label: 'Jeep Safari',
        ratio: '606 / 351',
        span: 'md:col-span-6',
    },
    {
        src: IMAGES.destination.featured.canoeSafari,
        label: 'Canoe Safari',
        ratio: '292 / 350',
        span: 'md:col-span-3',
    },
    {
        src: IMAGES.destination.featured.birdWatchingSafari,
        label: 'Bird Watching Safari',
        ratio: '506 / 351',
        span: 'md:col-span-5',
    },
    {
        src: IMAGES.destination.featured.crocodileWatching,
        label: 'Crocodile Watching',
        ratio: '394 / 349',
        span: 'md:col-span-4',
    },
    {
        src: IMAGES.destination.featured.tigerWatching,
        label: 'Tiger Tracking',
        ratio: '292 / 350',
        span: 'md:col-span-3',
    },
];
