<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Niveau extends Model
{
    use HasFactory;
    protected $fillable=[
        'nom',
    ];

    public $timestamps = false;

    public function filieres()
    {
        return $this->belongsToMany(Filiere::class, 'niveaux_filieres', 'id_niveaux', 'id_filieres');
    }

}
