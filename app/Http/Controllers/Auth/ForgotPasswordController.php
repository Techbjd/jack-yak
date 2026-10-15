<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ForgotPasswordRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;
use Inertia\Response;

class ForgotPasswordController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('auth/ForgotPassword'); // page lives at resources/js/pages/auth/ForgotPassword.tsx
    }

    public function store(ForgotPasswordRequest $request): RedirectResponse
    {
        Password::sendResetLink($request->only('email'));

        // Always the same message, whether the email exists or not,
        // so nobody can probe which emails have accounts (enumeration).
        // 'success' key matches what HandleInertiaRequests shares with React.
        return back()->with('success', 'Reset link sent. Check your email.');
    }
}
