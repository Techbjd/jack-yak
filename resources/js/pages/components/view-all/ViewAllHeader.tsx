import { ArrowLeft } from 'lucide-react';
import { fontPrimary } from '@/config/theme';
import { cn } from '@/lib/utils';

export default function ViewAllHeader() {
    return (
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
            <a
                href="/destinations"
                className={cn(
                    fontPrimary,
                    'text-md-lg text-text-primary tracking-card flex items-center gap-1 font-bold',
                )}
            >
                <ArrowLeft className="size-4.75 shrink-0" />
                Back
            </a>
            <h1
                className={cn(
                    fontPrimary,
                    'text-md-lg text-text-primary tracking-card text-center font-bold',
                )}
            >
                Top Destinations
            </h1>
            <span aria-hidden="true" />
        </div>
    );
}
