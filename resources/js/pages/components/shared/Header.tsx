import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        if (!isMobileMenuOpen) {
            return;
        }
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [isMobileMenuOpen]);

    const onLight = tone === 'onLight';
    const ink = onLight ? 'text-ink' : 'text-white';
    const stripe = onLight ? 'bg-ink' : 'bg-white';
    const ring = onLight
        ? 'focus-visible:ring-ink'
        : 'focus-visible:ring-white';

    return (
        <>
            <header className="max-w-container relative z-50 mx-auto flex w-full items-center justify-between bg-transparent px-6 pt-6 md:px-12 md:pt-10 lg:px-24">
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
                        className={cn(
                            fontPrimary,
                            'flex items-center gap-8 text-lg leading-tight font-semibold lg:gap-12 lg:text-2xl',
                            ink,
                        )}
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
                <div
                    className={cn(
                        'hidden items-center gap-4 md:flex lg:gap-6',
                        ink,
                    )}
                >
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
                        <User className="drop-shadow-card h-5 w-5 lg:h-6 lg:w-6" />
                    </button>
                </div>

                {/* Mobile Hamburger Button — padded to a 39x34 tap target, layout unchanged */}
                <button
                    aria-label="Open menu"
                    aria-expanded={isMobileMenuOpen}
                    className="w-hamburger -m-3 flex h-2.5 cursor-pointer flex-col items-center justify-center gap-1 p-3 active:opacity-60 md:hidden"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <span className={`h-[1.5px] w-full ${stripe}`}></span>
                    <span className={`h-[1.5px] w-full ${stripe}`}></span>
                    <span className={`h-[1.5px] w-full ${stripe}`}></span>
                </button>
            </header>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Site menu"
                    className="fixed inset-0 z-100 md:hidden"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Sidebar — flex column so logo + nav never overlap */}
                    <div className="w-sidebar absolute top-0 left-0 flex h-full flex-col bg-white shadow-lg">
                        <div className="flex items-center justify-end p-4">
                            <button
                                aria-label="Close menu"
                                className="flex h-8 w-8 items-center justify-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X className="text-ink h-5 w-5" />
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
                                className={cn(
                                    fontPrimary,
                                    'text-base-md text-ink flex flex-col leading-4.75 font-medium',
                                )}
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
