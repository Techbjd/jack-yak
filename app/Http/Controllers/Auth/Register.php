<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class Register extends Controller
{
    public function show(): Response|RedirectResponse
    {
        if (Auth::check()) {
            return to_route('user');
        }

        return Inertia::render('Register');
    }

    public function __invoke(RegisterRequest $request): RedirectResponse
    {
        $user = User::create($request->validated());

        Auth::login($user);

        $request->session()->regenerate();

        return to_route('user');
    }
}
