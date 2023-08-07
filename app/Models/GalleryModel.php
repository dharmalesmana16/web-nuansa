<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryModel extends Model
{
    use HasFactory;
    protected $table = "gallery";
    protected $fillable = array("nama", "deskripsi", "slug", "client_id", "project_id");
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
