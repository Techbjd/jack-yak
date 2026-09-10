import { useState } from 'react';
import { Quote } from 'lucide-react';
import { fontPrimary, fontQuote, fontQuoteMark } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';
import CarouselDots from '../shared/CarouselDots';
import GiveReview from '../review/GiveReview';

const TravelStories = () => {
    const [reviewOpen, setReviewOpen] = useState(false);
    return (
        <section className="bg-surface-warm w-full">
            <div className="max-w-container mx-auto w-full px-6 pb-8 md:px-12 md:pb-12 lg:px-24">
                <figure className="rounded-card-sm bg-surface-warm shadow-card md:rounded-image p-3 md:p-10">
                    <div className="flex items-start gap-3 md:items-center md:gap-8">
                        <div className="md:max-w-content-sm flex w-[38%] shrink-0 flex-col gap-1.5 md:w-auto md:gap-4">
                            <p
                                className={cn(
                                    fontPrimary,
                                    'text-xs-sm text-ink md:text-md-lg font-bold tracking-wide uppercase',
                                )}
                            >
                                Travel Stories
                            </p>
                            <h2
                                className={cn(
                                    fontPrimary,
                                    'text-base-md text-text-primary md:text-3xl-4xl leading-[116.56%] font-bold tracking-[0.03em] md:leading-tight md:tracking-wide',
                                )}
                            >
                                What Travelers Love About Nepal
                            </h2>
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col gap-2 md:gap-4">
                            <div className="flex items-start gap-1 md:gap-4">
                                <span
                                    aria-hidden="true"
                                    className={cn(
                                        fontQuoteMark,
                                        'text-quote-blush text-4xl leading-8.75 font-bold md:hidden',
                                    )}
                                >
                                    &ldquo;
                                </span>
                                <Quote className="fill-cta-accent/15 text-cta-accent hidden h-14 w-14 shrink-0 md:block" />
                                <blockquote
                                    className={cn(
                                        fontQuote,
                                        'text-xs-sm text-ink md:font-manrope md:text-xl-2xl leading-[169.73%] font-normal md:leading-relaxed',
                                    )}
                                >
                                    Watching the sunrise over the Himalayas from
                                    Poon Hill was one of the most unforgettable
                                    moments of my life.
                                </blockquote>
                            </div>

                            <div className="relative flex items-center justify-center md:justify-between md:gap-2">
                                <figcaption className="absolute top-1/2 right-0 flex -translate-y-1/2 items-center gap-1.5 md:static md:order-1 md:translate-none md:gap-4">
                                    <img
                                        src={IMAGES.about.travelerAvatar}
                                        alt="Ken San"
                                        loading="lazy"
                                        className="bg-bg-placeholder text-2xs text-text-primary md:shadow-card size-3.75 overflow-hidden rounded-full object-cover object-top drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:h-16 md:w-16 md:drop-shadow-none"
                                    />
                                    <span className="flex flex-col leading-none md:gap-1">
                                        <span
                                            className={cn(
                                                fontPrimary,
                                                'text-xs-sm text-ink md:text-md-lg font-medium md:font-bold',
                                            )}
                                        >
                                            Ken San
                                        </span>
                                        <span
                                            className={cn(
                                                fontPrimary,
                                                'text-ink md:text-md-lg text-2xs font-medium md:font-bold',
                                            )}
                                        >
                                            Japan
                                        </span>
                                    </span>
                                </figcaption>

                                <CarouselDots
                                    className="gap-1 md:order-2 md:gap-2"
                                    dotClassName="size-[2.64px] md:size-2.5"
                                />
                            </div>
                            <div className="flex justify-center pt-2 md:justify-start md:pt-4">
                                <button
                                    type="button"
                                    onClick={() => setReviewOpen(true)}
                                    className={cn(
                                        fontPrimary,
                                        'text-cta-accent text-xs-sm md:text-md-lg cursor-pointer font-bold tracking-wide underline-offset-4 hover:underline',
                                    )}
                                >
                                    Share your experience
                                </button>
                            </div>
                        </div>
                    </div>
                </figure>
                <GiveReview
                    open={reviewOpen}
                    onClose={() => setReviewOpen(false)}
                />
            </div>
        </section>
    );
};

export default TravelStories;
