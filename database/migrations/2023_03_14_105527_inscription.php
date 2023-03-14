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
        Schema::create('inscription',function(Blueprint $table){
            $table->id();
            $table->date('date_inscription');
            $table->year('annee_scolaire');
            $table->unsignedBigInteger('id_niveau');
            $table->foreign('id_niveau')->references('id')->on('niveau')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inscription');
    }
};
