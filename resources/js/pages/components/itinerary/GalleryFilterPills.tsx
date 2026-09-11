import { Image, Users, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { galleryFilters } from '@/config/itinerary';

const pillText = 'font-manrope text-xs-sm leading-itinerary-23 font-semibold';

interface FilterPillProps {
    active?: boolean;
    icon: typeof Image;
    label: string;
    count: number;
    widthClass: string;
}

/** Single gallery filter pill — teal filled when active, white/teal-outline otherwise */
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
                'flex h-8 cursor-pointer items-center justify-center gap-1 rounded-full',
                widthClass,
                active
                    ? 'bg-deep-teal text-white'
                    : 'border-cta text-slate-text border bg-white',
            )}
        >
            <Icon aria-hidden className="size-4 shrink-0" />
            <span className={pillText}>{label}</span>
            <span
                aria-label={`${count} items`}
                className={cn(
                    'text-xs-sm flex h-4 w-4.75 items-center justify-center rounded-lg leading-none font-bold text-white',
                    active ? 'bg-badge-teal' : 'bg-ink/8 text-slate-text',
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
            className="flex w-full items-center gap-1.5"
        >
            <FilterPill
                active
                icon={Image}
                label={galleryFilters.gallery}
                count={26}
                widthClass="w-31"
            />
            <FilterPill
                icon={Users}
                label={galleryFilters.photos}
                count={3}
                widthClass="w-36.75"
            />
            <FilterPill
                icon={Play}
                label={galleryFilters.videos}
                count={3}
                widthClass="w-24.75"
            />
        </div>
    );
}
