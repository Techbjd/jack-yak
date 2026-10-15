<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;

// check howmany time the reset link is being sent if 6 times stop sending reset message

class ForgotPasswordRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;

    }

    public function rules(): array
    {
        return [
            'email' => ['required', 'email'],
        ];
    }

    public function prepareForValidation(): void
    {
        if ($email = $this->input('email')) {
            $key = 'forgot-password:'.strtolower($email);

            if (RateLimiter::tooManyAttempts($key, 6)) {
                throw ValidationException::withMessages([
                    'email' => 'Too many reset attempts. Try again in '.RateLimiter::availableIn($key).' seconds.',
                ]);

            }
            RateLimiter::hit($key, 60);
        }
    }

    protected function prepareForValidaton(): void
    {
        $email = strtolower((string) $this->input('email'));
        if ($email === '') {
            return;

        }

        $key = 'forgot-password:'.$email;
        if (RateLimiter::tooManyAttempts($key, 6)) {
            throw ValidationException::withMessages([
                'email' => 'Too many reset attempts. Try again in '.RateLimiter::availableIn($key).' seconds.',
            ]);
            RateLimiter::hit($key, 60);

        }

    }
}
