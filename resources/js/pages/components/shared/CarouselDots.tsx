import { cn } from '@/lib/utils';
import { carouselDot, carouselDotsWrap } from '@/config/theme';

interface CarouselDotsProps {
    count?: number;
    activeIndex?: number;
    className?: string;
    dotClassName?: string;
}

/** Carousel dots — dedupes `Array.from({ length: DOT_COUNT })` repeated in 3 components */
export default function CarouselDots({
    count = 5,
    activeIndex = 0,
    className,
    dotClassName,
}: CarouselDotsProps) {
    return (
        <div className={cn(carouselDotsWrap, className)}>
            {Array.from({ length: count }).map((_, i) => (
                <span
                    key={i}
                    className={cn(
                        carouselDot,
                        'h-2 w-2 md:h-2.5 md:w-2.5',
                        i === activeIndex
                            ? 'bg-cta-accent'
                            : 'bg-bg-placeholder',
                        dotClassName,
                    )}
                />
            ))}
        </div>
    );
}
