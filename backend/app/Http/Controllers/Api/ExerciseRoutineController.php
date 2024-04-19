<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ExerciseRoutine;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Exception;

class ExerciseRoutineController extends Controller
{
    use ApiResponse;
    public function index()
    {
        try {
            $relation= ExerciseRoutine::all();
            return $this->success(200, 'Rutina de ejercicios', $relation);
        } catch (Exception $e) {
            return $this->error(500, 'Error al mostrar la rutina de ejercicios.');
        }
    }

    public function store(Request $request)
    {
        try {
            $relation = ExerciseRoutine::create($request->all());
            return $this->success(201, 'Rutina de ejercicios', $relation);
        } catch (Exception $e) {
            return $this->error(500, 'Error al crear la rutina de ejercicios.');
        }
    }

    public function show(string $id)
    {
        try {
            $relation = ExerciseRoutine::find($id);
            return $this->success(200, 'Rutina de ejercicios', $relation);
        } catch (Exception $e) {
            return $this->error(500, 'Error al mostrar la rutina de ejercicios.');
        }
    }

    public function update(Request $request, string $id)
    {
        try {
            $relation= ExerciseRoutine::find($id);
            $relation->exercise_id= $request->exercise_id;
            $relation->routine_id=$request->routine_id;
            $relation->day= $request->day;
            $relation->series= $request->series;
            $relation->repetition= $request->repetition;
            $relation->weight= $request->weight;
            $relation->complete= $request->complete;
            $relation->save();
    
            return $this->success(200, 'Rutina de ejercicios', $relation);
        } catch (Exception $e) {
            return $this->error(500, 'Error al actualizar la rutina de ejercicios.');
        }
    }

    public function destroy(string $id)
    {
        try {
            ExerciseRoutine::find($id)->delete();
            return $this->success(200, 'Rutina de ejercicios eliminada');
        } catch (Exception $e) {
            return $this->error(500, 'Error al eliminar la rutina de ejercicios.');
        }
    }

    public function complete(string $id){
        try {
            $relation =ExerciseRoutine::find($id);
            if($relation->complete){
                $relation->complete=false;
            }else{
                $relation->complete=true;
            }
            $relation->save();    

            return $this->success(200, 'Rutina de ejercicios', $relation);
        } catch (Exception $e) {
            return $this->error(500, 'Error al completar el ejercicio.');
        }
    }
}
