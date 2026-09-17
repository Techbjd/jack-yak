import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    formErrorBorder,
    modalInput,
    modalLabel,
    modalSelectChevron,
    modalSelectTrigger,
    quizInput,
    quizLabel,
    quizQuestionRow,
} from '@/config/theme';
import FieldError from './FieldError';

export type SelectFieldTone = 'quiz' | 'modal';

interface SelectFieldProps {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    options: string[];
    error?: string;
    /** Visual language: quiz page or modal dialogs. */
    tone: SelectFieldTone;
    /** Quiz selects sit in a label-beside row; modal selects stack. */
    layout?: 'row' | 'stacked';
    /** Compact density for dialogs (less row padding, fits without scroll). */
    compact?: boolean;
    /** Extra label classes (e.g. modal `pb-2 font-semibold`). */
    labelClassName?: string;
}

/**
 * Label + styled native select + chevron + error. Unifies
 * `QuizSelectField` and the hand-rolled modal selects (availability
 * duration / looking-for, review place) — same `text-mist` empty state,
 * same chevron, same error wiring.
 */
export default function SelectField({
    id,
    label,
    value,
    onChange,
    placeholder,
    options,
    error,
    tone,
    layout,
    compact,
    labelClassName,
}: SelectFieldProps) {
    const resolvedLayout = layout ?? (tone === 'quiz' ? 'row' : 'stacked');
    const resolvedErrorId = `${id}-error`;

    // NOTE: label and control must stay SIBLINGS (not wrapped in one div)
    // so the `row` grid can place them in its two columns.
    const labelEl = (
        <label
            htmlFor={id}
            className={cn(
                tone === 'quiz' ? quizLabel : modalLabel,
                labelClassName,
            )}
        >
            {label}
        </label>
    );

    const controlEl = (
        <div className="flex min-w-0 flex-col">
            <div className="relative">
                <select
                    id={id}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? resolvedErrorId : undefined}
                    className={cn(
                        tone === 'quiz' ? quizInput : modalInput,
                        tone === 'quiz'
                            ? 'cursor-pointer appearance-none pr-10'
                            : modalSelectTrigger,
                        !value && 'text-mist',
                        error && formErrorBorder,
                    )}
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {options.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    aria-hidden
                    className={
                        tone === 'quiz'
                            ? 'text-mist pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2'
                            : modalSelectChevron
                    }
                />
            </div>
            {error && <FieldError id={resolvedErrorId}>{error}</FieldError>}
        </div>
    );

    if (resolvedLayout === 'row') {
        return (
            <div className={cn(quizQuestionRow, compact && 'flex-1 py-3')}>
                {labelEl}
                {controlEl}
            </div>
        );
    }
    return (
        <div className="flex flex-col">
            {labelEl}
            {controlEl}
        </div>
    );
}
