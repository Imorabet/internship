<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ClasseController;
use App\Http\Controllers\FiliereController;
use App\Http\Controllers\ModuleController;
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
Route::get('/modules-classes/{niveauId}/{filiereId}', [ModuleController::class, 'getModulesAndClasses']);

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
// Route::get('/RedirectAuthenticated',[AuthenticatedSessionController::class,'store']);
#--------------------------------------------------------------------------
Route::get('/dashboard/stagiaire', function () {
    $eleve = session('eleve');
    return Inertia::render('Stagiaire/Dashboard', compact('eleve'));
}, [StagiaireController::class, 'index'])
    ->middleware(['auth', 'role:stagiaires'])->name('dashboard.stagiaire');
#---------------------------------------------------
Route::get('/dashboard/professeur', function () {
    $prof = session('prof');
    return Inertia::render('Professeur/Dashboard',compact('prof'));
}, [ProfesseurController::class, 'index'])
    ->middleware(['auth', 'role:professeurs'])->name('dashboard.professeur');
Route::get('/notes', [ProfesseurController::class, 'getAuthProf'])->middleware(['auth', 'role:professeurs']);
Route::post('/notes', [ClasseController::class, 'getElevesWithNotes'])->middleware(['auth', 'role:professeurs'])->name('eleve.list');

#----------------------------------------------------------------
Route::get('/dashboard/admin', function () {
    $admin = session('admin');
    return Inertia::render('Admin/Dashboard', compact('admin'));
}, [AdminController::class, 'index'])
    ->middleware(['auth', 'role:administrateur'])->name('dashboard.admin');
#partie du stagiaire
Route::get('/eleves', [StagiaireController::class, 'getNewInscriptions'])->middleware(['auth', 'role:administrateur']);
Route::get('/new-eleves', [StagiaireController::class, 'countNewRegistrations'])->middleware(['auth', 'role:administrateur']);
Route::delete('/eleves/{stagiaire}', [StagiaireController::class, 'destroy'])->middleware(['auth', 'role:administrateur'])->name('stagiaire.destroy');
Route::put('/eleves/{id}', [StagiaireController::class, 'updateStatut'])->middleware(['auth', 'role:administrateur'])->name('stagiaire.update');
#partie de formateur
Route::get('/professeurs', [ProfesseurController::class, 'getFormateurs'])->middleware(['auth', 'role:administrateur']);
Route::get('/professeurs/ajout', function () {
    return Inertia::render('Admin/AjoutFormateur');
})->middleware(['auth', 'role:administrateur']);
Route::post('/professeurs/ajout', [ProfesseurController::class, 'add'])->middleware(['auth', 'role:administrateur'])->name('prof.add');
Route::delete('/professeurs/{formateur}', [ProfesseurController::class, 'destroy'])->middleware(['auth', 'role:administrateur'])->name('prof.destroy');
Route::post('/professeurs/assign', [ProfesseurController::class, 'assign'])->middleware(['auth', 'role:administrateur'])->name('prof.assign');
#partie administrateur
Route::get('/admins', [AdminController::class, 'getAdmins'])->middleware(['auth', 'role:administrateur']);
Route::delete('/admins/{admin}', [adminController::class, 'destroy'])->middleware(['auth', 'role:administrateur'])->name('admin.destroy');
Route::get('/admins/ajout', function () {
    return Inertia::render('Admin/AjoutAdmin');
})->middleware(['auth', 'role:administrateur']);
Route::post('/admins/ajout', [AdminController::class, 'add'])->middleware(['auth', 'role:administrateur'])->name('admin.add');
#partie classe
Route::get('/classes', [ClasseController::class, 'getClasses'])->middleware(['auth', 'role:administrateur']);
Route::post('/classes', [ClasseController::class, 'add'])->middleware(['auth', 'role:administrateur'])->name('class.add');
Route::delete('/classes/{classe}', [ClasseController::class, 'destroy'])->middleware(['auth', 'role:administrateur'])->name('classe.destroy');
Route::get('/modules-classes/{niveauId}/{filiereId}', [ModuleController::class, 'getModulesAndClasses'])->middleware(['auth', 'role:administrateur']);
Route::get('/classes/{niveauId}/{filiereId}', [ClasseController::class, 'getFilieresClasses'])->middleware(['auth', 'role:administrateur']);
Route::post('/classes/eleve/{inscriptionId}', [ClasseController::class, 'addClassToStudent'])->middleware(['auth', 'role:administrateur'])->name('eleve.class');
Route::post('/classes/emplois/{classeId}', [ClasseController::class, 'store'])->middleware(['auth', 'role:administrateur'])->name('emplois.add');
#partie niveau
Route::get('/niveau',[NiveauController::class, 'getNiveau'])->middleware(['auth', 'role:administrateur']);
Route::post('/niveau', [NiveauController::class, 'add'])->middleware(['auth', 'role:administrateur'])->name('niveau.add');
Route::delete('/niveau/{niveau}', [NiveauController::class, 'destroy'])->middleware(['auth', 'role:administrateur'])->name('niveau.destroy');
#partie modules
Route::get('/modules',[ModuleController::class, 'getModules'])->middleware(['auth', 'role:administrateur']);
Route::delete('/modules/{module}', [ModuleController::class, 'destroy'])->middleware(['auth', 'role:administrateur'])->name('module.destroy');
Route::post('/modules', [ModuleController::class, 'add'])->middleware(['auth', 'role:administrateur'])->name('module.add');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
