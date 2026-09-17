import { useForm, usePage } from '@inertiajs/react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { todayISODate } from '@/lib/form-utils';
import {
    fontPrimary,
    modalDivider,
    modalInput,
    modalLabel,
    modalSubtitle,
    modalTitle,
} from '@/config/theme';
import { quizSelectQuestions } from '@/config/quiz';
import {
    availabilityCopy,
    availabilityEndpoint,
    availabilityMaxTravelers,
    travelerUnit,
} from '@/config/booking';
import { siteRoutes } from '@/config/site';
import Modal from '@/components/ui/Modal';
import FieldError from '@/components/forms/FieldError';
import TextField from '@/components/forms/TextField';
import SelectField from '@/components/forms/SelectField';
import FormSuccess from '@/components/forms/FormSuccess';
import GuestNudge from '@/components/forms/GuestNudge';
import FormActions from '@/components/forms/FormActions';
import type { PageProps } from '@/types';

const durations =
    quizSelectQuestions.find((q) => q.id === 'duration')?.options ?? [];
const activities =
    quizSelectQuestions.find((q) => q.id === 'experience')?.options ?? [];

interface CheckAvailabilityProps {
    open: boolean;
    onClose: () => void;
}

export default function CheckAvailability({
    open,
    onClose,
}: CheckAvailabilityProps) {
    const { auth, flash } = usePage<PageProps>().props;
    const user = auth?.user ?? null;
    const today = todayISODate();

    const { data, setData, post, processing, errors, clearErrors, reset } =
        useForm({
            date: '',
            travelers: 1,
            duration: '',
            looking_for: '',
        });

    const close = () => {
        reset();
        clearErrors();
        onClose();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data.date) {
            document.getElementById('availability-date')?.focus();
            return;
        }
        post(availabilityEndpoint, {
            preserveScroll: true,
            onError: () => {
                document.getElementById('availability-date')?.focus();
            },
        });
    };

    const done = Boolean(flash?.success && !processing);

    return (
        <Modal
            open={open}
            onClose={close}
            label={availabilityCopy.dialogLabel}
        >
            {done ? (
                <FormSuccess
                    tone="modal"
                    title={availabilityCopy.successTitle}
                    message={
                        <>
                            {data.travelers} {travelerUnit(data.travelers)} ·{' '}
                            {data.date}
                            {data.duration ? ` · ${data.duration}` : ''}
                            {data.looking_for
                                ? ` · ${data.looking_for}`
                                : ''}
                            . {availabilityCopy.successTail}
                        </>
                    }
                    flash={flash?.success}
                    onPrimary={close}
                    primaryLabel={availabilityCopy.doneLabel}
                    linkHref={user ? siteRoutes.user : siteRoutes.login}
                    linkLabel={
                        user
                            ? availabilityCopy.requestsLabel
                            : availabilityCopy.signInLabel
                    }
                />
            ) : (
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="flex flex-col"
                >
                    <h2 className={modalTitle}>{availabilityCopy.title}</h2>
                    <p className={cn(modalSubtitle, 'pt-2')}>
                        {availabilityCopy.intro}
                    </p>
                    {!user && (
                        <GuestNudge
                            tone="modal"
                            suffix={availabilityCopy.guestSuffix}
                        />
                    )}
                    <hr className={modalDivider} />

                    <TextField
                        id="availability-date"
                        label={availabilityCopy.dateLabel}
                        type="date"
                        tone="modal"
                        labelClassName="pt-6 pb-2 font-semibold"
                        inputClassName={!data.date ? 'text-mist' : undefined}
                        min={today}
                        value={data.date}
                        onChange={(value) => {
                            setData('date', value);
                            clearErrors('date' as never);
                        }}
                        error={errors.date}
                    />
                    {errors.travelers && (
                        <FieldError>{errors.travelers}</FieldError>
                    )}

                    <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2">
                        <div className="flex flex-col">
                            <span
                                id="travelers-label"
                                className={cn(modalLabel, 'pb-2 font-semibold')}
                            >
                                {availabilityCopy.travelersLabel}
                            </span>
                            <div
                                role="group"
                                aria-labelledby="travelers-label"
                                className={cn(
                                    modalInput,
                                    'flex items-center justify-between px-2',
                                )}
                            >
                                <button
                                    type="button"
                                    aria-label={availabilityCopy.fewerLabel}
                                    disabled={data.travelers <= 1}
                                    onClick={() =>
                                        setData(
                                            'travelers',
                                            Math.max(1, data.travelers - 1),
                                        )
                                    }
                                    className="text-cta flex size-10 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                    <Minus aria-hidden className="size-5" />
                                </button>
                                <span
                                    aria-live="polite"
                                    className={cn(
                                        fontPrimary,
                                        'text-md-lg font-medium',
                                    )}
                                >
                                    {data.travelers}{' '}
                                    <span className="text-mist">
                                        {travelerUnit(data.travelers, true)}
                                    </span>
                                </span>
                                <button
                                    type="button"
                                    aria-label={availabilityCopy.moreLabel}
                                    disabled={
                                        data.travelers >=
                                        availabilityMaxTravelers
                                    }
                                    onClick={() =>
                                        setData(
                                            'travelers',
                                            Math.min(
                                                availabilityMaxTravelers,
                                                data.travelers + 1,
                                            ),
                                        )
                                    }
                                    className="text-cta flex size-10 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                    <Plus aria-hidden className="size-5" />
                                </button>
                            </div>
                        </div>

                        <SelectField
                            id="availability-duration"
                            label={availabilityCopy.durationLabel}
                            tone="modal"
                            labelClassName="pb-2 font-semibold"
                            placeholder={availabilityCopy.durationPlaceholder}
                            options={durations}
                            value={data.duration}
                            onChange={(value) =>
                                setData('duration', value)
                            }
                            error={errors.duration}
                        />
                    </div>

                    <SelectField
                        id="availability-looking-for"
                        label={availabilityCopy.activityLabel}
                        tone="modal"
                        labelClassName="pt-5 pb-2 font-semibold"
                        placeholder={availabilityCopy.activityPlaceholder}
                        options={activities}
                        value={data.looking_for}
                        onChange={(value) => setData('looking_for', value)}
                        error={errors.looking_for}
                    />

                    <hr className={modalDivider} />

                    <FormActions
                        onCancel={close}
                        processing={processing}
                        submitLabel={availabilityCopy.submit}
                        leading={
                            <p className={cn(modalSubtitle, 'font-semibold')}>
                                {availabilityCopy.privacyLead}{' '}
                                <span className="text-cta">
                                    {availabilityCopy.privacySafe}
                                </span>{' '}
                                {availabilityCopy.privacyTail}
                            </p>
                        }
                    />
                </form>
            )}
        </Modal>
    );
}
