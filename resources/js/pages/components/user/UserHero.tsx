import { IMAGES } from '@/config/images';
import ResponsiveHeader from '../shared/ResponsiveHeader';

export default function UserHero() {
    return (
        <div className="md:h-user-hero-h relative w-full md:absolute md:inset-x-0 md:top-0 md:min-h-0">
            <img
                src={IMAGES.destination.journeyMountain}
                alt=""
                aria-hidden
                loading="eager"
                className="absolute inset-0 hidden h-full w-full bg-transparent object-cover md:block"
            />
            <div
                aria-hidden
                className="to-canvas absolute inset-x-0 top-226 hidden h-24 bg-linear-to-b from-transparent md:block"
            />
            <div className="relative w-full">
                <ResponsiveHeader />
            </div>
        </div>
    );
}
