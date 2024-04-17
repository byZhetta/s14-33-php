<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ExerciseControllers;
use App\Http\Controllers\Api\UserController;


Route::post('register', [AuthController::class, 'register'])->name('api.register');
Route::post('login', [AuthController::class, 'login'])->name('api.login');
Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout'])->name('api.logout');

    //Rutas de usuario
    Route::get('user/dashboard/', [UserController::class, 'show'])->name('user.show');
    Route::put('user/dashboard/', [UserController::class, 'update'])->name('user.update');
    Route::delete('user/dashboard/', [UserController::class, 'destroy'])->name('user.destroy');
    
    // Rutas de exercises
    Route::get('exercises', [ExerciseControllers::class, 'index'])->name('exercise.index');
    Route::post('exercises', [ExerciseControllers::class, 'store'])->name('exercise.store');
    Route::get('exercises/{id}', [ExerciseControllers::class, 'show'])->name('exercise.show');
    Route::put('exercises/{exercise}', [ExerciseControllers::class, 'update'])->name('exercise.update');
    Route::delete('exercises/{exercise}', [ExerciseControllers::class, 'destroy'])->name('exercise.destroy');
});
