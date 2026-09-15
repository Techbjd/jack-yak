import { cn } from '@/lib/utils';
import { quizError, quizInput, quizLabel } from '@/config/theme';
import { quizErrorBorder } from './tokens';

interface QuizTextFieldProps {
    id: string;
    label: string;
    type: 'email' | 'text';
    autoComplete: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export default function QuizTextField({
    id,
    label,
    type,
    autoComplete,
    placeholder,
    value,
    onChange,
    error,
}: QuizTextFieldProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className={cn(quizLabel, 'pb-2')}>
                {label}
            </label>
            <input
                id={id}
                type={type}
                autoComplete={autoComplete}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${id}-error` : undefined}
                className={cn(quizInput, error && quizErrorBorder)}
            />
            {error && (
                <p id={`${id}-error`} role="alert" className={quizError}>
                    {error}
                </p>
            )}
        </div>
    );
}
