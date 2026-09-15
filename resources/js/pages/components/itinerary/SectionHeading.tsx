import { cn } from '@/lib/utils';
import { itinAltTitle, itinRailTeal, itinTitleBar } from '@/config/theme';

interface SectionHeadingProps {
    title: string;
    id?: string;
    titleClassName?: string;
}

export default function SectionHeading({
    title,
    id,
    titleClassName,
}: SectionHeadingProps) {
    return (
        <div className="flex w-full flex-col gap-2">
            <div className="flex w-full items-stretch gap-2.5">
                <span aria-hidden className={itinRailTeal} />
                <h2 id={id} className={cn(itinAltTitle, titleClassName)}>
                    {title}
                </h2>
            </div>
            <span aria-hidden className={itinTitleBar} />
        </div>
    );
}
