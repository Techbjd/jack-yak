import { Pencil, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { userEditButton, userMuted, userName } from '@/config/theme';
import { IMAGES } from '@/config/images';
import { userProfile } from '@/config/user';

/** User profile card — avatar + name/email + edit button */
export default function ProfileCard() {
    return (
        <section className="shadow-card flex w-full flex-col gap-4 rounded-xl bg-white p-5 md:flex-row md:items-center md:justify-between md:rounded-none md:p-10">
            <div className="flex items-center gap-4">
                {/* TODO: swap with the authenticated user's photo once backend auth lands */}
                <img
                    src={IMAGES.about.travelerAvatar}
                    alt={userProfile.name}
                    className="bg-bg-placeholder size-16 shrink-0 rounded-full object-cover object-top md:size-36"
                />
                <div className="flex flex-col gap-1">
                    <h2 className={userName}>{userProfile.name}</h2>
                    <p className={userMuted}>{userProfile.email}</p>
                </div>
            </div>
            {/* TODO: wire to the edit-profile form once the backend endpoint exists */}
            <a href="#" className={cn(userEditButton, 'shrink-0')}>
                <Pencil
                    aria-hidden
                    className="hidden size-5 text-white md:block"
                />
                <span>Edit Profile</span>
                <ArrowRight
                    aria-hidden
                    className="size-3 text-white md:size-5"
                    strokeWidth={2}
                />
            </a>
        </section>
    );
}
