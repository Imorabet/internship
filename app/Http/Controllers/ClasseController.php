<?php

namespace App\Http\Controllers;

use App\Models\Administrateur;
use App\Models\Classe;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClasseController extends Controller
{
    public function getClasses()
    {
        $classes = Classe::all();
        return Inertia::render('Admin/ListClasse', [
            'classes' => $classes,
        ]);
    }
    public function add(Request $request){
        $request->validate([
            'nom' => 'required|string|max:255',
        ]);
        $classe = Classe::create([
            'nom' => $request->nom,
            'id_filieres' => $request->filiere,
            'id_niveaux' => $request->niveau
        ]);
        $classe->save();
        return redirect('/classes');
    }
    public function destroy(Classe $classe)
    {
        $classe->delete();
        return redirect()->back();
    }
    public function getFilieresClasses($niveauId, $filiereId)
    {
        $classes = Classe::where('id_niveaux', $niveauId)
            ->where('id_filieres', $filiereId)
            ->get();

        return response()->json([
            'classes' => $classes,
        ]);
    }
}
