<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreQuizSubmissionRequest;
use App\Models\QuizSubmission;
use Illuminate\Http\RedirectResponse;

class QuizSubmissionController extends Controller
{
    public function __invoke(StoreQuizSubmissionRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        QuizSubmission::create([
            'user_id' => $request->user()?->id,
            'name' => $validated['name'],
            'email' => $validated['email'],
            'answers' => $validated['answers'],
        ]);

        return back()->with('quizSuccess', 'We will send your personalized recommendations to your email.');
    }
}
