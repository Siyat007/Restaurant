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
        Schema::create('menu_items', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->decimal('price', 8, 2);
            $table->string('category'); // e.g. 'cendol', 'savory', 'dessert'
            $table->string('tag')->nullable(); // e.g. 'Classic', 'Popular'
            $table->string('badge')->nullable(); // e.g. 'Best Seller', 'Original'
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::create('menu_items', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
};
