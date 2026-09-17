import { usePage } from '@inertiajs/react';
import { Pencil, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { userCard, userEditButton, userMuted, userName } from '@/config/theme';
import { profileCardCopy } from '@/config/user';
import { IMAGES } from '@/config/images';
import type { PageProps } from '@/types';

function EditProfileContent() {
    return (
        <>
            <Pencil aria-hidden className="hidden size-5 text-white md:block" />
            <span>{profileCardCopy.editLabel}</span>
            <ArrowRight
                aria-hidden
                className="size-3 text-white md:size-5"
                strokeWidth={2}
            />
        </>
    );
}

export default function ProfileCard() {
    const { auth } = usePage<PageProps>().props;
    const user = auth?.user;
    const name = user?.name ?? profileCardCopy.guestName;
    const email = user?.email ?? profileCardCopy.guestEmail;

    return (
        <section
            className={cn(
                userCard,
                'flex flex-row items-center gap-4 md:justify-between',
            )}
        >
            <img
                src={IMAGES.about.travelerAvatar}
                alt={name}
                className="bg-bg-placeholder size-18 shrink-0 rounded-full object-cover object-top md:size-36"
            />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
                <h2 className={cn(userName, 'truncate')} title={name}>
                    {name}
                </h2>
                <p className={cn(userMuted, 'truncate')} title={email}>
                    {email}
                </p>
                <span
                    className={cn(
                        userEditButton,
                        'mt-2 shrink-0 self-start md:hidden',
                    )}
                >
                    <EditProfileContent />
                </span>
            </div>
            <span className={cn(userEditButton, 'hidden shrink-0 md:flex')}>
                <EditProfileContent />
            </span>
        </section>
    );
}
