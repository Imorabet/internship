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
        Schema::create('inscription_class', function (Blueprint $table) {
            $table->unsignedBigInteger('id_inscription');
            $table->unsignedBigInteger('id_classe');
            $table->foreign('id_classe')->references('id')->on('classe');
            $table->foreign('id_inscription')->references('id')->on('inscription');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inscription_class');
    }
};
