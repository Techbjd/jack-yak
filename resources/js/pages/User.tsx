import AppLayout from '@/layouts/AppLayout';
import UserHero from './components/user/UserHero';
import ProfileCard from './components/user/ProfileCard';
import SavedCard from './components/user/SavedCard';
import SettingsCard from './components/user/SettingsCard';
import SignOutCard from './components/user/SignOutCard';

/** User — profile section cards stacked on canvas */
export default function User() {
    return (
        <AppLayout title="User" shellClassName="bg-canvas">
            <UserHero />
            {/* relative z-10: cards float above the hero backdrop image */}
            <div className="max-w-map relative z-10 mx-auto flex w-full flex-col gap-6 px-6 pt-12 pb-10 md:gap-10 md:px-12 md:pt-36 md:pb-16">
                <ProfileCard />
                <SavedCard />
                <SettingsCard />
                <SignOutCard />
            </div>
        </AppLayout>
    );
}
