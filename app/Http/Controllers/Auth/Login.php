<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;

class Login extends Controller
{
    public function show(): Response|RedirectResponse
    {
        if (Auth::check()) {
            return to_route('user');
        }

        return Inertia::render('Login');
    }

    public function __invoke(LoginRequest $request): RedirectResponse
    {
        $credentials = $request->only('email', 'password');
        $remember = $request->boolean('remember');

        if (! Auth::attempt($credentials, $remember)) {
            return back()->withErrors([
                'email' => 'These credentials do not match our records.',
            ])->onlyInput('email');
        }

        $request->session()->regenerate();

        /** @var SymfonyResponse|RedirectResponse $redirect */
        $redirect = redirect()->intended(route('user'));

        return $redirect;
    }
}
