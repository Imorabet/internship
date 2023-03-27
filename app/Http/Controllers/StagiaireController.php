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
    // Delete the sta$stagiaire's inscription first
    $inscription = $stagiaire->inscription;
    $inscription->delete();

    // Delete the sta$stagiaire
    $user = $stagiaire->user;
    $user->delete();
    // Delete the student
  
    $stagiaire->delete();

    // Redirect back to the page where the delete button was clicked
    return redirect('/stagiaires');
}
}   
