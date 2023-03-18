<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stagiaire extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom',
        'prenom',
        'date_naissance',
        'status',
        'avatar',
        'id_users',
        'id_inscriptions',

    ];
    protected $casts=[
        'date_naissance'=>'date',
    ];
    public $timestamps = false;
    public function inscription(){
        return $this->belongsTo(Inscription::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
