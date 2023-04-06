<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\FiliereController;
use App\Http\Controllers\NiveauController;
use App\Http\Controllers\ProfesseurController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StagiaireController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/contact', function () {
    return Inertia::render('Contact');
});
Route::get('/filieres/{id}', [FiliereController::class, 'getFilieresByNiveau']);
Route::get('/filieres', [FiliereController::class, 'getFilieres']);
Route::get('/niveaux', [NiveauController::class, 'getNiveaux']);

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
// Route::get('/RedirectAuthenticated',[AuthenticatedSessionController::class,'store']);
#--------------------------------------------------------------------------
Route::get('/dashboard/stagiaire', function () {
    return Inertia::render('Stagiaire/Dashboard');
}, [StagiaireController::class, 'index'])
    ->middleware(['auth', 'role:stagiaires'])->name('dashboard.stagiaire');
#---------------------------------------------------
Route::get('/dashboard/professeur', function () {
    return Inertia::render('Professeur/Dashboard');
}, [ProfesseurController::class, 'index'])
    ->middleware(['auth', 'role:professeurs'])->name('dashboard.professeur');
#----------------------------------------------------------------
Route::get('/dashboard/admin', function () {
    $admin = session('admin');
    return Inertia::render('Admin/Dashboard', compact('admin'));
}, [AdminController::class, 'index'])
    ->middleware(['auth', 'role:administrateur'])->name('dashboard.admin');
#partie du stagiaire
Route::get('/stagiaires', [StagiaireController::class, 'getNewInscriptions'])->middleware(['auth', 'role:administrateur']);
Route::delete('/stagiaires/{stagiaire}',[StagiaireController::class, 'destroy'] )->middleware(['auth', 'role:administrateur'])->name('stagiaire.destroy');
Route::put('/stagiaires/{id}', [StagiaireController::class, 'updateStatut'])->middleware(['auth', 'role:administrateur'])->name('stagiaire.update');
#partie de formateur
Route::get('/formateurs', [ProfesseurController::class,'getFormateurs'])->middleware(['auth', 'role:administrateur']);
Route::get('/formateurs/ajout', function () {
    return Inertia::render('Admin/AjoutFormateur');
})->middleware(['auth', 'role:administrateur']  );
Route::post('/formateurs/ajout',[ProfesseurController::class,'add'])->middleware(['auth', 'role:administrateur'])->name('prof.add');
Route::delete('/formateurs/{formateur}',[ProfesseurController::class, 'destroy'] )->middleware(['auth', 'role:administrateur'])->name('prof.destroy');
#partie administrateur
Route::get('/admins', [AdminController::class,'getAdmins'])->middleware(['auth', 'role:administrateur']);
Route::delete('/admins/{admin}',[adminController::class, 'destroy'] )->middleware(['auth', 'role:administrateur'])->name('admin.destroy');
Route::get('/admins/ajout', function () {
    return Inertia::render('Admin/AjoutAdmin');
})->middleware(['auth', 'role:administrateur']  );
Route::post('/admins/ajout',[AdminController::class,'add'])->middleware(['auth', 'role:administrateur'])->name('admin.add');
// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
