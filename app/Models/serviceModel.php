<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class serviceModel extends Model
{
    use HasFactory;
    protected $table = "services";
    public $timestamps = true;
    protected $fillable = array("nama", "slug", "description");
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
        return $this::select("*")->limit(4)->get();
    }
}
