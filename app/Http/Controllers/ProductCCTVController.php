<?php

namespace App\Http\Controllers;

use App\Models\products;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductCCTVController extends Controller
{
    protected $products;
    public function __construct()
    {
        $this->products = new products();
    }
    public function index()
    {
        $data = [
            "title" => "Product CCTV",
            "datacctv" => DB::table('products')->whereRaw("category_id = 1")->paginate(9),
        ];
        return Inertia::render("Product/cctv/Index", $data);
    }

    public function dashboard()
    {
        $data = [
            "title" => "Product CCTV",
            "datacctv" => $this->products->getData($cat_product = 1),

        ];
        return Inertia::render("Dashboard/products/cctv/Page", $data);
    }

    public function show($slug)
    {
        $data = [
            "title" => "page",
            "data" => DB::table('products')->where("slug", "=", $slug)->first(),
        ];
        return Inertia::render("Product/cctv/Detail", $data);
    }

}
