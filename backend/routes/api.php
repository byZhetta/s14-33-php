<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ExerciseControllers;
use App\Http\Controllers\Api\ObjectiveController;
use App\Http\Controllers\Api\ProfileController;
use Illuminate\Http\Request;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

Route::post('register', [AuthController::class, 'register'])->name('api.register');
Route::post('login', [AuthController::class, 'login'])->name('api.login');
Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout'])->name('api.logout');
    Route::get('profile', [ProfileController::class, 'showProfile'])->name('profile.show');
    Route::put('profile/update', [ProfileController::class, 'updateProfile'])->name('profile.update');
    Route::put('profile/update-password', [ProfileController::class, 'updatePassword'])->name('password.update');

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
});

Route::get('/run-composer-command', function (Request $request) {
    // Ejecuta el comando de Composer que desees
    $process = new Process(['composer', 'composer require "darkaonline/l5-swagger"']);
    $process->run();

    // Verifica si ocurrió algún error al ejecutar el comando
    if (!$process->isSuccessful()) {
        throw new ProcessFailedException($process);
    }

    // Retorna una respuesta
    return 'Comando de Composer ejecutado correctamente';
});