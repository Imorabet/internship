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
        Schema::create('examens',function(Blueprint $table){
            $table->id();
            $table->string('nom');
            $table->float('note');
            $table->unsignedBigInteger('id_modules');
            $table->unsignedBigInteger('id_type_examens');
            $table->unsignedBigInteger('id_classes');
            $table->foreign('id_modules')->references('id')->on('modules');
            $table->foreign('id_type_examens')->references('id')->on('type_examens');
            $table->foreign('id_classes')->references('id')->on('classes');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('examens');
    }
};
