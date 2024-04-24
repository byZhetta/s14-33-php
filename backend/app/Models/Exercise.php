<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Exercise extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name', 'description','image_uri', 'break', 'muscle_group'];

    public function configurations(): HasMany
    {
        return $this->hasMany(Configuration::class);
    }

    public function routines(): BelongsToMany
    {
        return $this->belongsToMany(Routine::class, 'exercises_routines')->withPivot('series', 'day', 'repetition', 'weight', 'complete');
    }
}
