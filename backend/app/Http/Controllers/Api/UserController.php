<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\ApiResponse;
use App\Http\Requests\Api\UserRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Exception;

class UserController extends Controller
{
    use ApiResponse;
    public function show()
    {
        try {
            $user  = Auth::user();
            return $this->success(200, '¡Usuario obtenido!', $user);
        } catch (Exception $e) {
            return $this->error(401, 'No autenticado');
        }
    }

    public function update(UserRequest $request)
    {
        try{
            $user = User::auth()->id();

            if (Hash::check($request->password, $user->password)) {
                
                $user->update($request->only(['name', 'email', 'username', 'objective_id']));

                if($request->filled('new_password')){
                    $user->password = bcrypt($request->new_password);
                }

                $user->save();
                return $this->success(200, '¡Usuario actualizado!', $user);
            }

            return $this->success(404, '¡Password not match!');
        } catch (Exception $e) {
            return $this->error(404, 'Error al actualizar el usuario.');
        }
    }

    public function destroy(UserRequest $request)
    {
        try {
            $user = User::auth()->id();
            if (Hash::check($request->password, $user->password)) {
                $user->forceDelete();
                return $this->success(200, '¡Usuario eliminado!', $user);
            }
        } catch (Exception $e) {
            return $this->error(401, 'No fue posible eliminar el usuario');
        }
    }
}
