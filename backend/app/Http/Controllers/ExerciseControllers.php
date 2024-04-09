<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;//add 7-04
use Illuminate\Http\Response; 
use App\Models\Exercise;
use App\Http\Requests\ExercisePostRequest;


/**
* Class ExerciseController
* @package App\Http\Controllers
*/
class ExerciseControllers extends Controller
{
   /**
    * Display a listing of the resource.
    */
   public function index()
   {
       $exercises = Exercise::all();
        return response()->json($exercises);

   }

   /**
    * new the exercise
    */
   public function store(ExercisePostRequest $request)
   {
    $exercise=Exercise::create($request->all());
    $exercise->save(); //add 4:30pm

    return response()->json(
        ['message'=>"Exercise created successfully.",
        'exercise'=>$exercise
    ],Response::HTTP_CREATED);
    }

   

   /**
    * VER POR ID.
    */
   public function show(Exercise $id)
   {
     return response()->json($id);
    
   }

   /**
    * Update the exercise
    */
   public function update(ExercisePostRequest $request, $exercise)
   {    $exercise=Exercise::find($exercise);
        $exercise->update($request->only('name','description','image_uri','break','muscle_group'));
        return response()->json([
            'message'=>"Exercise updated successfully.",
        'exercise'=>$exercise
        ],Response::HTTP_CREATED);
   
       
   }


   public function destroy($exercise)
   {
      
      $exercise=Exercise::find($exercise);
        $exercise->delete();
        return response()->json([
            'message'=>"Exercise deleted successfully."
      
        ],Response::HTTP_OK);

   }
}


