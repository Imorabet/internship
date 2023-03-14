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
        Schema::create('examen',function(Blueprint $table){
            $table->id();
            $table->string('nom');
            $table->float('note');
            $table->unsignedBigInteger('id_module');
            $table->unsignedBigInteger('id_type_examen');
            $table->unsignedBigInteger('id_classe');
            $table->foreign('id_module')->references('id')->on('module');
            $table->foreign('id_type_examen')->references('id')->on('type_examen');
            $table->foreign('id_classe')->references('id')->on('classe');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('examen');
    }
};
