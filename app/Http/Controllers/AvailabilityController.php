<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAvailabilityRequest;
use App\Models\AvailabilityRequest;
use Illuminate\Http\RedirectResponse;

class AvailabilityController extends Controller
{
    public function __invoke(StoreAvailabilityRequest $request): RedirectResponse
    {
        AvailabilityRequest::create([
            'user_id' => $request->user()?->id,
            'date' => $request->validated('date'),
            'travelers' => $request->validated('travelers'),
            'duration' => $request->validated('duration'),
            'looking_for' => $request->validated('looking_for'),
        ]);

        return back()->with('success', 'Availability request received. We will confirm by email.');
    }
}
