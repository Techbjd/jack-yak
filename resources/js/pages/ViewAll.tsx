import { useState } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '@/layouts/AppLayout';
import { viewAllDestinations, viewAllPageSize } from '@/config/destination';
import { pageSeo } from '@/config/seo';
import { sectionInner } from '@/config/theme';
import { viewAll } from '@/routes';
import { cn } from '@/lib/utils';
import Header from '@/components/ui/Header';
import ViewAllHeader from './components/view-all/ViewAllHeader';
import DestinationGrid from './components/view-all/DestinationGrid';
import Pagination from './components/view-all/Pagination';

function readPageFromUrl(totalPages: number): number {
    if (typeof window === 'undefined') {
        return 1;
    }
    const raw = new URLSearchParams(window.location.search).get('page');
    const parsed = raw === null ? 1 : parseInt(raw, 10);
    if (Number.isNaN(parsed)) {
        return 1;
    }
    return Math.min(totalPages, Math.max(1, parsed));
}

export default function ViewAll() {
    const totalPages = Math.max(
        1,
        Math.ceil(viewAllDestinations.length / viewAllPageSize),
    );
    const [page, setPage] = useState(() => readPageFromUrl(totalPages));
    const visibleDestinations = viewAllDestinations.slice(
        (page - 1) * viewAllPageSize,
        page * viewAllPageSize,
    );

    const handlePageChange = (next: number) => {
        const clamped = Math.min(totalPages, Math.max(1, next));
        if (clamped === page) {
            return;
        }
        setPage(clamped);
        const query: Record<string, string> = {};
        if (typeof window !== 'undefined') {
            new URLSearchParams(window.location.search).forEach(
                (value, key) => {
                    if (key !== 'page') {
                        query[key] = value;
                    }
                },
            );
        }
        if (clamped > 1) {
            query.page = String(clamped);
        }
        router.get(viewAll.url({ query }), {
            preserveState: true,
            preserveScroll: false,
        });
        document
            .getElementById('view-all-grid')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document
            .getElementById('view-all-heading')
            ?.focus({ preventScroll: true });
    };

    return (
        <AppLayout
            seo={pageSeo.viewAll}
            header={<Header tone="onLight" />}
            shellClassName="bg-canvas"
        >
            <div className={cn(sectionInner, 'pt-6')}>
                <ViewAllHeader />

                <div id="view-all-grid" className="scroll-mt-6 pt-6">
                    <DestinationGrid destinations={visibleDestinations} />
                </div>
                <p aria-live="polite" className="sr-only">
                    {`Page ${page} of ${totalPages}`}
                </p>
                <div className="pt-10 pb-12">
                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
