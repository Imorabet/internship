<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}
