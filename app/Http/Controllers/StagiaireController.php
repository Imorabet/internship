<?php

namespace App\Http\Controllers;

use App\Models\Inscription;
use App\Models\Stagiaire;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
    public function countNewRegistrations()
    {
        $count = Inscription::whereDate('created_at', Carbon::today())->count();
        dd($count);
        return response()->json(['count' => $count]);
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
    public function downloadEmploi()
    {
        $student = Stagiaire::where('id_users', Auth::id())->first();
        $fileName = $student->inscription->classes[0]->emplois;
        $filePath = storage_path('app/public/' . $fileName);

        // Check if the file exists
        if (!file_exists($filePath)) {
            abort(404);
        }

        // Set the response headers for file download
        $headers = [
            'Content-Type' => 'application/octet-stream',
            'Content-Disposition' => 'attachment; filename="emploi.pdf"',
        ];

        // Return the file as a download response
        return response()->download($filePath, 'emploi.pdf', $headers)->deleteFileAfterSend(true);
    }
}
