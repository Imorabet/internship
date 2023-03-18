<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InscriptionClasse extends Model
{
    use HasFactory;
    protected $table='inscription_classes';
    public $timestamps = false;
}
