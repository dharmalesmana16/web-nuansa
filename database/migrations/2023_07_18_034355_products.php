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
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nama', 100)->nullable();
            $table->string('kode', 100)->unique();
            $table->text('deskripsi')->nullable();
            $table->float('harga')->nullable();
            $table->integer('jumlah')->nullable();
            $table->string('slug', 100)->nullable(false);
            $table->binary('photo');
            $table->unsignedInteger('category_id');
            $table->unsignedInteger('catalog_id');
            $table->timestampsTz($precision = 0);
            $table->softDeletesTz($column = 'deleted_at', $precision = 0);
            $table->foreign('catalog_id')->references('id')->on('catalog')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('category_products')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("products");
    }
};
