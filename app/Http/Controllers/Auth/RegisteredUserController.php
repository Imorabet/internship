<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Inscription;
use App\Models\Stagiaire;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Dotenv\Exception\ValidationException;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        DB::beginTransaction();
        try {
            $user = User::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $inscription = Inscription::create([
                'id_niveaux' => $request->niveau,
                'id_filieres'=>$request->filiere,
                'date_inscription' => now(),
                'annee_scolaire' => now()->format('Y'),
            ]);
            $stagiaire = Stagiaire::create([
                'nom' => $request->nom,
                'prenom' => $request->prenom,
                'date_naissance' => $request->date,
                'id_users' => $user->id,
                'id_inscriptions' => $inscription->id,
            ]);

            $stagiaire->save();



            event(new Registered($user));

            DB::commit();
            return redirect('/login');
        } catch (ValidationException $e) {
            DB::rollback();
            echo "meskina";
            return redirect()->back()->withErrors($e)->withInput();
        }
    }
}
