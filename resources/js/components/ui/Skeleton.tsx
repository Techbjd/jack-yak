import {
    useEffect,
    useRef,
    useState,
    type ImgHTMLAttributes,
    type ReactNode,
} from 'react';
import { cn } from '@/lib/utils';
import ImageError from '@/components/error/ImageError';

/**
 * Pulse placeholder block shown while slow content loads.
 * Colors come from the shared palette so skeletons match the design.
 */
export function Skeleton({ className }: { className?: string }) {
    return (
        <span
            aria-hidden
            className={cn(
                'block animate-pulse rounded-md bg-bg-placeholder',
                className,
            )}
        />
    );
}

export function SkeletonRect({ className }: { className?: string }) {
    return (
        <span
            aria-hidden
            className={cn(
                'block animate-pulse bg-bg-placeholder',
                className,
            )}
        />
    );
}

export function SkeletonCircle({ className }: { className?: string }) {
    return (
        <span
            aria-hidden
            className={cn(
                'block shrink-0 animate-pulse rounded-full bg-bg-placeholder',
                className,
            )}
        />
    );
}

interface SkeletonTextProps {
    lines?: number;
    widths?: string[];
    className?: string;
    lineClassName?: string;
}

export function SkeletonText({
    lines = 1,
    widths,
    className,
    lineClassName,
}: SkeletonTextProps) {
    const count = widths ? widths.length : lines;
    return (
        <span
            aria-hidden
            className={cn('flex w-full flex-col gap-2', className)}
        >
            {Array.from({ length: count }).map((_, i) => (
                <span
                    key={i}
                    className={cn(
                        'block h-3 animate-pulse rounded bg-bg-placeholder',
                        lineClassName,
                    )}
                    style={{ width: widths ? widths[i] : '100%' }}
                />
            ))}
        </span>
    );
}

interface SkeletonImageProps
    extends Omit<
        ImgHTMLAttributes<HTMLImageElement>,
        'src' | 'srcSet' | 'onLoad' | 'onError'
    > {
    src: string;
    /**
     * Sizing/position classes for the wrapper (e.g. the fixed thumb size
     * or `absolute inset-0`), so layout never shifts while loading.
     */
    wrapperClassName?: string;
    onLoad?: ImgHTMLAttributes<HTMLImageElement>['onLoad'];
    onError?: ImgHTMLAttributes<HTMLImageElement>['onError'];
    /** Optional override for the inline image error state. */
    fallback?: ReactNode;
    /** Label for the retry button inside the error overlay. */
    retryLabel?: string;
}

/**
 * Image that paints a pulsing placeholder behind itself until the file
 * arrives, then fades in. Same layout and final look as a plain `<img>`,
 * without the empty-box flash on slow networks.
 *
 * Single source of image loading UI — do not duplicate skeleton/error
 * markup in call sites; pass `wrapperClassName` for sizing instead.
 * Cached images are detected via `complete + naturalWidth` so the
 * placeholder never flashes on instant hits.
 */
export function SkeletonImage({
    src,
    alt = '',
    className,
    wrapperClassName,
    loading,
    onLoad,
    onError,
    fallback,
    retryLabel = 'Retry',
    ...rest
}: SkeletonImageProps) {
    const imgRef = useRef<HTMLImageElement>(null);
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);
    const [retryTick, setRetryTick] = useState(0);

    useEffect(() => {
        setLoaded(false);
        setFailed(false);
    }, [src, retryTick]);

    useEffect(() => {
        const img = imgRef.current;
        if (img?.complete && img.naturalWidth > 0) {
            setLoaded(true);
        }
    }, [src, retryTick]);

    const handleRetry = () => {
        setFailed(false);
        setLoaded(false);
        setRetryTick((n) => n + 1);
    };

    return (
        <span
            className={cn('relative block overflow-hidden', wrapperClassName)}
        >
            {!loaded && !failed && (
                <span
                    aria-hidden
                    className="absolute inset-0 animate-pulse bg-bg-placeholder"
                />
            )}
            {failed ? (
                <span className="absolute inset-0">
                    {fallback ?? (
                        <ImageError
                            onRetry={handleRetry}
                            retryLabel={retryLabel}
                            className="absolute inset-0"
                        />
                    )}
                </span>
            ) : null}
            {!failed && (
                <img
                    {...rest}
                    key={`${src}::${retryTick}`}
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    loading={loading}
                    onLoad={(e) => {
                        setLoaded(true);
                        onLoad?.(e);
                    }}
                    onError={(e) => {
                        setFailed(true);
                        setLoaded(true);
                        onError?.(e);
                    }}
                    className={cn(
                        className,
                        'transition-opacity duration-500',
                        loaded ? 'opacity-100' : 'opacity-0',
                    )}
                />
            )}
        </span>
    );
}
