export interface UserSettingRow {
    id: string;
    label: string;
    value?: string;
}

export const profileCardCopy = {
    editLabel: 'Edit Profile',
    guestName: 'Traveler',
    guestEmail: 'Sign in to sync your profile',
} as const;

export const savedCardCopy = {
    title: 'Saved',
    subtitle: 'Your requests, reviews, and trip-finder activity',
    latestAvailability: 'Latest availability',
    latestReviews: 'Latest reviews',
} as const;

export const savedCardRows = [
    { id: 'destinations', label: 'Saved Destinations', count: 0 },
    { id: 'itineraries', label: 'Saved Itineraries', count: 0 },
] as const;

export const settingsCardCopy = {
    title: 'Settings',
} as const;

export const signOutCopy = {
    label: 'Sign Out',
} as const;

export const userSettings: UserSettingRow[] = [
    { id: 'account', label: 'Account Settings' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'language', label: 'Language', value: 'English' },
];
