// ============================================
// Itinerary Page Data — Single Source of Truth
// ============================================
// Edit content here → all itinerary components update.
// Image URLs come from @/config/images (IMAGES.itinerary registry).
// Heading uses the corrected spelling "Itinerary" (Figma: "Itenary").
// ============================================

import { IMAGES } from './images';

export interface ItineraryDay {
    day: string;
    place: string;
    subtitle: string;
    image: string;
}

/** 12-day Everest Base Camp trek plan */
export const itineraryDays: ItineraryDay[] = [
    {
        day: 'Day 01',
        place: 'Kathmandu',
        subtitle: 'Arrival · Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
    },
    {
        day: 'Day 02',
        place: 'Lukla → Phakding',
        subtitle: 'Arrival · Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
    },
    {
        day: 'Day 03',
        place: 'Kathmandu',
        subtitle: 'Arrival · Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
    },
    {
        day: 'Day 04',
        place: 'Kathmandu',
        subtitle: 'Arrival · Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
    },
    {
        day: 'Day 05',
        place: 'Kathmandu',
        subtitle: 'Arrival · Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
    },
    {
        day: 'Day 06',
        place: 'Kathmandu',
        subtitle: 'Arrival · Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
    },
    {
        day: 'Day 07',
        place: 'Kathmandu',
        subtitle: 'Arrival · Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
    },
    {
        day: 'Day 08',
        place: 'Kathmandu',
        subtitle: 'Arrival · Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
    },
    {
        day: 'Day 09',
        place: 'Kathmandu',
        subtitle: 'Arrival · Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
    },
    {
        day: 'Day 10',
        place: 'Kathmandu',
        subtitle: 'Arrival · Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
    },
    {
        day: 'Day 11',
        place: 'Kathmandu',
        subtitle: 'Arrival · Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
    },
    {
        day: 'Day 12',
        place: 'Kathmandu',
        subtitle: 'Arrival · Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
    },
];

/** About section copy (Read More reveals `more`) */
export const trekAbout = {
    title: 'About the Everest Base Camp Trek',
    intro: 'Most people planning a trip to Nepal start with the same question: “Is Nepal really for me?”',
    body: 'You don’t need to climb Everest or spend weeks in the mountains to experience what makes Nepal special. You can stand beneath some of the world’s highest peaks, watch the sunrise over the Himalayas, wander through centuries-old streets, explore the jungles of Chitwan, or relax beside the lakes of Pokhara.',
    more: 'From the vibrant streets of Kathmandu to the serene trails of the Annapurna region, every day brings a new landscape, a new culture, and a new story. Our local guides make sure you experience the very best of Nepal — safely and comfortably.',
    readMore: 'Read More',
    readLess: 'Read Less',
};

/** Booking card data */
export const trekBooking = {
    operator: 'Himalayan Adventure Treks',
    currencies: ['USD ($)', 'EUR (€)', 'GBP (£)'],
    priceLabel: 'Price Per person',
    price: 'USD $1456',
    wasPrice: 'USD $1894',
    reviewCount: '55 reviews',
    perks: ['Satisfied Client', 'Personalised Guide', 'Instant Response'],
    checkAvailability: 'Check Availability',
    giveReview: 'Give Review',
    whatsapp: 'Get Instant Response: +977-98******** (WhatsApp)',
};

/** Gallery filter pills */
export const galleryFilters = {
    gallery: 'Trek gallery',
    photos: 'Traveller photos',
    videos: 'Videos',
};

/** Featured review */
export const featuredReview = {
    name: 'Madeline Thomson',
    country: '· AUSTRALIA',
    date: '16th June 2026',
    title: 'the BEST EBC trek experience ever',
    meta: 'Review for Everest Base Camp Trek · Book this trek',
    body: 'Our Everest Base Camp trek with JackYak went beyond every expectation we had.',
    seeMore: 'See more',
    avatar: IMAGES.itinerary.reviewerAvatar,
    photos: IMAGES.itinerary.reviewPhotos,
    photosLabel: 'Review photos',
};
