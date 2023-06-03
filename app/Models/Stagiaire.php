<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;


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
    public function inscription()
    {
        return $this->belongsTo(Inscription::class, 'id_inscriptions')->with(['classes','examens']);
    }
    
    public function user()
    {
        return $this->belongsTo(User::class,'id_users');
    }
    public function stagiaireInfo()
    {
        return Stagiaire::with('inscription')->where('id_users', Auth::id())->first();
    }
    
}
