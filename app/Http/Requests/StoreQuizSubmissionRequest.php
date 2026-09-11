<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreQuizSubmissionRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'answers' => ['required', 'array'],
            'answers.experience' => ['required', 'string', 'max:100'],
            'answers.companion' => ['required', 'string', 'max:100'],
            'answers.duration' => ['required', 'string', 'max:100'],
            'answers.activity' => ['nullable', 'string', 'max:100'],
            'answers.season' => ['nullable', 'string', 'max:100'],
        ];
    }
}
