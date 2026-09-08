import { eyebrow, fontPrimary, imagePlaceholder } from '@/config/theme';
import { cn } from '@/lib/utils';

function MaskLabel({ name }: { name: string }) {
    return (
        <span
            className={cn(
                fontPrimary,
                'px-2 text-center text-2xs font-medium text-white/80',
            )}
        >
            {name}
        </span>
    );
}

export default function JourneyNepal() {
    return (
        <section className="flex w-full flex-col gap-8 px-6 py-8 md:gap-12 md:px-12 md:py-12 lg:px-24">
            {/* Row 1 — heading + tall image */}
            <div className="grid grid-cols-2 items-start gap-4 md:gap-8 lg:gap-12">
                <div className="flex flex-col gap-4 md:gap-6">
                    <p className={cn(eyebrow, 'md:text-2xl-3xl md:leading-snug')}>
                        DISCOVER NEPAL
                    </p>
                    <h2
                        className={cn(
                            fontPrimary,
                            'text-2xl-3xl leading-none font-bold text-text-primary md:text-journey md:leading-journey md:text-teal lg:tracking-wide',
                        )}
                    >
                        Journey Beyond Peaks
                    </h2>
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-md leading-snug font-medium text-text-primary md:max-w-content md:text-md-lg',
                        )}
                    >
                        JackYak is your gateway to Nepal&apos;s breathtaking
                        landscapes, timeless traditions, and unforgettable
                        adventures.
                    </p>
                </div>
                {/* Mask — swap with discover-nepal-2.png later */}
                <div
                    className={cn(
                        imagePlaceholder,
                        'flex h-full w-full items-center justify-center md:h-auto md:aspect-893/548',
                    )}
                >
                    <MaskLabel name="discover-nepal-2.png" />
                </div>
            </div>

            {/* Row 2 — teal card + image + yak panel */}
            <div className="grid grid-cols-2 items-stretch gap-4 md:gap-6 lg:grid-cols-12">
                <div className="flex flex-col justify-center gap-3 bg-ember p-4 text-white md:bg-teal md:p-6 lg:col-span-3">
                    <h3
                        className={cn(
                            fontPrimary,
                            'text-lg-xl leading-snug font-bold',
                        )}
                    >
                        IMMERSIVE EXPERIENCES
                    </h3>
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-sm leading-snug font-medium md:text-md-lg',
                        )}
                    >
                        Explore Nepal through cinematic destination stories,
                        travel guides, local insights, trekking routes, and
                        hidden gems designed to inspire your next adventure.
                    </p>
                </div>
                {/* Mask — swap with Group_35.png later */}
                <div
                    className={cn(
                        imagePlaceholder,
                        'flex h-full w-full items-center justify-center lg:col-span-5',
                    )}
                >
                    <MaskLabel name="Group_35.png" />
                </div>
                {/* Desktop only — Meet the Yak panel */}
                <div className="hidden flex-col justify-center gap-3 bg-white p-6 md:col-span-2 md:flex lg:col-span-4">
                    <h3
                        className={cn(
                            fontPrimary,
                            'text-lg-xl leading-snug font-bold text-text-primary',
                        )}
                    >
                        Meet the Yak
                    </h3>
                    <p
                        className={cn(
                            fontPrimary,
                            'text-xs-sm leading-snug font-medium text-text-primary md:text-md-lg',
                        )}
                    >
                        For centuries, the Himalayan yak has been a symbol of
                        strength, resilience, and exploration. Inspired by this
                        remarkable companion of the mountains, JackYak invites
                        you to journey through Nepal&apos;s most extraordinary
                        landscapes and cultures.
                    </p>
                </div>
            </div>

            {/* Mobile only — full-width strip mask */}
            <div
                className={cn(
                    imagePlaceholder,
                    'flex h-40 w-full items-center justify-center lg:hidden',
                )}
            >
                <MaskLabel name="aboutJackyak.png" />
            </div>
        </section>
    );
}
