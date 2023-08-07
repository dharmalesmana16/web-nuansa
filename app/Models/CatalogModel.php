<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatalogModel extends Model
{
    use HasFactory;
    protected $table = "catalog";
    protected $fillable = array("nama", "category_product_id");
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
