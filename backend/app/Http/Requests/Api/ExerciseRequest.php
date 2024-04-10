<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class ExerciseRequest extends FormRequest 
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'=> 'required',
            'description'=> 'required',
            'image_uri'=> 'required',
            'break'=> 'required',
            'muscle_group'=> 'required',  
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El nombre es obligatorio.',
            'description.required' => 'La descripción es obligatoria.',
            'image_uri.required' => 'Seleccionar una imagen/video es obligatorio.',
            'break.required' => 'El tiempo de descanso es obligatorio.',
            'muscle_group.required' => 'El grupo muscular es obligatorio.',
        ];
    }
}

