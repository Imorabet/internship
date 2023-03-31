<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Filiere extends Model
{
    use HasFactory;
    protected $fillable=[
        'nom',
    ];
    public $timestamps = false;

    public function niveaux()
    {
        return $this->belongsToMany(Niveau::class, 'niveaux_filieres', 'id_filieres', 'id_niveaux');
    }
}
