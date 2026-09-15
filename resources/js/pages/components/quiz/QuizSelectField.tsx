import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { quizError, quizInput, quizLabel } from '@/config/theme';
import { quizErrorBorder, quizQuestionRow } from './tokens';
import type { QuizSelectQuestion } from '@/config/quiz';

interface QuizSelectFieldProps {
    question: QuizSelectQuestion;
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export default function QuizSelectField({
    question,
    value,
    onChange,
    error,
}: QuizSelectFieldProps) {
    return (
        <div className={quizQuestionRow}>
            <label htmlFor={`quiz-${question.id}`} className={quizLabel}>
                {question.question}
            </label>
            <div className="flex flex-col">
                <div className="relative">
                    <select
                        id={`quiz-${question.id}`}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        aria-invalid={error ? true : undefined}
                        aria-describedby={
                            error ? `quiz-${question.id}-error` : undefined
                        }
                        className={cn(
                            quizInput,
                            'cursor-pointer appearance-none pr-10',
                            !value && 'text-mist',
                            error && quizErrorBorder,
                        )}
                    >
                        <option value="" disabled>
                            {question.placeholder}
                        </option>
                        {question.options.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                    <ChevronDown
                        aria-hidden
                        className="text-mist pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2"
                    />
                </div>
                {error && (
                    <p
                        id={`quiz-${question.id}-error`}
                        role="alert"
                        className={quizError}
                    >
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
}
