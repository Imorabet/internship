<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
