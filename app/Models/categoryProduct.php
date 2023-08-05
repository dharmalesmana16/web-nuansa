<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class categoryProduct extends Model
{
    use HasFactory;
    protected $table = "category_products";
    protected $fillable = array("nama", "slug", "photo");
    public $timestamps = true;
    public function getData($id = false)
    {
        if ($id === false) {
            return $this::all();

        } else {
            return $this::where('id', $id)->first();
        }
    }
}
