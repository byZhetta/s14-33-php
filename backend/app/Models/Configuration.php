<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Configuration extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['notification', 'exercise_id'];

    public function exercise(): BelongsTo
    {
        return $this->belongsTo(Exercise::class);
    }
}
