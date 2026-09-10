import { ArrowLeft } from 'lucide-react';
import { fontPrimary } from '@/config/theme';
import { cn } from '@/lib/utils';

/** View-all title row — Back link left, centered title */
export default function ViewAllHeader() {
    return (
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
            <a
                href="/destinations"
                className={cn(
                    fontPrimary,
                    'text-md-lg text-text-primary flex items-center gap-1 font-bold tracking-[0.03em]',
                )}
            >
                <ArrowLeft className="size-4.75 shrink-0" />
                Back
            </a>
            <h1
                className={cn(
                    fontPrimary,
                    'text-md-lg text-text-primary text-center font-bold tracking-[0.03em]',
                )}
            >
                Top Destinations
            </h1>
            <span aria-hidden="true" />
        </div>
    );
}
