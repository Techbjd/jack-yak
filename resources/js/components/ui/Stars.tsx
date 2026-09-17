import { Star } from 'lucide-react';
import { REVIEW_STAR_COUNT } from '@/config/review';
import { cn } from '@/lib/utils';

interface StarsProps {
    label?: string;
    value?: number;
    starClassName?: string;
    gapClassName?: string;
}

export default function Stars({
    label,
    value = REVIEW_STAR_COUNT,
    starClassName = 'size-4',
    gapClassName = 'gap-0.5',
}: StarsProps) {
    const accessibleLabel =
        label ?? `Rated ${value} out of ${REVIEW_STAR_COUNT} stars`;
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
        <span
            role="img"
            aria-label={accessibleLabel}
            className="relative inline-flex"
        >
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
