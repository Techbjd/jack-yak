import { cn } from '@/lib/utils';
import { quizLabel, quizOption, quizQuestionRow } from '@/config/theme';
import type { QuizSegmentQuestion } from '@/config/quiz';

interface QuizSegmentFieldProps {
    question: QuizSegmentQuestion;
    value: string | undefined;
    onChange: (value: string) => void;
    /** Compact density for dialogs (less row padding, fits without scroll). */
    compact?: boolean;
}

export default function QuizSegmentField({
    question,
    value,
    onChange,
    compact,
}: QuizSegmentFieldProps) {
    return (
        <div className={cn(quizQuestionRow, compact && 'flex-1 py-3')}>
            <p id={`quiz-${question.id}-label`} className={quizLabel}>
                {question.question}
            </p>
            <div
                role="radiogroup"
                aria-labelledby={`quiz-${question.id}-label`}
                className="border-quiz-line bg-quiz-line grid grid-cols-2 gap-px overflow-hidden rounded-md border sm:grid-cols-4"
            >
                {question.options.map((opt) => (
                    <label
                        key={opt}
                        className="group flex min-h-12 cursor-pointer items-center gap-2 bg-white px-3"
                    >
                        <input
                            type="radio"
                            name={`quiz-${question.id}`}
                            value={opt}
                            checked={value === opt}
                            onChange={(e) => onChange(e.target.value)}
                            className="sr-only"
                        />
                        <span
                            aria-hidden
                            className="group-has-checked:border-midnight group-has-focus-visible:outline-midnight flex size-3.75 shrink-0 items-center justify-center rounded-full border border-black transition-colors group-has-focus-visible:outline-2 group-has-focus-visible:outline-offset-2"
                        >
                            <span className="bg-midnight size-2 rounded-full opacity-0 transition-opacity group-has-checked:opacity-100" />
                        </span>
                        <span
                            className={cn(
                                quizOption,
                                value === opt && 'text-midnight',
                            )}
                        >
                            {opt}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
}
