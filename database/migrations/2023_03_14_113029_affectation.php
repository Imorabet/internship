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
        Schema::create('affectation', function (Blueprint $table) {
            $table->unsignedBigInteger('id_classe');
            $table->unsignedBigInteger('id_module');
            $table->unsignedBigInteger('id_professeur');
            $table->foreign('id_module')->references('id')->on('module');
            $table->foreign('id_professeur')->references('id')->on('professeur');
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
        //
    }
};
