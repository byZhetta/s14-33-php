<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginRequest;
use App\Http\Requests\Api\RegisterRequest;
use App\Models\User;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    use ApiResponse;
    public function register(RegisterRequest $request)
    {
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'username' => $request->username,
                'password' => bcrypt($request->password),
                'objective_id' => $request->objective_id
            ]);
    
            $data = ['token' => $user->createToken('api_token')->plainTextToken];
            return $this->success(201, '¡Usuario creado exitosamente!', $data);
        } catch (Exception $e) {
            return $this->error(404, 'Error al registrar el usuario.');
        }
    }

    public function login(LoginRequest $request)
    {
        $user = User::where('email', $request->email)->firstOrFail();
        
        if (Hash::check($request->password, $user->password)) {
            $data = ['token' => $user->createToken('api_token')->plainTextToken, 'user' => $user];
            return $this->success(200, '¡Inició sesión exitosamente!', $data);
        } else {
            return $this->error(404, 'Estas credenciales no son válidas.');
        }
    }

    public function logout(Request $request)
    {
        try {
            $user = $request->user();
            $user->currentAccessToken()->delete();
            return $this->success(200, '¡Cerró sesión exitosamente!');
        } catch (Exception $e) {
            return $this->error(404, 'Error al cerrar sesión.');
        }
    }
}
