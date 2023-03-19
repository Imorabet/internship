<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}
