<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Niveau extends Model
{
    use HasFactory;
    protected $fillable=[
        'nom',
        'id_filieres',
    ];
    public function niveau(){
        return $this->hasMany(Niveau::class);
    }

}
