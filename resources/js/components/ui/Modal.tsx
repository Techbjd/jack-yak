import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { formError } from '@/config/theme';

interface ModalProps {
    open: boolean;
    onClose: () => void;

    label: string;
    children: ReactNode;
}

export const modalDivider = 'border-hairline mt-6 border-t';

export const modalSelectTrigger = 'cursor-pointer appearance-none pr-10';

export const modalSelectChevron =
    'text-mist pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2';

export { formErrorBorder as modalInputErrorBorder } from '@/config/theme';

interface ModalFieldErrorProps {
    children: ReactNode;
    id?: string;
}

export function ModalFieldError({
    children,
    id,
}: ModalFieldErrorProps): ReactNode {
    return (
        <p role="alert" className={formError} id={id}>
            {children}
        </p>
    );
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
