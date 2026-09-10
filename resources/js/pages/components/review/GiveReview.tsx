import { useRef, useState } from 'react';
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

interface ReviewPhoto {
    url: string;
    name: string;
}

interface GiveReviewProps {
    open: boolean;
    onClose: () => void;
}

export default function GiveReview({ open, onClose }: GiveReviewProps) {
    const today = new Date().toISOString().split('T')[0];
    const fileInputRef = useRef<HTMLInputElement>(null);
    const starRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(0);
    const [review, setReview] = useState('');
    const [photos, setPhotos] = useState<ReviewPhoto[]>([]);
    const [photoError, setPhotoError] = useState('');
    const [dragging, setDragging] = useState(false);
    const [place, setPlace] = useState('');
    const [visitDate, setVisitDate] = useState('');
    const [name, setName] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [done, setDone] = useState(false);

    const lit = hovered || rating;

    const close = () => {
        setErrors({});
        setPhotoError('');
        setDone(false);
        setHovered(0);
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
        if (photos.length + images.length > MAX_REVIEW_PHOTOS) {
            setPhotoError(`You can add up to ${MAX_REVIEW_PHOTOS} photos.`);
            return;
        }
        setPhotoError('');
        setPhotos((prev) => [
            ...prev,
            ...images.map((f) => ({
                url: URL.createObjectURL(f),
                name: f.name,
            })),
        ]);
    };

    const removePhoto = (url: string) => {
        setPhotos((prev) => {
            const target = prev.find((p) => p.url === url);
            if (target) {
                URL.revokeObjectURL(target.url);
            }
            return prev.filter((p) => p.url !== url);
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const next: Record<string, string> = {};
        if (rating === 0) {
            next.rating = 'Please tap a star to rate your experience.';
        }
        if (!review.trim()) {
            next.review = 'Please write a few words about your trip.';
        }
        if (!place) {
            next.place = 'Please choose the place this review is about.';
        }
        if (!visitDate) {
            next.visitDate = 'Please choose when you visited.';
        }
        if (!name.trim()) {
            next.name = 'Please enter your name.';
        }
        if (!agreed) {
            next.agreed = 'Please agree to the Community Guidelines.';
        }
        setErrors(next);
        const firstBad = [
            'rating',
            'review',
            'place',
            'visitDate',
            'name',
            'agreed',
        ].find((key) => next[key]);
        if (firstBad) {
            document.getElementById(`review-${firstBad}`)?.focus();
            return;
        }
        setDone(true);
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
                        Your {rating}-star review helps others discover the best
                        of Nepal.
                    </p>
                    <button
                        type="button"
                        onClick={close}
                        className={cn(modalPrimary, 'mt-2 cursor-pointer')}
                    >
                        Done
                    </button>
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
                    <hr className="border-hairline mt-6 border-t" />

                    <p className={cn(modalLabel, 'pt-6')}>
                        1. Rate Your Experience
                    </p>
                    <div
                        role="radiogroup"
                        aria-label="Star rating"
                        aria-describedby={
                            errors.rating ? 'review-rating-error' : undefined
                        }
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
                                aria-checked={rating === star}
                                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                                onClick={() => {
                                    setRating(star);
                                    setErrors((prev) => ({
                                        ...prev,
                                        rating: '',
                                    }));
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
                        {rating > 0
                            ? `You rated ${rating} star${rating > 1 ? 's' : ''}.`
                            : 'Tap a star to rate.'}
                    </p>
                    {errors.rating && (
                        <p
                            id="review-rating-error"
                            role="alert"
                            className={quizError}
                        >
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
                        value={review}
                        onChange={(e) => {
                            setReview(e.target.value);
                            if (errors.review && e.target.value.trim()) {
                                setErrors((prev) => ({
                                    ...prev,
                                    review: '',
                                }));
                            }
                        }}
                        aria-invalid={errors.review ? true : undefined}
                        aria-describedby="review-counter review-text-error"
                        className={cn(
                            modalTextarea,
                            errors.review && 'border-red-400',
                        )}
                    />
                    <div className="flex items-center justify-between pt-1.5">
                        <span>
                            {errors.review && (
                                <span
                                    id="review-text-error"
                                    role="alert"
                                    className={cn(
                                        fontPrimary,
                                        'text-xs font-medium text-red-500',
                                    )}
                                >
                                    {errors.review}
                                </span>
                            )}
                        </span>
                        <span
                            id="review-counter"
                            aria-live="polite"
                            className={cn(
                                fontPrimary,
                                'text-base-md text-mist font-medium',
                            )}
                        >
                            {review.length}/{MAX_REVIEW_LENGTH}
                        </span>
                    </div>

                    <p className={cn(modalLabel, 'pt-5 pb-2')}>
                        3. Add Photos (Optional)
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
                    {photos.length > 0 && (
                        <ul className="flex flex-wrap gap-3 pt-3">
                            {photos.map((photo) => (
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
                                    value={place}
                                    onChange={(e) => {
                                        setPlace(e.target.value);
                                        if (errors.place) {
                                            setErrors((prev) => ({
                                                ...prev,
                                                place: '',
                                            }));
                                        }
                                    }}
                                    aria-invalid={
                                        errors.place ? true : undefined
                                    }
                                    aria-describedby={
                                        errors.place
                                            ? 'review-place-error'
                                            : undefined
                                    }
                                    className={cn(
                                        modalInput,
                                        'cursor-pointer appearance-none pr-10',
                                        !place && 'text-mist',
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
                                <p
                                    id="review-place-error"
                                    role="alert"
                                    className={quizError}
                                >
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
                                value={visitDate}
                                onChange={(e) => {
                                    setVisitDate(e.target.value);
                                    if (errors.visitDate) {
                                        setErrors((prev) => ({
                                            ...prev,
                                            visitDate: '',
                                        }));
                                    }
                                }}
                                aria-invalid={
                                    errors.visitDate ? true : undefined
                                }
                                aria-describedby={
                                    errors.visitDate
                                        ? 'review-visit-error'
                                        : undefined
                                }
                                className={cn(
                                    modalInput,
                                    !visitDate && 'text-mist',
                                    errors.visitDate && 'border-red-400',
                                )}
                            />
                            {errors.visitDate && (
                                <p
                                    id="review-visit-error"
                                    role="alert"
                                    className={quizError}
                                >
                                    {errors.visitDate}
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
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name && e.target.value.trim()) {
                                setErrors((prev) => ({
                                    ...prev,
                                    name: '',
                                }));
                            }
                        }}
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={
                            errors.name ? 'review-name-error' : undefined
                        }
                        className={cn(
                            modalInput,
                            errors.name && 'border-red-400',
                        )}
                    />
                    {errors.name && (
                        <p
                            id="review-name-error"
                            role="alert"
                            className={quizError}
                        >
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
                                        if (errors.agreed) {
                                            setErrors((prev) => ({
                                                ...prev,
                                                agreed: '',
                                            }));
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
                            {errors.agreed && (
                                <p role="alert" className={quizError}>
                                    {errors.agreed}
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
                                className={cn(modalPrimary, 'cursor-pointer')}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Modal>
    );
}
