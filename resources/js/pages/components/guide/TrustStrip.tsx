import { IMAGES } from '@/config/images';
import { fontPrimary } from '@/config/theme';
import { cn } from '@/lib/utils';

interface TrustItem {
    label: string;
    image: string;
}

const trustItems: TrustItem[] = [
    {
        label: 'UNESCO Heritage Sites',
        image: IMAGES.destination.icons.heritage,
    },
    { label: 'Nepal Tourism', image: IMAGES.icons.travelling },
    { label: 'National Parks', image: IMAGES.icons.nationalPark },
    { label: 'Adventure Activities', image: IMAGES.icons.advanture },
    { label: 'Wildlife Experiences', image: IMAGES.icons.wildlife },
    { label: 'Local Communities', image: IMAGES.icons.localCommunication },
];

const TrustStrip = () => {
    return (
        <section className="bg-surface-warm w-full">
            <div className="max-w-container mx-auto w-full px-6 md:px-12 lg:px-24">
                <div className="border-bg-placeholder grid grid-cols-3 gap-x-4 gap-y-6 border-t py-6 md:grid-cols-6 md:gap-0 md:py-0">
                    {trustItems.map(({ label, image }, i) => (
                        <div
                            key={label}
                            className={cn(
                                'relative flex flex-col items-center gap-2 px-2 text-center md:px-4 md:py-6',
                                i !== 0 &&
                                    'md:before:bg-bg-placeholder md:before:absolute md:before:top-1/2 md:before:left-0 md:before:h-12 md:before:w-px md:before:-translate-y-1/2 md:before:content-[""]',
                            )}
                        >
                            <img
                                src={image}
                                alt={label}
                                loading="lazy"
                                className="h-8 w-8 object-contain md:h-12 md:w-12"
                            />
                            <p
                                className={cn(
                                    fontPrimary,
                                    'text-xs-sm text-ink md:text-md-lg leading-snug font-medium',
                                )}
                            >
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustStrip;
