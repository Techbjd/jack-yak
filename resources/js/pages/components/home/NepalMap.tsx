import { fontPrimary, sectionPadding, sectionInner } from '@/config/theme';
import { cn } from '@/lib/utils';
import { IMAGES } from '@/config/images';

const NepalMap = () => {
    return (
        <section
            className={cn(
                'relative w-full overflow-clip',
                sectionPadding,
                sectionInner,
            )}
        >
            <div className="max-w-container relative mx-auto w-full">
                <div className="max-w-map relative mx-auto w-full">
                    <p
                        className={cn(
                            fontPrimary,
                            'text-teal pr-[5%] text-right text-xl font-bold sm:text-2xl md:text-4xl',
                        )}
                    >
                        CHINA
                    </p>

                    <img
                        src={IMAGES.home.provincesMap}
                        alt="Nepal Map vectorized"
                        className="block h-auto w-full object-contain"
                    />

                    <p
                        className={cn(
                            fontPrimary,
                            'text-teal pl-[10%] text-left text-xl font-bold sm:text-2xl md:text-4xl',
                        )}
                    >
                        INDIA
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NepalMap;
