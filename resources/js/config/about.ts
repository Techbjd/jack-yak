import { IMAGES } from './images';

export interface AboutPillar {
    title: string;
    body: string;
}

export const aboutHeroTitleText = 'ABOUT US';

export interface AboutHeroSlide {
    image: string;
    alt: string;
}

export const aboutHeroSlideIntervalMs = 5000;

export const aboutHeroSlides: AboutHeroSlide[] = [
    {
        image: IMAGES.about.heroSlides[0],
        alt: 'Travellers trekking beneath Himalayan peaks',
    },
    {
        image: IMAGES.about.heroSlides[1],
        alt: 'Prayer flags fluttering over a mountain valley',
    },
    {
        image: IMAGES.about.heroSlides[2],
        alt: 'Lakeside town beneath the Annapurna range',
    },
];

export const aboutDifferenceCopy = {
    heading: 'Why Choosing JackYak makes all the Difference',
    imageAltMobile: 'Decorated yaks by a mountain lake',
    imageAltDesktop: 'Snowy Himalayan peak under a clear sky',
} as const;

export const aboutStoryCopy = {
    heading: 'Why JackYak Makes Every Journey Better ?',
    planImageAlt: 'Cyclist on a high Himalayan trail',
} as const;

export const aboutDifferenceParagraphs: string[] = [
    'Nepal is a country of remarkable diversity, where every mountain trail, ancient temple, peaceful lake, and vibrant village has a story waiting to be discovered. JackYak was created to bring those stories closer to travelers through reliable information, authentic local insights, and carefully crafted travel experiences.',
    'Instead of simply showing you where to go, we help you understand what makes each destination unique, empowering you to travel with confidence, respect local cultures, and create unforgettable memories along the way.',
];

export const aboutStoryIntro: string =
    'Instead of simply showing you where to go, we help you understand what makes each destination unique, empowering you to travel with confidence, respect local cultures, and create unforgettable memories along the way.';

export const aboutPillars: AboutPillar[] = [
    {
        title: 'A Passion for Authentic Exploration',
        body: 'JackYak was created with one simple vision: to help travelers experience the true essence of Nepal. We believe that every journey should be more than just visiting famous landmarks—it should be about discovering cultures, connecting with local communities, and creating memories that last a lifetime.',
    },
    {
        title: 'Travel Designed Around You',
        body: 'No two travelers are the same, and neither are their adventures. Whether you are seeking thrilling mountain expeditions, cultural discoveries, family vacations, wildlife encounters, or peaceful escapes, JackYak helps you find destinations that match your interests and travel style.',
    },
    {
        title: 'Inspired by Nepal, Built for Every Traveler',
        body: 'Nepal is a country of extraordinary diversity, where breathtaking landscapes, rich cultural traditions, and warm hospitality come together in remarkable ways. At JackYak, our mission is to showcase this incredible diversity through authentic storytelling, reliable travel information, and carefully curated recommendations.',
    },
];

export const aboutPlanTitle: string =
    'Let’s plan your next Nepal adventure together.';

export const aboutNewsletter = {
    title: 'Stay Inspired with JackYak',
    subtitle: 'Join the mailing list for our newsletter.',
    button: 'email address',
    emailLabel: 'Email address',
    successPlaceholder: 'You are on the list!',
    emailRequired: 'Email is required.',
    emailInvalid: 'Please enter a valid email address.',
} as const;
