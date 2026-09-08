import { fontPrimary, imagePlaceholder } from '@/config/theme';
import { cn } from '@/lib/utils';

export default function ImmersivePlan() {
    return (
        <section className="grid w-full grid-cols-2 items-center gap-4 px-6 py-8">
            <div className="flex flex-col items-start gap-4">
                <h2
                    className={cn(
                        fontPrimary,
                        'text-lg-xl leading-snug font-bold text-text-primary',
                    )}
                >
                    IMMERSIVE EXPERIENCES
                </h2>
                <p
                    className={cn(
                        fontPrimary,
                        'text-xs-md leading-snug font-medium text-text-primary',
                    )}
                >
                    Explore Nepal through cinematic destination stories, travel
                    guides, local insights, trekking routes, and hidden gems
                    designed to inspire your next adventure.
                </p>
                <a
                    href="#"
                    className={cn(
                        fontPrimary,
                        'w-fit rounded-full bg-ember px-5 py-2 text-xs-sm font-bold text-white',
                    )}
                >
                    Start Planning
                </a>
            </div>
            {/* Mask — swap with discover-nepal-1.png later */}
            <div
                className={cn(
                    imagePlaceholder,
                    'flex h-full w-full items-center justify-center',
                )}
            >
                <span
                    className={cn(
                        fontPrimary,
                        'px-2 text-center text-2xs font-medium text-white/80',
                    )}
                >
                    discover-nepal-1.png
                </span>
            </div>
        </section>
    );
}
