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
        Schema::create('product_cctv', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nama', 100)->nullable();
            $table->string('kode', 100)->unique();
            $table->text('deskripsi')->nullable();
            $table->float('harga')->nullable();
            $table->integer('jumlah')->nullable();
            $table->string('slug', 100)->nullable(false);
            $table->string('katalog', 100)->nullable();
            $table->binary('photo');
            $table->timestampsTz($precision = 0);
            $table->softDeletesTz($column = 'deleted_at', $precision = 0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop('product_cctv');

    }
};
