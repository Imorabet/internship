<?php

namespace App\Http\Controllers;

use App\Models\Administrateur;
use App\Models\User;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index(Request $request)
    {
        $admin = $request->user()->administrateur()->first();
        $data = [
            'admin' => $admin,
            // other data for the dashboard
        ];
        return response()->json($data);
    }
    public function getAdmins()
    {
        $admins = Administrateur::all();
        return Inertia::render('Admin/ListAdmin', [
            'admins' => $admins,
        ]);
    }
    public function destroy(Administrateur $admin)
    {
        $user = $admin->user;
        $user->delete();

        $admin->delete();
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
        $admin = Administrateur::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'date_naissance' => $request->date,
            'id_users' => $user->id,
        ]);
        $admin->save();
        DB::commit();
        return redirect('/admins');
    }catch(ValidationException $e) {
        DB::rollback();
        echo "meskina";
        return redirect()->back()->withErrors($e)->withInput();
    }
    }
}
