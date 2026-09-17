import { siteRoutes } from './site';

export interface NavItem {
    label: string;
    href: string;
}

export const desktopNav: NavItem[] = [
    { label: 'Destination', href: siteRoutes.destinations },
    { label: 'Guides', href: siteRoutes.guide },
    { label: 'About', href: siteRoutes.about },
] as const;

export const mobileNav: NavItem[] = [
    { label: 'Home', href: siteRoutes.home },
    { label: 'Destinations', href: siteRoutes.destinations },
    { label: 'Guides', href: siteRoutes.guide },
    { label: 'About', href: siteRoutes.about },
    { label: 'Favorities', href: siteRoutes.quiz },
    { label: 'Search', href: siteRoutes.viewAll },
    { label: 'Profile', href: siteRoutes.user },
] as const;

export interface FooterColumnData {
    title: string;
    links: string[];
}

export const footerColumns: FooterColumnData[] = [
    {
        title: 'Explore',
        links: [
            'Destinations',
            'Trek Routes',
            'National Parks',
            'Glacier Lakes',
            'Hidden Gems',
        ],
    },
    {
        title: 'Travel Guide',
        links: [
            'Travel Safety',
            'Permits & Regulations',
            'Weather & Seasons',
            'Packing Guide',
            'Transportation',
        ],
    },
    {
        title: 'Regions',
        links: [
            'Himalayas',
            'Hilly Region',
            'Terai',
            'UNESCO Heritage Sites',
            'Wildlife & Nature',
        ],
    },
    {
        title: 'Company',
        links: [
            'About JackYak',
            'Contact',
            'Privacy Policy',
            'Terms & Conditions',
            'FAQs',
        ],
    },
];
