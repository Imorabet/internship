<?php

namespace App\Http\Controllers;

use App\Models\Classe;
use App\Models\Module;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    public function getModulesAndClasses($niveauId, $filiereId)
    {
        $modules = Module::where('id_niveaux', $niveauId)
            ->where('id_filieres', $filiereId)
            ->get();

        $classes = Classe::where('id_niveaux', $niveauId)
            ->where('id_filieres', $filiereId)
            ->get();

        return response()->json([
            'modules' => $modules,
            'classes' => $classes,
        ]);
    }
}
