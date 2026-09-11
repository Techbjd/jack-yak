<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $user = $request->user();

        $availabilityCount = $user ? $user->availabilityRequests()->count() : 0;
        $reviewCount = $user ? $user->reviews()->count() : 0;
        $quizCount = $user ? $user->quizSubmissions()->count() : 0;

        $recentAvailability = $user
            ? $user->availabilityRequests()->latest()->limit(3)->get(['id', 'date', 'travelers', 'duration', 'looking_for'])
            : collect();

        $recentReviews = $user
            ? $user->reviews()->latest()->limit(3)->get(['id', 'rating', 'place', 'visit_date'])
            : collect();

        return Inertia::render('User', [
            'stats' => [
                'availabilityRequests' => $availabilityCount,
                'reviews' => $reviewCount,
                'quizSubmissions' => $quizCount,
            ],
            'recentAvailability' => $recentAvailability,
            'recentReviews' => $recentReviews,
        ]);
    }
}
