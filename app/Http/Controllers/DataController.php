<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DataController extends Controller
{

    public function getDataCatalog(Request $request)
    {
        $dataCategory = $request->input("category_product_id");
        $query = DB::table('catalog')->select("*")
            ->whereRaw("category_product_id = '$dataCategory' ")->get();
        return response()->json($query);
    }
    public function getLinkProduct()
    {
        $query = DB::table('category_products')->select("*")->get();
        return response()->json($query);
    }
}
