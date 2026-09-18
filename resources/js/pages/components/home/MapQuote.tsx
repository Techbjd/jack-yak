import { fontPrimary } from '@/config/theme';
import { mapQuote } from '@/config/home';
import { cn } from '@/lib/utils';

export default function MapQuote() {
    return (
        <div className="flex w-full justify-center px-6 md:px-0">
            <p
                className={cn(
                    fontPrimary,
                    'text-text-primary lg:text-2xl-3xl leading-quote w-full max-w-[1011px] text-center text-sm-base font-medium sm:text-2xl md:text-3xl md:leading-11',
                )}
            >
                {mapQuote}
            </p>
        </div>
    );
}
