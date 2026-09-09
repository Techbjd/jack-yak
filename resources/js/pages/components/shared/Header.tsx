import React, { useState } from 'react';
import { Search, User, Heart, X } from 'lucide-react';
import { fontPrimary } from '@/config/theme';
import { desktopNav, mobileNav } from '@/config/navigation';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';

interface HeaderProps {
    /**
     * Ink tone — 'onDark' (default) renders white ink for dark backgrounds,
     * 'onLight' renders navy ink for light backgrounds. Home passes nothing.
     */
    tone?: 'onDark' | 'onLight';
}

const Header = ({ tone = 'onDark' }: HeaderProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const onLight = tone === 'onLight';
    const ink = onLight ? 'text-ink' : 'text-white';
    const stripe = onLight ? 'bg-ink' : 'bg-white';
    const ring = onLight
        ? 'focus-visible:ring-ink'
        : 'focus-visible:ring-white';

    return (
        <>
            <header className="relative z-50 mx-auto flex w-full max-w-container items-center justify-between bg-transparent px-6 pt-6 md:px-12 md:pt-10 lg:px-24">
                {/* Logo */}
                <div className="flex shrink-0 items-center justify-center">
                    <img
                        src={IMAGES.logo.jackYak}
                        alt="Jack Yak Logo"
                        className={cn(
                            'h-12 w-auto object-contain md:h-16 lg:h-20',
                            onLight && 'brightness-0',
                        )}
                    />
                </div>

                {/* Navigation Links - Desktop only */}
                <nav className="hidden items-center justify-center md:flex">
                    <ul
                        className={`${fontPrimary} flex items-center gap-8 ${ink} text-lg leading-tight font-semibold lg:gap-12 lg:text-2xl`}
                    >
                        {desktopNav.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="transition-opacity hover:opacity-80"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Action Buttons / Icons - Desktop */}
                <div className={cn('hidden items-center gap-4 md:flex lg:gap-6', ink)}>
                    <button
                        aria-label="Favorites"
                        className={`p-1 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:outline-none ${ring}`}
                    >
                        <Heart className="h-5 w-5 lg:h-6 lg:w-6" />
                    </button>
                    <button
                        aria-label="Search"
                        className={`p-1 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:outline-none ${ring}`}
                    >
                        <Search className="h-5 w-5 rotate-[9.82deg] lg:h-6 lg:w-6" />
                    </button>
                    <button
                        aria-label="Profile"
                        className={`p-1 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:outline-none ${ring}`}
                    >
                        <User className="h-5 w-5 drop-shadow-card lg:h-6 lg:w-6" />
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    aria-label="Open menu"
                    className="flex h-[10px] w-hamburger flex-col items-center justify-center gap-[4px] md:hidden"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <span className={`h-[1.5px] w-full ${stripe}`}></span>
                    <span className={`h-[1.5px] w-full ${stripe}`}></span>
                    <span className={`h-[1.5px] w-full ${stripe}`}></span>
                </button>
            </header>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[100] md:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Sidebar — flex column so logo + nav never overlap */}
                    <div className="absolute top-0 left-0 flex h-full w-sidebar flex-col bg-white shadow-lg">
                        <div className="flex items-center justify-end p-4">
                            <button
                                aria-label="Close menu"
                                className="flex h-8 w-8 items-center justify-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X className="h-5 w-5 text-ink" />
                            </button>
                        </div>

                        <div className="px-5 pt-2 pb-6">
                            <img
                                src={IMAGES.logo.jackYak}
                                alt="Jack Yak Logo"
                                className="h-logo w-logo object-contain brightness-0"
                            />
                        </div>

                        <nav className="flex-1 overflow-y-auto px-5 py-2">
                            <ul
                                className={`${fontPrimary} flex flex-col text-base-md leading-[19px] font-medium text-ink`}
                            >
                                {mobileNav.map((item) => (
                                    <li key={item.href} className="py-2">
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
