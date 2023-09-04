<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsModel extends Model
{
    use HasFactory;
    protected $table = "news";
    public $timestamps = true;

    protected $fillable = array("nama", "description", "slug", "photo", "user_id");
    public function getData($slug = false)
    {
        if ($slug === false) {

            return $this::all();
        } else {
            return $this::where('slug', $slug)->first();
        }

    }
}
