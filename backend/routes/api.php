<?php

use App\Http\Controllers\Api\ExerciseRoutineController;
use App\Http\Controllers\Api\RoutineController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route:group(['prefix'=>'v1'],function(){});
Route::resource('/routine', RoutineController::class );
Route::get('/routine/progress/{progress}', [RoutineController::class, 'progress'] )->name('routine.progress');

Route::resource('/relation',ExerciseRoutineController::class);
Route::get('/relation/complete/{id}', [ExerciseRoutineController::class, 'complete'] );

//Route::get('/relation/index', [RoutineController::class, 'indexRelation'] )->name('routine.indexrelation');
//Route::get('/relation/index/{id}', [RoutineController::class, 'showRelation'] )->name('routine.showrelation');
//Route::post('/relation/store', [RoutineController::class, 'storeRelation'] )->name('routine.storeRelation');
//Route::get('/relation/update{id}', [RoutineController::class, 'updateRelation'] )->name('routine.updateRelation');




