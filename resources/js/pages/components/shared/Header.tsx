import React, { useState } from 'react';
import { Search, User, Heart, X } from 'lucide-react';
import { fontPrimary } from '@/config/theme';
import { desktopNav, mobileNav } from '@/config/navigation';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="relative z-50 mx-auto flex w-full max-w-container items-center justify-between px-6 pt-6 md:px-12 lg:px-24 md:pt-10 bg-transparent">
                {/* Logo */}
                <div className="flex items-center justify-center shrink-0">
                    <img
                        src="/jack-yak-logo.png"
                        alt="Jack Yak Logo"
                        className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                    />
                </div>

                {/* Navigation Links - Desktop only */}
                <nav className="hidden md:flex items-center justify-center">
                    <ul className={`${fontPrimary} flex items-center gap-8 lg:gap-12 text-white font-semibold text-lg lg:text-2xl leading-tight`}>
                        {desktopNav.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="hover:opacity-80 transition-opacity">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Action Buttons / Icons - Desktop */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6 text-white">
                    <button aria-label="Favorites" className="p-1 hover:opacity-80 transition-opacity">
                        <Heart className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                    </button>
                    <button aria-label="Search" className="p-1 hover:opacity-80 transition-opacity">
                        <Search className="h-5 w-5 lg:h-6 lg:w-6 rotate-[9.82deg] text-white" />
                    </button>
                    <button aria-label="Profile" className="p-1 hover:opacity-80 transition-opacity">
                        <User className="h-5 w-5 lg:h-6 lg:w-6 text-white drop-shadow-card" />
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    aria-label="Open menu"
                    className="flex h-[10px] w-hamburger flex-col items-center justify-center gap-[4px] md:hidden"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <span className="h-[1.5px] w-full bg-white"></span>
                    <span className="h-[1.5px] w-full bg-white"></span>
                    <span className="h-[1.5px] w-full bg-white"></span>
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

                    {/* Sidebar */}
                    <div className="absolute top-0 left-0 h-full w-sidebar bg-white shadow-lg">
                        {/* Close Button */}
                        <button
                            aria-label="Close menu"
                            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X className="h-5 w-5 text-navy-light" />
                        </button>

                        {/* Logo */}
                        <div className="absolute top-[67px] left-5 h-logo w-logo">
                            <img
                                src="/jack-yak-logo.png"
                                alt="Jack Yak Logo"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Navigation Links */}
                        <nav className="absolute top-[140px] left-0 w-full">
                            <ul className={`${fontPrimary} flex flex-col text-base-md leading-[19px] font-medium text-navy-light`}>
                                {mobileNav.map((item) => (
                                    <li key={item.href} className="px-5 py-2">
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
