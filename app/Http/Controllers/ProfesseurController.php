<?php

namespace App\Http\Controllers;

use App\Models\Professeur;
use App\Models\User;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class ProfesseurController extends Controller
{
    public function index(Request $request)
    {
        $prof = $request->user()->professeurs()->first();
        $data = [
            'prof' => $prof,
            // other data for the dashboard
        ];
        return response()->json($data);
    }
    public function getFormateurs()
    {
        $formateurs = Professeur::all();
        return Inertia::render('Admin/ListFormateur', [
            'formateurs' => $formateurs,
        ]);
    }
    public function destroy(Professeur $formateur)
    {
        $user = $formateur->user;
        $user->delete();

        $formateur->delete();
        return redirect()->back();
    }
    public function add(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'date' => 'required|date',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => 'required|string|min:8|confirmed',
        ]);
        DB::beginTransaction();
        try {
            $user = User::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            $prof = Professeur::create([
                'nom' => $request->nom,
                'prenom' => $request->prenom,
                'date_naissance' => $request->date,
                'id_users' => $user->id,
            ]);
            $prof->save();
            DB::commit();
            return redirect('/formateurs');
        } catch (ValidationException $e) {
            DB::rollback();
            echo "meskina";
            return redirect()->back()->withErrors($e)->withInput();
        }
    }
}
