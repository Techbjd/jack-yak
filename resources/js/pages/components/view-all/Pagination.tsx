import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react';
import { fontPrimary } from '@/config/theme';
import { cn } from '@/lib/utils';

interface PaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

/** Page numbers with ellipsis — [1 … window … last] */
function pageItems(page: number, totalPages: number): (number | 'ellipsis')[] {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const window: number[] = [1];
    for (
        let n = Math.max(2, page - 1);
        n <= Math.min(totalPages - 1, page + 1);
        n++
    ) {
        window.push(n);
    }
    window.push(totalPages);

    const items: (number | 'ellipsis')[] = [];
    window.forEach((n, i) => {
        if (i > 0 && n - window[i - 1] > 1) {
            items.push('ellipsis');
        }
        items.push(n);
    });
    return items;
}

/** View-all pagination — boxed pages, active ink, fully controlled */
export default function Pagination({
    page,
    totalPages,
    onPageChange,
}: PaginationProps) {
    const pageButton = (active: boolean) =>
        cn(
            fontPrimary,
            'text-xs-sm flex h-6.75 w-7.5 items-center justify-center rounded-[10px] font-medium',
            active
                ? 'bg-ink text-white'
                : 'border-bg-placeholder text-steel shadow-card border bg-white',
        );

    const goTo = (next: number) => {
        const clamped = Math.min(totalPages, Math.max(1, next));
        if (clamped !== page) {
            onPageChange(clamped);
        }
    };

    return (
        <nav
            aria-label="Destinations pages"
            className="flex items-center justify-center gap-1.5"
        >
            <button
                type="button"
                aria-label="Previous page"
                aria-disabled={page === 1}
                onClick={() => goTo(page - 1)}
                className={cn(
                    'text-steel flex items-center justify-center',
                    page === 1 && 'cursor-not-allowed opacity-40',
                )}
            >
                <ChevronLeft className="size-3" />
            </button>

            {pageItems(page, totalPages).map((item, i) =>
                item === 'ellipsis' ? (
                    <span
                        key={`ellipsis-${i}`}
                        aria-hidden="true"
                        className="text-steel flex items-center"
                    >
                        <Ellipsis className="size-3.5" />
                    </span>
                ) : (
                    <button
                        key={item}
                        type="button"
                        aria-label={`Page ${item}`}
                        aria-current={page === item ? 'page' : undefined}
                        onClick={() => goTo(item)}
                        className={pageButton(page === item)}
                    >
                        {item}
                    </button>
                ),
            )}

            <button
                type="button"
                aria-label="Next page"
                aria-disabled={page === totalPages}
                onClick={() => goTo(page + 1)}
                className={cn(
                    'text-steel flex items-center justify-center',
                    page === totalPages && 'cursor-not-allowed opacity-40',
                )}
            >
                <ChevronRight className="size-3" />
            </button>
        </nav>
    );
}
