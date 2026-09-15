import { Image, Users, SquarePlay } from 'lucide-react';
import { cn } from '@/lib/utils';
import { galleryFilters } from '@/config/itinerary';

const pillText =
    'font-manrope text-xs-sm leading-itinerary-23 font-semibold md:text-md-lg';

interface FilterPillProps {
    active?: boolean;
    icon: typeof Image;
    label: string;
    count: number;
    widthClass: string;
}

/** Single gallery filter pill — Figma desktop: teal filled when active
 *  (white-translucent count overlay), white with #E2E8F0 border otherwise
 *  (dark-translucent count overlay). */
function FilterPill({
    active = false,
    icon: Icon,
    label,
    count,
    widthClass,
}: FilterPillProps) {
    return (
        <button
            type="button"
            aria-pressed={active}
            className={cn(
                'flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full border md:h-12 md:gap-2 md:px-5',
                widthClass,
                active
                    ? 'border-deep-teal bg-deep-teal text-white'
                    : 'border-card-line text-slate-text bg-white',
            )}
        >
            <Icon aria-hidden className="size-4 shrink-0 md:size-5" />
            <span className={pillText}>{label}</span>
            <span
                aria-label={`${count} items`}
                className={cn(
                    'text-xs-sm md:text-base-md flex h-4 min-w-4.75 items-center justify-center rounded-full leading-none font-bold md:h-6 md:min-w-6 md:px-1.5',
                    active
                        ? 'bg-count-overlay-active text-white'
                        : 'bg-count-overlay text-slate-text',
                )}
            >
                {count}
            </span>
        </button>
    );
}

/** Trek gallery / Traveller photos / Videos filter row */
export default function GalleryFilterPills() {
    return (
        <div
            role="group"
            aria-label="Photo filters"
            className="no-scrollbar flex w-full items-center gap-1.5 overflow-x-auto md:justify-center md:gap-3"
        >
            <FilterPill
                active
                icon={Image}
                label={galleryFilters.gallery}
                count={galleryFilters.galleryCount}
                widthClass="w-31 md:w-auto"
            />
            <FilterPill
                icon={Users}
                label={galleryFilters.photos}
                count={galleryFilters.photosCount}
                widthClass="w-36.75 md:w-auto"
            />
            <FilterPill
                icon={SquarePlay}
                label={galleryFilters.videos}
                count={galleryFilters.videosCount}
                widthClass="w-24.75 md:w-auto"
            />
        </div>
    );
}
