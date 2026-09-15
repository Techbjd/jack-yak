import { useState } from 'react';
import { Link } from '@inertiajs/react';
import {
    Star,
    ChevronDown,
    Medal,
    MapPin,
    MessageCircleCheck,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { itinCard } from '@/config/theme';
import { trekBooking } from '@/config/itinerary';
import CheckAvailability from '../booking/CheckAvailability';
import GiveReview from '../review/GiveReview';

const RATING = 5;

const perkIcons = [Medal, MapPin, MessageCircleCheck];

function StarRow() {
    const row = (filled: boolean) => (
        <span aria-hidden className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={cn(
                        'size-4',
                        filled
                            ? 'fill-cta-accent text-cta-accent'
                            : 'fill-star-empty text-star-empty',
                    )}
                />
            ))}
        </span>
    );

    return (
        <span
            role="img"
            aria-label={`Rated ${RATING} out of 5 stars`}
            className="relative inline-flex"
        >
            {row(false)}
            <span
                aria-hidden
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${(RATING / 5) * 100}%` }}
            >
                {row(true)}
            </span>
        </span>
    );
}

/** Booking card — operator, price, rating, perks, CTA buttons + modals */
export default function BookingCard() {
    const [availabilityOpen, setAvailabilityOpen] = useState(false);
    const [reviewOpen, setReviewOpen] = useState(false);

    return (
        <section
            aria-label="Booking"
            className={cn(
                itinCard,
                'md:max-w-content-md flex w-full flex-col gap-4 p-5 md:mx-auto xl:mx-0 xl:max-w-none',
            )}
        >
            <div className="flex w-full items-center justify-between gap-3">
                <p className="font-manrope text-xs-sm tracking-card text-ink leading-3 font-bold">
                    {trekBooking.operator}
                </p>
                <label className="relative inline-flex items-center">
                    <span className="sr-only">Currency</span>
                    <select
                        aria-label="Currency"
                        defaultValue={trekBooking.currencies[0]}
                        className="font-manrope rounded-immersive border-card-line text-xs-md text-slate-text h-9 w-36 cursor-pointer appearance-none border bg-white pr-8 pl-3 leading-5 font-semibold outline-none"
                    >
                        {trekBooking.currencies.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                    <ChevronDown
                        aria-hidden
                        className="text-slate-text pointer-events-none absolute top-1/2 right-3 size-3.5 -translate-y-1/2"
                    />
                </label>
            </div>

            <div className="flex w-full flex-col">
                <p className="font-manrope text-xs-md tracking-itinerary-wide text-pale leading-5 font-semibold uppercase">
                    {trekBooking.priceLabel}
                </p>
                <p className="flex w-full flex-wrap items-baseline gap-x-3">
                    <span className="font-manrope text-xl-2xl tracking-price text-ink leading-10 font-extrabold">
                        {trekBooking.price}
                    </span>
                    <s className="font-manrope text-md-lg text-strike leading-8 font-medium">
                        {trekBooking.wasPrice}
                    </s>
                </p>
            </div>

            <hr className="border-line-soft border-t" />

            <p className="flex w-full flex-wrap items-center gap-x-2">
                <StarRow />
                <Link
                    href="#reviews"
                    className="font-manrope text-base-md leading-itinerary-25 text-ink font-semibold underline-offset-4 hover:underline"
                >
                    {trekBooking.reviewCount}
                </Link>
            </p>

            <ul className="flex w-full flex-col gap-2">
                {trekBooking.perks.map((perk, i) => {
                    const Icon = perkIcons[i % perkIcons.length];
                    return (
                        <li
                            key={perk}
                            className="flex w-full items-center gap-2.5"
                        >
                            <Icon
                                aria-hidden
                                className="text-slate-text size-4.75 shrink-0"
                            />
                            <span className="font-manrope text-base-md leading-itinerary-25 text-slate-text font-medium">
                                {perk}
                            </span>
                        </li>
                    );
                })}
            </ul>

            <div className="flex w-full flex-col gap-2.5">
                <button
                    type="button"
                    onClick={() => setAvailabilityOpen(true)}
                    className="font-manrope rounded-itinerary-cta bg-cta text-md-lg leading-itinerary-27 flex h-14.75 w-full cursor-pointer items-center justify-center font-medium text-white transition-opacity hover:opacity-90"
                >
                    {trekBooking.checkAvailability}
                </button>
                <button
                    type="button"
                    onClick={() => setReviewOpen(true)}
                    className="font-manrope border-cta-accent text-md-lg text-cta-accent flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border bg-white leading-6 font-semibold transition-opacity hover:opacity-80"
                >
                    {trekBooking.giveReview}
                </button>
                <a
                    href="https://wa.me/9779800000000"
                    target="_blank"
                    rel="noreferrer"
                    className="border-wa flex min-h-15 w-full items-center gap-2 rounded-xl border bg-white px-4 py-2.5"
                >
                    <FaWhatsapp
                        aria-hidden
                        className="text-wa size-6 shrink-0"
                    />
                    <span className="font-manrope text-xs-md leading-itinerary-19 text-ink font-normal">
                        {trekBooking.whatsapp}
                    </span>
                </a>
            </div>

            <CheckAvailability
                open={availabilityOpen}
                onClose={() => setAvailabilityOpen(false)}
            />
            <GiveReview
                open={reviewOpen}
                onClose={() => setReviewOpen(false)}
            />
        </section>
    );
}
