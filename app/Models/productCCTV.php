<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productCCTV extends Model
{
    use HasFactory;
    protected $table = "product_cctv";
    protected $fillable = array("nama", "deskripsi", "photo", "harga", 'jumlah', 'slug', 'kode', 'katalog');

    public function getData($slug = false)
    {
        if ($slug === false) {
            return $this::all();

        } else {
            return $this::where('slug', $slug)->first();
        }
    }
}
