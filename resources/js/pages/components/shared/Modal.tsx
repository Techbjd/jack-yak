import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    
    label: string;
    children: ReactNode;
}

export default function Modal({ open, onClose, label, children }: ModalProps) {
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) {
            return;
        }
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', onKey);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        panelRef.current?.focus();
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [open, onClose]);

    if (!open) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-100 flex items-end justify-center sm:items-center sm:p-6"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div aria-hidden className="absolute inset-0 bg-black/50" />
            <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-label={label}
                tabIndex={-1}
                className="relative flex max-h-full w-full max-w-4xl flex-col overflow-y-auto rounded-t-2xl bg-white p-6 outline-none sm:rounded-2xl md:p-10"
            >
                <button
                    type="button"
                    aria-label="Close dialog"
                    onClick={onClose}
                    className="text-ink absolute top-4 right-4 flex size-9 items-center justify-center rounded-full transition-opacity hover:opacity-70 md:top-6 md:right-6"
                >
                    <X aria-hidden className="size-5 md:size-6" />
                </button>
                {children}
            </div>
        </div>
    );
}
