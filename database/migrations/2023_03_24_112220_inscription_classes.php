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
        Schema::create('inscription_classes', function (Blueprint $table) {
            $table->unsignedBigInteger('id_inscriptions');
            $table->unsignedBigInteger('id_classes');
            $table->foreign('id_classes')->references('id')->on('classes')->onDelete('cascade');
            $table->foreign('id_inscriptions')->references('id')->on('inscriptions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inscription_classes');
    }
};
