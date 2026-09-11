import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { itinCard, itinH2, itinRailTeal } from '@/config/theme';
import { featuredReview } from '@/config/itinerary';

/** Reviews — teal rail heading + featured review card with photo strip */
export default function ReviewCard() {
    return (
        <section
            id="reviews"
            aria-labelledby="reviews-heading"
            className="flex w-full scroll-mt-4 flex-col gap-2.5"
        >
            <div className="flex w-full items-stretch gap-2.5">
                <span aria-hidden className={itinRailTeal} />
                <h2 id="reviews-heading" className={itinH2}>
                    Reviews
                </h2>
            </div>
            <article
                aria-label={`Review by ${featuredReview.name}`}
                className={cn(itinCard, 'flex w-full flex-col gap-1.5 p-4')}
            >
                <div className="flex w-full items-center gap-2.5">
                    <img
                        src={featuredReview.avatar}
                        alt=""
                        loading="lazy"
                        className="size-11 shrink-0 rounded-full object-cover"
                    />
                    <div className="flex min-w-0 flex-1 flex-col">
                        <p className="font-manrope text-xs-md text-review-ink truncate leading-8 font-semibold">
                            {featuredReview.name}
                        </p>
                        <p className="font-manrope text-xs-sm leading-itinerary-26 text-pale font-normal">
                            {featuredReview.country}
                        </p>
                        <p className="font-manrope text-xs-sm leading-itinerary-26 text-pale font-normal">
                            {featuredReview.date}
                        </p>
                    </div>
                </div>

                <span
                    role="img"
                    aria-label="Rated 5 out of 5 stars"
                    className="flex items-center gap-0.5"
                >
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            aria-hidden
                            className="fill-cta-accent text-cta-accent size-4"
                        />
                    ))}
                </span>

                <h3 className="font-manrope text-xs-md leading-itinerary-28 tracking-review text-review-ink font-semibold">
                    {featuredReview.title}
                </h3>
                <p className="font-manrope text-xs-sm leading-itinerary-23 text-pale font-normal">
                    {featuredReview.meta}
                </p>
                <p className="font-manrope text-xs-sm text-review-body leading-4 font-normal">
                    {featuredReview.body}
                </p>
                <button
                    type="button"
                    className="font-manrope text-xs-sm leading-itinerary-22 text-ink cursor-pointer self-start font-semibold underline underline-offset-2"
                >
                    {featuredReview.seeMore}
                </button>

                <div
                    role="group"
                    aria-label={featuredReview.photosLabel}
                    className="grid w-full grid-cols-6 gap-1 pt-1"
                >
                    {featuredReview.photos.map((src, i) => (
                        <img
                            key={`${src}-${i}`}
                            src={src}
                            alt={`${featuredReview.photosLabel} ${i + 1}`}
                            loading="lazy"
                            className="h-12 w-full rounded-xl object-cover"
                        />
                    ))}
                </div>
            </article>
        </section>
    );
}
