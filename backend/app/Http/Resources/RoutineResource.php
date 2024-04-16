<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RoutineResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'progress'=>$this->progress,
            'user_id'=>$this->user_id,
            'user'=>$this->user,
            'exercises'=>$this->exercises,

        ];
    }
}
