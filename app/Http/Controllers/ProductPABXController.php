<?php

namespace App\Http\Controllers;

use App\Models\products;
use Inertia\Inertia;

class ProductPABXController extends Controller
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
            "datacctv" => $this->products->getData(3),
        ];
        return Inertia::render("Product/pabx/Index", $data);
    }

    public function dashboard()
    {
        $data = [
            "title" => "Product CCTV",
            "datacctv" => $this->products->getData(3),

        ];
        return Inertia::render("Dashboard/products/pabx/Page", $data);
    }
    function new () {
        $data = [
            "title" => "Product CCTV",
        ];
        return Inertia::render("Dashboard/products/cctv/Create", $data);
    }
}
