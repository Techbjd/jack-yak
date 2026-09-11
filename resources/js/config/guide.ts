// ============================================
// Guide — page content
// ============================================
// Copy + card data live here so components stay pure UI.
// Backend can replace these arrays later without touching components.
//
// NOTE: exploreCards / planSteps reference Lucide icon components
// directly (same imports the components used before — values moved,
// nothing added). If a card needs no icon, use image + imageAlt instead.
// ============================================

import type { LucideIcon } from 'lucide-react';
import { ClipboardList, Compass, Map, Mountain } from 'lucide-react';
import { IMAGES } from './images';

export interface TrustItem {
    label: string;
    image: string;
}

/** Trust strip — partner/category badges under the stories section */
export const trustItems: TrustItem[] = [
    {
        label: 'UNESCO Heritage Sites',
        image: IMAGES.destination.icons.heritage,
    },
    { label: 'Nepal Tourism', image: IMAGES.icons.travelling },
    { label: 'National Parks', image: IMAGES.icons.nationalPark },
    { label: 'Adventure Activities', image: IMAGES.icons.advanture },
    { label: 'Wildlife Experiences', image: IMAGES.icons.wildlife },
    { label: 'Local Communities', image: IMAGES.icons.localCommunication },
];

export interface ExploreCard {
    title: string;
    description: string;
    Icon?: LucideIcon;
    image?: string;
    imageAlt?: string;
}

/** Why-explore cards — 2 icon cards + 2 image cards, order matters */
export const exploreCards: ExploreCard[] = [
    {
        title: 'Mountain Guides',
        description:
            "Explore Everest, Annapurna, Langtang, and Nepal's most spectacular Himalayan trails.",
        Icon: Mountain,
    },
    {
        title: 'Travel Planning',
        description:
            'Find destinations based on your interests, season, budget, and travel style.',
        Icon: ClipboardList,
    },
    {
        title: 'Culture & Heritage',
        description:
            "Learn about Nepal's ancient temples, festivals, local traditions, and UNESCO sites.",
        image: IMAGES.destination.icons.heritage,
        imageAlt: 'Heritage site icon',
    },
    {
        title: 'Wildlife & Nature',
        description:
            'Discover jungle safaris, national parks, rare wildlife, and peaceful natural escapes.',
        image: IMAGES.destination.icons.safari,
        imageAlt: 'Safari icon',
    },
];

export interface PlanStep {
    index: string;
    title: string;
    description: string;
    Icon: LucideIcon;
}

/** Plan-trip steps — numbered 01–03, order matters */
export const planSteps: PlanStep[] = [
    {
        index: '01',
        title: 'Choose Your Travel Style',
        description:
            'Adventure, wildlife, culture, photography, or relaxation — you decide.',
        Icon: Mountain,
    },
    {
        index: '02',
        title: 'Discover Perfect Destinations',
        description:
            'Receive personalized recommendations based on your preferences.',
        Icon: Map,
    },
    {
        index: '03',
        title: 'Explore with Confidence',
        description:
            'Access guides, travel tips, permits, weather, and local insights before your journey.',
        Icon: Compass,
    },
];
