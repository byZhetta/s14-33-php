<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Exercise;
use App\Http\Requests\Api\ExerciseRequest;
use App\Traits\ApiResponse;
use Exception;

class ExerciseControllers extends Controller
{

    use ApiResponse;

    /**
     * @OA\Get(
     *    path="/api/exercises",
     *    tags={"Exercises"},
     *    summary="Get all exercises",
     *    description="Retrieves a list of all available exercises",
     *    security={{ "bearerAuth": {} }},
     *    @OA\Response(
     *        response=200,
     *        description="Successful operation",
     *        @OA\JsonContent(
     *          @OA\Property(property="status code", type="int", example=200),
     *          @OA\Property(property="error", type="bool", example=false),
     *          @OA\Property(property="message", type="string", example="¡Lista de ejercicios!"),
     *            @OA\Property(
     *                 type="array",
     *                 property="data",
     *                 @OA\Items(
     *                     type="object",
     *                     @OA\Property(
     *                         property="id",
     *                         type="number",
     *                         example="1"
     *                     ),
     *                     @OA\Property(
     *                         property="name",
     *                         type="string",
     *                         example="Sentadillas"
     *                     ),
     *                     @OA\Property(
     *                         property="description",
     *                         type="string",
     *                         example="Mantén la espalda recta y baja el cuerpo como si te fueras a sentar en una silla invisible."
     *                     ),
     *                     @OA\Property(
     *                         property="imagen_uri",
     *                         type="string",
     *                         example="imagen.jpg"
     *                     ),
     *                     @OA\Property(
     *                         property="break",
     *                         type="bool",
     *                         example=false
     *                     ),
     *                     @OA\Property(
     *                         property="muscle_group",
     *                         type="string",
     *                         example="Piernas"
     *                     ),
     *                     @OA\Property(
     *                         property="deleted_at",
     *                         type="string",
     *                         example=null
     *                     ),
     *                     @OA\Property(
     *                         property="created_at",
     *                         type="string",
     *                         example="2023-02-23T00:09:16.000000Z"
     *                     ),
     *                     @OA\Property(
     *                         property="updated_at",
     *                         type="string",
     *                         example="2023-02-23T12:33:45.000000Z"
     *                     ),
     *                 ),
     *            )
     *        )
     *    ),
     *    @OA\Response(
     *         response=401, 
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Unauthenticated.")
     *         )
     *     ),
     *    @OA\Response(
     *       response=404,
     *       description="Error retrieving exercises"
     *    )
     * )
     */

    public function index()
    {
        try {
            $exercises = Exercise::all();
            return $this->success(200, '¡Lista de ejercicios!', $exercises);
        } catch (Exception $e) {
            return $this->error(404, 'Error al obtener los ejercicios.');
        }
    }


    /**
     * @OA\Post(
     *    path="/api/exercises",
     *    tags={"Exercises"},
     *    summary="Create a new exercise",
     *    description="Creates a new exercise with the provided data",
     *    security={{ "bearerAuth": {} }},
     *    @OA\RequestBody(
     *        required=true,
     *        description="Exercise data to create",
     *        @OA\JsonContent(
     *            required={"name", "description", "image_uri", "break", "muscle_group"},
     *            @OA\Property(property="name", type="string", example="Sentadillas"),
     *            @OA\Property(property="description", type="string", example="Mantén la espalda recta y baja el cuerpo como si te fueras a sentar en una silla invisible."),
     *            @OA\Property(property="image_uri", type="string", example="imagen.jpg"),
     *            @OA\Property(property="break", type="bool", example=false),
     *            @OA\Property(property="muscle_group", type="string", example="Piernas")
     *        ),
     *    ),
     *    @OA\Response(
     *        response=201,
     *        description="Exercise created successfully",
     *        @OA\JsonContent(
     *            @OA\Property(property="status code", type="int", example=201),
     *            @OA\Property(property="error", type="bool", example=false),
     *            @OA\Property(property="message", type="string", example="¡Ejercicio creado exitosamente!"),
     *            @OA\Property(
     *                property="data",
     *                type="object",
     *                @OA\Property(property="id", type="number", example="1"),
     *                @OA\Property(property="name", type="string", example="Sentadillas"),
     *                @OA\Property(property="description", type="string", example="Mantén la espalda recta y baja el cuerpo como si te fueras a sentar en una silla invisible."),
     *                @OA\Property(property="imagen_uri", type="string", example="imagen.jpg"),
     *                @OA\Property(property="break", type="bool", example=false),
     *                @OA\Property(property="muscle_group", type="string", example="Piernas"),
     *                @OA\Property(property="created_at", type="string", example="2024-04-12T12:00:00.000000Z"),
     *                @OA\Property(property="updated_at", type="string", example="2024-04-12T12:00:00.000000Z")
     *            )
     *        )
     *    ),
     *    @OA\Response(
     *         response=401, 
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Unauthenticated.")
     *         )
     *     ),
     *    @OA\Response(
     *        response=422,
     *        description="Error creating exercise",
     *        @OA\JsonContent(
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
     *    )
     * )
     */

    public function store(ExerciseRequest $request)
    {
        try {
            $exercise = Exercise::create($request->all());
            $exercise->save(); 
            return $this->success(201, '¡Ejercicio creado exitosamente!', $exercise);
        } catch (Exception $e) {
            return $this->error(404, 'Error al crear el ejercicio.');
        }
    }


    /**
     * @OA\Get(
     *    path="/api/exercises/{id}",
     *    tags={"Exercises"},
     *    summary="Get a specific exercise",
     *    description="Retrieves a specific exercise by its ID",
     *    security={{ "bearerAuth": {} }},
     *    @OA\Parameter(
     *        name="id",
     *        in="path",
     *        required=true,
     *        description="ID of the exercise to retrieve",
     *        @OA\Schema(
     *            type="integer"
     *        )
     *    ),
     *    @OA\Response(
     *        response=200,
     *        description="Successful operation",
     *        @OA\JsonContent(
     *            @OA\Property(property="status code", type="int", example=200),
     *            @OA\Property(property="error", type="bool", example=false),
     *            @OA\Property(property="message", type="string", example="¡Ejercicio obtenido exitosamente!"),
     *            @OA\Property(
     *                property="data",
     *                type="object",
     *                @OA\Property(property="id", type="number", example="1"),
     *                @OA\Property(property="name", type="string", example="Sentadillas"),
     *                @OA\Property(property="description", type="string", example="Mantén la espalda recta y baja el cuerpo como si te fueras a sentar en una silla invisible."),
     *                @OA\Property(property="imagen_uri", type="string", example="imagen.jpg"),
     *                @OA\Property(property="break", type="bool", example=false),
     *                @OA\Property(property="muscle_group", type="string", example="Piernas"),
     *                @OA\Property(property="deleted_at", type="string", example=null),
     *                @OA\Property(property="created_at", type="string", example="2023-02-23T00:09:16.000000Z"),
     *                @OA\Property(property="updated_at", type="string", example="2023-02-23T12:33:45.000000Z")
     *            )
     *        )
     *    ),
     *    @OA\Response(
     *         response=401, 
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Unauthenticated.")
     *         )
     *     ),
     *    @OA\Response(
     *        response=404,
     *        description="Error retrieving the exercise",
     *        @OA\JsonContent(
     *             @OA\Property(property="status code", type="int", example=404),
     *             @OA\Property(property="error", type="bool", example=true),
     *             @OA\Property(property="message", type="string", example="Error al actualizar el ejercicio."),
     *         )
     *    )
     * )
     */

    public function show(Exercise $id)
    {
        try {
            return $this->success(200, '¡Ejercicio obtenido exitosamente!', $id);
        } catch (Exception $e) {
            return $this->error(404, 'Error al obtener el ejercicio.');          
        }
    }

    /**
     * @OA\Put(
     *    path="/api/exercises/{id}",
     *    tags={"Exercises"},
     *    summary="Update an exercise",
     *    description="Updates an exercise by its ID",
     *    security={{ "bearerAuth": {} }},
     *    @OA\Parameter(
     *        name="id",
     *        in="path",
     *        required=true,
     *        description="ID of the exercise to update",
     *        @OA\Schema(
     *            type="integer"
     *        )
     *    ),
     *    @OA\RequestBody(
     *        required=true,
     *        description="Exercise data to be updated",
     *        @OA\JsonContent(
     *            @OA\Property(property="name", type="string"),
     *            @OA\Property(property="description", type="string"),
     *            @OA\Property(property="image_uri", type="string", example="image.png"),
     *            @OA\Property(property="break", type="boolean"),
     *            @OA\Property(property="muscle_group", type="string", example="Piernas")
     *        )
     *    ),
     *    @OA\Response(
     *        response=200,
     *        description="Successful operation",
     *        @OA\JsonContent(
     *            @OA\Property(property="status code", type="int", example=200),
     *            @OA\Property(property="error", type="bool", example=false),
     *            @OA\Property(property="message", type="string", example="¡Ejercicio actualizado exitosamente!"),
     *            @OA\Property(
     *                property="data",
     *                type="object",
     *                @OA\Property(property="id", type="number", example="1"),
     *                @OA\Property(property="name", type="string", example="Sentadillas"),
     *                @OA\Property(property="description", type="string", example="Mantén la espalda recta y baja el cuerpo como si te fueras a sentar en una silla invisible."),
     *                @OA\Property(property="imagen_uri", type="string", example="imagen.jpg"),
     *                @OA\Property(property="break", type="bool", example=false),
     *                @OA\Property(property="muscle_group", type="string", example="Piernas"),
     *                @OA\Property(property="deleted_at", type="string", example=null),
     *                @OA\Property(property="created_at", type="string", example="2023-02-23T00:09:16.000000Z"),
     *                @OA\Property(property="updated_at", type="string", example="2023-02-23T12:33:45.000000Z")
     *            )
     *        )
     *    ),
     *     @OA\Response(
     *         response=401, 
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Unauthenticated.")
     *         )
     *     ),
     *    @OA\Response(
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
     *     ),
     *    @OA\Response(
     *        response=404,
     *        description="Error updating the exercise",
     *        @OA\JsonContent(
     *             @OA\Property(property="status code", type="int", example=404),
     *             @OA\Property(property="error", type="bool", example=true),
     *             @OA\Property(property="message", type="string", example="Error al actualizar el ejercicio."),
     *         )
     *    )
     * )
 */


    public function update(ExerciseRequest $request, $exercise)
    {
        try {
            $exercise = Exercise::find($exercise);
            $exercise->update($request->only('name','description','image_uri','break','muscle_group'));  
            return $this->success(200, '¡Ejercicio actualizado exitosamente!', $exercise);
        } catch (Exception $e) {
            return $this->error(404, 'Error al actualizar el ejercicio.');          
        }
    }


    /**
     * @OA\Delete(
     *    path="/api/exercises/{id}",
     *    tags={"Exercises"},
     *    summary="Delete an exercise",
     *    description="Deletes an exercise by its ID",
     *    security={{ "bearerAuth": {} }},
     *    @OA\Parameter(
     *        name="id",
     *        in="path",
     *        required=true,
     *        description="ID of the exercise to delete",
     *        @OA\Schema(
     *            type="integer"
     *        )
     *    ),
     *    @OA\Response(
     *        response=200,
     *        description="Successful operation",
     *        @OA\JsonContent(
     *            @OA\Property(property="status code", type="int", example=200),
     *            @OA\Property(property="error", type="bool", example=false),
     *            @OA\Property(property="message", type="string", example="¡Ejercicio eliminado exitosamente!"),
     *            @OA\Property(
     *                property="data",
     *                type="object",
     *                @OA\Property(property="id", type="number", example="1"),
     *                @OA\Property(property="name", type="string", example="Sentadillas"),
     *                @OA\Property(property="description", type="string", example="Mantén la espalda recta y baja el cuerpo como si te fueras a sentar en una silla invisible."),
     *                @OA\Property(property="imagen_uri", type="string", example="imagen.jpg"),
     *                @OA\Property(property="break", type="bool", example=false),
     *                @OA\Property(property="muscle_group", type="string", example="Piernas"),
     *                @OA\Property(property="deleted_at", type="string", example=null),
     *                @OA\Property(property="created_at", type="string", example="2023-02-23T00:09:16.000000Z"),
     *                @OA\Property(property="updated_at", type="string", example="2023-02-23T12:33:45.000000Z")
     *            )
     *        )
     *    ),
     *    @OA\Response(
     *         response=401, 
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Unauthenticated.")
     *         )
     *     ),
     *    @OA\Response(
     *        response=404,
     *        description="Error deleting the exercise",
     *        @OA\JsonContent(
     *             @OA\Property(property="status code", type="int", example=404),
     *             @OA\Property(property="error", type="bool", example=true),
     *             @OA\Property(property="message", type="string", example="Error al eliminar el ejercicio."),
     *         )
     *    )
     * )
     */
    public function destroy($exercise)
    {
        try {
            $exercise = Exercise::find($exercise);
            $exercise->delete();
            return $this->success(200, '¡Ejercicio eliminado exitosamente!', $exercise);
        } catch (Exception $e) {
            return $this->error(404, 'Error al elimiar el ejercicio.');          
        }
    }
}