import Modal from '@/components/ui/Modal';
import QuizForm from './QuizForm';
import QuizPanel from './QuizPanel';

interface QuizModalProps {
    open: boolean;
    onClose: () => void;
    label: string;
}

/**
 * Shared quiz dialog: brand panel beside the form.
 * Used by the Home hero, DiscoverNepal and the itinerary CTA banner.
 */
export default function QuizModal({ open, onClose, label }: QuizModalProps) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            label={label}
            panelClassName="p-0 sm:max-w-hero-panel md:p-0 lg:h-hero-panel-h"
        >
            <div className="flex w-full flex-1 items-stretch">
                <QuizPanel variant="modal" />
                <div className="w-full min-w-0 flex-1 p-6 md:p-10">
                    <QuizForm compact />
                </div>
            </div>
        </Modal>
    );
}
