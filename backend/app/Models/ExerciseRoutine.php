<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExerciseRoutine extends Model
{
    use HasFactory;

    protected $table = 'exercises_routines';

    protected $primaryKey = 'id'; // o la clave primaria que estés usando en tu tabla pivot

    public $timestamps = true; // Si no necesitas los campos created_at y updated_at en la tabla pivot

    protected $fillable = [
        'exercise_id', // Nombre de la clave foránea hacia la tabla exercises
        'routine_id',  // Nombre de la clave foránea hacia la tabla routines
        'day',
        'series',
        'repetition',
        'weight',
        'complete'
    ];

    public function exercise()
    {
        return $this->belongsTo(Exercise::class, 'exercise_id');
    }

    public function routine()
    {
        return $this->belongsTo(Routine::class, 'routine_id');
    }

}
