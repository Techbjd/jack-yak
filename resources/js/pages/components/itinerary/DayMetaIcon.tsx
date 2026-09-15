import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';

interface DayMetaIconProps {
    src: string;
    label?: string;
    decorative?: boolean;
    Fallback: LucideIcon;
    className?: string;
}

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
