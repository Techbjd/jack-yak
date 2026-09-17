import { usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/AppLayout';
import { pageTitles } from '@/config/site';
import UserHero from './components/user/UserHero';
import ProfileCard from './components/user/ProfileCard';
import SavedCard from './components/user/SavedCard';
import SettingsCard from './components/user/SettingsCard';
import SignOutCard from './components/user/SignOutCard';
import type {
    PageProps,
    RecentAvailability,
    RecentReview,
    UserStats,
} from '@/types';

interface UserPageProps extends PageProps {
    stats?: UserStats;
    recentAvailability?: RecentAvailability[];
    recentReviews?: RecentReview[];
}

export default function User() {
    const { flash } = usePage<UserPageProps>().props;

    return (
        <AppLayout title={pageTitles.user} shellClassName="bg-canvas relative">
            <div className="w-full sm:pb-30">
                <UserHero />
            </div>
            {flash?.success && (
                <p
                    role="status"
                    className="max-w-map mx-auto w-full px-6 pt-6 text-center text-sm font-semibold text-green-700 md:px-12"
                >
                    {flash.success}
                </p>
            )}
            <div className="max-w-map relative top-1 z-10 mx-auto flex w-full flex-col gap-6 px-6 pt-12 pb-10 md:gap-10 md:px-12 md:pt-36 md:pb-16">
                <ProfileCard />
                <SavedCard />
                <SettingsCard />
                <SignOutCard />
            </div>
        </AppLayout>
    );
}
