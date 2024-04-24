<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ObjectiveRequest;
use App\Models\Preference;
use App\Models\User;
use App\Traits\ApiResponse;
use Exception;

class ObjectiveController extends Controller
{
    use ApiResponse;
    public function createOrupdate(ObjectiveRequest $request)
    {
        try {
            $search = Preference::where('user_id', auth()->id())
            ->first();

            if ($search) {
                $intensity = User::where('id', auth()->id());
                $intensity->update($request->only('objective_id'));
    
                $preferences = Preference::where('user_id', auth()->id());
                $preferences->update($request->only('pecho', 'brazos', 'piernas',
                'espalda', 'abdomen', 'gluteos', 'integral'));
                return $this->success(200, '¡Objetivos actualizados exitosamente!');
            } else {
                $preferences = Preference::create([
                    'user_id' => auth()->id(),
                    'pecho' => $request->pecho,
                    'brazos' => $request->brazos,
                    'piernas' => $request->piernas,
                    'espalda' => $request->espalda,
                    'abdomen' => $request->abdomen,
                    'gluteos' => $request->gluteos,
                    'integral' => $request->integral,
                ]);
                return $this->success(201, '¡Objetivos guardados exitosamente!', $preferences);
            } 
        } catch (Exception $e) {
            return $this->error(500, 'Error al guardar los objetivos.');
        }
    }

    public function show()
    {
        try {
            $intensity = User::
            join('objectives', 'users.objective_id', '=', 'objectives.id')
            ->select('objectives.level')
            ->where('users.id', auth()->id())
            ->get();
            
            $preferences = Preference::select('pecho', 'brazos', 'piernas',
            'espalda', 'abdomen', 'gluteos', 'integral')
            ->where('user_id', auth()->id())
            ->get();
            $data = ['Intensidad' => $intensity, 'Preferencias' => $preferences];
            return $this->success(200, 'Objetivos', $data);
        } catch (Exception $e) {
            return $this->error(404, 'Error al mostrar los objetivos.');
        }
    }
}
