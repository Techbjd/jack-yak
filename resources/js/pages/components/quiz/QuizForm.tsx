import { useForm, usePage } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { EMAIL_PATTERN } from '@/lib/form-utils';
import { quizButton, quizNote } from '@/config/theme';
import {
    quizEndpoint,
    quizFormCopy,
    quizSegmentQuestions,
    quizSelectQuestions,
    type QuizAnswers,
} from '@/config/quiz';
import { siteRoutes } from '@/config/site';
import TextField from '@/components/forms/TextField';
import SelectField from '@/components/forms/SelectField';
import FormSuccess from '@/components/forms/FormSuccess';
import GuestNudge from '@/components/forms/GuestNudge';
import QuizSegmentField from './QuizSegmentField';
import type { PageProps } from '@/types';

export default function QuizForm() {
    const { auth, flash } = usePage<PageProps>().props;
    const user = auth?.user ?? null;

    const { data, setData, post, processing, errors, clearErrors } = useForm({
        name: user?.name ?? '',
        email: user?.email ?? '',
        answers: {} as QuizAnswers,
    });

    const setAnswer = (id: string, value: string) => {
        setData('answers', { ...data.answers, [id]: value });
        clearErrors(`answers.${id}` as never);
    };

    const getError = (key: string): string | undefined => {
        const bag = errors as Record<string, string | undefined>;
        return bag[key] ?? bag[`answers.${key}`];
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data.name.trim() || !EMAIL_PATTERN.test(data.email.trim())) {
            const firstBad = !data.name.trim() ? 'quiz-name' : 'quiz-email';
            document.getElementById(firstBad)?.focus();
            return;
        }
        post(quizEndpoint, {
            onError: () => {
                const firstBackend =
                    (errors as Record<string, string>).name ||
                    (errors as Record<string, string>).email
                        ? 'quiz-name'
                        : quizSelectQuestions.find(
                              (q) =>
                                  (errors as Record<string, string>)[
                                      `answers.${q.id}`
                                  ],
                          )?.id;
                if (firstBackend) {
                    document.getElementById(`quiz-${firstBackend}`)?.focus();
                }
            },
        });
    };

    if (flash?.success) {
        return (
            <FormSuccess
                tone="quiz"
                title={quizFormCopy.successTitle}
                message={
                    <>
                        {flash.success} {quizFormCopy.savedFor}{' '}
                        {data.email || quizFormCopy.anonymousLabel}.
                    </>
                }
                primaryHref={siteRoutes.destinations}
                primaryLabel={quizFormCopy.browseLabel}
                linkHref={user ? siteRoutes.user : siteRoutes.login}
                linkLabel={
                    user ? quizFormCopy.activityLabel : quizFormCopy.signInLabel
                }
            />
        );
    }

    return (
        <form
            noValidate
            onSubmit={handleSubmit}
            className="divide-hairline flex w-full flex-col divide-y"
        >
            {!user && (
                <GuestNudge
                    tone="quiz"
                    prefix={quizFormCopy.guestPrefix}
                    suffix={quizFormCopy.guestSuffix}
                />
            )}
            <div className="grid grid-cols-1 gap-5 pb-7 sm:grid-cols-2">
                <TextField
                    id="quiz-name"
                    label={quizFormCopy.nameLabel}
                    type="text"
                    tone="quiz"
                    autoComplete="name"
                    placeholder={quizFormCopy.namePlaceholder}
                    value={data.name}
                    onChange={(value) => {
                        setData('name', value);
                        clearErrors('name' as never);
                    }}
                    error={errors.name}
                />

                <TextField
                    id="quiz-email"
                    label={quizFormCopy.emailLabel}
                    type="email"
                    tone="quiz"
                    autoComplete="email"
                    placeholder={quizFormCopy.emailPlaceholder}
                    value={data.email}
                    onChange={(value) => {
                        setData('email', value);
                        clearErrors('email' as never);
                    }}
                    error={errors.email}
                />
            </div>

            {quizSelectQuestions.map((q) => (
                <SelectField
                    key={q.id}
                    id={`quiz-${q.id}`}
                    label={q.question}
                    tone="quiz"
                    placeholder={q.placeholder}
                    options={q.options}
                    value={data.answers[q.id] ?? ''}
                    onChange={(value) => setAnswer(q.id, value)}
                    error={getError(q.id)}
                />
            ))}

            {quizSegmentQuestions.map((q) => (
                <QuizSegmentField
                    key={q.id}
                    question={q}
                    value={data.answers[q.id]}
                    onChange={(value) => setAnswer(q.id, value)}
                />
            ))}

            <div className="flex flex-col items-center pt-7">
                <button
                    type="submit"
                    disabled={processing}
                    className={cn(quizButton, 'disabled:opacity-60')}
                >
                    {processing ? quizFormCopy.sending : quizFormCopy.submit}
                </button>
                <p className={cn(quizNote, 'pt-4 text-center')}>
                    {quizFormCopy.note}
                </p>
            </div>
        </form>
    );
}
