<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest; ///FormRequest

class ExercisePostRequest extends FormRequest {

    public function authorize(){
        return true;
    }
    public function rules(){
        return [
            'name'=> 'required',
            'description'=> 'required',
            'image_uri'=> 'required',
            'break'=> 'required',
            'muscle_group'=> 'required',
            
        ];
    }
}

