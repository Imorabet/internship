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
        Schema::create('evaluation',function(Blueprint $table){
            $table->unsignedBigInteger('id_inscription');
            $table->unsignedBigInteger('id_examen');
            $table->foreign('id_inscription')->references('id')->on('inscription');
            $table->foreign('id_examen')->references('id')->on('examen');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('evaluation');
    }
};
