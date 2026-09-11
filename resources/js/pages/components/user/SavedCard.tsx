import { Link, usePage } from '@inertiajs/react';
import {
    Bookmark,
    Mountain,
    ClipboardList,
    ArrowRight,
    CalendarCheck,
    Star,
    Compass,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { userMuted, userRow, userSectionTitle } from '@/config/theme';
import type {
    PageProps,
    RecentAvailability,
    RecentReview,
    UserStats,
} from '@/types';

interface SavedPageProps extends PageProps {
    stats?: UserStats;
    recentAvailability?: RecentAvailability[];
    recentReviews?: RecentReview[];
}

export default function SavedCard() {
    const { stats, recentAvailability, recentReviews } =
        usePage<SavedPageProps>().props;

    const rows = [
        {
            id: 'availability',
            label: 'Availability requests',
            count: stats?.availabilityRequests ?? 0,
            href: '/destinations',
            Icon: CalendarCheck,
        },
        {
            id: 'reviews',
            label: 'My reviews',
            count: stats?.reviews ?? 0,
            href: '/guide',
            Icon: Star,
        },
        {
            id: 'quiz',
            label: 'Trip finder submissions',
            count: stats?.quizSubmissions ?? 0,
            href: '/form',
            Icon: Compass,
        },
        {
            id: 'destinations',
            label: 'Saved Destinations',
            count: 0,
            href: '/view-all',
            Icon: Mountain,
        },
        {
            id: 'itineraries',
            label: 'Saved Itineraries',
            count: 0,
            href: '/view-all',
            Icon: ClipboardList,
        },
    ];

    return (
        <section className="shadow-card flex w-full flex-col gap-4 rounded-xl bg-white p-5 md:rounded-none md:p-10">
            <div className="flex items-center gap-3">
                <Bookmark
                    aria-hidden
                    className="text-ink size-5 md:size-6 md:text-black"
                />
                <div className="flex flex-col">
                    <h2 className={userSectionTitle}>Saved</h2>
                    <p className={userMuted}>
                        Your requests, reviews, and trip-finder activity
                    </p>
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
                                className="text-ink size-3 shrink-0 md:size-5"
                                strokeWidth={2}
                            />
                        </Link>
                    </li>
                ))}
            </ul>

            {recentAvailability && recentAvailability.length > 0 && (
                <div className="pt-2">
                    <p className={userMuted}>Latest availability</p>
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
                    <p className={userMuted}>Latest reviews</p>
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
