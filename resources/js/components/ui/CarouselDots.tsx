import { cn } from '@/lib/utils';
import { carouselDot, carouselDotsWrap } from '@/config/theme';

interface CarouselDotsProps {
    count?: number;
    activeIndex?: number;
    className?: string;
    dotClassName?: string;
    /** When provided, dots become controls that jump to the given slide. */
    onSelect?: (index: number) => void;
}

export default function CarouselDots({
    count = 5,
    activeIndex = 0,
    className,
    dotClassName,
    onSelect,
}: CarouselDotsProps) {
    return (
        <div className={cn(carouselDotsWrap, className)}>
            {Array.from({ length: count }).map((_, i) => {
                const dotClass = cn(
                    carouselDot,
                    'h-2 w-2 md:h-2.5 md:w-2.5',
                    i === activeIndex ? 'bg-cta' : 'bg-bg-placeholder',
                    dotClassName,
                );
                return onSelect ? (
                    <button
                        key={i}
                        type="button"
                        onClick={() => onSelect(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        aria-current={i === activeIndex ? true : undefined}
                        className={cn(
                            dotClass,
                            'cursor-pointer appearance-none border-0 p-0',
                        )}
                    />
                ) : (
                    <span key={i} aria-hidden className={dotClass} />
                );
            })}
        </div>
    );
}
