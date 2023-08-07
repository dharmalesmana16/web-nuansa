<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productVideotron extends Model
{
    use HasFactory;
    protected $table = "product_videotron";
    public $timestamps = true;
    protected $fillable = array("nama", "kode", "slug", "photo", "harga", "jumlah");

    public function getData($slug = false)
    {
        if ($slug === false) {
            return $this::all();

        } else {
            return $this::where('slug', $slug)->first();
        }
    }
}
