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
        
        Schema::create('modules',function(Blueprint $table){
            $table->id();
            $table->string('nom');
            $table->integer('masse_horaire');
            $table->integer('id_niveaux');
            $table->foreign('id_niveaux')->references('id')->on('niveaux');
            $table->unsignedBigInteger('id_filieres');
            $table->foreign('id_filieres')->references('id')->on('filieres')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('modules');
    }
};
