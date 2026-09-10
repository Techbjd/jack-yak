import { useState } from 'react';
import AppLayout from '@/layouts/AppLayout';
import { viewAllDestinations } from '@/config/destination';
import Header from './components/shared/Header';
import ViewAllHeader from './components/view-all/ViewAllHeader';
import DestinationGrid from './components/view-all/DestinationGrid';
import Pagination from './components/view-all/Pagination';

const PAGE_SIZE = 12;

export default function ViewAll() {
    const [page, setPage] = useState(1);
    const totalPages = Math.max(
        1,
        Math.ceil(viewAllDestinations.length / PAGE_SIZE),
    );
    const visibleDestinations = viewAllDestinations.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE,
    );

    const handlePageChange = (next: number) => {
        setPage(next);
        document
            .getElementById('view-all-grid')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <AppLayout
            title="Top Destinations"
            header={<Header tone="onLight" />}
            shellClassName="bg-canvas"
        >
            <div className="w-full px-5 pt-6">
                <ViewAllHeader />
            </div>
            <div id="view-all-grid" className="w-full scroll-mt-6 px-5 pt-6">
                <DestinationGrid destinations={visibleDestinations} />
            </div>
            <div className="w-full px-5 pt-10 pb-12">
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </AppLayout>
    );
}
