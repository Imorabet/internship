<?php

namespace App\Http\Controllers;

use App\Models\Filiere;
use App\Models\Niveau;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NiveauController extends Controller
{
    public function getNiveaux()
    {
        $niveauOptions = Niveau::all();

        return response()->json([
            'niveauOptions' => $niveauOptions,
        ]);
    }
    public function getNiveau()
{
    $niveaux = Niveau::with('filieres')->get();

    return Inertia::render('Admin/ListNiveaux', [
        'niveaux' => $niveaux,
    ]);
}

    public function add(Request $request){
        $request->validate([
            'niveau' => 'required|string|max:255',
            'filiere'=> 'required|string|max:255',
            
        ]);
        $niveau = Niveau::create([
            'nom' => $request->niveau
        ]);
        $filiere = Filiere::create([
            'nom' => $request->filiere
        ]);
        $niveau->filieres()->attach($filiere);

        return redirect('/niveau');
    
    }
    public function destroy(Niveau $niveau)
    {
        $niveau->filieres()->detach();

        // delete the niveau
        $niveau->delete();
    
        return redirect()->back();
    }

}
