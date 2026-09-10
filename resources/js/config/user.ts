// ============================================
// User — profile section content (Figma mobile + desktop)
// ============================================
// Copy + counts live here so components stay pure UI.
// Backend replaces these with the authenticated user later.
// ============================================

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
