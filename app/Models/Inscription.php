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
    public $timestamps = false;
    public function niveau(){
        return $this->belongsTo(Niveau::class,'id_niveaux');
    }
    public function classes(){
        return $this->belongsToMany(Classe::class,'inscription_classes','id_classes');
    }
    public function stagiaire(){
        return $this->hasMany(Stagiaire::class,'id_stagiaires');
    }
    public function examens(){
        return $this->belongsToMany(Examen::class,'evaluations','id_examens');
    }
    
}
