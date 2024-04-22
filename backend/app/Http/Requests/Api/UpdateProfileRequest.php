<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email'],
            'username' => ['required'],
            // "photo_uri" => ['sometimes', 'nullable', 'string'],
            'photo_uri' => ['mimes:jpeg,png,jpg'],            
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El nombre es obligatorio.',
            'name.string'   => 'El valor de nombre no es correcto.',
            'name.max'      => 'El nombre solo permite 255 caracteres.',

            'email.required' => 'El email es obligatorio.',
            'email.email'    => 'El email no es válido.',

            'username.required' => 'El nombre de usuario es obligatorio.',

            // 'photo_uri.string'   => 'El valor de foto no es correcto.',
            'photo_uri.mimes' => 'El formato de foto no es correcto.',
        ];
    }
}
