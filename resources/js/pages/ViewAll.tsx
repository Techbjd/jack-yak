import { useState } from 'react';
import AppLayout from '@/layouts/AppLayout';
import { viewAllDestinations, viewAllPageSize } from '@/config/destination';
import { pageTitles } from '@/config/site';
import { sectionInner } from '@/config/theme';
import { cn } from '@/lib/utils';
import Header from '@/components/ui/Header';
import ViewAllHeader from './components/view-all/ViewAllHeader';
import DestinationGrid from './components/view-all/DestinationGrid';
import Pagination from './components/view-all/Pagination';

export default function ViewAll() {
    const [page, setPage] = useState(1);
    const totalPages = Math.max(
        1,
        Math.ceil(viewAllDestinations.length / viewAllPageSize),
    );
    const visibleDestinations = viewAllDestinations.slice(
        (page - 1) * viewAllPageSize,
        page * viewAllPageSize,
    );

    const handlePageChange = (next: number) => {
        setPage(next);
        document
            .getElementById('view-all-grid')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <AppLayout
            title={pageTitles.viewAll}
            header={<Header tone="onLight" />}
            shellClassName="bg-canvas"
        >
            <div className={cn(sectionInner, 'pt-6')}>
                <ViewAllHeader />

                <div id="view-all-grid" className="scroll-mt-6 pt-6">
                    <DestinationGrid destinations={visibleDestinations} />
                </div>
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
