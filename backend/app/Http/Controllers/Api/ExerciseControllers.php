<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Exercise;
use App\Http\Requests\Api\ExerciseRequest;
use App\Traits\ApiResponse;
use Exception;

class ExerciseControllers extends Controller
{
    use ApiResponse;
    public function index()
    {
        try {
            $exercises = Exercise::all();
            return $this->success(200, '¡Lista de ejercicios!', $exercises);
        } catch (Exception $e) {
            return $this->error(404, 'Error al obtener los ejercicios.');
        }
    }

    public function store(ExerciseRequest $request)
    {
        try {
            $exercise = Exercise::create($request->all());
            $exercise->save(); 
            return $this->success(201, '¡Ejercicio creado exitosamente!', $exercise);
        } catch (Exception $e) {
            return $this->error(404, 'Error al crear el ejercicio.');
        }
    }

    public function show(Exercise $id)
    {
        try {
            return $this->success(200, '¡Ejercicio obtenido exitosamente!', $id);
        } catch (Exception $e) {
            return $this->error(404, 'Error al obtener el ejercicio.');          
        }
    }

    public function update(ExerciseRequest $request, $exercise)
    {
        try {
            $exercise = Exercise::find($exercise);
            $exercise->update($request->only('name','description','image_uri','break','muscle_group'));  
            return $this->success(200, '¡Ejercicio actualizado exitosamente!', $exercise);
        } catch (Exception $e) {
            return $this->error(404, 'Error al actualizar el ejercicio.');          
        }
    }

    public function destroy($exercise)
    {
        try {
            $exercise = Exercise::find($exercise);
            $exercise->delete();
            return $this->success(200, '¡Ejercicio eliminado exitosamente!', $exercise);
        } catch (Exception $e) {
            return $this->error(404, 'Error al actualizar el ejercicio.');          
        }
    }
}
