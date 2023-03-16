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
    public function professeur(){
        return $this->belongsToMany(Professeur::class,'affectations');
    }
    public function class(){
        return $this->belongsToMany(Classe::class,'affectations');
    }
    public function niveau(){
        return $this->belongsTo(Niveau::class);
    }
    public function examen(){
        return $this->hasMany(Examen::class);
    }


}
