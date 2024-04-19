<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RoutineResource;
use App\Models\Routine;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Http\Request;

class RoutineController extends Controller
{
    use ApiResponse;
    public function index()
    {
        try {
            // $routine = Routine::all();
            return RoutineResource::collection(Routine::all());
        } catch (Exception $e) {
            return $this->error(500, 'Error al mostrar la rutina.');
        }
    }

    public function store(Request $request)
    {
        try {
            $routine = Routine::create($request->all());
            return $this->success(201, 'Rutina de ejercicios', $routine);
        } catch (Exception $e) {
            return $this->error(500, 'Error al crear la rutina.');
        }
    }

    public function show(string $id)
    {
        try {
            $routine = Routine::find($id);
            return $this->success(200, 'Rutina de ejercicios', $routine);
        } catch (Exception $e) {
            return $this->error(500, 'Error al mostrar la rutina.');
        }
    }

    public function update(Request $request, string $id)
    {
        try {
            $routine= Routine::find($id);
            $routine->progress= $request->progress;
            $routine->user_id=$request->user_id;
            $routine->save();
    
            return $this->success(200, 'Rutina de ejercicios', $routine);
        } catch (Exception $e) {
            return $this->error(500, 'Error al actualizar la rutina.');
        }
    }

    public function destroy(string $id)
    {
        try {
            Routine::find($id)->delete();
            return $this->success(200, 'Rutina eliminada exitosamente');
        } catch (Exception $e) {
            return $this->error(500, 'Error al eliminar la rutina.');
        }
    }

    public function progress(string $id){
        try {
            $routine =Routine::find($id);
            if($routine->progress){
                $routine->progress=false;
            }else{
                $routine->progress=true;
            }
            $routine->save();    

            return $this->success(200, 'Rutina de ejercicios', $routine);
        } catch (Exception $e) {
            return $this->error(500, 'Error al mostrar el progreso de la rutina.');
        }
    }
}
