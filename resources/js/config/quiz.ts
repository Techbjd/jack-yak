export interface QuizSelectQuestion {
    id: 'experience' | 'companion' | 'duration';
    question: string;
    placeholder: string;
    options: string[];
}
export interface QuizSegmentQuestion {
    id: 'activity' | 'season';
    question: string;
    options: string[];
}

export const quizEndpoint = '/quiz';

export const quizFormCopy = {
    successTitle: 'Request received!',
    savedFor: 'We saved it for',
    anonymousLabel: 'you',
    browseLabel: 'Browse destinations',
    activityLabel: 'View my activity',
    signInLabel: 'Sign in to track it',
    guestPrefix: 'Tip: ',
    guestSuffix: 'to track your recommendations in your profile.',
    nameLabel: 'Enter your Name',
    namePlaceholder: 'Enter your name',
    emailLabel: 'Enter your Email',
    emailPlaceholder: 'Enter your email',
    submit: 'Find My Destination',
    sending: 'Sending…',
    note: 'We’ll send your personalized recommendations to your email.',
};

export const quizHero = {
    panelAlt: 'Snow-covered Langtang peaks under a clear sky',
    logoAlt: 'JackYak',
    tagline: 'Find your perfect destination in Nepal',
} as const;

export const quizSelectQuestions: QuizSelectQuestion[] = [
    {
        id: 'experience',
        question: '1. What kind of experience are you looking for?',
        placeholder: 'Select an option',
        options: [
            'Trekking & Hiking',
            'Cultural Heritage',
            'Wildlife Safari',
            'Lakeside Retreat',
            'Spiritual Journey',
            'Adventure Sports',
        ],
    },
    {
        id: 'companion',
        question: '2. Who are you travelling with?',
        placeholder: 'Select an option',
        options: ['Solo', 'Partner', 'Family', 'Friends', 'Group Tour'],
    },
    {
        id: 'duration',
        question: '3. How many days are you planning?',
        placeholder: 'Select an option',
        options: ['1–3 Days', '4–7 Days', '8–12 Days', '13+ Days'],
    },
];

export const quizSegmentQuestions: QuizSegmentQuestion[] = [
    {
        id: 'activity',
        question: '4. What is your activity level?',
        options: ['Relaxed', 'Moderate', 'Active', 'Adventure'],
    },
    {
        id: 'season',
        question: '5. Which season are you travelling?',
        options: ['Spring', 'Summer', 'Autumn', 'Winter'],
    },
];

export type QuizAnswers = Record<string, string>;
