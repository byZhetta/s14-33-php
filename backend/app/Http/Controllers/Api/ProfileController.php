<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\UpdatePasswordRequest;
use App\Http\Requests\Api\UpdateProfileRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Traits\ApiResponse;
use Exception;

class ProfileController extends Controller
{
    use ApiResponse;
    public function showProfile()
    {
        try {
            $user = DB::table('users')
            ->select('name', 'email', 'username')
            ->where('id', auth()->id())
            ->get();
            return $this->success(200, 'Perfil de usuario', $user);
        } catch (Exception $e) {
            return $this->error(404, 'Error al registrar el usuario.');
        }
    }

    public function updateProfile(UpdateProfileRequest $request)
    {
        try {
            DB::table('users')
            ->where('id', auth()->id())
            ->update([
                'name' => $request->name,
                'email' => $request->email,
                'username' => $request->username,
            ]);
            return $this->success(200, '¡Perfil actualizado exitosamente!');
        } catch (Exception $e) {
            return $this->error(404, 'Error al actualizar los datos.');
        }
    }

    public function updatePassword(UpdatePasswordRequest $request)
    {
        try {
            DB::table('users')
            ->where('id', '=', auth()->id())
            ->update([
                'password' => Hash::make($request['password']),
            ]);
            return $this->success(200, '¡Contraseña actualizada exitosamente!');
        } catch (Exception $e) {
            return $this->error(404, 'Error al actualizar la contraseña.');
        }    
    }
}
