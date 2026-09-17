export const reviewPlaces: string[] = [
    'Mount Everest',
    'Pokhara',
    'Chitwan National Park',
    'Lumbini',
    'Kathmandu Durbar Square',
    'Langtang Valley',
    'Annapurna Circuit',
    'Bhaktapur',
];

export const MAX_REVIEW_LENGTH = 1000;

export const MAX_REVIEW_PHOTOS = 5;

export const REVIEW_STAR_COUNT = 5;

export const reviewsEndpoint = '/reviews';

export const giveReviewCopy = {
    dialogLabel: 'Give a review',
    title: 'Give a Review',
    intro: 'Share your experience and help others discover the best of Nepal.',
    guestSuffix:
        'to track this review in your profile, or continue as guest.',
    rateStep: '1. Rate Your Experience',
    ratingLabel: 'Star rating',
    unratedHint: 'Tap a star to rate.',
    reviewStep: '2. Share your experience',
    reviewPlaceholder: 'Write your review here....',
    uploadLabel: 'Upload review photos',
    dropHint: 'Drag your file(s) to start uploading',
    orDivider: 'OR',
    browseFiles: 'Browse files',
    imageFilesOnly: 'Please choose image files.',
    placeStep: '4. What is this review about?',
    placePlaceholder: 'Select a place',
    visitStep: '5. When did you visit?',
    nameLabel: 'Your name',
    namePlaceholder: 'Enter Your Name',
    agreeLabel: 'I agree to the Community Guidelines',
    agreeRequired: 'Please agree to the Community Guidelines.',
    submit: 'Submit',
    successTitle: 'Thank you!',
    doneLabel: 'Done',
    reviewsLabel: 'View my reviews',
    signInLabel: 'Sign in to track reviews',
};

export const rateActionLabel = (star: number): string =>
    `Rate ${star} star${star > 1 ? 's' : ''}`;

export const ratedLabel = (rating: number): string =>
    `You rated ${rating} star${rating > 1 ? 's' : ''}.`;

export const photosStepLabel = (max: number): string =>
    `3. Add Photos (Optional, max ${max})`;

export const photoLimitError = (max: number): string =>
    `You can add up to ${max} photos.`;

export const removePhotoLabel = (name: string): string => `Remove ${name}`;

export const reviewSuccessMessage = (rating: number): string =>
    `Your ${rating}-star review helps others discover the best of Nepal.`;
