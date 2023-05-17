<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscription extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_niveaux',
        'id_filieres'

    ];
    protected $cast = [
        'date_inscription' => 'date',
        'annee_scolaire' => 'year'
    ];
    public $timestamps = false;
   
    public function niveau()
    {
        return $this->belongsTo(Niveau::class, 'id_niveaux');
    }
    public function filiere()
    {
        return $this->belongsTo(Filiere::class, 'id_filieres');
    }
    public function classes()
    {
        return $this->belongsToMany(Classe::class, 'inscription_classes', 'id_inscriptions','id_classes');
    }
    public function stagiaire()
    {
        return $this->hasMany(Stagiaire::class, 'id_inscriptions');
    }    
    public function examens()
    {
        return $this->belongsToMany(Examen::class, 'evaluations', 'id_inscriptions','id_examens');
    }
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->date_inscription = now();
            $model->annee_scolaire=now()->format('Y');
        });
    }
}
