<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productIoT extends Model
{
    use HasFactory;
    protected $table = "product_iot";

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
