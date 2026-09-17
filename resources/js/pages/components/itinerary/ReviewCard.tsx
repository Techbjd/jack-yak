import { cn } from '@/lib/utils';
import { itinCard, itinH2 } from '@/config/theme';
import {
    reviewsSectionTitle,
    trekReviews,
    type TrekReview,
} from '@/config/itinerary';
import { siteRoutes } from '@/config/site';
import Stars from '@/components/ui/Stars';
import SectionHeading from './SectionHeading';

function ReviewArticle({ review }: { review: TrekReview }) {
    return (
        <article
            aria-label={`Review by ${review.name}`}
            className={cn(
                itinCard,
                'md:border-card-line flex w-10/12 shrink-0 flex-col gap-1.5 p-4 md:w-11/12 md:gap-2 md:p-6 lg:p-10',
            )}
        >
            <div className="flex w-full items-center gap-2.5 md:gap-4">
                <img
                    src={review.avatar}
                    alt=""
                    loading="lazy"
                    className="size-11 shrink-0 rounded-full object-cover md:size-16"
                />
                <div className="flex min-w-0 flex-1 flex-col">
                    <p className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-manrope text-xs-md md:text-lg-xl text-review-ink truncate leading-8 font-semibold md:font-bold">
                            {review.name}
                        </span>
                        <span className="font-manrope text-xs-sm md:text-md-lg leading-itinerary-26 text-pale font-normal">
                            {review.country}
                        </span>
                    </p>
                    <p className="font-manrope text-xs-sm md:text-md-lg leading-itinerary-26 text-pale font-normal">
                        {review.date}
                    </p>
                </div>
            </div>

            <div className="flex w-full flex-col gap-1.5 md:mt-4 lg:flex-row lg:items-center lg:gap-3">
                <span className="shrink-0">
                    <Stars
                        starClassName="size-4 md:size-6"
                        gapClassName="gap-0.5 md:gap-1"
                    />
                </span>
                <h3 className="font-manrope text-xs-md md:text-lg-xl leading-itinerary-28 tracking-review text-review-ink font-semibold md:font-bold">
                    {review.title}
                </h3>
            </div>
            <p className="font-manrope text-xs-sm md:text-sm-md leading-itinerary-23 text-pale font-normal md:mt-1">
                {review.metaPrefix}
                <a
                    href={siteRoutes.booking}
                    className="text-review-ink font-semibold underline underline-offset-2"
                >
                    {review.metaLink}
                </a>
            </p>
            <p className="font-manrope text-xs-sm md:text-about-highlight text-review-body md:leading-about-32 leading-4 font-normal md:mt-4">
                {review.body}
            </p>
            <button
                type="button"
                className="font-manrope text-xs-sm md:text-md-lg leading-itinerary-22 md:text-review-ink text-ink cursor-pointer self-start font-semibold underline underline-offset-2 md:mt-2"
            >
                {review.seeMore}
            </button>

            <div
                role="group"
                aria-label={review.photosLabel}
                className="grid w-full grid-cols-6 gap-1 pt-1 md:hidden"
            >
                {review.photos.slice(0, 6).map((src, i) => (
                    <img
                        key={`${src}-${i}`}
                        src={src}
                        alt={`${review.photosLabel} ${i + 1}`}
                        loading="lazy"
                        className="aspect-square w-full rounded-xl object-cover"
                    />
                ))}
            </div>

            <div
                role="group"
                aria-label={review.photosLabel}
                className="hidden w-full flex-wrap gap-3 md:mt-5 md:flex"
            >
                {review.photos.map((src, i) => (
                    <img
                        key={`${src}-${i}`}
                        src={src}
                        alt={`${review.photosLabel} ${i + 1}`}
                        loading="lazy"
                        className="h-24 w-24 shrink-0 rounded-2xl object-cover lg:h-32 lg:w-32"
                    />
                ))}
            </div>
        </article>
    );
}

export default function ReviewCard() {
    return (
        <section
            id="reviews"
            aria-labelledby="reviews-heading"
            className="flex w-full scroll-mt-4 flex-col gap-2.5 md:gap-5"
        >
            <SectionHeading
                title={reviewsSectionTitle}
                id="reviews-heading"
                titleClassName={cn(itinH2, 'md:text-review-ink')}
            />
            <div className="no-scrollbar flex w-full gap-4 overflow-x-auto overscroll-x-contain md:gap-6 md:pb-2">
                {trekReviews.map((review) => (
                    <ReviewArticle
                        key={`${review.name}-${review.country}`}
                        review={review}
                    />
                ))}
            </div>
        </section>
    );
}
