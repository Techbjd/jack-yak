import { useEffect, useRef, useState } from 'react';
import { router } from '@inertiajs/react';
import { fontPrimary, sectionInner, sectionPadding } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { cn } from '@/lib/utils';
import {
    NEPAL_MAP_VIEWBOX,
    NEPAL_PROVINCES,
    type NepalProvince,
} from './nepalProvinces';

interface MapLabelLine {
    text: string;
    x: number;
    y: number;
    anchor: 'start' | 'middle';
}

interface MapLabel {
    slug: string;
    lines: MapLabelLine[];
    erase: { x: number; y: number; w: number; h: number };
}

// Clickable labels drawn where the picture has them (name + leader line
// look). The baked-in raster text is covered by a background rect so only
// the link text shows. Leader lines + dots are retraced as SVG (MAP_LEADERS)
// above the hover fills so they never get covered.
const MAP_LABELS: MapLabel[] = [
    {
        slug: 'karnali',
        lines: [{ text: 'Karnali', x: 2, y: 171, anchor: 'start' }],
        erase: { x: 0, y: 156, w: 56, h: 19 },
    },
    {
        slug: 'sudur-pashchim',
        lines: [
            { text: 'Sudur', x: 164, y: 349, anchor: 'middle' },
            { text: 'Pashchim', x: 164, y: 371, anchor: 'middle' },
        ],
        erase: { x: 124, y: 332, w: 82, h: 44 },
    },
    {
        slug: 'lumbini',
        lines: [{ text: 'Lumbini', x: 349, y: 464, anchor: 'middle' }],
        erase: { x: 316, y: 448, w: 66, h: 22 },
    },
    {
        slug: 'gandaki',
        lines: [{ text: 'Gandaki', x: 488, y: 486, anchor: 'middle' }],
        erase: { x: 454, y: 470, w: 68, h: 22 },
    },
    {
        slug: 'madhesh',
        lines: [{ text: 'Madhesh', x: 632, y: 560, anchor: 'middle' }],
        erase: { x: 600, y: 545, w: 65, h: 21 },
    },
    {
        slug: 'bagmati',
        lines: [{ text: 'Bagmati', x: 920, y: 386, anchor: 'start' }],
        erase: { x: 916, y: 370, w: 69, h: 23 },
    },
    {
        slug: 'koshi',
        lines: [{ text: 'Koshi', x: 909, y: 448, anchor: 'start' }],
        erase: { x: 903, y: 432, w: 53, h: 22 },
    },
];

const LABEL_FONT_SIZE = 15;

const LEADER_GRAY = '#929CAA';
const LEADER_NAVY = '#253A55';
const LEADER_WIDTH = 2;
const DOT_RADIUS = 3.5;

interface MapLeader {
    slug: string;
    dot: { x: number; y: number };
    /** Gray main segment of the leader line. */
    line: { x1: number; y1: number; x2: number; y2: number };
    /** Navy end tick past the gray segment (absent for Karnali). */
    tick?: { x1: number; y1: number; x2: number; y2: number };
}

// Leader lines + dots traced from the base picture (viewBox px). Redrawn
// above the hover fills so the line and the point stay visible even when a
// hover fill takes over the province underneath them.
const MAP_LEADERS: MapLeader[] = [
    {
        slug: 'karnali',
        dot: { x: 280, y: 166 },
        line: { x1: 120, y1: 165.5, x2: 273, y2: 165.5 },
    },
    {
        slug: 'sudur-pashchim',
        dot: { x: 151, y: 268 },
        line: { x1: 150.5, y1: 275, x2: 150.5, y2: 292 },
        tick: { x1: 150.5, y1: 292, x2: 150.5, y2: 302 },
    },
    {
        slug: 'lumbini',
        dot: { x: 341, y: 379 },
        line: { x1: 340.5, y1: 386, x2: 340.5, y2: 392 },
        tick: { x1: 340.5, y1: 392, x2: 340.5, y2: 399 },
    },
    {
        slug: 'gandaki',
        dot: { x: 479, y: 354 },
        line: { x1: 478.5, y1: 361, x2: 478.5, y2: 418 },
        tick: { x1: 478.5, y1: 419, x2: 478.5, y2: 425 },
    },
    {
        slug: 'bagmati',
        dot: { x: 660, y: 386 },
        line: { x1: 667, y1: 386.5, x2: 875, y2: 386.5 },
        tick: { x1: 876, y1: 386.5, x2: 880, y2: 386.5 },
    },
    {
        slug: 'madhesh',
        dot: { x: 612, y: 476 },
        line: { x1: 611.5, y1: 483, x2: 611.5, y2: 489 },
        tick: { x1: 611.5, y1: 489, x2: 611.5, y2: 497 },
    },
    {
        slug: 'koshi',
        dot: { x: 840, y: 442 },
        line: { x1: 847, y1: 442.5, x2: 864, y2: 442.5 },
        tick: { x1: 865, y1: 442.5, x2: 868, y2: 442.5 },
    },
];

const NepalMap = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const [focused, setFocused] = useState<string | null>(null);
    const [selected, setSelected] = useState<string | null>(null);
    const navigateTimer = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (navigateTimer.current !== null) {
                window.clearTimeout(navigateTimer.current);
            }
        };
    }, []);

    const isActive = (slug: string): boolean => {
        return hovered === slug || focused === slug || selected === slug;
    };

    const goToViewAll = (province: NepalProvince) => {
        setSelected(province.slug);
        if (navigateTimer.current !== null) {
            window.clearTimeout(navigateTimer.current);
        }
        // Brief delay so the #253A55 fill is visible before navigating.
        navigateTimer.current = window.setTimeout(() => {
            router.visit(`/view-all?province=${province.slug}`);
        }, 240);
    };

    const goToViewAllBySlug = (slug: string) => {
        const province = NEPAL_PROVINCES.find((p) => p.slug === slug);
        if (province) {
            goToViewAll(province);
        }
    };

    const selectedName = NEPAL_PROVINCES.find(
        (province) => province.slug === selected,
    )?.name;

    return (
        <section
            className={cn(
                'relative w-full overflow-clip',
                sectionPadding,
                sectionInner,
            )}
        >
            <div className="max-w-container relative mx-auto w-full">
                <div className="max-w-map relative mx-auto w-full pt-[calc(25.6vw-3rem)] md:pt-0">
                    <p
                        className={cn(
                            fontPrimary,
                            'text-teal pr-[5%] text-right text-xl font-bold sm:text-2xl md:text-4xl',
                        )}
                    >
                        CHINA
                    </p>

                    <div className="relative w-full">
                        <img
                            src={IMAGES.home.provincesMap}
                            alt="Nepal Map vectorized"
                            className="block h-auto w-full object-contain"
                        />

                        {/* Province color fill under the hover images so pointed
                            tips and edge slivers the PNGs miss still show
                            color (same hue family, seamless). */}
                        <svg
                            viewBox={NEPAL_MAP_VIEWBOX}
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 block h-full w-full"
                        >
                            {NEPAL_PROVINCES.map((province) => (
                                <path
                                    key={province.slug}
                                    d={province.d}
                                    fill={province.color}
                                    stroke={province.color}
                                    strokeWidth={3}
                                    strokeLinejoin="round"
                                    className={cn(
                                        'transition-opacity duration-[180ms]',
                                        isActive(province.slug)
                                            ? 'opacity-100'
                                            : 'opacity-0',
                                    )}
                                />
                            ))}
                        </svg>

                        {NEPAL_PROVINCES.map((province) => (
                                <img
                                    key={province.slug}
                                    src={province.image}
                                    alt=""
                                    aria-hidden="true"
                                    style={{
                                        left: `${province.pos.left}%`,
                                        top: `${province.pos.top}%`,
                                        width: `${province.pos.width}%`,
                                        height: `${province.pos.height}%`,
                                    }}
                                    className={cn(
                                        'pointer-events-none absolute transition-opacity duration-180',
                                        isActive(province.slug)
                                            ? 'opacity-100'
                                            : 'opacity-0',
                                    )}
                                />
                            ))}

                        <svg
                            viewBox={NEPAL_MAP_VIEWBOX}
                            role="group"
                            aria-label="Interactive map of Nepal provinces. Select a province to view its destinations."
                            className="absolute inset-0 block h-full w-full"
                        >
                            {NEPAL_PROVINCES.map((province) => {
                                return (
                                    <g
                                        key={province.slug}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`View destinations in ${province.name}`}
                                        className="cursor-pointer outline-none"
                                        onMouseEnter={() =>
                                            setHovered(province.slug)
                                        }
                                        onMouseLeave={() => setHovered(null)}
                                        onFocus={() =>
                                            setFocused(province.slug)
                                        }
                                        onBlur={() => setFocused(null)}
                                        onClick={() => goToViewAll(province)}
                                        onKeyDown={(event) => {
                                            if (
                                                event.key === 'Enter' ||
                                                event.key === ' '
                                            ) {
                                                event.preventDefault();
                                                goToViewAll(province);
                                            }
                                        }}
                                    >
                                        <title>{province.name}</title>
                                        <path
                                            d={province.d}
                                            fill="transparent"
                                            stroke="none"
                                        />
                                    </g>
                                );
                            })}

                            {/* Cover baked-in raster labels so the links below are the only text (desktop only) */}
                            <g
                                pointerEvents="none"
                                fill="#FFFFFF"
                                className="hidden sm:block"
                            >
                                {MAP_LABELS.map((label) => (
                                    <rect
                                        key={label.slug}
                                        x={label.erase.x}
                                        y={label.erase.y}
                                        width={label.erase.w}
                                        height={label.erase.h}
                                    />
                                ))}
                            </g>

                            {/* Clickable province names, placed like in the picture (desktop only) */}
                            <g
                                fontSize={LABEL_FONT_SIZE}
                                fontWeight={600}
                                className={cn('hidden sm:block', fontPrimary)}
                            >
                                {MAP_LABELS.map((label) => {
                                    const province = NEPAL_PROVINCES.find(
                                        (p) => p.slug === label.slug,
                                    );
                                    if (!province) {
                                        return null;
                                    }
                                    return (
                                        <g
                                            key={label.slug}
                                            role="button"
                                            tabIndex={0}
                                            aria-label={`View destinations in ${province.name}`}
                                            className="cursor-pointer outline-none"
                                            fill={province.color}
                                            onMouseEnter={() =>
                                                setHovered(label.slug)
                                            }
                                            onMouseLeave={() =>
                                                setHovered(null)
                                            }
                                            onFocus={() =>
                                                setFocused(label.slug)
                                            }
                                            onBlur={() => setFocused(null)}
                                            onClick={() =>
                                                goToViewAllBySlug(label.slug)
                                            }
                                            onKeyDown={(event) => {
                                                if (
                                                    event.key === 'Enter' ||
                                                    event.key === ' '
                                                ) {
                                                    event.preventDefault();
                                                    goToViewAllBySlug(
                                                        label.slug,
                                                    );
                                                }
                                            }}
                                        >
                                            <title>{province.name}</title>
                                            {label.lines.map((line) => (
                                                <text
                                                    key={line.text}
                                                    x={line.x}
                                                    y={line.y}
                                                    textAnchor={line.anchor}
                                                >
                                                    {line.text}
                                                </text>
                                            ))}
                                        </g>
                                    );
                                })}
                            </g>

                            {/* Leader lines + dots redrawn above everything so
                                they stay visible in every state — at rest and
                                even when a hover fill covers the province. */}
                            <g pointerEvents="none" strokeWidth={LEADER_WIDTH}>
                                {MAP_LEADERS.map((leader) => (
                                    <g key={leader.slug}>
                                        <line
                                            x1={leader.line.x1}
                                            y1={leader.line.y1}
                                            x2={leader.line.x2}
                                            y2={leader.line.y2}
                                            stroke={LEADER_GRAY}
                                        />
                                        {leader.tick && (
                                            <line
                                                x1={leader.tick.x1}
                                                y1={leader.tick.y1}
                                                x2={leader.tick.x2}
                                                y2={leader.tick.y2}
                                                stroke={LEADER_NAVY}
                                            />
                                        )}
                                        <circle
                                            cx={leader.dot.x}
                                            cy={leader.dot.y}
                                            r={DOT_RADIUS}
                                            stroke="none"
                                            fill={LEADER_NAVY}
                                        />
                                    </g>
                                ))}
                            </g>
                        </svg>
                    </div>

                    <p
                        className={cn(
                            fontPrimary,
                            'text-teal pl-[10%] text-left text-xl font-bold sm:text-2xl md:text-4xl',
                        )}
                    >
                        INDIA
                    </p>

                    <p aria-live="polite" className="sr-only">
                        {selectedName
                            ? `Selected ${selectedName} — opening all destinations.`
                            : ''}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NepalMap;
