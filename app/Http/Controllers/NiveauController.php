<?php

namespace App\Http\Controllers;

use App\Models\Niveau;
use Illuminate\Http\Request;

class NiveauController extends Controller
{
    public function getNiveaux()
    {
        $niveauOptions = Niveau::all();

        return response()->json([
            'niveauOptions' => $niveauOptions,
        ]);
    }
}
