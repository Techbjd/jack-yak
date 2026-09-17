import { useRef, useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Star, ImagePlus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { todayISODate } from '@/lib/form-utils';
import {
    fontPrimary,
    formErrorBorder,
    modalDivider,
    modalHint,
    modalLabel,
    modalSubtitle,
    modalTextarea,
    modalTitle,
} from '@/config/theme';
import {
    MAX_REVIEW_LENGTH,
    MAX_REVIEW_PHOTOS,
    REVIEW_STAR_COUNT,
    giveReviewCopy,
    photoLimitError,
    photosStepLabel,
    rateActionLabel,
    ratedLabel,
    removePhotoLabel,
    reviewPlaces,
    reviewSuccessMessage,
    reviewsEndpoint,
} from '@/config/review';
import { siteRoutes } from '@/config/site';
import Modal from '@/components/ui/Modal';
import FieldError from '@/components/forms/FieldError';
import TextField from '@/components/forms/TextField';
import SelectField from '@/components/forms/SelectField';
import FormSuccess from '@/components/forms/FormSuccess';
import GuestNudge from '@/components/forms/GuestNudge';
import FormActions from '@/components/forms/FormActions';
import type { PageProps } from '@/types';

interface ReviewPhoto {
    url: string;
    name: string;
    file: File;
}

interface GiveReviewProps {
    open: boolean;
    onClose: () => void;
}

export default function GiveReview({ open, onClose }: GiveReviewProps) {
    const { auth, flash } = usePage<PageProps>().props;
    const user = auth?.user ?? null;
    const today = todayISODate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const starRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const { data, setData, post, processing, errors, clearErrors, reset } =
        useForm({
            rating: 0,
            body: '',
            place: '',
            visit_date: '',
            name: user?.name ?? '',
            photos: [] as File[],
        });

    const [previews, setPreviews] = useState<ReviewPhoto[]>([]);
    const [photoError, setPhotoError] = useState('');
    const [dragging, setDragging] = useState(false);
    const [hovered, setHovered] = useState(0);
    const [agreed, setAgreed] = useState(false);
    const [agreedError, setAgreedError] = useState('');

    const lit = hovered || data.rating;
    const done = Boolean(flash?.success && !processing);

    const close = () => {
        previews.forEach((p) => URL.revokeObjectURL(p.url));
        setPreviews([]);
        setPhotoError('');
        setAgreedError('');
        setHovered(0);
        reset();
        clearErrors();
        if (user?.name) {
            setData('name', user.name);
        }
        onClose();
    };

    const focusStar = (index: number) => {
        starRefs.current[index]?.focus();
    };

    const onStarKeyDown = (
        e: React.KeyboardEvent<HTMLButtonElement>,
        index: number,
    ) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            e.preventDefault();
            focusStar((index + 1) % REVIEW_STAR_COUNT);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            e.preventDefault();
            focusStar((index + REVIEW_STAR_COUNT - 1) % REVIEW_STAR_COUNT);
        } else if (e.key === 'Home') {
            e.preventDefault();
            focusStar(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            focusStar(REVIEW_STAR_COUNT - 1);
        }
    };

    const addFiles = (files: FileList | File[]) => {
        const images = [...files].filter((f) => f.type.startsWith('image/'));
        if (images.length === 0) {
            setPhotoError(giveReviewCopy.imageFilesOnly);
            return;
        }
        if (
            previews.length + images.length > MAX_REVIEW_PHOTOS ||
            data.photos.length + images.length > MAX_REVIEW_PHOTOS
        ) {
            setPhotoError(photoLimitError(MAX_REVIEW_PHOTOS));
            return;
        }
        setPhotoError('');
        const next = images.map((f) => ({
            url: URL.createObjectURL(f),
            name: f.name,
            file: f,
        }));
        setPreviews((prev) => [...prev, ...next]);
        setData('photos', [...data.photos, ...images]);
    };

    const removePhoto = (url: string) => {
        setPreviews((prev) => {
            const target = prev.find((p) => p.url === url);
            if (target) {
                URL.revokeObjectURL(target.url);
                setData(
                    'photos',
                    data.photos.filter((f) => f.name !== target.name),
                );
            }
            return prev.filter((p) => p.url !== url);
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (data.rating === 0) {
            document.getElementById('review-rating')?.focus();
            return;
        }
        if (!agreed) {
            setAgreedError(giveReviewCopy.agreeRequired);
            document.getElementById('review-agree')?.focus();
            return;
        }
        setAgreedError('');
        post(reviewsEndpoint, {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    return (
        <Modal
            open={open}
            onClose={close}
            label={giveReviewCopy.dialogLabel}
        >
            {done ? (
                <FormSuccess
                    tone="modal"
                    title={giveReviewCopy.successTitle}
                    message={reviewSuccessMessage(data.rating)}
                    flash={flash?.success}
                    onPrimary={close}
                    primaryLabel={giveReviewCopy.doneLabel}
                    linkHref={user ? siteRoutes.user : siteRoutes.login}
                    linkLabel={
                        user
                            ? giveReviewCopy.reviewsLabel
                            : giveReviewCopy.signInLabel
                    }
                />
            ) : (
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="flex flex-col"
                >
                    <h2 className={modalTitle}>{giveReviewCopy.title}</h2>
                    <p className={cn(modalSubtitle, 'pt-2')}>
                        {giveReviewCopy.intro}
                    </p>
                    {!user && (
                        <GuestNudge
                            tone="modal"
                            suffix={giveReviewCopy.guestSuffix}
                        />
                    )}
                    <hr className={modalDivider} />

                    <p className={cn(modalLabel, 'pt-6')}>
                        {giveReviewCopy.rateStep}
                    </p>
                    <div
                        id="review-rating"
                        role="radiogroup"
                        aria-label={giveReviewCopy.ratingLabel}
                        className="flex gap-4 pt-3 md:gap-6"
                        onMouseLeave={() => setHovered(0)}
                    >
                        {Array.from(
                            { length: REVIEW_STAR_COUNT },
                            (_, i) => i + 1,
                        ).map((star, i) => (
                            <button
                                key={star}
                                ref={(el) => {
                                    starRefs.current[i] = el;
                                }}
                                type="button"
                                role="radio"
                                aria-checked={data.rating === star}
                                aria-label={rateActionLabel(star)}
                                onClick={() => {
                                    setData('rating', star);
                                    clearErrors('rating' as never);
                                }}
                                onMouseEnter={() => setHovered(star)}
                                onFocus={() => setHovered(star)}
                                onBlur={() => setHovered(0)}
                                onKeyDown={(e) => onStarKeyDown(e, i)}
                                className="focus-visible:ring-cta-accent cursor-pointer rounded-sm transition-transform outline-none hover:scale-110 focus-visible:ring-2 focus-visible:ring-offset-2"
                            >
                                <Star
                                    aria-hidden
                                    className={cn(
                                        'text-cta-accent size-8',
                                        star <= lit && 'fill-cta-accent',
                                    )}
                                />
                            </button>
                        ))}
                    </div>
                    <p className={cn(modalHint, 'pt-3')}>
                        {data.rating > 0
                            ? ratedLabel(data.rating)
                            : giveReviewCopy.unratedHint}
                    </p>
                    {errors.rating && (
                        <FieldError>{errors.rating}</FieldError>
                    )}

                    <label
                        htmlFor="review-text"
                        className={cn(modalLabel, 'pt-6 pb-2')}
                    >
                        {giveReviewCopy.reviewStep}
                    </label>
                    <textarea
                        id="review-text"
                        rows={5}
                        maxLength={MAX_REVIEW_LENGTH}
                        placeholder={giveReviewCopy.reviewPlaceholder}
                        value={data.body}
                        onChange={(e) => {
                            setData('body', e.target.value);
                            clearErrors('body' as never);
                        }}
                        aria-invalid={errors.body ? true : undefined}
                        className={cn(
                            modalTextarea,
                            errors.body && formErrorBorder,
                        )}
                    />
                    <div className="flex items-center justify-between pt-1.5">
                        <span>
                            {errors.body && (
                                <FieldError>{errors.body}</FieldError>
                            )}
                        </span>
                        <span
                            aria-live="polite"
                            className={cn(
                                fontPrimary,
                                'text-base-md text-mist font-medium',
                            )}
                        >
                            {data.body.length}/{MAX_REVIEW_LENGTH}
                        </span>
                    </div>

                    <p className={cn(modalLabel, 'pt-5 pb-2')}>
                        {photosStepLabel(MAX_REVIEW_PHOTOS)}
                    </p>
                    <div
                        role="button"
                        tabIndex={0}
                        aria-label={giveReviewCopy.uploadLabel}
                        onClick={() => fileInputRef.current?.click()}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                fileInputRef.current?.click();
                            }
                        }}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setDragging(true);
                        }}
                        onDragLeave={() => setDragging(false)}
                        onDrop={(e) => {
                            e.preventDefault();
                            setDragging(false);
                            addFiles(e.dataTransfer.files);
                        }}
                        className={cn(
                            'border-ink flex min-h-24.5 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-dashed bg-white p-6 text-center transition-colors',
                            dragging && 'border-cta bg-surface-cream',
                        )}
                    >
                        <ImagePlus aria-hidden className="text-ink size-6" />
                        <p className={cn(modalHint, 'text-ink')}>
                            {giveReviewCopy.dropHint}
                        </p>
                        <div
                            aria-hidden
                            className="flex w-full max-w-50 items-center gap-3"
                        >
                            <span className="bg-divider h-px flex-1" />
                            <span
                                className={cn(
                                    fontPrimary,
                                    'text-mist text-xs font-medium',
                                )}
                            >
                                {giveReviewCopy.orDivider}
                            </span>
                            <span className="bg-divider h-px flex-1" />
                        </div>
                        <span
                            className={cn(
                                fontPrimary,
                                'border-ink text-ink flex h-7.5 items-center justify-center rounded-lg border bg-white px-3 text-xs font-semibold',
                            )}
                        >
                            {giveReviewCopy.browseFiles}
                        </span>
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        aria-hidden
                        tabIndex={-1}
                        className="sr-only"
                        onChange={(e) => {
                            if (e.target.files) {
                                addFiles(e.target.files);
                            }
                            e.target.value = '';
                        }}
                    />
                    {photoError && (
                        <FieldError>{photoError}</FieldError>
                    )}
                    {previews.length > 0 && (
                        <ul className="flex flex-wrap gap-3 pt-3">
                            {previews.map((photo) => (
                                <li
                                    key={photo.url}
                                    className="relative size-16 overflow-hidden rounded-md md:size-20"
                                >
                                    <img
                                        src={photo.url}
                                        alt={photo.name}
                                        className="h-full w-full object-cover"
                                    />
                                        <button
                                            type="button"
                                            aria-label={removePhotoLabel(
                                                photo.name,
                                            )}
                                        onClick={() => removePhoto(photo.url)}
                                        className="absolute top-1 right-1 flex size-6 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-opacity hover:opacity-80"
                                    >
                                        <X aria-hidden className="size-4" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2">
                        <SelectField
                            id="review-place"
                            label={giveReviewCopy.placeStep}
                            tone="modal"
                            labelClassName="pb-2"
                            placeholder={giveReviewCopy.placePlaceholder}
                            options={reviewPlaces}
                            value={data.place}
                            onChange={(value) => {
                                setData('place', value);
                                clearErrors('place' as never);
                            }}
                            error={errors.place}
                        />

                        <TextField
                            id="review-visit"
                            label={giveReviewCopy.visitStep}
                            type="date"
                            tone="modal"
                            labelClassName="pb-2"
                            inputClassName={
                                !data.visit_date ? 'text-mist' : undefined
                            }
                            max={today}
                            value={data.visit_date}
                            onChange={(value) => {
                                setData('visit_date', value);
                                clearErrors('visit_date' as never);
                            }}
                            error={errors.visit_date}
                        />
                    </div>

                    <TextField
                        id="review-name"
                        label={giveReviewCopy.nameLabel}
                        type="text"
                        tone="modal"
                        labelClassName="pt-5 pb-2"
                        autoComplete="name"
                        placeholder={giveReviewCopy.namePlaceholder}
                        value={data.name}
                        onChange={(value) => {
                            setData('name', value);
                            clearErrors('name' as never);
                        }}
                        error={errors.name}
                    />

                    <FormActions
                        onCancel={close}
                        processing={processing}
                        submitLabel={giveReviewCopy.submit}
                        className="pt-6"
                        leading={
                            <div className="flex flex-col">
                                <label
                                    htmlFor="review-agree"
                                    className="group flex cursor-pointer items-center gap-3"
                                >
                                    <input
                                        id="review-agree"
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(e) => {
                                            setAgreed(e.target.checked);
                                            if (e.target.checked) {
                                                setAgreedError('');
                                            }
                                        }}
                                        className="accent-ink size-4.5 shrink-0 cursor-pointer"
                                    />
                                    <span
                                        className={cn(
                                            fontPrimary,
                                            'text-base-md font-medium text-black',
                                        )}
                                    >
                                        {giveReviewCopy.agreeLabel}
                                    </span>
                                </label>
                                {agreedError && (
                                    <FieldError>{agreedError}</FieldError>
                                )}
                            </div>
                        }
                    />
                </form>
            )}
        </Modal>
    );
}
