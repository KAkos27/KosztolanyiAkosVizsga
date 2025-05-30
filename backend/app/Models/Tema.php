<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tema extends Model
{
    protected $fillable = [
        'temanev'
    ];

    public function szavak()
    {
        $this->hasMany(Szavak::class, 'temas_id');
    }
}
