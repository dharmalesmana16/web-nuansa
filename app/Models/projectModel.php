<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class projectModel extends Model
{
    use HasFactory;
    protected $table = "projects";
    public $timestamps = true;

    protected $fillable = array("nama", "description", "photo", "slug");
    public function getData($slug = false)
    {
        if ($slug === false) {

            return $this::all();
        } else {
            return $this::where('slug', $slug)->first();
        }

    }
    public function getDataInHome()
    {
        return $this::select("*")
            ->limit(6)
            ->get();
    }
}
