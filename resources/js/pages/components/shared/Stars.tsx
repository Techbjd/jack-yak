import { Star } from 'lucide-react';
import { REVIEW_STAR_COUNT } from '@/config/review';
import { cn } from '@/lib/utils';

interface StarsProps {
    /** Accessible rating label (e.g. "Rated 5 out of 5 stars") */
    label: string;
    /** 0–5 fill; defaults to full (single truth: REVIEW_STAR_COUNT) */
    value?: number;
    /** Star icon sizing (default matches booking/review display rows) */
    starClassName?: string;
    /** Inner row gap (review cards widen it on desktop) */
    gapClassName?: string;
}

/** Display-only 5-star row — fractional fill via overlay clipping.
 *  (The GiveReview interactive input stays separate.) */
export default function Stars({
    label,
    value = REVIEW_STAR_COUNT,
    starClassName = 'size-4',
    gapClassName = 'gap-0.5',
}: StarsProps) {
    const row = (filled: boolean) => (
        <span aria-hidden className={cn('flex items-center', gapClassName)}>
            {Array.from({ length: REVIEW_STAR_COUNT }).map((_, i) => (
                <Star
                    key={i}
                    className={cn(
                        starClassName,
                        filled
                            ? 'fill-cta-accent text-cta-accent'
                            : 'fill-star-empty text-star-empty',
                    )}
                />
            ))}
        </span>
    );

    return (
        <span role="img" aria-label={label} className="relative inline-flex">
            {row(false)}
            <span
                aria-hidden
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${(value / REVIEW_STAR_COUNT) * 100}%` }}
            >
                {row(true)}
            </span>
        </span>
    );
}
