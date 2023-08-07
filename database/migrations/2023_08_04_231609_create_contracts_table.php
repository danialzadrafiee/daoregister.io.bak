<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contracts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('dao_id')->constrained()->onDelete('cascade');
            $table->integer('token');
            $table->string('name');
            $table->text('describe');
            $table->string('signatureType');
            $table->json('contract');
            $table->string('nftUri')->nullable();
            $table->string('fileUrl')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contracts');
    }
};
