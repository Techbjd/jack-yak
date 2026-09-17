import { useEffect, useRef, useState } from 'react';
import { router } from '@inertiajs/react';
import { fontPrimary, sectionInner, sectionPadding } from '@/config/theme';
import { useColors } from '@/config/colors';
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
// the link text shows. Leaders lines + dots stay as in the image.
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

const NepalMap = () => {
    const colors = useColors();
    // #2D8A8A — hover + selected province fill and label color (design token).
    const provinceInk = colors.teal;
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

                        <svg
                            viewBox={NEPAL_MAP_VIEWBOX}
                            role="group"
                            aria-label="Interactive map of Nepal provinces. Select a province to view its destinations."
                            className="absolute inset-0 block h-full w-full"
                        >
                            {NEPAL_PROVINCES.map((province) => {
                                const active = isActive(province.slug);
                                const isSelected = selected === province.slug;
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
                                            fill={provinceInk}
                                            fillOpacity={
                                                active
                                                    ? isSelected
                                                        ? 1
                                                        : 0.65
                                                    : 0
                                            }
                                            stroke={provinceInk}
                                            strokeWidth={active ? 1.5 : 0}
                                            strokeLinejoin="round"
                                            className="transition-[fill-opacity] duration-[180ms]"
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
                                            fill={provinceInk}
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
