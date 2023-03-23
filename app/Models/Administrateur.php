<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Administrateur extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom',
        'prenom',
        'date_naissance',
        'id_users'

    ];
    protected $casts=[
        'date_naissance'=>'date',
    ];
    public $timestamps = false;
    public function user()
    {
        return $this->belongsTo(User::class,'id_users');
    }
    public function administrateurinfo()
    {
        return Administrateur::where('id_users',Auth::id())->get()->first();
    }
}
