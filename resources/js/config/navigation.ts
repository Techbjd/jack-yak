export interface NavItem {
    label: string;
    href: string;
}

export const desktopNav: NavItem[] = [
    { label: 'Destination', href: '/destinations' },
    { label: 'Guides', href: '/guide' },
    { label: 'About', href: '/about' },
] as const;

export const mobileNav: NavItem[] = [
    { label: 'Home', href: '/home' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Guides', href: '/guide' },
    { label: 'About', href: '/about' },
    { label: 'Find My Trip', href: '/form' },
    { label: 'View All', href: '/view-all' },
    { label: 'Profile', href: '/user' },
] as const;

export interface FooterColumnData {
    title: string;
    links: string[];
}

/** Footer link columns (used by shared/Footer, mobile + desktop) */
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
