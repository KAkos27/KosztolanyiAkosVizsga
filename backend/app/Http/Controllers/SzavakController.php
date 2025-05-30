<?php

namespace App\Http\Controllers;

use App\Models\Szavak;
use Illuminate\Http\Request;

class SzavakController extends Controller
{
    public function index()
    {
        return Szavak::all();
    }

    public function szavakTema($tema)
    {
        return Szavak::where('temas_id', $tema)->get();
    }
}
