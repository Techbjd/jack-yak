import { useState } from 'react';
import {
    ArrowUpRight,
    Binoculars,
    Church,
    Footprints,
    Globe,
    Landmark,
    Waves,
    type LucideIcon,
} from 'lucide-react';
import { coverImageAbsolute, eyebrow, fontPrimary } from '@/config/theme';
import {
    destinationFeaturedCards,
    featuredTabIcons,
    featuredTabs,
} from '@/config/destination';
import { cn } from '@/lib/utils';

const TAB_ICONS: Record<string, LucideIcon> = {
    All: Globe,
    Trekking: Footprints,
    Safari: Binoculars,
    Spiritual: Church,
    Heritage: Landmark,
    Lakes: Waves,
};

const TAB_ICON_SIZE: Record<string, string> = {
    Spiritual: 'h-9 w-9',
    Lakes: 'h-8.5 w-8.5',
};

/** Figma icon artwork with Lucide fallback until the uploads land */
function TabIcon({ tab }: { tab: string }) {
    const [ready, setReady] = useState(false);
    const [failed, setFailed] = useState(false);
    const src = featuredTabIcons[tab];
    const Icon = TAB_ICONS[tab] ?? Globe;
    const size = TAB_ICON_SIZE[tab] ?? 'h-7 w-7';

    return (
        <>
            {src && !failed && (
                <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    onLoad={() => setReady(true)}
                    onError={() => setFailed(true)}
                    className={cn(size, 'object-contain', !ready && 'hidden')}
                />
            )}
            {(!src || failed || !ready) && (
                <Icon className={cn(size, 'text-text-primary')} />
            )}
        </>
    );
}

export default function FeaturedGrid() {
    const [activeTab, setActiveTab] = useState<string>('Safari');

    return (
        <section className="flex w-full flex-col gap-6 px-4 py-8 md:gap-8 md:px-12 md:py-12 lg:px-24">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col gap-2">
                    <p
                        className={cn(
                            eyebrow,
                            'md:text-md-lg hidden tracking-wide md:block',
                        )}
                    >
                        Discover
                    </p>
                    <h2
                        className={cn(
                            fontPrimary,
                            'text-lg-xl text-text-primary lg:text-journey lg:leading-journey font-bold tracking-wide',
                        )}
                    >
                        Featured Destinations
                    </h2>
                </div>
                {/* Desktop only — supporting copy */}
                <p
                    className={cn(
                        fontPrimary,
                        'text-md-lg text-text-primary hidden font-medium lg:block lg:max-w-xs',
                    )}
                >
                    Discover the country&apos;s most remarkable destinations.
                </p>
            </div>

            {/* MOBILE: text tabs */}
            <div className="no-scrollbar flex gap-5 overflow-x-auto md:hidden">
                {featuredTabs.map((tab) => {
                    const isActive = tab === 'All';
                    return (
                        <button
                            key={tab}
                            type="button"
                            className="flex shrink-0 cursor-pointer flex-col items-center gap-1"
                        >
                            <span
                                className={cn(
                                    fontPrimary,
                                    'text-md-lg',
                                    isActive
                                        ? 'text-cta-accent font-medium'
                                        : 'text-text-primary font-medium',
                                )}
                            >
                                {tab}
                            </span>
                            <span
                                className={cn(
                                    'h-0.5 w-6 rounded-full',
                                    isActive
                                        ? 'bg-cta-accent'
                                        : 'bg-transparent',
                                )}
                            />
                        </button>
                    );
                })}
            </div>

            {/* DESKTOP: artwork tabs between two rules, thick segment under the active tab */}
            <div className="hidden md:block">
                <div className="bg-text-primary/20 h-px w-full" />
                <div className="grid grid-cols-6">
                    {featuredTabs.map((tab) => {
                        const isActive = tab === activeTab;
                        return (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                className="flex cursor-pointer flex-row items-center justify-center gap-2 py-3"
                            >
                                <TabIcon tab={tab} />
                                <span
                                    className={cn(
                                        fontPrimary,
                                        'text-md-lg text-text-primary',
                                        isActive
                                            ? 'font-semibold'
                                            : 'font-medium',
                                    )}
                                >
                                    {tab}
                                </span>
                            </button>
                        );
                    })}
                </div>
                <div className="grid grid-cols-6">
                    {featuredTabs.map((tab) =>
                        tab === activeTab ? (
                            <div key={tab} className="flex items-center">
                                <span className="bg-text-primary/20 h-px flex-1" />
                                <span className="bg-text-primary h-1 w-32 rounded-full" />
                                <span className="bg-text-primary/20 h-px flex-1" />
                            </div>
                        ) : (
                            <div key={tab} className="flex items-center">
                                <span className="bg-text-primary/20 h-px w-full" />
                            </div>
                        ),
                    )}
                </div>
            </div>

            {/* Cards — uniform 2-col on mobile, mosaic on desktop */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-4 md:grid-cols-12 md:gap-5">
                {destinationFeaturedCards.map((card, i) => (
                    <div
                        key={`${card.src}-${i}`}
                        className={cn(
                            'h-feat-card-h relative w-full md:h-auto',
                            card.span,
                        )}
                        style={{ aspectRatio: card.ratio }}
                    >
                        <img
                            src={card.src}
                            alt={card.label}
                            loading="lazy"
                            className={cn(
                                coverImageAbsolute,
                                'rounded-card-sm',
                            )}
                        />
                        <div
                            aria-hidden="true"
                            className="rounded-card-sm absolute inset-0 bg-black/0"
                        />
                        {/* Desktop only — safari label */}
                        <p
                            className={cn(
                                fontPrimary,
                                'text-xl-2xl absolute bottom-4 left-4 hidden leading-snug font-bold text-white drop-shadow-md md:block',
                            )}
                        >
                            {card.label}
                        </p>
                        <span className="absolute -right-1 -bottom-1.5 flex h-10 w-12 items-center justify-center rounded-full bg-white md:-right-4 md:-bottom-4 md:h-16 md:w-16">
                            <span className="bg-text-primary md:bg-cta flex h-6.5 w-6.5 items-center justify-center rounded-full md:h-10 md:w-10">
                                <ArrowUpRight className="h-3.5 w-3.5 text-white md:h-5 md:w-5" />
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
