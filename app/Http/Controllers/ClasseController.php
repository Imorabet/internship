<?php

namespace App\Http\Controllers;

use App\Models\Administrateur;
use App\Models\Classe;
use App\Models\Inscription;
use App\Models\Stagiaire;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClasseController extends Controller
{
    public function getClasses()
    {
        $classes = Classe::all();
        $stagiaires = Stagiaire::where('statut', true)->with('inscription')->get();
        return Inertia::render('Admin/ListClasse', [
            'classes' => $classes,
            'eleves' => $stagiaires
        ]);
    }
    public function add(Request $request)
    {
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
    public function addClassToStudent(Request $request, $inscriptionId)
    {
        $classeId = $request->input('id_classe');
        $inscription = Inscription::findOrFail($inscriptionId);
        $classe = Classe::findOrFail($classeId);
        $inscription->classes()->attach($classe);

        return response()->json(['success' => true]);
    }
    public function updateEmplois(Request $request, $id) {
        $class = Classe::findOrFail($id);

        // Handle the uploaded file
        if ($request->hasFile('timetable')) {
            $file = $request->file('timetable');
            $filename = $file->getClientOriginalName();
            $file->move(public_path('uploads/emplois'), $filename);

            // Update the class with the file path
            $class->emplois = $filename;
            $class->save();
        }

        // Redirect back to the class list
        return redirect()->route('/classes');
    }
}
