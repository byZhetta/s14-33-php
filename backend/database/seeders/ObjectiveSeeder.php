<?php

namespace Database\Seeders;

use App\Models\Objective;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ObjectiveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Objective::updateOrCreate(
            [
                'id' => '1',
                'level' => 'Principiante',
            ]
        );
        Objective::updateOrCreate(
            [
                'id' => '2',
                'level' => 'Intermedio',
            ]
        );
        Objective::updateOrCreate(
            [
                'id' => '3',
                'level' => 'Avanzado',
            ]
        );
    }
}
