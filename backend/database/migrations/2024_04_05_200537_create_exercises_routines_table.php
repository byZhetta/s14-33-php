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
        Schema::create('exercises_routines', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Exercise::class)->nullable();
            $table->foreignIdFor(\App\Models\Routine::class)->nullable();
            $table->enum('day', ['0','1','2','3','4','5','6']);
            $table->integer('series');
            $table->integer('repetition');
            $table->integer('weight');
            $table->boolean('complete')->default(false);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exercises_routines');
    }
};
