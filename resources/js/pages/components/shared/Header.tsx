import React, { useState } from 'react';
import { Search, User, Heart, X } from 'lucide-react';
import { fontPrimary } from '@/config/theme';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="relative z-50 mx-auto flex max-w-[90%] items-center justify-between bg-transparent p-4">
                {/* Logo */}
                <div className="flex items-center justify-center pt-2">
                    <img
                        src="/jack-yak-logo.png"
                        alt="Jack Yak Logo"
                        className="h-14 w-auto object-contain"
                    />
                </div>

                {/* Navigation Links - Desktop only */}
                <nav className="hidden flex-1 flex-row items-center justify-center space-x-5 md:flex">
                    <ul className="flex flex-row items-center justify-center space-x-6 text-white">
                        <li>
                            <a href="#destination">Destination</a>
                        </li>
                        <li>
                            <a href="#guides">Guides</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                    </ul>
                </nav>

                {/* Action Buttons / Icons - Desktop */}
                <div className="hidden items-center gap-4 md:flex">
                    <button aria-label="Menu" className="">
                        <Heart className="h-5 w-5 text-white" />
                    </button>
                    <button aria-label="Search">
                        <Search className="h-5 w-5 rotate-[9.82deg] text-white" />
                    </button>
                    <button aria-label="Profile">
                        <User className="h-5 w-5 text-white drop-shadow-card" />
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
                                <li className="px-5 py-2">
                                    <a href="#home">Home</a>
                                </li>
                                <li className="px-5 py-2">
                                    <a href="#destination">Destinations</a>
                                </li>
                                <li className="px-5 py-2">
                                    <a href="#guides">Guides</a>
                                </li>
                                <li className="px-5 py-2">
                                    <a href="#about">About</a>
                                </li>
                                <li className="px-5 py-2">
                                    <a href="#favorites">Favorites</a>
                                </li>
                                <li className="px-5 py-2">
                                    <a href="#search">Search</a>
                                </li>
                                <li className="px-5 py-2">
                                    <a href="#profile">Profile</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
