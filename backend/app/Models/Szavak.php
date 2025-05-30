<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Szavak extends Model
{
    protected $fillable = [
        'angol',
        'magyar',
        'temas_id',
    ];

    public function tema()
    {
        $this->belongsTo(Tema::class, 'temas_id');
    }
}
