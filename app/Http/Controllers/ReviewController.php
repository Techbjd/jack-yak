<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReviewRequest;
use App\Models\Review;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\UploadedFile;

class ReviewController extends Controller
{
    public function __invoke(StoreReviewRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        $photoPaths = [];
        if ($request->hasFile('photos')) {
            /** @var array<int, UploadedFile> $files */
            $files = $request->file('photos');
            foreach ($files as $file) {
                $photoPaths[] = $file->store('reviews', 'public');
            }
        }

        Review::create([
            'user_id' => $request->user()?->id,
            'rating' => $validated['rating'],
            'body' => $validated['body'],
            'place' => $validated['place'],
            'visit_date' => $validated['visit_date'],
            'name' => $validated['name'],
            'photos' => $photoPaths !== [] ? $photoPaths : null,
        ]);

        return back()->with('success', 'Thank you! Your review was submitted.');
    }
}
