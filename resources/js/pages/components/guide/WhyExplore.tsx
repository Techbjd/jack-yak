import type { LucideIcon } from 'lucide-react';
import { ClipboardList, Mountain, MoveRight } from 'lucide-react';
import { fontPrimary } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';

interface ExploreCard {
    title: string;
    description: string;
    Icon?: LucideIcon;
    image?: string;
    imageAlt?: string;
}

const exploreCards: ExploreCard[] = [
    {
        title: 'Mountain Guides',
        description:
            "Explore Everest, Annapurna, Langtang, and Nepal's most spectacular Himalayan trails.",
        Icon: Mountain,
    },
    {
        title: 'Travel Planning',
        description:
            'Find destinations based on your interests, season, budget, and travel style.',
        Icon: ClipboardList,
    },
    {
        title: 'Culture & Heritage',
        description:
            "Learn about Nepal's ancient temples, festivals, local traditions, and UNESCO sites.",
        image: IMAGES.destination.icons.heritage,
        imageAlt: 'Heritage site icon',
    },
    {
        title: 'Wildlife & Nature',
        description:
            'Discover jungle safaris, national parks, rare wildlife, and peaceful natural escapes.',
        image: IMAGES.destination.icons.safari,
        imageAlt: 'Safari icon',
    },
];

const WhyExplore = () => {
    return (
        <section className="bg-surface-warm w-full">
            <div className="max-w-container mx-auto flex w-full flex-col gap-6 px-6 pt-6 md:gap-10 md:px-12 md:pt-10 lg:px-24">
                <div className="grid grid-cols-2 items-start gap-4 md:items-center md:gap-8">
                    <div className="flex flex-col gap-2">
                        <p
                            className={cn(
                                fontPrimary,
                                'text-xs-sm text-ink md:text-md-lg font-bold',
                            )}
                        >
                            Discover Nepal
                        </p>
                        <h2
                            className={cn(
                                fontPrimary,
                                'text-md-lg text-ink md:text-journey leading-snug font-bold tracking-wide md:leading-tight',
                            )}
                        >
                            Why Explore with Jackyak
                        </h2>
                    </div>
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-sm text-ink md:text-md-lg leading-relaxed font-semibold md:justify-self-end md:leading-relaxed',
                        )}
                    >
                        Helping you discover Nepal through trusted guides, local
                        insights, and unforgettable destinations.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                    {exploreCards.map(
                        ({ title, description, Icon, image, imageAlt }) => (
                            <article
                                key={title}
                                className="group rounded-dest-card border-bg-placeholder md:hover:border-cta md:hover:bg-surface-warm md:hover:shadow-card flex flex-col gap-3 border bg-white p-4 transition md:gap-4 md:p-6"
                            >
                                <span className="bg-surface-warm md:group-hover:border-ink flex h-10 w-10 items-center justify-center rounded-full md:h-20 md:w-20 md:group-hover:border">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={imageAlt ?? title}
                                            loading="lazy"
                                            className="h-5 w-5 object-contain md:h-11 md:w-11"
                                        />
                                    ) : (
                                        Icon && (
                                            <Icon className="text-ink h-5 w-5 md:h-11 md:w-11" />
                                        )
                                    )}
                                </span>
                                <h3
                                    className={cn(
                                        fontPrimary,
                                        'text-md-lg text-text-primary md:text-xl-2xl leading-tight font-bold',
                                    )}
                                >
                                    {title}
                                </h3>
                                <p
                                    className={cn(
                                        fontPrimary,
                                        'text-xs-sm text-text-primary md:text-md-lg leading-relaxed font-medium tracking-wide',
                                    )}
                                >
                                    {description}
                                </p>
                                <span className="mt-auto hidden pt-2 md:flex">
                                    <MoveRight className="text-ink group-hover:text-cta h-5 w-5 transition-colors" />
                                </span>
                            </article>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default WhyExplore;
