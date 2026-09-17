import type { LucideIcon } from 'lucide-react';
import { ClipboardList, Compass, Map, Mountain } from 'lucide-react';
import { IMAGES } from './images';

export interface TrustItem {
    label: string;
    image: string;
}

export const guideSectionShell = 'bg-surface-warm w-full';

export const whyExploreHeader = {
    eyebrow: 'Discover Nepal',
    title: 'Why Explore with Jackyak',
    side: 'Helping you discover Nepal through trusted guides, local insights, and unforgettable destinations.',
} as const;

export const guideTopHeader = {
    eyebrow: 'Featured',
    title: 'Top Destinations',
    link: 'View all destinations',
    nextLabel: 'Next destinations',
} as const;

export const planTripHeader = {
    eyebrow: 'Start Here',
    title: 'Plan Your Trip in 3 Easy Steps',
} as const;

export const travelStoriesCopy = {
    eyebrow: 'Travel Stories',
    title: 'What Travelers Love About Nepal',
    quote: 'Watching the sunrise over the Himalayas from Poon Hill was one of the most unforgettable moments of my life.',
    name: 'Ken San',
    country: 'Japan',
    avatar: IMAGES.about.travelerAvatar,
} as const;

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

export interface PlanStepImage {
    src: string;
    alt: string;
}

export const planStepSlideIntervalMs = 5000;

export const planStepImages: PlanStepImage[] = [
    {
        src: IMAGES.about.luklaFlight,
        alt: 'Flight landing at Lukla airport',
    },
    {
        src: IMAGES.about.pokharaLakeside,
        alt: 'Phewa Lake and boats in Pokhara',
    },
    {
        src: IMAGES.about.chitwanSafari,
        alt: 'Rhino and jungle safari in Chitwan',
    },
];
