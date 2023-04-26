<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

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
    public function modules(){
        return $this->belongsToMany(Module::class,'affectations','id_professeurs', 'id_modules')
        ->withPivot('id_classes', 'id_professeurs');
    }
    public function classes()
{
    return $this->belongsToMany(Classe::class, 'affectations', 'id_professeurs', 'id_classes')
    ->withPivot('id_modules', 'id_professeurs');;
}
    public function user()
    {
        return $this->belongsTo(User::class,'id_users');
    }
    public function profinfo()
    {
        return Professeur::where('id_users',Auth::id())->with('classes', 'modules')->get()->first();
    }
}
