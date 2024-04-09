<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;


<<<<<<< Updated upstream
Route::post('register', [AuthController::class, 'register'])->name('api.register');

Route::post('login', [AuthController::class, 'login'])->name('api.login');
Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout'])->name('api.logout');

    //rutas de exercises         //en el Postman http://127.0.0.1:8000/api/exercises
Route::get('/exercises', 'App\Http\Controllers\ExerciseControllers@index');
Route::post('/exercises', 'App\Http\Controllers\ExerciseControllers@store');
Route::get('/exercises/{id}', 'App\Http\Controllers\ExerciseControllers@show');
Route::put('/exercises/{exercise}', 'App\Http\Controllers\ExerciseControllers@update');
Route::delete('/exercises/{exercise}', 'App\Http\Controllers\ExerciseControllers@destroy');
});
=======


>>>>>>> Stashed changes
