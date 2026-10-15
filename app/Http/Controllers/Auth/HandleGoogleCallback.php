<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\InvalidStateException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Throwable;

class HandleGoogleCallback extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): RedirectResponse
    {
        try {
            /** @var \Laravel\Socialite\Two\User $google */
            $google = Socialite::driver('google')->user();
        } catch (InvalidStateException $e) {
            // normal user can face falure state mismatch  -user refreshed the callback url session expired or some one forged or fabricated the link
            return redirect()->route('login')->withErrors([
                'email' => 'Google sign-in failed. Please try again.',
            ]);
        } catch (Throwable $e) {
            report($e);

            // gogole api outages db down and missing typo
            return redirect()->route('login')->withErrors([
                'email' => 'Something went wrong. Please try again in a moment.',
            ]);
        }

        $email = $google->getEmail();

        if (! $email) {
            return redirect()->route('login')->withErrors([
                'email' => 'Google did not share an email address. Please register with email instead.',
            ]);
        }
        $raw = $google->getRaw();
        $verified_email = (bool) ($raw['verified_email'] ?? false);

        $user = User::where('google_id', $google->getId())->first()
            ?? ($verified_email ? User::where('email', $email)->first() : null);

        if ($user) {
            $user->update([
                'google_id' => $google->getId(),
                'avatar' => $google->getAvatar(),
                'email_verified_at' => $user->email_verified_at ?? now(),
            ]);
        } else {
            try {
                $user = User::create([
                    'name' => $google->getName() ?? 'Google User',
                    'email' => $email,
                    'google_id' => $google->getId(),
                    'avatar' => $google->getAvatar(),
                    'email_verified_at' => now(),
                    'password' => null,
                ]);
            } catch (UniqueConstraintViolationException) {

                $user = User::where('email', $email)->firstOrFail(); // get first result or fail if not found

                if (! $verified_email) {
                    return redirect()->route('login')->withErrors([
                        'email' => 'A user with this email already exists. Please log in using your existing account.',
                    ]);
                }

                if ($user->google_id === null) {
                    $user->update([
                        'google_id' => $google->getId(),
                        'avatar' => $google->getAvatar(),
                    ]);
                }

            }

        }
        Auth::login($user, remember: true);
        $request->session()->regenerate();

        return redirect()->intended(route('user'));
    }
}
