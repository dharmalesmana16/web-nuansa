<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarouselModel extends Model
{
    use HasFactory;
    protected $table = "carousel";
    public $timestamps = true;

    protected $fillable = array("id", "nama", "description", "photo", "slug");
    public function getData($slug = false)
    {
        if ($slug === false) {
            return $this::all();
        } else {
            return $this::where('slug', $slug)->first();
        }

    }
}
