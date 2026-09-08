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
import { fontPrimary, imagePlaceholder } from '@/config/theme';
import { featuredCards, featuredTabs } from '@/config/destination';
import { cn } from '@/lib/utils';

const TAB_ICONS: Record<string, LucideIcon> = {
    All: Globe,
    Trekking: Footprints,
    Safari: Binoculars,
    Spiritual: Church,
    Heritage: Landmark,
    Lakes: Waves,
};

export default function FeaturedGrid() {
    return (
        <section className="flex w-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-12 md:py-12 lg:px-24">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <h2
                    className={cn(
                        fontPrimary,
                        'text-lg-xl font-bold text-text-primary lg:text-journey lg:leading-journey lg:tracking-wide',
                    )}
                >
                    Featured Destinations
                </h2>
                {/* Desktop only — supporting copy */}
                <p
                    className={cn(
                        fontPrimary,
                        'hidden text-md-lg font-medium text-text-primary lg:block lg:max-w-xs',
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
                                        ? 'font-semibold text-orange'
                                        : 'font-medium text-text-primary',
                                )}
                            >
                                {tab}
                            </span>
                            <span
                                className={cn(
                                    'h-0.5 w-6 rounded-full',
                                    isActive ? 'bg-orange' : 'bg-transparent',
                                )}
                            />
                        </button>
                    );
                })}
            </div>

            {/* DESKTOP: icon tabs with rule */}
            <div className="hidden md:block">
                <div className="flex items-start justify-between">
                    {featuredTabs.map((tab) => {
                        const Icon = TAB_ICONS[tab] ?? Globe;
                        return (
                            <button
                                key={tab}
                                type="button"
                                className="flex shrink-0 cursor-pointer flex-col items-center gap-2"
                            >
                                <Icon className="h-7 w-7 text-text-primary" />
                                <span
                                    className={cn(
                                        fontPrimary,
                                        'text-md-lg font-medium text-text-primary',
                                    )}
                                >
                                    {tab}
                                </span>
                            </button>
                        );
                    })}
                </div>
                <div className="relative mt-4 h-px bg-text-primary/20">
                    <span className="absolute top-1/2 left-0 h-1 w-32 -translate-y-1/2 rounded-full bg-text-primary" />
                </div>
            </div>

            {/* Cards — uniform 2-col on mobile, mosaic on desktop */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
                {featuredCards.map((card, i) => (
                    <div
                        key={`${card.src}-${i}`}
                        className={cn(
                            imagePlaceholder,
                            'relative h-feat-card-h overflow-hidden rounded-card-sm md:h-auto',
                            card.span,
                        )}
                        style={{ aspectRatio: card.ratio }}
                    >
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-black/20"
                        />
                        {/* Desktop only — safari label */}
                        <p
                            className={cn(
                                fontPrimary,
                                'absolute bottom-4 left-4 hidden text-xl-2xl leading-snug font-bold text-white drop-shadow-md md:block',
                            )}
                        >
                            {card.label}
                        </p>
                        <span className="absolute right-2 bottom-2 flex h-6 w-6 items-center justify-center rounded-full bg-text-primary md:right-4 md:bottom-4 md:h-10 md:w-10 md:bg-teal">
                            <ArrowUpRight className="h-3.5 w-3.5 text-white md:h-5 md:w-5" />
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
