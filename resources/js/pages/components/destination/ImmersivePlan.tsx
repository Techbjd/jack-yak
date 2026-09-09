import { eyebrow, fontPrimary, imagePlaceholder } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';

export default function ImmersivePlan() {
    return (
        <section className="flex w-full flex-col px-6 py-8 md:px-12 md:py-12 lg:px-24">
            <div className="grid grid-cols-2 items-stretch overflow-hidden rounded-immersive md:grid-cols-12 md:min-h-81.5">
                {/* Left — warm panel */}
                <div className="flex flex-col justify-center gap-4 bg-surface-warm p-5 md:col-span-5 md:gap-5 md:p-8 lg:gap-6 lg:px-16 lg:py-10">
                    {/* <p
                        className={cn(
                            eyebrow,
                            'leading-snug tracking-wide md:text-md-lg',
                        )}
                    >
                        Explore Nepal
                    </p> */}
                    <h2
                        className={cn(
                            fontPrimary,
                            'text-lg-xl leading-snug font-bold tracking-wide text-text-primary uppercase md:text-2xl-3xl',
                        )}
                    >
                        IMMERSIVE EXPERIENCES
                    </h2>
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-md leading-snug font-medium text-text-primary md:text-md-lg',
                        )}
                    >
                        Explore Nepal through cinematic destination stories,
                        travel guides, local insights, trekking routes, and
                        hidden gems designed to inspire your next adventure.
                    </p>
                    <a
                        href="#"
                        className={cn(
                            fontPrimary,
                            'flex w-fit items-center justify-center bg-cta-ember px-5 py-2 text-xs-sm font-bold tracking-wide text-white md:h-12.75 md:w-52 md:bg-cta md:px-0 md:py-0 md:text-md-lg',
                        )}
                    >
                        Start Planning
                    </a>
                </div>
                {/* Right — temple backdrop */}
                <div
                    className={cn(
                        imagePlaceholder,
                        'relative flex min-h-40 w-full items-center justify-center overflow-hidden md:col-span-7 md:min-h-81.5',
                    )}
                >
                    {/* Mobile only — temple portrait (408x640) fits the narrow half-column */}
                    <img
                        src={IMAGES.destination.swayambhuStupa}
                        alt="Temple image"
                        className="absolute inset-0 h-full w-full object-cover md:hidden"
                    />
                    {/* Desktop only — immersive wide (1648x652) fits the ~2.2:1 right panel */}
                    <img
                        src={IMAGES.destination.stupaPanorama}
                        alt="Temple image"
                        className="absolute inset-0 hidden h-full w-full object-cover md:block"
                    />
                </div>
            </div>
        </section>
    );
}
