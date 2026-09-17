import { ArrowLeft } from 'lucide-react';
import { router } from '@inertiajs/react';
import { fontPrimary } from '@/config/theme';
import { siteRoutes } from '@/config/site';
import { viewAllHeaderCopy } from '@/config/destination';
import { cn } from '@/lib/utils';

export default function ViewAllHeader() {
    // View-all is reached from many places (map, destinations, guide…),
    // so back behaves like the browser back button and returns to
    // wherever the visitor came from. Only on a direct visit with no
    // history do we fall back to destinations.
    const goBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            router.visit(siteRoutes.destinations);
        }
    };

    return (
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
            <button
                type="button"
                onClick={goBack}
                className={cn(
                    fontPrimary,
                    'text-md-lg text-text-primary tracking-card flex cursor-pointer items-center gap-1 font-bold',
                )}
            >
                <ArrowLeft className="size-4.75 shrink-0" />
                {viewAllHeaderCopy.back}
            </button>
            <h1
                className={cn(
                    fontPrimary,
                    'text-md-lg text-text-primary tracking-card text-center font-bold',
                )}
            >
                {viewAllHeaderCopy.title}
            </h1>
            <span aria-hidden="true" />
        </div>
    );
}
