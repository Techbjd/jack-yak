export interface AboutJackyakInfoBlock {
    title: string;
    body: string;
}

export const homeHero = {
    title: 'The World Above the Clouds',
    body: 'Nestled in the heart of the Himalayas, Nepal is a land of majestic mountains, rich heritage, and adventures unlike anywhere else.',
    cta: 'Explore Nepal',
    ctaLabel: 'Explore Nepal - find your destination',
} as const;

export const mapQuote =
    '\u201cBetween 80°E and 88°E longitude lies the world’s most vertical country — a land containing everything from tiger-haunted jungle to the roof of the world, compressed into a strip of earth 800 kilometres wide.\u201d';

export const aboutJackyakIntro = {
    heading: 'About Jackyak',
    body: 'JackYak is your trusted travel companion for exploring Nepal. Discover curated trekking itineraries, hidden destinations, local culture, and unforgettable adventures—from the Himalayas to the Terai. From Everest to the Terai, experience Nepal through carefully crafted journeys.',
} as const;

export const discoverNepalCopy = {
    heading: 'Discover the Beauty of Nepal',
    body: 'From snow-capped peaks and peaceful lakes to ancient heritage sites and vibrant local communities, Nepal offers experiences unlike anywhere else.',
    cta: 'Start Your Journey',
    modalLabel: 'Find your destination',
    modalTitle: 'Find your perfect destination in Nepal',
    imageAltMain: 'Stone cairn before snowy peaks',
    imageAltSecondary: 'Himalayan peak at dusk',
} as const;

export const topDestinationsHeading = "Explore Nepal's Top Destinations";

export const mountainDividerAlt = 'Mountain Image';

export const aboutJackyakInfoBlocks: AboutJackyakInfoBlock[] = [
    {
        title: 'Popular Destinations',
        body: 'Discover breathtaking mountains, serene lakes, ancient heritage sites, lush national parks, and vibrant cities across Nepal. Every destination offers a unique adventure waiting to be explored.',
    },
    {
        title: 'Travel Tips',
        body: 'Find essential information on the best seasons to visit, packing guides, permits, transportation, budgeting, and safety tips before you travel.',
    },
];
