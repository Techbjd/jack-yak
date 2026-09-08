export interface NavItem {
    label: string;
    href: string;
}

export const desktopNav: NavItem[] = [
    { label: 'Destination', href: '#destination' },
    { label: 'Guides', href: '#guides' },
    { label: 'About', href: '#about' },
] as const;

export const mobileNav: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Destinations', href: '#destination' },
    { label: 'Guides', href: '#guides' },
    { label: 'About', href: '#about' },
    { label: 'Favorites', href: '#favorites' },
    { label: 'Search', href: '#search' },
    { label: 'Profile', href: '#profile' },
] as const;
