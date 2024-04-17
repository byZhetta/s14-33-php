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

/**
* @OA\Info(
*             title="API EntrenaConmiGO", 
*             version="1.0",
*             description="List ENDPOINTS API EntrenaConmiGO"
* )
* @OA\SecurityScheme(
*     type="http",
*     scheme="bearer",
*     securityScheme="bearerAuth"
* )
*
* @OA\Server(url="http://127.0.0.1:8000")
* @OA\Server(url="http://entrenaconmigo-api.vercel/api")
*/

class AuthController extends Controller
{
    use ApiResponse;

    /**
     * @OA\Post(
     *     path="/api/register",
     *     tags={"Auth"},
     *     summary="Register User",
     *     description="Registers a new user and generates an API token",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"name", "email", "username", "password", "password_confirmation"},
     *             @OA\Property(property="name", type="string", example="John Doe"),
     *             @OA\Property(property="email", type="string", format="email", example="user@example.com"),
     *             @OA\Property(property="username", type="string", example="johndoe"),
     *             @OA\Property(property="password", type="string", format="password", example="secret123"),
     *             @OA\Property(property="password_confirmation", type="string", format="password_confirmation", example="secret123"),
     *             @OA\Property(property="objective_id", type="integer", example=1) 
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="User created successfully",
     *         @OA\JsonContent(
     *              @OA\Property(property="status code", type="int", example=201),
     *              @OA\Property(property="error", type="bool", example=false),
     *             @OA\Property(property="message", type="string", example="¡Usuario creado exitosamente!"),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="token", type="string", example="your_api_token")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Unprocessable Entity",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="The given data was invalid."),
     *             @OA\Property(
     *                 property="errors",
     *                 type="object",
     *                 @OA\Property(
     *                     property="name",
     *                     type="array",
     *                     @OA\Items(type="string")
     *                 )
     *             )
     *         )
     *     )
     * )
     */

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


    /**
     * @OA\Post(
     *     path="/api/login",
     *     tags={"Auth"},
     *     summary="Login User",
     *     description="Logs in a user and generates an API token",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"email", "password"},
     *             @OA\Property(property="email", type="string", format="email", example="user@example.com"),
     *             @OA\Property(property="password", type="string", format="password", example="secret123")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Login successful",
     *         @OA\JsonContent(
     *             @OA\Property(property="status code", type="int", example=200),
     *             @OA\Property(property="error", type="bool", example=false),
     *             @OA\Property(property="message", type="string", example="¡Inició sesión exitosamente!"),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="token", type="string", example="your_api_token"),
     *                 @OA\Property(
     *                     property="user",
     *                     type="object",
     *                      @OA\Property(property="id", type="int", example=1),
     *                      @OA\Property(property="name", type="string", example="John Doe"),
     *                      @OA\Property(property="email", type="string", format="email", example="user@example.com"),
     *                      @OA\Property(property="username", type="string", example="johndoe"),
     *                      @OA\Property(property="email_verified_at", type="string", example=null),
     *                      @OA\Property(property="objective_id", type="int", example=1),
     *                      @OA\Property(property="deleted_at", type="string", example=null),
     *                      @OA\Property(property="created_at", type="string", example="date-created"),
     *                      @OA\Property(property="uupdated_at", type="string", example="date-updated"),
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Invalid credentials",
     *         @OA\JsonContent(
     *             @OA\Property(property="status code", type="int", example=404),
     *             @OA\Property(property="error", type="bool", example=true),
     *             @OA\Property(property="message", type="string", example="Estas credenciales no son válidas."),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="token", type="string", example="your_api_token")
     *             )
     *         )
     *     )
     * )
     */

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

    /**
     * @OA\Post(
     *     path="/api/logout",
     *     tags={"Auth"},
     *     summary="Logout User",
     *     description="Logs out the currently authenticated user by revoking their access token",
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Logout successful",
     *         @OA\JsonContent(
     *             @OA\Property(property="status code", type="int", example=200),
     *             @OA\Property(property="error", type="bool", example=false),
     *             @OA\Property(property="message", type="string", example="¡Cerró sesión exitosamente!")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401, 
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Unauthenticated.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Error",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Error al cerrar sesión.")
     *         )
     *     )
     * )
     */

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