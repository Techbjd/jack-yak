import { Link, usePage } from '@inertiajs/react';
import { Bookmark, Mountain, ClipboardList, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    userCard,
    userMuted,
    userRow,
    userRowArrow,
    userSectionTitle,
} from '@/config/theme';
import type { PageProps, RecentAvailability, RecentReview } from '@/types';
import { savedCardCopy, savedCardRows } from '@/config/user';
import { siteRoutes } from '@/config/site';

interface SavedPageProps extends PageProps {
    recentAvailability?: RecentAvailability[];
    recentReviews?: RecentReview[];
}

export default function SavedCard() {
    const { recentAvailability, recentReviews } =
        usePage<SavedPageProps>().props;

    const icons = {
        destinations: Mountain,
        itineraries: ClipboardList,
    } as const;
    const rows = savedCardRows.map((row) => ({
        ...row,
        href: siteRoutes.viewAll,
        Icon: icons[row.id],
    }));

    return (
        <section className={cn(userCard, 'flex flex-col gap-4')}>
            <div className="flex items-center gap-3">
                <Bookmark
                    aria-hidden
                    className="text-ink size-5 md:size-6 md:text-black"
                />
                <div className="flex flex-col">
                    <h2 className={userSectionTitle}>{savedCardCopy.title}</h2>
                    <p className={userMuted}>{savedCardCopy.subtitle}</p>
                </div>
            </div>
            <ul className="divide-fog flex w-full flex-col divide-y">
                {rows.map(({ id, label, count, href, Icon }) => (
                    <li key={id}>
                        <Link
                            href={href}
                            className="flex items-center gap-3 py-3 md:gap-4 md:py-4"
                        >
                            <span className="bg-ink flex size-8 shrink-0 items-center justify-center rounded-full md:size-11">
                                <Icon
                                    aria-hidden
                                    className="size-4 text-white md:size-6"
                                />
                            </span>
                            <span className={userRow}>{label}</span>
                            <span className={cn(userRow, 'ml-auto')}>
                                {count}
                            </span>
                            <ArrowRight
                                aria-hidden
                                className={userRowArrow}
                                strokeWidth={2}
                            />
                        </Link>
                    </li>
                ))}
            </ul>

            {recentAvailability && recentAvailability.length > 0 && (
                <div className="pt-2">
                    <p className={userMuted}>
                        {savedCardCopy.latestAvailability}
                    </p>
                    <ul className="pt-2 text-sm">
                        {recentAvailability.map((r) => (
                            <li key={r.id}>
                                {r.date} · {r.travelers} traveler
                                {r.travelers > 1 ? 's' : ''}
                                {r.duration ? ` · ${r.duration}` : ''}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {recentReviews && recentReviews.length > 0 && (
                <div className="pt-2">
                    <p className={userMuted}>{savedCardCopy.latestReviews}</p>
                    <ul className="pt-2 text-sm">
                        {recentReviews.map((r) => (
                            <li key={r.id}>
                                {r.rating}★ · {r.place} · {r.visit_date}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}
