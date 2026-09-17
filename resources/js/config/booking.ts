export const availabilityEndpoint = '/availability';

export const availabilityMaxTravelers = 16;

export const availabilityCopy = {
    dialogLabel: 'Check availability',
    title: 'Check Availability',
    intro: 'Select your dates and number of travelers to check availability.',
    guestSuffix:
        'to track this request in your profile, or continue as guest.',
    dateLabel: 'Select Date',
    travelersLabel: 'Number of Travelers',
    fewerLabel: 'One fewer traveler',
    moreLabel: 'One more traveler',
    durationLabel: 'Trip Duration (Optional)',
    durationPlaceholder: 'Select Duration',
    activityLabel: 'Looking for (Optional)',
    activityPlaceholder: 'Select activity or trip',
    privacyLead: 'Your information is',
    privacySafe: 'safe',
    privacyTail: 'with JackYak.',
    submit: 'Submit',
    successTitle: 'Request received!',
    successTail: 'We’ll confirm availability by email.',
    doneLabel: 'Done',
    requestsLabel: 'View my requests',
    signInLabel: 'Sign in to track requests',
};

export function travelerUnit(count: number, capitalize = false): string {
    const unit = count === 1 ? 'traveller' : 'travellers';
    if (!capitalize) {
        return unit;
    }
    return unit.charAt(0).toUpperCase() + unit.slice(1);
}
