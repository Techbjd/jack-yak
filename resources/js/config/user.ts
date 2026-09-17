export interface UserSavedRow {
    id: string;
    label: string;
    count: number;
}

export interface UserSettingRow {
    id: string;
    label: string;
    value?: string;
}

export const userProfile = {
    name: 'Name',
    email: 'Email',
} as const;

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

export const settingsCardCopy = {
    title: 'Settings',
} as const;

export const signOutCopy = {
    label: 'Sign Out',
} as const;

export const userSaved: UserSavedRow[] = [
    { id: 'destinations', label: 'Saved Destinations', count: 12 },
    { id: 'itineraries', label: 'Saved Itineraries', count: 4 },
];

export const userSettings: UserSettingRow[] = [
    { id: 'account', label: 'Account Settings' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'language', label: 'Language', value: 'English' },
];
