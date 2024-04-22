<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\UpdatePasswordRequest;
use App\Http\Requests\Api\UpdateProfileRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Traits\ApiResponse;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;
use Exception;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    use ApiResponse;
    public function showProfile()
    {
        try {
            $user = DB::table('users')
            ->select('name', 'email', 'username', 'photo_uri')
            ->where('id', auth()->id())
            ->first(); 
            if($user->photo_uri) $user->photo_uri = asset($user->photo_uri);
            return $this->success(200, 'Perfil de usuario', $user);
        } catch (Exception $e) {
            return $this->error(404, 'Error al registrar el usuario.');
        }
    }

    public function updateProfile(UpdateProfileRequest $request)
    {
        try {
            $user = Auth::user();

            if ($user->photo_uri) {
                $absolutePath = public_path($user->photo_uri);
                File::delete($absolutePath);
            }
            
            if (isset($request['photo_uri']) && $request['photo_uri']) {
                // $relativePath = $this->saveImage($request['photo_uri']);
                // $request['photo_uri'] = $relativePath;

                $image = $request->file('photo_uri')->store('public/profile');
                $url = Storage::url($image);
            }
            
            DB::table('users')
            ->where('id', $user->id)
            ->update([
                'name' => $request->name,
                'email' => $request->email,
                'username' => $request->username,
                // 'photo_uri' => $request->photo_uri,
                'photo_uri' => $url,
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

    public function saveImage($image)
    {
        if(preg_match('/^data:image\/(\w+);base64,/', $image, $type)){
            $image = substr($image, strpos($image, ',')+1);
            $type = strtolower($type[1]);

            if(!in_array($type, ['jpg', 'jpeg', 'png', 'gif'])){
                throw new \Exception('Tipo de imagen inválido');
            }
            
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if($image === false){
                throw new \Exception('Conversión de imagen base64 falló');
            }

            $file = Str::random() . '.' . $type;

            $path = 'images/' . $file;
            file_put_contents($path, $image);
            
            return $path;
        }
        else{
            throw new \Exception('Uri no coincide con imagen en base 64');
        }
    }
}
