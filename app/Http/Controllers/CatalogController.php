<?php

namespace App\Http\Controllers;

use App\Models\CatalogModel;
use App\Models\categoryProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CatalogController extends Controller
{
    protected $catalog;
    public function __construct()
    {
        $this->catalog = new CatalogModel();
    }

    public function dashboard()
    {
        $data = [
            "title" => "Clients Page | Nuansa Inti Persada",
            "data" => $this->catalog->getData(),
        ];
        return Inertia::render('Dashboard/catalog/Page', $data);
    }
    function new () {
        $data = [
            "title" => "Create New Catalog",
            "data_cat" => categoryProduct::all(),

        ];
        return Inertia::render("Dashboard/catalog/CreateCatalog", $data);

    }
    public function edit($id)
    {
        $data = [
            "title" => "Update Catalog",
            "data" => DB::table('catalog')->where('id', $id)->first(),
            "data_cat" => categoryProduct::all(),
        ];
        return Inertia::render("Dashboard/catalog/UpdateCatalog", $data);
    }
    public function store(Request $request)
    {
        $data = [
            "nama" => $request->input("nama"),
            "category_product_id" => $request->input("category_product_id"),
        ];
        $res = $this->catalog->create($data);
        if ($res) {
            return response()->json([
                "msg" => "Success Create new Catalog !",
            ]);
        } else {
            return response()->json([
                "msg" => "Error",
            ]);
        }

    }
    public function update(Request $request, $id)
    {
        $data = [
            "nama" => $request->input("nama"),
            "category_product_id" => $request->input("category_product_id"),
        ];
        $res = $this->catalog->update($data);
        if ($res) {
            return response()->json([
                "msg" => "Success Create new Catalog !",
            ]);
        } else {
            return response()->json([
                "msg" => "Error",
            ]);
        }

    }
    public function destory($id)
    {
        $this->catalog->getData($id)->delete();

    }
}
