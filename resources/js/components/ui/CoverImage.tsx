import { cn } from '@/lib/utils';
import { SkeletonImage } from '@/components/ui/Skeleton';

interface CoverImageProps {
    src: string;
    alt: string;
    className?: string;
    wrapperClassName?: string;
    eager?: boolean;
    /** Absolute fill (hero/gallery) vs block flow (card thumb). */
    fill?: boolean;
}

/**
 * Cover image that delegates to the single-source SkeletonImage so
 * placeholders, fade-in and retry stay in one place. `className`
 * is merged onto the underlying `<img>` (e.g. `md:hidden` visibility).
 * `fill` controls whether the wrapper uses `absolute inset-0` (to
 * fill a `relative` parent such as `imagePlaceholder`) or a normal
 * `relative block` flow wrapper.
 */
export default function CoverImage({
    src,
    alt,
    className,
    wrapperClassName,
    eager = false,
    fill = true,
}: CoverImageProps) {
    return (
        <SkeletonImage
            src={src}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            wrapperClassName={cn(
                fill ? 'absolute inset-0' : 'relative block',
                wrapperClassName,
            )}
            className={cn('h-full w-full object-cover', className)}
        />
    );
}
