import { bodyText, headingSubsection } from '@/config/theme';
import { cn } from '@/lib/utils';

interface HomeInfoBlockProps {
    title: string;
    body: string;
    align: 'center' | 'left';
    titleClassName?: string;
}

export default function HomeInfoBlock({
    title,
    body,
    align,
    titleClassName,
}: HomeInfoBlockProps) {
    return (
        <div
            className={cn(
                'max-w-content-md flex flex-col gap-4',
                align === 'center' ? 'text-center' : 'text-left',
            )}
        >
            <h3 className={cn(headingSubsection, titleClassName)}>{title}</h3>
            <p className={bodyText}>{body}</p>
        </div>
    );
}
