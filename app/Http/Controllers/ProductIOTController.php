<?php

namespace App\Http\Controllers;

use App\Models\productIoT;
use Inertia\Inertia;

class ProductIOTController extends Controller
{
    protected $dataiot;
    public function __construct()
    {
        $this->dataiot = new productIoT();
    }
    public function dashboard()
    {
        $data = [
            "title" => "Product IoT",
            "data" => $this->dataiot->getData(),
        ];
        return Inertia::render("Dashboard/products/IoT/Page", $data);
    }

    public function index()
    {
        $data = [
            "title" => "Product IoT",
            "data" => $this->dataiot->getData(),
        ];
        return Inertia::render("Product/ProductPage", $data);
    }
}
