<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class ObjectiveRequest extends FormRequest
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
            'pecho' => 'required',
            'brazos' => 'required',
            'piernas' => 'required',
            'espalda' => 'required',
            'abdomen' => 'required',
            'gluteos' => 'required',
            'integral' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'pecho.required' => 'Ingrese el objetivo muscular pecho.',
            'brazos.required' => 'Ingrese el objetivo muscular brazos.',
            'piernas.required' => 'Ingrese el objetivo muscular piernas.',
            'espalda.required' => 'Ingrese el objetivo muscular espalda.',
            'abdomen.required' => 'Ingrese el objetivo muscular abdomen.',
            'gluteos.required' => 'Ingrese el objetivo muscular gluteos.',
            'integral.required' => 'Ingrese el objetivo muscular integral.',
        ];
    }
}
