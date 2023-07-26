<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productPABX extends Model
{
    use HasFactory;
    protected $table = "product_videotron";
    protected $fillable = array('*');

    public function getData($slug = false)
    {
        if ($slug === false) {
            return $this::all();

        } else {
            return $this::where('slug', $slug)->first();
        }
    }
}
