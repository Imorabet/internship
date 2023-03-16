<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Examen extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom',
        'note',
        'id_modules',
        'id_type_examens',
        'id_classes',

    ];
    public function inscriptions(){
        return $this->belongsToMany(Inscription::class,'evaluations');
    }
    public function module(){
        return $this->belongsTo(Module::class);
    }
    public function class(){
        return $this->belongsTo(Classe::class);
    }
    public function type_examen(){
        return $this->belongsTo(TypeExamen::class);
    }

}
