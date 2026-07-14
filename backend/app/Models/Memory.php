<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Memory extends Model
{
    protected $fillable = [
        'name',
        'email',
        'message',
        'photo_path',
        'status',
    ];

    /**
     * Include a ready-to-use public photo URL whenever this model is serialized.
     */
    protected $appends = ['photo_url'];

    public function getPhotoUrlAttribute(): ?string
    {
        return $this->photo_path ? asset('storage/' . $this->photo_path) : null;
    }
}