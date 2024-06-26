<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ExerciseControllers;
use App\Http\Controllers\Api\ExerciseRoutineController;
use App\Http\Controllers\Api\ObjectiveController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\RoutineController;
use App\Http\Controllers\Api\UserController;

Route::post('register', [AuthController::class, 'register'])->name('api.register');
Route::post('login', [AuthController::class, 'login'])->name('api.login');
Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout'])->name('api.logout');
    Route::get('profile', [ProfileController::class, 'showProfile'])->name('profile.show');
    Route::put('profile/update', [ProfileController::class, 'updateProfile'])->name('profile.update');
    Route::put('profile/update-password', [ProfileController::class, 'updatePassword'])->name('password.update');

    //Rutas de users
    Route::get('user/dashboard/', [UserController::class, 'show'])->name('user.show');
    Route::put('user/dashboard/', [UserController::class, 'update'])->name('user.update');
    Route::delete('user/dashboard/', [UserController::class, 'destroy'])->name('user.destroy');

    // Rutas de exercises
    Route::get('exercises', [ExerciseControllers::class, 'index'])->name('exercise.index');
    Route::get('exercises/preferences', [ExerciseControllers::class, 'showbyuser'])->name('exercise.preferences');
    Route::post('exercises', [ExerciseControllers::class, 'store'])->name('exercise.store');
    Route::get('exercises/{id}', [ExerciseControllers::class, 'show'])->name('exercise.show');
    Route::put('exercises/{exercise}', [ExerciseControllers::class, 'update'])->name('exercise.update');
    Route::delete('exercises/{exercise}', [ExerciseControllers::class, 'destroy'])->name('exercise.destroy');

    // Rutas de objectives
    Route::get('objectives', [ObjectiveController::class, 'show'])->name('objective.show');
    Route::post('objectives', [ObjectiveController::class, 'createOrupdate'])->name('objective.createorupdate');
  
    // Rutas de routines
    Route::apiResource('routine', RoutineController::class)->names('routine');
    Route::get('routine/progress/{progress}', [RoutineController::class, 'progress'])->name('routine.progress');

    Route::apiResource('relation', ExerciseRoutineController::class)->names('relation');
    Route::get('relation/complete/{id}', [ExerciseRoutineController::class, 'complete'])->name('relation.complete');
});
