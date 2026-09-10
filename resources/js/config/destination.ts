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

export interface ViewAllDestination {
    name: string;
    tagline: string;
    province: string;
    days: string;
    image: string;
}

/** View-all listing — 15 cards (5 rows × 3 on mobile Figma) */
export const viewAllDestinations: ViewAllDestination[] = [
    {
        name: 'Mount Everest',
        tagline: 'Highest Peak',
        province: 'Koshi Province',
        days: '12–16 Days',
        image: IMAGES.destination.mountEverest,
    },
    {
        name: 'Swayambhu Stupa',
        tagline: 'Heritage Site',
        province: 'Bagmati Province',
        days: '1–2 Days',
        image: IMAGES.destination.swayambhuStupa,
    },
    {
        name: 'Pokhara Lakeside',
        tagline: 'Lake City',
        province: 'Gandaki Province',
        days: '3–5 Days',
        image: IMAGES.destination.pokharaLake,
    },
    {
        name: 'Langtang Valley',
        tagline: 'Glacier Valley',
        province: 'Bagmati Province',
        days: '7–10 Days',
        image: IMAGES.destination.langtangMountain,
    },
    {
        name: 'Mardi Himal',
        tagline: 'Ridge Trek',
        province: 'Gandaki Province',
        days: '5–7 Days',
        image: IMAGES.destination.mardiHimal,
    },
    {
        name: 'Upper Mustang',
        tagline: 'Forbidden Kingdom',
        province: 'Gandaki Province',
        days: '10–14 Days',
        image: IMAGES.destination.upperMustang,
    },
    {
        name: 'Chitwan Safari',
        tagline: 'Wildlife Safari',
        province: 'Terai Region',
        days: '2–3 Days',
        image: IMAGES.destination.chitwanRhino,
    },
    {
        name: 'Kathmandu Durbar',
        tagline: 'Heritage Sites',
        province: 'Bagmati Province',
        days: '2–3 Days',
        image: IMAGES.destination.kathmanduTemple,
    },
    {
        name: 'Stupa Panorama',
        tagline: 'Mountain Views',
        province: 'Bagmati Province',
        days: '1–2 Days',
        image: IMAGES.destination.stupaPanorama,
    },
    {
        name: 'Elephant Safari',
        tagline: 'Jungle Safari',
        province: 'Terai Region',
        days: '1–2 Days',
        image: IMAGES.destination.featured.elephantSafari,
    },
    {
        name: 'Jeep Safari',
        tagline: 'Jungle Safari',
        province: 'Terai Region',
        days: '1–2 Days',
        image: IMAGES.destination.featured.jeepSafari,
    },
    {
        name: 'Canoe Safari',
        tagline: 'River Safari',
        province: 'Terai Region',
        days: '1–2 Days',
        image: IMAGES.destination.featured.canoeSafari,
    },
    {
        name: 'Tilicho Lake',
        tagline: 'Highest Lake',
        province: 'Gandaki Province',
        days: '8–12 Days',
        image: IMAGES.featured.tilichoLake,
    },
    {
        name: 'Everest Flags',
        tagline: 'Prayer Flags',
        province: 'Koshi Province',
        days: '12–16 Days',
        image: IMAGES.featured.everestPrayerFlags,
    },
    {
        name: 'Gokyo Lakes',
        tagline: 'Turquoise Lakes',
        province: 'Koshi Province',
        days: '10–13 Days',
        image: IMAGES.featured.gokyoLake,
    },
];
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
