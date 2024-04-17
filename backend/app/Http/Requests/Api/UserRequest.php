<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'name' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'email', 'unique:users'],
            'username' => ['nullable', 'unique:users'],
            'new_password' => ['min:8'],
            'password' => ['required', 'min:8'],
            'objective_id' => ['nullable'],
        ];
    }

    public function messages()
    {
        return [
            'name.string'   => 'El valor de nombre no es correcto.',
            'name.max'      => 'El nombre solo permite 255 caracteres.',

            'email.email'    => 'El email no es válido.',
            'email.unique'   => 'El email ya esta registrado.',

            'username.unique'   => 'El nombre de usuario ya esta registrado.',

            'new_password.min'       => 'La contraseña debe contener al menos 8 caracteres.',

            'password.required'  => 'La contraseña es obligatoria.',
            'password.min'       => 'La contraseña debe contener al menos 8 caracteres.',
        ];
    }
}
