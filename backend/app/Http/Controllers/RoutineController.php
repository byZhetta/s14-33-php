<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoutineResource;
use App\Models\Routine;
use Illuminate\Http\Request;

class RoutineController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $routine = Routine::all();
        //return response()->json($routine,200);
        return RoutineResource::collection(Routine::all());
    }


    public function store(Request $request)
    {
        $routine = Routine::create($request->all());
        return response()->json([
            'success'=>true,
            'data'=>$routine
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $routine = Routine::find($id);
        return response()->json($routine,200);
    }


    public function update(Request $request, string $id)
    {
        $routine= Routine::find($id);
        $routine->progress= $request->progress;
        $routine->user_id=$request->user_id;
        $routine->save();

        return response()->json([
            'success'=>true,
            'data'=>$routine
        ],200);


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Routine::find($id)->delete();
        return response()->json(['success'=>true],200);
    }
}
