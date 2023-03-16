<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscription extends Model
{
    use HasFactory;
    protected $fillable=[
        'id_niveaux',

    ];
    protected $cast=[
        'date_inscription'=>'date',
        'annee_scolaire'=>'year'
    ];
    public function niveau(){
        return $this->belongsTo(Niveau::class);
    }
    public function classes(){
        return $this->belongsToMany(Classe::class,'inscription_classes');
    }
    public function stagiaire(){
        return $this->hasMany(Stagiaire::class);
    }
    public function examens(){
        return $this->belongsToMany(Examen::class,'evaluations');
    }
}
