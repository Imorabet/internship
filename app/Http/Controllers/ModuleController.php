<?php

namespace App\Http\Controllers;

use App\Models\Classe;
use App\Models\Module;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
    public function getModules()
    {
        $modules = Module::all();
        return Inertia::render('Admin/ListModule', [
            'modules' => $modules,
        ]);
    }
    public function add(Request $request){
        $request->validate([
            'nom' => 'required|string|max:255',
        ]);
        $module = Module::create([
            'nom' => $request->nom,
            'id_filieres' => $request->filiere,
            'id_niveaux' => $request->niveau
        ]);
        $module->save();
        return redirect('/modules');
    }
    public function destroy(Module $module)
    {
        $module->delete();
        return redirect()->back();
    }
}
