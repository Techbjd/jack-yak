import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    quizButton,
    quizError,
    quizInput,
    quizLabel,
    quizNote,
    quizOption,
} from '@/config/theme';
import {
    quizSegmentQuestions,
    quizSelectQuestions,
    type QuizAnswers,
} from '@/config/quiz';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function QuizForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [answers, setAnswers] = useState<QuizAnswers>({});
    const [errors, setErrors] = useState<QuizAnswers>({});

    const setAnswer = (id: string, value: string) => {
        setAnswers((prev) => ({ ...prev, [id]: value }));
        if (errors[id]) {
            setErrors((prev) => ({ ...prev, [id]: '' }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const next: QuizAnswers = {};
        if (!name.trim()) {
            next.name = 'Please enter your name.';
        }
        if (!email.trim()) {
            next.email = 'Email is required.';
        } else if (!EMAIL_PATTERN.test(email.trim())) {
            next.email = 'Please enter a valid email address.';
        }
        for (const q of quizSelectQuestions) {
            if (!answers[q.id]) {
                next[q.id] = 'Please choose an option.';
            }
        }
        setErrors(next);
        const firstBadId = next.name
            ? 'quiz-name'
            : next.email
              ? 'quiz-email'
              : quizSelectQuestions.find((q) => next[q.id])?.id;
        if (firstBadId) {
            document
                .getElementById(
                    firstBadId.startsWith('quiz-')
                        ? firstBadId
                        : `quiz-${firstBadId}`,
                )
                ?.focus();
            return;
        }
    };

    return (
        <form
            noValidate
            onSubmit={handleSubmit}
            className="divide-hairline flex w-full flex-col divide-y"
        >
            <div className="grid grid-cols-1 gap-5 pb-7 sm:grid-cols-2">
                <div className="flex flex-col">
                    <label
                        htmlFor="quiz-name"
                        className={cn(quizLabel, 'pb-2')}
                    >
                        Enter your Name
                    </label>
                    <input
                        id="quiz-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) {
                                setErrors((prev) => ({
                                    ...prev,
                                    name: e.target.value.trim()
                                        ? ''
                                        : 'Please enter your name.',
                                }));
                            }
                        }}
                        onBlur={() =>
                            setErrors((prev) => ({
                                ...prev,
                                name: name.trim()
                                    ? ''
                                    : 'Please enter your name.',
                            }))
                        }
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={
                            errors.name ? 'quiz-name-error' : undefined
                        }
                        className={cn(
                            quizInput,
                            errors.name && 'border-red-400',
                        )}
                    />
                    {errors.name && (
                        <p
                            id="quiz-name-error"
                            role="alert"
                            className={quizError}
                        >
                            {errors.name}
                        </p>
                    )}
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="quiz-email"
                        className={cn(quizLabel, 'pb-2')}
                    >
                        Enter your Email
                    </label>
                    <input
                        id="quiz-email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) {
                                const v = e.target.value;
                                setErrors((prev) => ({
                                    ...prev,
                                    email: !v.trim()
                                        ? 'Email is required.'
                                        : EMAIL_PATTERN.test(v.trim())
                                          ? ''
                                          : 'Please enter a valid email address.',
                                }));
                            }
                        }}
                        onBlur={() =>
                            setErrors((prev) => ({
                                ...prev,
                                email: !email.trim()
                                    ? 'Email is required.'
                                    : EMAIL_PATTERN.test(email.trim())
                                      ? ''
                                      : 'Please enter a valid email address.',
                            }))
                        }
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={
                            errors.email ? 'quiz-email-error' : undefined
                        }
                        className={cn(
                            quizInput,
                            errors.email && 'border-red-400',
                        )}
                    />
                    {errors.email && (
                        <p
                            id="quiz-email-error"
                            role="alert"
                            className={quizError}
                        >
                            {errors.email}
                        </p>
                    )}
                </div>
            </div>

            {quizSelectQuestions.map((q) => (
                <div
                    key={q.id}
                    className="grid grid-cols-1 items-center gap-3 py-6 lg:grid-cols-[220px_1fr] lg:gap-6"
                >
                    <label htmlFor={`quiz-${q.id}`} className={quizLabel}>
                        {q.question}
                    </label>
                    <div className="flex flex-col">
                        <div className="relative">
                            <select
                                id={`quiz-${q.id}`}
                                value={answers[q.id] ?? ''}
                                onChange={(e) =>
                                    setAnswer(q.id, e.target.value)
                                }
                                aria-invalid={errors[q.id] ? true : undefined}
                                aria-describedby={
                                    errors[q.id]
                                        ? `quiz-${q.id}-error`
                                        : undefined
                                }
                                className={cn(
                                    quizInput,
                                    'cursor-pointer appearance-none pr-10',
                                    !answers[q.id] && 'text-mist',
                                    errors[q.id] && 'border-red-400',
                                )}
                            >
                                <option value="" disabled>
                                    {q.placeholder}
                                </option>
                                {q.options.map((opt) => (
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
                        {errors[q.id] && (
                            <p
                                id={`quiz-${q.id}-error`}
                                role="alert"
                                className={quizError}
                            >
                                {errors[q.id]}
                            </p>
                        )}
                    </div>
                </div>
            ))}

            {quizSegmentQuestions.map((q) => (
                <div
                    key={q.id}
                    className="grid grid-cols-1 items-center gap-3 py-6 lg:grid-cols-[220px_1fr] lg:gap-6"
                >
                    <p id={`quiz-${q.id}-label`} className={quizLabel}>
                        {q.question}
                    </p>
                    <div
                        role="radiogroup"
                        aria-labelledby={`quiz-${q.id}-label`}
                        className="border-quiz-line bg-quiz-line grid grid-cols-2 gap-px overflow-hidden rounded-md border sm:grid-cols-4"
                    >
                        {q.options.map((opt) => (
                            <label
                                key={opt}
                                className="group flex h-12 cursor-pointer items-center gap-2 bg-white px-3"
                            >
                                <input
                                    type="radio"
                                    name={`quiz-${q.id}`}
                                    value={opt}
                                    checked={answers[q.id] === opt}
                                    onChange={(e) =>
                                        setAnswer(q.id, e.target.value)
                                    }
                                    className="sr-only"
                                />
                                <span
                                    aria-hidden
                                    className="group-has-checked:border-midnight group-has-focus-visible:outline-midnight flex size-[15px] shrink-0 items-center justify-center rounded-full border border-black transition-colors group-has-focus-visible:outline-2 group-has-focus-visible:outline-offset-2"
                                >
                                    <span className="bg-midnight size-2 rounded-full opacity-0 transition-opacity group-has-checked:opacity-100" />
                                </span>
                                <span
                                    className={cn(
                                        quizOption,
                                        answers[q.id] === opt &&
                                            'text-midnight',
                                    )}
                                >
                                    {opt}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}

            <div className="flex flex-col items-center pt-7">
                <button type="submit" className={quizButton}>
                    Find My Destination
                </button>
                <p className={cn(quizNote, 'pt-4 text-center')}>
                    We&rsquo;ll send your personalized recommendations to your
                    email.
                </p>
            </div>
        </form>
    );
}
