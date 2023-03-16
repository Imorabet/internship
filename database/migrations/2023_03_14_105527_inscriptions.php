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
            $table->year('annee_scolaire')->default(date('Y'));
            $table->unsignedBigInteger('id_niveaux');
            $table->foreign('id_niveaux')->references('id')->on('niveaux')->onDelete('cascade');
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
