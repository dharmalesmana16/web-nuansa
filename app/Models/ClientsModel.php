<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientsModel extends Model
{
    use HasFactory;
    protected $table = "clients";
    protected $fillable = array("nama", "deskripsi", "from_year", "slug", "photo", "showonhome");
    public $timestamps = true;
    public function getData($id = false)
    {
        if ($id === false) {
            return $this::all();

        } else {
            return $this::where('id', $id)->first();
        }
    }
    public function showOnHome($showonhome = "")
    {
        return $this::where('showonhome', $showonhome)->get();
    }
}
