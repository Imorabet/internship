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
        Schema::create('inscriptions',function(Blueprint $table){
            $table->id();
            $table->date('date_inscription')->default(now());
            $table->year('annee_scolaire')->default(now()->format('Y'));
            $table->integer('id_niveaux');
            $table->foreign('id_niveaux')->references('id')->on('niveaux')->onDelete('cascade');
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
        Schema::dropIfExists('inscriptions');
    }
};
