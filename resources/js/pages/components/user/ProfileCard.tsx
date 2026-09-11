import { usePage } from '@inertiajs/react';
import { Pencil, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { userEditButton, userMuted, userName } from '@/config/theme';
import { IMAGES } from '@/config/images';
import type { PageProps } from '@/types';

export default function ProfileCard() {
    const { auth } = usePage<PageProps>().props;
    const user = auth?.user;
    const name = user?.name ?? 'Traveler';
    const email = user?.email ?? 'Sign in to sync your profile';

    return (
        <section className="shadow-card flex w-full flex-col gap-4 rounded-xl bg-white p-5 md:flex-row md:items-center md:justify-between md:rounded-none md:p-10">
            <div className="flex items-center gap-4">
                <img
                    src={IMAGES.about.travelerAvatar}
                    alt={name}
                    className="bg-bg-placeholder size-16 shrink-0 rounded-full object-cover object-top md:size-36"
                />
                <div className="flex flex-col gap-1">
                    <h2 className={userName}>{name}</h2>
                    <p className={userMuted}>{email}</p>
                </div>
            </div>
            <span className={cn(userEditButton, 'shrink-0 opacity-60')}>
                <Pencil
                    aria-hidden
                    className="hidden size-5 text-white md:block"
                />
                <span>{user ? 'Member' : 'Guest'}</span>
                <ArrowRight
                    aria-hidden
                    className="size-3 text-white md:size-5"
                    strokeWidth={2}
                />
            </span>
        </section>
    );
}
