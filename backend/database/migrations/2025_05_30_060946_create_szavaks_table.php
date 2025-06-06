<?php

use App\Models\Szavak;
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
        Schema::create('szavaks', function (Blueprint $table) {
            $table->id();
            $table->string('angol');
            $table->string('magyar');
            $table->foreignId('temas_id')->constrained('temas');
            $table->timestamps();
        });

        Szavak::create([
            'angol' => 'word1',
            'magyar' => 'szo1',
            'temas_id' => 1
        ]);

        Szavak::create([
            'angol' => 'word1',
            'magyar' => 'szo1',
            'temas_id' => 1
        ]);

        Szavak::create([
            'angol' => 'word1',
            'magyar' => 'szo1',
            'temas_id' => 1
        ]);

        Szavak::create([
            'angol' => 'word1',
            'magyar' => 'szo1',
            'temas_id' => 1
        ]);

        Szavak::create([
            'angol' => 'word2',
            'magyar' => 'szo2',
            'temas_id' => 2
        ]);

        Szavak::create([
            'angol' => 'word2',
            'magyar' => 'szo2',
            'temas_id' => 2
        ]);

        Szavak::create([
            'angol' => 'word2',
            'magyar' => 'szo2',
            'temas_id' => 2
        ]);

        Szavak::create([
            'angol' => 'word3',
            'magyar' => 'szo3',
            'temas_id' => 3
        ]);

        Szavak::create([
            'angol' => 'word3',
            'magyar' => 'szo3',
            'temas_id' => 3
        ]);

        Szavak::create([
            'angol' => 'word3',
            'magyar' => 'szo3',
            'temas_id' => 3
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szavaks');
    }
};
