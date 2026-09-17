import { useState } from 'react';
import { cn } from '@/lib/utils';
import { IMAGES } from '@/config/images';
import { discoverNepalCopy } from '@/config/home';
import {
    bodyTextSmall,
    ctaMobile,
    fontPrimary,
    headingSubsection,
    imagePlaceholder,
    imageRoundedXl,
    modalTitle,
    sectionPadding,
} from '@/config/theme';
import Modal from '@/components/ui/Modal';
import CtaButton from '@/components/ui/CtaButton';
import QuizForm from '../quiz/QuizForm';

const DiscoverNepal = () => {
    const [quizOpen, setQuizOpen] = useState(false);
    return (
        <section
            className={cn(
                'max-md:bg-surface-warm relative w-full overflow-hidden max-md:py-10',
                sectionPadding,
            )}
        >
            <div className="max-w-container bg-surface-warm mx-auto flex flex-col items-center gap-5 px-8 md:flex-row md:gap-16 md:bg-transparent md:px-12 lg:px-24">
                <div className="order-2 w-full md:hidden">
                    <img
                        src={IMAGES.home.discoverNepal2}
                        alt={discoverNepalCopy.imageAltSecondary}
                        loading="lazy"
                        className={cn(
                            imageRoundedXl,
                            'aspect-3/2 w-full object-cover',
                        )}
                    />
                </div>

                <div className="md:max-w-content-lg contents md:flex md:flex-1 md:flex-col md:items-start md:gap-6 md:text-left">
                    <h2
                        className={cn(
                            headingSubsection,
                            'max-md:text-lg-xl order-1 text-center max-md:leading-normal md:order-1 md:text-left',
                        )}
                    >
                        {discoverNepalCopy.heading}
                    </h2>
                    <p
                        className={cn(
                            bodyTextSmall,
                            'md:text-xl-2xl order-3 text-center md:order-2 md:text-left',
                        )}
                    >
                        {discoverNepalCopy.body}
                    </p>

                    <CtaButton
                        onClick={() => setQuizOpen(true)}
                        className={cn(
                            ctaMobile,
                            'text-xs-md order-4 transition-opacity hover:opacity-90 md:hidden',
                        )}
                    >
                        <span className="px-2">{discoverNepalCopy.cta}</span>
                    </CtaButton>

                    <CtaButton
                        onClick={() => setQuizOpen(true)}
                        className={cn(
                            fontPrimary,
                            'bg-cta text-md-lg hidden h-10.5 w-52 items-center justify-center rounded-full font-bold text-white transition-opacity hover:opacity-90 md:order-3 md:mt-5 md:flex',
                        )}
                    >
                        {discoverNepalCopy.cta}
                    </CtaButton>
                </div>

                <div className="hidden w-full min-w-0 flex-1 items-start justify-center gap-5 md:flex lg:justify-end">
                    <img
                        src={IMAGES.home.discoverNepal1}
                        alt={discoverNepalCopy.imageAltMain}
                        loading="lazy"
                        className={cn(
                            imagePlaceholder,
                            'mt-13 aspect-[257/387] w-64.25 min-w-0 object-cover',
                        )}
                    />

                    <img
                        src={IMAGES.home.discoverNepal2}
                        alt={discoverNepalCopy.imageAltSecondary}
                        loading="lazy"
                        className={cn(
                            imagePlaceholder,
                            'aspect-[257/387] w-82 min-w-0 object-cover',
                        )}
                    />
                </div>
            </div>
            <Modal
                open={quizOpen}
                onClose={() => setQuizOpen(false)}
                label={discoverNepalCopy.modalLabel}
            >
                <h2 className={modalTitle}>{discoverNepalCopy.modalTitle}</h2>
                <QuizForm />
            </Modal>
        </section>
    );
};

export default DiscoverNepal;
