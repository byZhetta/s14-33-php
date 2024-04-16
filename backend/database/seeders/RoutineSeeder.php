<?php

namespace Database\Seeders;

use App\Models\Routine;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoutineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Routine::updateOrCreate([
            'progress'=>false,
            'user_id'=>'3'
        ]);
        Routine::updateOrCreate([
            'progress'=>false,
            'user_id'=>'4'
        ]);

        DB::table('exercises_routines')->insert([
            'exercise_id'=>1,
            'routine_id'=>1,
            'day'=>0,
            'series'=>3,
            'repetition'=>12,
            'weight'=>10,
            'complete'=>false
        ]);
        DB::table('exercises_routines')->insert([
            'exercise_id'=>7,
            'routine_id'=>2,
            'day'=>1,
            'series'=>3,
            'repetition'=>12,
            'weight'=>10,
            'complete'=>false
        ]);
        DB::table('exercises_routines')->insert([
            'exercise_id'=>11,
            'routine_id'=>1,
            'day'=>0,
            'series'=>3,
            'repetition'=>12,
            'weight'=>10,
            'complete'=>true
        ]);

    }
}
