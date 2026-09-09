import { Quote } from 'lucide-react';
import { fontPrimary } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';

const DOT_COUNT = 5;

const TravelStories = () => {
    return (
        <section className="w-full bg-slate-50">
            <div className="mx-auto w-full max-w-container px-6 pb-8 md:px-12 md:pb-12 lg:px-24">
                {/* 400px+: Figma side-by-side; below 400px: quote shifts below heading */}
                <figure className="flex flex-col gap-4 rounded-xl bg-surface-warm p-4 shadow-card xs:flex-row xs:items-start md:items-center md:gap-8 md:rounded-image md:p-10">
                    {/* Top on compact / Left on 400px+: heading */}
                    <div className="flex w-full shrink-0 flex-col gap-2 xs:w-1/3 md:max-w-content-sm md:gap-4">
                        <p
                            className={cn(
                                fontPrimary,
                                'text-2xs font-bold tracking-wide text-ink uppercase md:text-md-lg',
                            )}
                        >
                            Travel Stories
                        </p>
                        <h2
                            className={cn(
                                fontPrimary,
                                'text-xs-md leading-snug font-bold tracking-wide text-text-primary md:text-3xl-4xl md:leading-tight',
                            )}
                        >
                            What Travelers Love About Nepal
                        </h2>
                    </div>

                    {/* Right: quote */}
                    <div className="flex min-w-0 flex-1 flex-col gap-2 md:gap-4">
                        <div className="flex items-start gap-1 md:gap-4">
                            <Quote className="h-4 w-4 shrink-0 fill-orange-100 text-orange-100 md:h-14 md:w-14" />
                            <blockquote
                                className={cn(
                                    fontPrimary,
                                    'text-2xs leading-relaxed font-normal text-ink md:text-xl-2xl md:leading-relaxed',
                                )}
                            >
                                Watching the sunrise over the Himalayas from
                                Poon Hill was one of the most unforgettable
                                moments of my life.
                            </blockquote>
                        </div>

                        <div className="flex items-center justify-between gap-2">
                            {/* Author */}
                            <figcaption className="flex items-center gap-1.5 md:order-1 md:gap-4">
                                <img
                                    src={IMAGES.about.travelerAvatar}
                                    alt="Ken San"
                                    loading="lazy"
                                    className="h-4 w-4 overflow-hidden rounded-full bg-bg-placeholder object-cover object-top text-2xs text-text-primary shadow-card md:h-16 md:w-16"
                                />
                                <span className="flex flex-col leading-none md:gap-1">
                                    <span
                                        className={cn(
                                            fontPrimary,
                                            'text-2xs font-medium text-ink md:text-md-lg md:font-bold',
                                        )}
                                    >
                                        Ken San
                                    </span>
                                    <span
                                        className={cn(
                                            fontPrimary,
                                            'text-2xs font-medium text-ink md:text-md-lg md:font-bold',
                                        )}
                                    >
                                        Japan
                                    </span>
                                </span>
                            </figcaption>

                            {/* Dots */}
                            <div className="flex items-center gap-1 md:order-2 md:gap-2">
                                {Array.from({ length: DOT_COUNT }).map(
                                    (_, i) => (
                                        <span
                                            key={i}
                                            className={cn(
                                                'h-1 w-1 rounded-full md:h-2.5 md:w-2.5',
                                                i === 0
                                                    ? 'bg-cta-accent md:bg-cta'
                                                    : 'bg-bg-placeholder',
                                            )}
                                        />
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </figure>
            </div>
        </section>
    );
};

export default TravelStories;
