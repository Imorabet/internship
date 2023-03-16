<?php

namespace App\Http\Controllers;

use App\Models\Filiere;
use Illuminate\Http\Request;

class FiliereController extends Controller
{
    public function getFilieres()
    {
        $filiereOptions = Filiere::all();

        return response()->json([
            'filiereOptions' => $filiereOptions,
        ]);
    }
}
