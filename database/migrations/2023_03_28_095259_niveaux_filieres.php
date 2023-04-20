<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('niveaux_filieres',function(Blueprint $table){
            $table->unsignedBigInteger('id_niveaux');
            $table->unsignedBigInteger('id_filieres');
            $table->foreign('id_niveaux')->references('id')->on('niveaux');
            $table->foreign('id_filieres')->references('id')->on('filieres');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('niveaux_filieres');
    }
};
