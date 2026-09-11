import { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Heart, Menu, Search, User as UserIcon, X } from 'lucide-react';
import { fontPrimary } from '@/config/theme';
import { desktopNav, mobileNav } from '@/config/navigation';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';
import type { PageProps } from '@/types';

interface HeaderProps {
    tone?: 'onDark' | 'onLight';
}

const Header = ({ tone = 'onDark' }: HeaderProps) => {
    const { auth } = usePage<PageProps>().props;
    const user = auth?.user ?? null;
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
    const ring = onLight
        ? 'focus-visible:ring-ink'
        : 'focus-visible:ring-white';

    const profileHref = user ? '/user' : '/login';

    return (
        <>
            <header className="max-w-container relative z-50 mx-auto flex w-full items-center justify-between bg-transparent px-6 pt-6 md:px-12 md:pt-10 lg:px-24">
                <Link
                    href="/home"
                    aria-label="JackYak home"
                    className="flex shrink-0 items-center justify-center rounded-sm focus-visible:ring-2 focus-visible:outline-none"
                >
                    <img
                        src={IMAGES.logo.jackYak}
                        alt="Jack Yak Logo"
                        className={cn(
                            'h-12 w-auto object-contain md:h-16 lg:h-20',
                            onLight && 'brightness-0',
                        )}
                    />
                </Link>

                <nav
                    aria-label="Primary"
                    className="hidden items-center justify-center md:flex"
                >
                    <ul
                        className={cn(
                            fontPrimary,
                            'flex items-center gap-8 text-lg leading-tight font-semibold lg:gap-12 lg:text-2xl',
                            ink,
                        )}
                    >
                        {desktopNav.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="transition-opacity hover:opacity-80"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div
                    className={cn(
                        'hidden items-center gap-4 md:flex lg:gap-6',
                        ink,
                    )}
                >
                    <Link
                        href="/user"
                        aria-label="Saved"
                        className={`p-1 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:outline-none ${ring}`}
                    >
                        <Heart className="h-5 w-5 lg:h-6 lg:w-6" />
                    </Link>
                    <Link
                        href="/view-all"
                        aria-label="Search destinations"
                        className={`p-1 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:outline-none ${ring}`}
                    >
                        <Search className="h-5 w-5 rotate-[9.82deg] lg:h-6 lg:w-6" />
                    </Link>
                    <Link
                        href={profileHref}
                        aria-label={
                            user ? `Profile for ${user.name}` : 'Sign in'
                        }
                        className={`relative p-1 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:outline-none ${ring}`}
                    >
                        <UserIcon className="drop-shadow-card h-5 w-5 lg:h-6 lg:w-6" />
                        {user && (
                            <span
                                aria-hidden
                                className="bg-cta-ember absolute top-0 right-0 size-2.5 rounded-full"
                            />
                        )}
                    </Link>
                </div>

                <button
                    aria-label="Open menu"
                    aria-expanded={isMobileMenuOpen}
                    className={cn(
                        'cursor-pointer p-3 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:outline-none md:hidden',
                        ink,
                        ring,
                    )}
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="h-6 w-6" />
                </button>
            </header>

            {isMobileMenuOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Site menu"
                    className="fixed inset-0 z-100 md:hidden"
                >
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

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
                            <Link
                                href="/home"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="JackYak home"
                            >
                                <img
                                    src={IMAGES.logo.jackYak}
                                    alt="Jack Yak Logo"
                                    className="h-logo w-logo object-contain brightness-0"
                                />
                            </Link>
                            {user ? (
                                <p
                                    className={cn(
                                        fontPrimary,
                                        'text-ink pt-4 text-sm font-semibold',
                                    )}
                                >
                                    Hi, {user.name}
                                </p>
                            ) : (
                                <Link
                                    href="/login"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        fontPrimary,
                                        'text-cta-accent pt-4 text-sm font-bold underline-offset-4 hover:underline',
                                    )}
                                >
                                    Sign in to plan your trip
                                </Link>
                            )}
                        </div>

                        <nav
                            aria-label="Mobile"
                            className="flex-1 overflow-y-auto px-5 py-2"
                        >
                            <ul
                                className={cn(
                                    fontPrimary,
                                    'text-base-md text-ink flex flex-col leading-4.75 font-medium',
                                )}
                            >
                                {mobileNav.map((item) => (
                                    <li key={item.href} className="py-2">
                                        <Link
                                            href={item.href}
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                                <li className="py-2">
                                    {user ? (
                                        <Link href="/user">My account</Link>
                                    ) : (
                                        <Link href="/login">Sign in</Link>
                                    )}
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
