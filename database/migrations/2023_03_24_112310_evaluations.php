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
        Schema::create('evaluations',function(Blueprint $table){
            $table->unsignedBigInteger('id_inscriptions');
            $table->unsignedBigInteger('id_examens');
            $table->foreign('id_inscriptions')->references('id')->on('inscriptions')->onDelete('cascade');
            $table->foreign('id_examens')->references('id')->on('examens')->onDelete('cascade');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('evaluations');
    }
};
