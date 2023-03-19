<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}
