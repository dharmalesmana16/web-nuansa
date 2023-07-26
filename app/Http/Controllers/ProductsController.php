<?php

namespace App\Http\Controllers;

use App\Models\categoryProduct;
use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProductsController extends Controller
{
    protected $product;
    protected $categoryProduct;
    public function __construct()
    {
        $this->product = new products();
        $this->categoryProduct = new categoryProduct();
    }

    public function index()
    {
        $data = [
            "title" => "Product | Nuansa Inti Persada",
        ];
        return Inertia::render('Product/ProductPage', $data);
    }
    public function dashboard()
    {
        $data = [
            "title" => "Product | Nuansa Inti Persada",
            "data" => $this->product->getData(),
        ];
        return Inertia::render('Dashboard/products/Page', $data);
    }
    function new () {
        $data = [
            "title" => "Create New Product",
            "data_cat" => $this->categoryProduct->getData(),
        ];
        return Inertia::render('Dashboard/products/CreateProduct', $data);
    }
    public function show()
    {

    }
    public function store(Request $request)
    {
        $slug = Str::slug($request->input('nama'));
        $messages = [
            'required' => ':attribute Harus Diisi    !',
            'dimensions' => "Gambar Harus Berukuran 200x200 PX",
        ];
        $this->validate($request, [
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048|dimensions:max_width=200,max_height=200',
        ], $messages);
        if ($request->has('photo')) {
            $image_name = time() . '.' . $request->photo->getClientOriginalExtension();

            $request->photo->move(public_path('uploads'), $image_name);
        }
        $data = [
            "nama" => $request->input('nama'),
            "deskripsi" => $request->input('deskripsi'),
            "harga" => $request->input('harga'),
            "jumlah" => $request->input('jumlah'),
            "katalog" => $request->input('katalog'),
            "kode" => $request->input('kode'),
            "category_product_id" => $request->input('category_product_id'),
            "slug" => $slug,
            "photo" => $image_name,
        ];
        $req = $this->product::create($data);
        if ($req) {
            return response()->json([
                "msg" => "Create new product, Success !",
            ]);
        } else {
            return response()->json([
                "msg" => "Error",
            ]);
        }
    }
    public function edit(products $data)
    {
        $data = [
            "title" => "Update Product",
            'post' => [
                'id' => $data->id,
                'title' => $data->title,
                'description' => $data->description,
            ],
        ];

        return Inertia::render('Post/Edit', $data);
    }
}
