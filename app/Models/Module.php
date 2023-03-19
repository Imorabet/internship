<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;
    protected $fillable=[
        'nom',
        'masse_horaire',
        'id_niveaux',

    ];
    public $timestamps = false;
    public function professeur(){
        return $this->belongsToMany(Professeur::class,'affectations','id_professeurs');
    }
    public function class(){
        return $this->belongsToMany(Classe::class,'affectations','id_classes');
    }
    public function niveau(){
        return $this->belongsTo(Niveau::class,'id_niveaux');
    }
    public function examen(){
        return $this->hasMany(Examen::class,'id_examens');
    }


}
