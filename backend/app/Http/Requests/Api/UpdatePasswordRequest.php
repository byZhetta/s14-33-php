<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePasswordRequest extends FormRequest
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
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'min:8', 'confirmed'],
        ];
    }

    public function messages()
    {
        return [
            'current_password.required' => 'Ingrese la contraseña actual.',
            'current_password.current_password' => 'La contraseña actual no es correcta.',
            
            'password.required'  => 'Ingrese una nueva contraseña.',
            'password.min'       => 'La contraseña debe contener al menos 8 caracteres.',
            'password.confirmed' => 'Debe confirmar la contraseña.',
        ];
    }
}
