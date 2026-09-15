import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';

interface DayMetaIconProps {
    /** Custom icon URL (IMAGES.itinerary.icons.*) — drop the downloaded
     *  Figma PNG/SVG into public/images/itinerary/icons/ to use it. */
    src: string;
    /** Accessible label for icon-only (mobile) usage. */
    label?: string;
    /** Hide from assistive tech when a visible text label sits beside it. */
    decorative?: boolean;
    /** Lucide outline icon shown until the custom file exists. */
    Fallback: LucideIcon;
    className?: string;
}

/**
 * Day-card meta icon — custom image with Lucide fallback.
 * Renders the downloaded Figma icon when the file exists; if it 404s
 * (not uploaded yet) it falls back to the Lucide outline so the card
 * never shows a broken image.
 */
export default function DayMetaIcon({
    src,
    label,
    decorative = false,
    Fallback,
    className,
}: DayMetaIconProps) {
    const [failed, setFailed] = useState(false);

    if (!src || failed) {
        return (
            <Fallback
                aria-hidden={decorative || undefined}
                aria-label={!decorative ? label : undefined}
                role={!decorative ? 'img' : undefined}
                className={className}
            />
        );
    }

    return (
        <img
            src={src}
            alt={decorative ? '' : (label ?? '')}
            aria-hidden={decorative || undefined}
            onError={() => setFailed(true)}
            className={className}
            loading="lazy"
        />
    );
}
