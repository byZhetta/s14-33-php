<?php 

namespace App\Services;

use App\Models\Exercise;
use App\Models\Preference;

class PreferenceService
{
    public function getPreferences()
    {
        $preferencias = Preference::
        where('user_id', auth()->id())
        ->get();

        foreach ($preferencias as $pecho) {
            if ($pecho['pecho'] == 'true') {
                $exer_pecho = Exercise::
                where('muscle_group', '=', 'pecho')
                ->get();
            } else {
                $exer_pecho = "Preferencia muscular no seleccionada.";
            }
        }

        foreach ($preferencias as $brazos) {
            if ($brazos['brazos'] == 'true') {
                $exer_brazos = Exercise::
                where('muscle_group', '=', 'brazos')
                ->get();
            } else {
                $exer_brazos = "Preferencia muscular no seleccionada.";
            }
        }

        foreach ($preferencias as $piernas) {
            if ($piernas['piernas'] == 'true') {
                $exer_piernas = Exercise::
                where('muscle_group', '=', 'piernas')
                ->get();
            } else {
                $exer_piernas = "Preferencia muscular no seleccionada.";
            }
        }

        foreach ($preferencias as $espalda) {
            if ($espalda['espalda'] == 'true') {
                $exer_espalda = Exercise::
                where('muscle_group', '=', 'espalda')
                ->get();
            } else {
                $exer_espalda = "Preferencia muscular no seleccionada.";
            }
        }

        foreach ($preferencias as $abdomen) {
            if ($abdomen['abdomen'] == 'true') {
                $exer_abdomen = Exercise::
                where('muscle_group', '=', 'abdomen')
                ->get();
            } else {
                $exer_abdomen = "Preferencia muscular no seleccionada.";
            }
        }

        foreach ($preferencias as $gluteos) {
            if ($gluteos['gluteos'] == 'true') {
                $exer_gluteos = Exercise::
                where('muscle_group', '=', 'gluteos')
                ->get();
            } else {
                $exer_gluteos = "Preferencia muscular no seleccionada.";
            }
        }

        foreach ($preferencias as $integral) {
            if ($integral['integral'] == 'true') {
                $exer_integral = Exercise::
                where('muscle_group', '=', 'integral')
                ->get();
            } else {
                $exer_integral = "Preferencia muscular no seleccionada.";
            }
        }

        $data = ['Pecho' => $exer_pecho, 
        'Brazos' => $exer_brazos, 
        'Piernas' => $exer_piernas, 
        'Espalda' =>  $exer_espalda, 
        'Abdomen' => $exer_abdomen,
        'Glúteos' => $exer_gluteos, 
        'Integral' => $exer_integral];
        return $data;        
    }
}
