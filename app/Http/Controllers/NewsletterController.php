<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNewsletterRequest;
use App\Models\NewsletterSubscription;
use Illuminate\Http\RedirectResponse;

class NewsletterController extends Controller
{
    public function __invoke(StoreNewsletterRequest $request): RedirectResponse
    {
        NewsletterSubscription::create([
            'email' => $request->validated('email'),
        ]);

        // No flash message: the newsletter form tracks its own success
        // state, and shared flash would flip unrelated modal forms.
        return back();
    }
}
