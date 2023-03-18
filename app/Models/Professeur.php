<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Professeur extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom',
        'prenom',
        'date_naissance',
        'id_users'

    ];
    public $timestamps = false;
    protected $casts=[
        'date_naissance'=>'date',
    ];
    public function module(){
        return $this->belongsToMany(Module::class,'affectations');
    }
    public function class(){
        return $this->belongsToMany(Classe::class,'affectations');
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
