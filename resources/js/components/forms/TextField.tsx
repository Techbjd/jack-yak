import { Fragment } from 'react';
import { cn } from '@/lib/utils';
import {
    authInput,
    authLabel,
    authLabelFirst,
    authLabelRest,
    formErrorBorder,
    modalInput,
    modalLabel,
    quizInput,
    quizLabel,
} from '@/config/theme';
import FieldError from './FieldError';

export type TextFieldTone = 'auth' | 'quiz' | 'modal';

interface TextFieldProps {
    id: string;
    label: string;
    type: string;
    autoComplete?: string;
    placeholder?: string;
    min?: string;
    max?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    /** Visual language: auth pages, quiz page, or modal dialogs. */
    tone: TextFieldTone;
    /** Auth pages: tighter top spacing for the first field on the form. */
    first?: boolean;
    /** Extra label classes (e.g. modal `pt-6 pb-2 font-semibold`). */
    labelClassName?: string;
    /** Extra input classes (e.g. dim an empty date input). */
    inputClassName?: string;
    errorId?: string;
}

const labelBase: Record<TextFieldTone, (first: boolean) => string> = {
    auth: (first) => cn(authLabel, first ? authLabelFirst : authLabelRest),
    quiz: () => cn(quizLabel, 'pb-2'),
    modal: () => modalLabel,
};

const inputBase: Record<TextFieldTone, string> = {
    auth: authInput,
    quiz: quizInput,
    modal: modalInput,
};

/**
 * Label + input + error in one place. Unifies `AuthField`,
 * `QuizTextField`, and the hand-rolled modal text/date inputs so label
 * styling, `aria-invalid` wiring, and the `${id}-error` convention can't
 * drift between forms.
 */
export default function TextField({
    id,
    label,
    type,
    autoComplete,
    placeholder,
    min,
    max,
    value,
    onChange,
    error,
    tone,
    first = false,
    labelClassName,
    inputClassName,
    errorId,
}: TextFieldProps) {
    const resolvedErrorId = errorId ?? `${id}-error`;
    const Wrapper = tone === 'quiz' ? 'div' : Fragment;

    return (
        <Wrapper {...(tone === 'quiz' ? { className: 'flex flex-col' } : {})}>
            <label
                htmlFor={id}
                className={cn(labelBase[tone](first), labelClassName)}
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                autoComplete={autoComplete}
                placeholder={placeholder}
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? resolvedErrorId : undefined}
                className={cn(
                    inputBase[tone],
                    error && formErrorBorder,
                    inputClassName,
                )}
            />
            {error && (
                <FieldError id={resolvedErrorId}>{error}</FieldError>
            )}
        </Wrapper>
    );
}
