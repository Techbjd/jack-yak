import type { ReactNode } from 'react';
import { formError } from '@/config/theme';

interface FieldErrorProps {
    children: ReactNode;
    id?: string;
}

/**
 * Single inline form-error UI. Replaces the three previous copies
 * (`ModalFieldError`, quiz error, auth error) — all were the same
 * `role="alert"` paragraph over `formError`.
 */
export default function FieldError({ children, id }: FieldErrorProps) {
    return (
        <p role="alert" className={formError} id={id}>
            {children}
        </p>
    );
}
