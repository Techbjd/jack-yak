import { Bookmark, Mountain, ClipboardList, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { userMuted, userRow, userSectionTitle } from '@/config/theme';
import { userSaved } from '@/config/user';

const ROW_ICONS: Record<string, typeof Mountain> = {
    destinations: Mountain,
    itineraries: ClipboardList,
};

export default function SavedCard() {
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
                        Your saved destinations and itineraries
                    </p>
                </div>
            </div>
            <ul className="divide-fog flex w-full flex-col divide-y">
                {userSaved.map((row) => {
                    const Icon = ROW_ICONS[row.id] ?? Mountain;
                    return (
                        <li key={row.id}>
                            <a
                                href="#"
                                className="flex items-center gap-3 py-3 md:gap-4 md:py-4"
                            >
                                <span className="bg-ink flex size-8 shrink-0 items-center justify-center rounded-full md:size-11">
                                    <Icon
                                        aria-hidden
                                        className="size-4 text-white md:size-6"
                                    />
                                </span>
                                <span className={userRow}>{row.label}</span>
                                <span className={cn(userRow, 'ml-auto')}>
                                    {row.count}
                                </span>
                                <ArrowRight
                                    aria-hidden
                                    className="text-ink size-3 shrink-0 md:size-5"
                                    strokeWidth={2}
                                />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
