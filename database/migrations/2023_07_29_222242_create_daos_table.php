<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('daos', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('symbol');
            $table->string('describe');
            $table->json('features');
            $table->string('fileUrl')->nullable();
            $table->string('avatar')->nullable();
            $table->string('nftUri')->nullable();
            $table->integer('token');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('dao_user');
        Schema::dropIfExists('daos');
    }
};
