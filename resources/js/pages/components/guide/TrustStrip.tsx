import { fontPrimary } from '@/config/theme';
import { cn } from '@/lib/utils';
import { guideSectionShell, trustItems } from '@/config/guide';

const TrustStrip = () => {
    return (
        <section className='w-full'>
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
