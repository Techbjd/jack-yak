import { cn } from '@/lib/utils';
import { fontPrimary } from '@/config/theme';

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    eyebrowClassName?: string;
    titleClassName?: string;
    className?: string;
}

/**
 * The eyebrow + h2 pair every content section rebuilds by hand
 * (plan steps, top destinations, why-explore, featured grid, popular).
 * Layout wrappers and side copy/links stay at the call site — only the
 * repeated pair lives here. Sight-unseen rule: the base matches the most
 * common rendering; pass overrides for the rest.
 */
export default function SectionHeading({
    eyebrow,
    title,
    eyebrowClassName,
    titleClassName,
    className,
}: SectionHeadingProps) {
    return (
        <div className={cn('flex flex-col gap-1', className)}>
            {eyebrow && (
                <p
                    className={cn(
                        fontPrimary,
                        'text-xs-sm text-ink font-bold',
                        eyebrowClassName,
                    )}
                >
                    {eyebrow}
                </p>
            )}
            <h2
                className={cn(
                    fontPrimary,
                    'text-md-lg text-text-primary leading-snug font-bold tracking-wide',
                    titleClassName,
                )}
            >
                {title}
            </h2>
        </div>
    );
}
