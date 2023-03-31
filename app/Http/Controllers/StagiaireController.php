<?php

namespace App\Http\Controllers;

use App\Models\Stagiaire;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StagiaireController extends Controller
{
    public function index(Request $request)
    {
        $stagiaire = $request->user()->stagiaires()->first();
        $data = [
            'stagiaire' => $stagiaire,
            // other data for the dashboard
        ];
        return response()->json($data);
    }
    public function getNewInscriptions()
    {
        $stagiaires = Stagiaire::where('statut', false)->with('inscription')->get();
        return Inertia::render('Admin/ListStagiaire', [
            'stagiaires' => $stagiaires,
        ]);
    }
    public function destroy(Stagiaire $stagiaire)
    {
        $inscription = $stagiaire->inscription;
        $inscription->delete();
        $user = $stagiaire->user;
        $user->delete();

        $stagiaire->delete();
        return redirect()->back();
    }
    public function updateStatut(Request $request, $id)
    {
        $validated = $request->validate([
            'statut' => 'required|boolean',
        ]);

        $stagiaire = Stagiaire::findOrFail($id);
        $stagiaire->statut = $validated['statut'];
        $stagiaire->save();

        return redirect()->back();
    }
}
