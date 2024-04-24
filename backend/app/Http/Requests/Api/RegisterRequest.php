<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'email' => ['required', 'email', 'unique:users'],
            'username' => ['required', 'unique:users'],
            'password' => ['required', 'min:8', 'confirmed'],
            'objective_id' => ['required'],
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
            'email.unique'   => 'El email ya esta registrado.',

            'username.required' => 'El nombre de usuario es obligatorio.',
            'username.unique'   => 'El nombre de usuario ya esta registrado.',

            'password.required'  => 'La contraseña es obligatoria.',
            'password.min'       => 'La contraseña debe contener al menos 8 caracteres.',
            'password.confirmed' => 'Debe confirmar la contraseña.',

            'objective_id.required' => 'Seleccione un nivel de objetivo.'
        ];
    }
}
