<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Preference extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'pecho',
        'brazos',
        'piernas',
        'espalda',
        'abdomen',
        'gluteos',
        'integral',
    ];

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
