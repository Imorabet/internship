<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classe extends Model
{
    use HasFactory;
    protected $fillable=[
        'nom',
        'id_niveaux'
    ];
    public $timestamps = false;
    public function examen(){
        return $this->hasMany(Examen::class);
    }
    public function inscriptions(){
        return $this->belongsToMany(Inscription::class,'inscription_classes','id_inscriptions');
    }
    public function module(){
        return $this->belongsToMany(Module::class,'affectations','id_modules');
    }
    public function professeur(){
        return $this->belongsToMany(Professeur::class,'affectations','id_professeurs');
    }
}
