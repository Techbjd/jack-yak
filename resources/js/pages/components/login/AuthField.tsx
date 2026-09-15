import { cn } from '@/lib/utils';
import { authInput, authLabel } from '@/config/theme';
import {
    authError,
    authErrorBorder,
    authLabelFirst,
    authLabelRest,
} from './tokens';

interface AuthFieldProps {
    id: string;
    label: string;
    type: 'email' | 'password' | 'text';
    autoComplete: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    errorId?: string;
    first?: boolean;
}

export default function AuthField({
    id,
    label,
    type,
    autoComplete,
    placeholder,
    value,
    onChange,
    error,
    errorId,
    first = false,
}: AuthFieldProps) {
    return (
        <>
            <label
                htmlFor={id}
                className={cn(authLabel, first ? authLabelFirst : authLabelRest)}
            >
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
                aria-describedby={
                    error && errorId ? errorId : undefined
                }
                className={cn(authInput, error && authErrorBorder)}
            />
            {error && (
                <p id={errorId} role="alert" className={authError}>
                    {error}
                </p>
            )}
        </>
    );
}
