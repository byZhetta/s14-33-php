<?php

namespace App\Http\Controllers;

use App\Models\ExerciseRoutine;
use Illuminate\Http\Request;

class ExerciseRoutineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $relation= ExerciseRoutine::all();
        return response()->json($relation,200);

    }


    public function store(Request $request)
    {
        $relation = ExerciseRoutine::create($request->all());
        return response()->json([
            'success'=>true,
            'data'=>$relation
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $relation = ExerciseRoutine::find($id);
        return response()->json($relation,200);
    }


    public function update(Request $request, string $id)
    {
        $relation= ExerciseRoutine::find($id);
        $relation->exercise_id= $request->exercise_id;
        $relation->routine_id=$request->routine_id;
        $relation->day= $request->day;
        $relation->series= $request->series;
        $relation->repetition= $request->repetition;
        $relation->weight= $request->weight;
        $relation->complete= $request->complete;
        $relation->save();

        return response()->json([
            'success'=>true,
            'data'=>$relation
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        ExerciseRoutine::find($id)->delete();
        return response()->json(['success'=>true],200);
    }


    public function complete(string $id){
        $relation =ExerciseRoutine::find($id);
        if($relation->complete){
            $relation->complete=false;
        }else{
            $relation->complete=true;
        }

        $relation->save();

        return response()->json([
            'success'=>true,
            'data'=>$relation
        ],200);
    }
}
