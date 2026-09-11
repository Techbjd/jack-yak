import { useRef, useState } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Star, ChevronDown, CircleCheck, ImagePlus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    fontPrimary,
    modalGhost,
    modalHint,
    modalInput,
    modalLabel,
    modalPrimary,
    modalSubtitle,
    modalTextarea,
    modalTitle,
    quizError,
} from '@/config/theme';
import {
    MAX_REVIEW_LENGTH,
    MAX_REVIEW_PHOTOS,
    reviewPlaces,
} from '@/config/review';
import Modal from '../shared/Modal';
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
    const today = new Date().toISOString().split('T')[0];
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
            focusStar((index + 1) % 5);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            e.preventDefault();
            focusStar((index + 4) % 5);
        } else if (e.key === 'Home') {
            e.preventDefault();
            focusStar(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            focusStar(4);
        }
    };

    const addFiles = (files: FileList | File[]) => {
        const images = [...files].filter((f) => f.type.startsWith('image/'));
        if (images.length === 0) {
            setPhotoError('Please choose image files.');
            return;
        }
        if (
            previews.length + images.length > MAX_REVIEW_PHOTOS ||
            data.photos.length + images.length > MAX_REVIEW_PHOTOS
        ) {
            setPhotoError(`You can add up to ${MAX_REVIEW_PHOTOS} photos.`);
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
            setAgreedError('Please agree to the Community Guidelines.');
            document.getElementById('review-agree')?.focus();
            return;
        }
        setAgreedError('');
        post('/reviews', {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    return (
        <Modal open={open} onClose={close} label="Give a review">
            {done ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                    <CircleCheck
                        aria-hidden
                        className="text-cta size-12 md:size-16"
                    />
                    <h2 className={modalTitle}>Thank you!</h2>
                    <p className={modalSubtitle}>
                        Your {data.rating}-star review helps others discover the
                        best of Nepal.
                    </p>
                    {flash?.success && (
                        <p
                            className={cn(
                                modalSubtitle,
                                'text-cta font-semibold',
                            )}
                        >
                            {flash.success}
                        </p>
                    )}
                    <div className="mt-2 flex flex-wrap justify-center gap-3">
                        <button
                            type="button"
                            onClick={close}
                            className={cn(modalPrimary, 'cursor-pointer')}
                        >
                            Done
                        </button>
                        <Link
                            href={user ? '/user' : '/login'}
                            className={cn(
                                fontPrimary,
                                'text-cta-accent text-sm font-bold underline-offset-4 hover:underline',
                            )}
                        >
                            {user
                                ? 'View my reviews'
                                : 'Sign in to track reviews'}
                        </Link>
                    </div>
                </div>
            ) : (
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="flex flex-col"
                >
                    <h2 className={modalTitle}>Give a Review</h2>
                    <p className={cn(modalSubtitle, 'pt-2')}>
                        Share your experience and help others discover the best
                        of Nepal.
                    </p>
                    {!user && (
                        <p className={cn(modalSubtitle, 'pt-2')}>
                            <Link
                                href="/login"
                                className="text-cta-accent font-bold underline-offset-4 hover:underline"
                            >
                                Sign in
                            </Link>{' '}
                            to track this review in your profile, or continue as
                            guest.
                        </p>
                    )}
                    <hr className="border-hairline mt-6 border-t" />

                    <p className={cn(modalLabel, 'pt-6')}>
                        1. Rate Your Experience
                    </p>
                    <div
                        id="review-rating"
                        role="radiogroup"
                        aria-label="Star rating"
                        className="flex gap-4 pt-3 md:gap-6"
                        onMouseLeave={() => setHovered(0)}
                    >
                        {[1, 2, 3, 4, 5].map((star, i) => (
                            <button
                                key={star}
                                ref={(el) => {
                                    starRefs.current[i] = el;
                                }}
                                type="button"
                                role="radio"
                                aria-checked={data.rating === star}
                                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
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
                            ? `You rated ${data.rating} star${data.rating > 1 ? 's' : ''}.`
                            : 'Tap a star to rate.'}
                    </p>
                    {errors.rating && (
                        <p role="alert" className={quizError}>
                            {errors.rating}
                        </p>
                    )}

                    <label
                        htmlFor="review-text"
                        className={cn(modalLabel, 'pt-6 pb-2')}
                    >
                        2. Share your experience
                    </label>
                    <textarea
                        id="review-text"
                        rows={5}
                        maxLength={MAX_REVIEW_LENGTH}
                        placeholder="Write your review here...."
                        value={data.body}
                        onChange={(e) => {
                            setData('body', e.target.value);
                            clearErrors('body' as never);
                        }}
                        aria-invalid={errors.body ? true : undefined}
                        className={cn(
                            modalTextarea,
                            errors.body && 'border-red-400',
                        )}
                    />
                    <div className="flex items-center justify-between pt-1.5">
                        <span>
                            {errors.body && (
                                <span role="alert" className={quizError}>
                                    {errors.body}
                                </span>
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
                        3. Add Photos (Optional, max {MAX_REVIEW_PHOTOS})
                    </p>
                    <div
                        role="button"
                        tabIndex={0}
                        aria-label="Upload review photos"
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
                            Drag your file(s) to start uploading
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
                                OR
                            </span>
                            <span className="bg-divider h-px flex-1" />
                        </div>
                        <span
                            className={cn(
                                fontPrimary,
                                'border-ink text-ink flex h-7.5 items-center justify-center rounded-lg border bg-white px-3 text-xs font-semibold',
                            )}
                        >
                            Browse files
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
                        <p role="alert" className={quizError}>
                            {photoError}
                        </p>
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
                                        aria-label={`Remove ${photo.name}`}
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
                        <div className="flex flex-col">
                            <label
                                htmlFor="review-place"
                                className={cn(modalLabel, 'pb-2')}
                            >
                                4. What is this review about?
                            </label>
                            <div className="relative">
                                <select
                                    id="review-place"
                                    value={data.place}
                                    onChange={(e) => {
                                        setData('place', e.target.value);
                                        clearErrors('place' as never);
                                    }}
                                    aria-invalid={
                                        errors.place ? true : undefined
                                    }
                                    className={cn(
                                        modalInput,
                                        'cursor-pointer appearance-none pr-10',
                                        !data.place && 'text-mist',
                                        errors.place && 'border-red-400',
                                    )}
                                >
                                    <option value="" disabled>
                                        Select a place
                                    </option>
                                    {reviewPlaces.map((opt) => (
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
                            {errors.place && (
                                <p role="alert" className={quizError}>
                                    {errors.place}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="review-visit"
                                className={cn(modalLabel, 'pb-2')}
                            >
                                5. When did you visit?
                            </label>
                            <input
                                id="review-visit"
                                type="date"
                                max={today}
                                value={data.visit_date}
                                onChange={(e) => {
                                    setData('visit_date', e.target.value);
                                    clearErrors('visit_date' as never);
                                }}
                                aria-invalid={
                                    errors.visit_date ? true : undefined
                                }
                                className={cn(
                                    modalInput,
                                    !data.visit_date && 'text-mist',
                                    errors.visit_date && 'border-red-400',
                                )}
                            />
                            {errors.visit_date && (
                                <p role="alert" className={quizError}>
                                    {errors.visit_date}
                                </p>
                            )}
                        </div>
                    </div>

                    <label
                        htmlFor="review-name"
                        className={cn(modalLabel, 'pt-5 pb-2')}
                    >
                        Your name
                    </label>
                    <input
                        id="review-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter Your Name"
                        value={data.name}
                        onChange={(e) => {
                            setData('name', e.target.value);
                            clearErrors('name' as never);
                        }}
                        aria-invalid={errors.name ? true : undefined}
                        className={cn(
                            modalInput,
                            errors.name && 'border-red-400',
                        )}
                    />
                    {errors.name && (
                        <p role="alert" className={quizError}>
                            {errors.name}
                        </p>
                    )}

                    <div className="flex flex-col gap-4 pt-6 md:flex-row md:items-center md:justify-between">
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
                                    I agree to the Community Guidelines
                                </span>
                            </label>
                            {agreedError && (
                                <p role="alert" className={quizError}>
                                    {agreedError}
                                </p>
                            )}
                        </div>
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={close}
                                className={cn(modalGhost, 'cursor-pointer')}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className={cn(
                                    modalPrimary,
                                    'cursor-pointer disabled:opacity-60',
                                )}
                            >
                                {processing ? 'Sending…' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Modal>
    );
}
