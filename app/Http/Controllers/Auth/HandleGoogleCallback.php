<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpFoundation\RedirectResponse;

class HandleGoogleCallback extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): RedirectResponse
    {
        // 1. Exchange `?code=...&state=...` for Google profile

        $google = Socialite::driver('google')->user();
        // 2. Returning Google user? Log them straight in

        $user = User::where('google_id', $google->getId())->first();

        if (! $user) {
            $user = User::where('email', $google->getEmail())->first();
            if ($user) {
                $user->update([
                    'google_id' => $google->getId(),
                    'avatar' => $google->getAvatar(),
                ]);
            }
        }
        if (! $user) {
            $user = User::create([
                'name' => $google->getName(),
                'email' => $google->getEmail(),
                'google_id' => $google->getId(),
                'avatar' => $google->getAvatar(),
                'email_verified_at' => now(),
                'password' => null,
            ]);
        }

        // make it a logged-in session
        Auth::login($user, remember: true);
        $request->session()->regenerate();

        return redirect()->intended(route('user'));

    }
}
