import { cn } from '@/lib/utils';
import { coverImageAbsolute, imagePlaceholder } from '@/config/theme';

interface CoverImageProps {
    src: string;
    alt: string;
    className?: string;
    eager?: boolean;
}

export default function CoverImage({
    src,
    alt,
    className,
    eager = false,
}: CoverImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            loading={eager ? undefined : 'lazy'}
            className={cn(imagePlaceholder, coverImageAbsolute, className)}
        />
    );
}
