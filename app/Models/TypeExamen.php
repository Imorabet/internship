<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeExamen extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom',
    ];
    public $timestamps = false;
    public function examen(){
        return $this->hasMany(Examen::class,'id_type_examens');
    }
}
