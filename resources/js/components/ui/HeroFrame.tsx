import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { fontPrimary, heroDisplayFont } from '@/config/theme';
import Header from '@/components/ui/Header';

interface HeroFrameProps {
    /** Fixed backdrop inside the frame (e.g. the destination sun). */
    backdrop?: ReactNode;
    /** Slide imagery + title overlays. */
    children: ReactNode;
    /** Screen-reader announcement of the visible slide. */
    liveText: string;
    /** Centered paragraph under the frame. */
    tagline?: string;
    /** Frame shape overrides (rounding, aspect). */
    frameClassName?: string;
    /**
     * Float the header over the frame imagery (imagery behind the nav)
     * on lg+. Below lg the header stays in normal flow above the frame.
     */
    headerOverlay?: boolean;
    /** Header tone; use onDark when overlaying a photo. */
    headerTone?: 'onDark' | 'onLight';
}

/**
 * Outer shell shared by the destination + about heroes: light header,
 * centered white frame, aspect box, live region, optional tagline.
 * Only the imagery differs per page.
 */
export default function HeroFrame({
    backdrop,
    children,
    liveText,
    tagline,
    frameClassName,
    headerOverlay = false,
    headerTone = 'onLight',
}: HeroFrameProps) {
    return (
        <div
            className={cn(
                'flex w-full flex-col bg-white',
                headerOverlay && 'relative',
            )}
        >
            {headerOverlay ? (
                <>
                    <div className="lg:hidden">
                        <Header tone="onLight" />
                    </div>
                    <div className="absolute inset-x-0 top-0 z-20 hidden lg:block">
                        <Header tone={headerTone} />
                    </div>
                </>
            ) : (
                <Header tone={headerTone} />
            )}

            <div
                className={cn(
                    'flex flex-col items-center px-0 pt-2 text-center md:px-12 lg:px-12',
                    headerOverlay && 'lg:pt-0',
                )}
            >
                <div
                    className={cn(
                        'relative mt-4 w-full bg-white',
                        headerOverlay && 'lg:mt-0',
                    )}
                >
                    <div
                        className={cn(
                            'relative aspect-video w-full overflow-hidden bg-white',
                            frameClassName,
                        )}
                    >
                        {backdrop}
                        {children}
                        <p aria-live="polite" className="sr-only">
                            {liveText}
                        </p>
                    </div>
                </div>

                {tagline && (
                    <p
                        className={cn(
                            fontPrimary,
                            'text-sm-base text-text-primary md:text-md-lg mx-auto mt-6 w-full max-w-70 px-6 text-center leading-snug font-medium md:mt-8 md:max-w-md md:px-0',
                        )}
                    >
                        {tagline}
                    </p>
                )}
            </div>
        </div>
    );
}

interface HeroTitleSvgProps {
    viewBox: string;
    x: number;
    y: number;
    fontSize: number;
    scaleX?: number;
    title: string;
    active?: boolean;
    /** Carousel fade between slides; off for single-title heroes. */
    animate?: boolean;
    /** Tailwind text color class for the SVG title paint. */
    colorClass?: string;
}

/**
 * Slice-locked SVG title seated in a cutout's transparent sky.
 * `fill="currentColor"` + `colorClass` (default `text-text-primary`) keeps
 * the paint in Tailwind instead of a hardcoded hex.
 */
export function HeroTitleSvg({
    viewBox,
    x,
    y,
    fontSize,
    scaleX = 1,
    title,
    active = true,
    animate = false,
    colorClass = 'text-text-primary',
}: HeroTitleSvgProps) {
    return (
        <svg
            viewBox={viewBox}
            preserveAspectRatio="xMidYMid slice"
            aria-hidden={!active}
            className={cn(
                'pointer-events-none absolute inset-0 h-full w-full',
                animate &&
                    'transition-opacity duration-700 ease-out' +
                        (active ? ' opacity-100' : ' opacity-0'),
            )}
        >
            <text
                x={x}
                y={y}
                textAnchor="middle"
                fontSize={fontSize}
                fontFamily={heroDisplayFont}
                fontWeight={500}
                fill="currentColor"
                transform={
                    scaleX === 1
                        ? undefined
                        : `matrix(${scaleX} 0 0 1 ${x * (1 - scaleX)} 0)`
                }
                className={cn('drop-shadow-md', colorClass)}
            >
                {title}
            </text>
        </svg>
    );
}
