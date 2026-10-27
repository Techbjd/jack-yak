<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreNewsletterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // No `unique` rule (Task 8b): the controller de-dupes via
            // updateOrCreate, so a repeat subscriber gets the same happy path
            // as a first-timer instead of a validation error.
            'email' => ['required', 'string', 'email', 'max:255'],
        ];
    }
}
