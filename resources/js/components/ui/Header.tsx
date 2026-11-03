import { useEffect, useRef, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Heart, Menu, Search, User as UserIcon, X } from 'lucide-react';
import { fontPrimary } from '@/config/theme';
import { desktopNav, mobileNav } from '@/config/navigation';
import { siteBrand, siteRoutes, headerCopy } from '@/config/site';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';
import type { PageProps } from '@/types';

interface HeaderProps {
    tone?: 'onDark' | 'onLight';
    mdTone?: 'onDark' | 'onLight';
    className?: string;
}

const headerIconLinkBase =
    'p-1 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:outline-none';

type HeaderTone = NonNullable<HeaderProps['tone']>;

const toneInkClass = (tone: HeaderTone) =>
    tone === 'onLight' ? 'text-ink' : 'text-white';

const toneRingClass = (tone: HeaderTone) =>
    tone === 'onLight' ? 'focus-visible:ring-ink' : 'focus-visible:ring-white';

const Header = ({ tone = 'onDark', mdTone, className }: HeaderProps) => {
    const { auth } = usePage<PageProps>().props;
    const user = auth?.user ?? null;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isMobileMenuOpen) {
            return;
        }

        const panel = mobileMenuRef.current;
        const previouslyFocused = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const getFocusables = () =>
            panel?.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            ) ?? [];

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
                return;
            }

            if (e.key !== 'Tab' || !panel) {
                return;
            }

            const focusables = getFocusables();
            if (focusables.length === 0) {
                e.preventDefault();
                return;
            }

            const first = focusables[0];
            const last = focusables[focusables.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKey);
        getFocusables()[0]?.focus();

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = previousOverflow;
            previouslyFocused?.focus();
        };
    }, [isMobileMenuOpen]);

    const onLight = tone === 'onLight';
    const ink = cn(toneInkClass(tone), mdTone && `md:${toneInkClass(mdTone)}`);
    const ring = cn(
        toneRingClass(tone),
        mdTone && `md:${toneRingClass(mdTone)}`,
    );
    const logoTone = cn(
        onLight && 'brightness-0',
        mdTone === 'onLight' && 'md:brightness-0',
        mdTone === 'onDark' && 'md:brightness-100',
    );

    const profileHref = user ? siteRoutes.user : siteRoutes.login;

    return (
        <>
            <header
                className={cn(
                    'relative z-50 mx-auto flex w-full max-w-container items-center justify-between bg-transparent px-6 pt-6 md:px-12 md:pt-10 lg:px-24',
                    className,
                )}
            >
                <Link
                    href={siteRoutes.home}
                    aria-label={siteBrand.homeLabel}
                    className="flex shrink-0 items-center justify-center rounded-sm focus-visible:ring-2 focus-visible:outline-none"
                >
                    <img
                        src={IMAGES.logo.jackYak}
                        alt={siteBrand.logoAlt}
                        className={cn(
                            'h-12 w-auto object-contain md:h-16 lg:h-20',
                            logoTone,
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
                            'flex items-center gap-8 text-2xl leading-tight font-semibold lg:gap-12',
                            ink,
                        )}
                    >
                        {desktopNav.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    prefetch
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
                        href={siteRoutes.user}
                        aria-label={headerCopy.savedLabel}
                        className={cn(headerIconLinkBase, ring)}
                    >
                        <Heart className="h-5 w-5 lg:h-6 lg:w-6" />
                    </Link>
                    <Link
                        href={siteRoutes.viewAll}
                        aria-label={headerCopy.searchLabel}
                        className={cn(headerIconLinkBase, ring)}
                    >
                        <Search className="h-5 w-5 lg:h-6 lg:w-6" />
                    </Link>
                    <Link
                        href={profileHref}
                        aria-label={
                            user
                                ? headerCopy.profileLabel(user.name)
                                : headerCopy.signInLabel
                        }
                        className={cn(headerIconLinkBase, 'relative', ring, 'rounded-full bg-black/30')}
                    >
                        <UserIcon className="h-5 w-5 lg:h-6 lg:w-6" />
                    </Link>
                </div>

                <button
                    type="button"
                    aria-label={headerCopy.openMenuLabel}
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
                    aria-label={headerCopy.menuLabel}
                    className="fixed inset-0 z-modal md:hidden"
                >
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    <div
                        ref={mobileMenuRef}
                        className="w-sidebar absolute top-0 left-0 flex h-full flex-col bg-white shadow-lg"
                    >
                        <div className="flex items-center justify-end p-4">
                            <button
                                type="button"
                                aria-label={headerCopy.closeMenuLabel}
                                className="flex h-8 w-8 items-center justify-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X className="text-ink h-5 w-5" />
                            </button>
                        </div>

                        <div className="px-5 pt-2 pb-6">
                            <Link
                                href={siteRoutes.home}
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label={siteBrand.homeLabel}
                            >
                                <img
                                    src={IMAGES.logo.jackYak}
                                    alt={siteBrand.logoAlt}
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
                                    {headerCopy.greeting(user.name)}
                                </p>
                            ) : (
                                <Link
                                    href={siteRoutes.login}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        fontPrimary,
                                        'text-cta-accent pt-4 text-sm font-bold underline-offset-4 hover:underline',
                                    )}
                                >
                                    {headerCopy.signInNudge}
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
                                    'text-base-md text-ink flex flex-col leading-itinerary-19 font-medium',
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
                                        <Link
                                            href={siteRoutes.user}
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                        >
                                            {headerCopy.accountLabel}
                                        </Link>
                                    ) : (
                                        <Link
                                            href={siteRoutes.login}
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                        >
                                            {headerCopy.signInLabel}
                                        </Link>
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
