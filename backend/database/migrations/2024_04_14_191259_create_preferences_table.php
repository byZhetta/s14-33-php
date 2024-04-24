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
        Schema::create('preferences', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\User::class);
            $table->enum('pecho', ['true', 'false'])->default('false');
            $table->enum('brazos', ['true', 'false'])->default('false');
            $table->enum('piernas', ['true', 'false'])->default('false');
            $table->enum('espalda', ['true', 'false'])->default('false');
            $table->enum('abdomen', ['true', 'false'])->default('false');
            $table->enum('gluteos', ['true', 'false'])->default('false');
            $table->enum('integral', ['true', 'false'])->default('false');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('preferences');
    }
};
