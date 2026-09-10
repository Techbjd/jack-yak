import { fontPrimary } from '@/config/theme';
import { cn } from '@/lib/utils';

export default function MapQuote() {
    return (
        <div className="flex w-full justify-center px-6 md:px-0">
            <p
                className={cn(
                    fontPrimary,
                    'max-w-quote text-text-primary lg:text-2xl-3xl w-full text-center text-xl leading-[1.3] font-medium sm:text-2xl md:text-3xl md:leading-11',
                )}
            >
                &ldquo;Between 80&deg;E and 88&deg;E longitude lies the
                world&rsquo;s most vertical country — a land containing
                everything from tiger-haunted jungle to the roof of the world,
                compressed into a strip of earth 800 kilometres wide.&rdquo;
            </p>
        </div>
    );
}
