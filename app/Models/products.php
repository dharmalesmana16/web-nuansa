<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    use HasFactory;
    protected $table = "products";
    public $timestamps = true;
    protected $fillable = ["nama", "kode", 'deskripsi', 'jumlah',
        'category_product_id', 'katalog', 'harga', 'photo', 'slug'];
    public function getData($cat_product = null, $slug = null)
    {
        if ($cat_product == null && $slug == null) {
            return $this::all();
        } else if ($cat_product != null && $slug == null) {
            return $this::select("*")->where('category_product_id', $cat_product)->get();

        } else {
            return $this::where('slug', $slug)->first();

        }

    }
}
