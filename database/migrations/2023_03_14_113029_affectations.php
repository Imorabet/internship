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
        Schema::create('affectations', function (Blueprint $table) {
            $table->unsignedBigInteger('id_classes');
            $table->unsignedBigInteger('id_modules');
            $table->unsignedBigInteger('id_professeurs');
            $table->foreign('id_modules')->references('id')->on('modules')->onDelete('cascade');
            $table->foreign('id_professeurs')->references('id')->on('professeurs')->onDelete('cascade');
            $table->foreign('id_classes')->references('id')->on('classes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('affectations');
    }
};
