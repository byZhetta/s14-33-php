<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            [
                'email' => 'principiante@correo.com',
                'username' => 'principiante',
            ],
            [
                'name' => 'Aldana Caminos',
                'password' => Hash::make('password'),
                'objective_id' => 1,
            ]
        );
        User::updateOrCreate([
            'email' => 'jm@correo.com',
            'username' => 'jm@123.com',
        ],
        [
            'name' => 'Juan Ortiz',
            'password' => Hash::make('jm123'),
            'objective_id' => 2,
        ]);
    }
}
