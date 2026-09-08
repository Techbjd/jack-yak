import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { fontPrimary } from '@/config/theme';

interface FooterColumnData {
    title: string;
    links: string[];
}

const footerColumns: FooterColumnData[] = [
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

interface SocialIconProps {
    label: string;
    Icon: IconType;
    href?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ label, Icon, href = '#' }) => {
    return (
        <a
            href={href}
            aria-label={label}
            className="flex h-6 w-6 items-center justify-center text-white transition-colors hover:text-white"
        >
            <Icon size={24} />
        </a>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-navy text-white">
            {/* Torn-edge mask — swap with footer.png later */}
            <div className="-mb-1 w-full overflow-hidden">
                <div className="flex aspect-1440/470 w-full items-center justify-center bg-bg-placeholder select-none">
                    <span
                        className={`${fontPrimary} text-xs-sm font-medium text-white/80`}
                    >
                        footer.png
                    </span>
                </div>
            </div>
            <div className="mx-auto max-w-container px-6 md:px-16 lg:px-24">
                {/* MOBILE: logo + tagline + 2x2 grid of columns */}
                <div className="flex flex-col gap-8 md:hidden">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        {/* Logo mask — swap with jack-yak-logo.png later */}
                        <div className="flex h-logo w-logo-w items-center justify-center bg-bg-placeholder">
                            <span
                                className={`${fontPrimary} text-2xs font-medium text-white/80`}
                            >
                                logo
                            </span>
                        </div>
                        <p className={`${fontPrimary} text-xs-sm leading-[1.05] font-normal text-white`}>
                            Helping travelers explore Nepal with trusted
                            information.
                        </p>
                    </div>

                    {/* 2x2 grid of columns */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                        {footerColumns.map((col) => (
                            <div key={col.title} className="flex flex-col gap-4">
                                <span className={`${fontPrimary} text-md-lg font-bold text-white`}>
                                    {col.title}
                                </span>
                                <ul className="flex flex-col gap-0">
                                    {col.links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className={`${fontPrimary} text-md-lg leading-[163%] font-light text-white`}
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DESKTOP: original layout */}
                <div className="hidden flex-col gap-10 md:flex md:flex-row md:justify-between md:gap-8">
                    {/* Brand */}
                    <div className="flex max-w-content-sm flex-col gap-4">
                        {/* Logo mask — swap with jack-yak-logo.png later */}
                        <div className="flex h-20 w-20 items-center justify-center bg-bg-placeholder">
                            <span
                                className={`${fontPrimary} text-2xs font-medium text-white/80`}
                            >
                                logo
                            </span>
                        </div>
                        <p className={`${fontPrimary} text-sm leading-[1.05] font-normal text-white md:text-base`}>
                            Helping travelers explore Nepal with trusted
                            information.
                        </p>
                    </div>

                    {/* Columns */}
                    <div className="grid flex-1 grid-cols-1 gap-x-8 md:grid-cols-4">
                        {footerColumns.map((col) => (
                            <div key={col.title} className="border-b border-white/10 md:border-none">
                                <div className="mb-4">
                                    <span className={`${fontPrimary} text-base font-bold text-white`}>
                                        {col.title}
                                    </span>
                                </div>
                                <ul className="flex flex-col gap-2">
                                    {col.links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className={`${fontPrimary} text-base leading-[2.56] font-medium text-white/80 transition-colors hover:text-white`}
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-6 md:mt-16 md:grid md:grid-cols-3">
                    <div className="hidden md:block" />

                    <p className={`${fontPrimary} order-2 text-center text-md-lg font-medium text-white/54 md:order-none md:text-base`}>
                        © 2026 JackYak. All rights reserved.
                    </p>

                    <div className="order-1 flex flex-row items-center justify-center gap-4 md:order-none md:justify-end">
                        <SocialIcon label="Instagram" Icon={FaInstagram} />
                        <SocialIcon label="Facebook" Icon={FaFacebookF} />
                        <SocialIcon label="WhatsApp" Icon={FaWhatsapp} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
