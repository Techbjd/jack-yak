import { IMAGES } from './images';

export interface ItineraryDay {
    day: string;
    place: string;
    subtitle: string;
    image: string;
    stay: string;
    meals: string;
}

export const itineraryDays: ItineraryDay[] = [
    {
        day: 'Day 01',
        place: 'Kathmandu',
        subtitle: 'Arrival . Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
        stay: 'Hotel',
        meals: 'Dinner',
    },
    {
        day: 'Day 02',
        place: 'Lukla → Phakding',
        subtitle: 'Arrival . Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
        stay: 'Hotel',
        meals: 'B • L • D',
    },
    {
        day: 'Day 03',
        place: 'Namche Bazaar',
        subtitle: 'Arrival . Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
        stay: 'Hotel',
        meals: 'B • L • D',
    },
    {
        day: 'Day 04',
        place: 'Acclimatization',
        subtitle: 'Arrival . Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
        stay: 'Hotel',
        meals: 'B • L • D',
    },
    {
        day: 'Day 05',
        place: 'Tengboche',
        subtitle: 'Arrival . Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
        stay: 'Hotel',
        meals: 'B • L • D',
    },
    {
        day: 'Day 06',
        place: 'Dingboche',
        subtitle: 'Arrival . Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
        stay: 'Hotel',
        meals: 'B • L • D',
    },
    {
        day: 'Day 07',
        place: 'Acclimatization',
        subtitle: 'Arrival . Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
        stay: 'Hotel',
        meals: 'B • L • D',
    },
    {
        day: 'Day 08',
        place: 'Lobuche',
        subtitle: 'Arrival . Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
        stay: 'Hotel',
        meals: 'B • L • D',
    },
    {
        day: 'Day 09',
        place: 'Everest Base Camp',
        subtitle: 'Arrival . Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
        stay: 'Hotel',
        meals: 'B • L • D',
    },
    {
        day: 'Day 10',
        place: 'Kala Patthar',
        subtitle: 'Arrival . Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
        stay: 'Hotel',
        meals: 'B • L • D',
    },
    {
        day: 'Day 11',
        place: 'Return to Lukla',
        subtitle: 'Arrival . Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
        stay: 'Hotel',
        meals: 'B • L • D',
    },
    {
        day: 'Day 12',
        place: 'Kathmandu',
        subtitle: 'Arrival . Welcome Dinner',
        image: IMAGES.itinerary.dayThumb,
        stay: 'Hotel',
        meals: 'B • L • D',
    },
];

export const trekAbout = {
    title: 'About the Everest Base Camp Trek',
    intro: 'Most people planning a trip to Nepal start with the same question: “Is Nepal really for me?”',
    belief: 'At JackYak, we believe Nepal isn’t just for experienced trekkers or adventure seekers. Whether you want to walk through mountain trails, explore ancient cities, discover peaceful lakes, experience jungle wildlife, or simply see the Himalayas up close, there’s a side of Nepal waiting for you.',
    body: 'You don’t need to climb Everest or spend weeks in the mountains to experience what makes Nepal special. You can stand beneath some of the world’s highest peaks, watch the sunrise over the Himalayas, wander through centuries-old streets, explore the jungles of Chitwan, or relax beside the lakes of Pokhara.',
    highlight: 'What matters is choosing the right experience for you.',
    closing:
        'JackYak brings Nepal’s destinations, culture, people, trails, and travel information together in one place — helping you understand where to go, what to expect, and how to make your journey truly yours. Nepal is more than a destination on a map. It’s a journey you remember long after you leave.',
    readMore: 'Read More',
    readLess: 'Read Less',
};

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

export const galleryFilters = {
    gallery: 'Trek gallery',
    galleryCount: 26,
    photos: 'Traveller photos',
    photosCount: 100,
    videos: 'Videos',
    videosCount: 3,
};

export const galleryTiles = {
    viewAllPhotos: 'View all photos',
    travellerPhoto: 'Traveller photo',
    morePhotosCount: '+98',
    morePhotosLabel: 'Photos',
    watchVideos: 'Watch 3 traveller videos ›',
};

export const trekCta = {
    title: 'Ready to take your journey to new heights?',
    subtitle: 'Let the Himalayas change you forever.',
    button: 'PLAN YOUR ADVENTURE',
    image: IMAGES.itinerary.dayThumb,
};

export const trekWeather = {
    title: 'Weather on the Everest Base Camp Trek',
    dailyTab: 'Daily Temperature Variation',
    monthlyTab: 'Average Temperature (Month to Month)',
    tempIn: 'Temperature in:',
    unitCelsius: 'Celsius',
    unitFahrenheit: 'Fahrenheit',
    prevSlide: 'Previous slide',
    nextSlide: 'Next slide',
    daily: [
        { day: 'Day 1', meters: 1300, min: 5, max: 19 },
        { day: 'Day 2', meters: 2651, min: -10, max: 11 },
        { day: 'Day 3', meters: 3440, min: -15, max: 6 },
        { day: 'Day 4', meters: 3700, min: -15, max: 6 },
        { day: 'Day 5', meters: 3956, min: -17, max: 5 },
        { day: 'Day 6', meters: 4380, min: -18, max: 4 },
        { day: 'Day 7', meters: 4600, min: -20, max: 2 },
        { day: 'Day 8', meters: 4900, min: -22, max: 0 },
        { day: 'Day 9', meters: 5364, min: -25, max: -2 },
        { day: 'Day 10', meters: 5545, min: -26, max: -3 },
        { day: 'Day 11', meters: 2840, min: -8, max: 10 },
        { day: 'Day 12', meters: 1400, min: 4, max: 18 },
    ],
    months: [
        { month: 'January', high: -4, low: -18 },
        { month: 'February', high: -2, low: -16 },
        { month: 'March', high: 3, low: -11 },
        { month: 'April', high: 8, low: -6 },
        { month: 'May', high: 12, low: -2 },
        { month: 'June', high: 14, low: 1 },
        { month: 'July', high: 14, low: 2 },
        { month: 'August', high: 14, low: 2 },
        { month: 'September', high: 12, low: -1 },
        { month: 'October', high: 8, low: -7 },
        { month: 'November', high: 3, low: -12 },
        { month: 'December', high: -1, low: -16 },
    ],
};

export interface AltitudeStop {
    place: string;
    meters: number;
}

export const altitudeProfile: {
    unitMeter: string;
    unitFeet: string;
    download: string;
    downloadFile: string;
    stops: AltitudeStop[];
} = {
    unitMeter: 'Meter',
    unitFeet: 'Feet',
    download: 'Download',
    downloadFile: 'altitude-profile.svg',
    stops: [
        { place: 'Kathmandu', meters: 1400 },
        { place: 'Phakding', meters: 2650 },
        { place: 'Namche Bazaar', meters: 3440 },
        { place: 'Tengboche', meters: 3860 },
        { place: 'Dingboche', meters: 4280 },
        { place: 'Lobuche', meters: 4440 },
        { place: 'Kalapatthar', meters: 5545 },
        { place: 'Everest Base Camp', meters: 5364 },
        { place: 'Pangboche', meters: 3860 },
        { place: 'Lukla', meters: 2840 },
        { place: 'Kathmandu', meters: 1400 },
    ],
};

export const featuredReview = {
    name: 'Madeline Thomson',
    country: '· AUSTRALIA',
    date: '16th June 2026',
    title: 'the BEST EBC trek experience ever',
    metaPrefix: 'Review for Everest Base Camp Trek · ',
    metaLink: 'Book this trek',
    body: 'Our Everest Base Camp trek with JackYak went beyond every expectation we had. What first pulled us towards them…',
    seeMore: 'See more',
    avatar: IMAGES.itinerary.reviewerAvatar,
    photos: IMAGES.itinerary.reviewPhotos,
    photosLabel: 'Review photos',
};

export interface TrekReview {
    name: string;
    country: string;
    date: string;
    title: string;
    metaPrefix: string;
    metaLink: string;
    body: string;
    seeMore: string;
    avatar: string;
    photos: readonly string[];
    photosLabel: string;
}

export const trekReviews: TrekReview[] = [
    { ...featuredReview },
    {
        ...featuredReview,
        country: '· AMERICA',
    },
];
