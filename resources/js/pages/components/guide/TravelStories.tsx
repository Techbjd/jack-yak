import { fontPrimary, fontQuote, fontQuoteMark } from '@/config/theme';
import { travelStoriesCopy } from '@/config/guide';
import { cn } from '@/lib/utils';
import CarouselDots from '@/components/ui/CarouselDots';

const TravelStories = () => {
    return (
        <section className="w-full">
            <div className="max-w-container mx-auto w-full px-6 pb-8 md:px-12 md:pb-12 lg:px-24">
                <figure className="rounded-card-sm bg-surface-warm shadow-card md:rounded-image p-3 md:p-10">
                    <div className="flex items-start gap-3 md:items-center md:gap-8">
                        <div className="md:max-w-content-sm flex min-w-0 shrink-0 basis-[38%] flex-col gap-1.5 md:w-auto md:basis-auto md:gap-4 lg:max-w-110">
                            <p
                                className={cn(
                                    fontPrimary,
                                    'text-2xs text-ink md:text-md-lg font-bold tracking-wide uppercase',
                                )}
                            >
                                {travelStoriesCopy.eyebrow}
                            </p>
                            <h2
                                className={cn(
                                    fontPrimary,
                                    'text-xs-md text-text-primary md:text-3xl-4xl leading-story-title tracking-card font-bold md:leading-tight md:tracking-wide',
                                )}
                            >
                                {travelStoriesCopy.title}
                            </h2>
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col gap-2 md:gap-4">
                            <div className="flex items-start gap-1 md:gap-4">
                                <span
                                    aria-hidden="true"
                                    className={cn(
                                        fontQuoteMark,
                                        'text-quote-blush text-[30px] leading-8.75 font-bold md:hidden',
                                    )}
                                >
                                    &ldquo;
                                </span>
                                <span
                                    aria-hidden="true"
                                    className={cn(
                                        fontQuoteMark,
                                        'text-quote-blush text-hero hidden shrink-0 leading-none font-bold md:block',
                                    )}
                                >
                                    &ldquo;
                                </span>

                                <blockquote
                                    className={cn(
                                        fontQuote,
                                        'w-full text-2xs text-ink leading-relaxe font-normal md:text-xl-2xl md:leading-relaxed',
                                    )}
                                >

                                        {travelStoriesCopy.quote}


                                    <span
                                        className="
                                                    flex w-full items-end justify-end gap-1.5
                                                      md:inline-flex md:w-auto md:items-center md:justify-normal md:gap-4
                                                                 "
                                    >
                                        <span></span>
                                        <figcaption className="flex shrink-0 items-center gap-1.5 md:gap-4">
                                            <img
                                                src={travelStoriesCopy.avatar}
                                                alt={travelStoriesCopy.name}
                                                loading="lazy"
                                                className="bg-bg-placeholder text-2xs text-text-primary shadow-card size-3.75 overflow-hidden rounded-full object-cover object-top md:h-17 md:w-17"
                                            />

                                            <span className="flex flex-col leading-none md:gap-1">
                                                <span
                                                    className={cn(
                                                        fontPrimary,
                                                        'text-2xs text-ink md:text-md-lg font-medium md:font-bold',
                                                    )}
                                                >
                                                    {travelStoriesCopy.name}
                                                </span>

                                                <span
                                                    className={cn(
                                                        fontPrimary,
                                                        'text-ink md:text-md-lg text-[6px] font-medium md:font-bold',
                                                    )}
                                                >
                                                    {travelStoriesCopy.country}
                                                </span>
                                            </span>
                                        </figcaption>
                                    </span>
                                </blockquote>



                            </div>

                            <div className="flex  justify-center sm:items-end sm:justify-end gap-2 md:gap-4">


                                <CarouselDots
                                    className="gap-1 md:gap-2"
                                    dotClassName="size-carousel-dot md:size-2.5"
                                />
                            </div>
                        </div>
                    </div>
                </figure>
            </div>
        </section>
    );
};

export default TravelStories;
