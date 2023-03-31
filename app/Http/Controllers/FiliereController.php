<?php

namespace App\Http\Controllers;

use App\Models\Filiere;
use App\Models\Niveau;
use Illuminate\Http\Request;

class FiliereController extends Controller
{
    public function getFilieres()
    {
        $filieres = Filiere::all();

        return response()->json([
            'filieres' => $filieres,
        ]);
    }
    public function getFilieresByNiveau($id)
    {
        $niveau = Niveau::find($id);
        $filieres = $niveau->filieres()->get();

        return response()->json(['filieres'
        => $filieres]);
    }
}
