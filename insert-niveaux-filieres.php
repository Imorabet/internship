<?php

require_once __DIR__.'/vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;
use App\Models\Niveau;
use App\Models\Filiere;

// Initialize Eloquent
$capsule = new Capsule;
$capsule->addConnection([
    'driver' => 'mysql',
    'host' => 'localhost',
    'database' => 'ismo_project',
    'username' => 'root',
    'password' => '123456',
    'port'=>'3308',
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix' => '',
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();

// Create data to insert into niveaux_filieres table
$niveauxFilieres = [
    ['id_niveaux' => 1, 'id_filieres' => 1],
    ['id_niveaux' => 1, 'id_filieres' => 2],
    ['id_niveaux' => 2, 'id_filieres' => 3],
    ['id_niveaux' => 2, 'id_filieres' => 4],
];

// Insert data into niveaux_filieres table
foreach ($niveauxFilieres as $niveauFiliere) {
    $niveau = Niveau::find($niveauFiliere['id_niveaux']);
    $filiere = Filiere::find($niveauFiliere['id_filieres']);
    $niveau->filieres()->attach($filiere);
}

echo "Data inserted successfully!";
