<?php

namespace Database\Seeders;

use App\Models\Exercise;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExerciseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $csv = fopen(database_path('seeders/CSVs/Exercises.csv'), 'r');
        $length = 0;
        $delimiter = ';';

        while (($value = fgetcsv($csv, $length, $delimiter)) !== false) {
            Exercise::updateOrCreate(
                [
                    'name' => $value[0],
                    'description' => $value[1],
                    'image_uri' => $value[2],
                    'break' => null,
                    'muscle_group' => $value[4],
                ]
            );
        }
    }
}
