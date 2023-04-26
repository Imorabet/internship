<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Administrateur;
use App\Models\Professeur;
use App\Models\Stagiaire;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();
        $user = $request->user();

        $Administrateurinfo = new Administrateur();
        $Profinfo = new Professeur();
        $stginfo = new Stagiaire();


        if ($user->professeurs->count() > 0) {
            $info=$Profinfo->profinfo();
            $request->session()->put('prof', $info);
            return Redirect::route('dashboard.professeur');
        } elseif ($user->stagiaires->count() > 0) {
            $info=$stginfo->stagiaireInfo();
            $request->session()->put('eleve', $info);
            return redirect()->route('dashboard.stagiaire');
        } elseif ($user->administrateur) {
            $info=$Administrateurinfo->administrateurinfo();
            $request->session()->put('admin', $info);
            return Redirect::route('dashboard.admin');
            // return redirect()->route('dashboard.admin');
        } else {
            echo 'mashee khadama';
        }

        // return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
