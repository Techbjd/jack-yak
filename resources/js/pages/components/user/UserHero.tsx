import { IMAGES } from '@/config/images';
import ResponsiveHeader from '../shared/ResponsiveHeader';

export default function UserHero() {
    return (
        <div className="relative w-full">
            <img
                src={IMAGES.destination.journeyMountain}
                alt=""
                aria-hidden
                loading="eager"
                className="absolute inset-0 hidden h-250 w-full bg-transparent object-cover md:block"
            />
            <div
                aria-hidden
                className="to-canvas absolute inset-x-0 top-226 hidden h-24 bg-linear-to-b from-transparent md:block"
            />
            <div className="relative z-10 w-full">
                <ResponsiveHeader />
            </div>
        </div>
    );
}
