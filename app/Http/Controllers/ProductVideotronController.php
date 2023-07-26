<?php

namespace App\Http\Controllers;

use App\Models\products;
use Inertia\Inertia;

class ProductVideotronController extends Controller
{
    protected $products;
    public function __construct()
    {
        $this->products = new products();
    }
    public function index()
    {
        $data = [
            "title" => "Product Videotron",
            "data" => $this->products->getData(2),
        ];
        return Inertia::render("Product/videotron/Index", $data);
    }

    public function dashboard()
    {
        $data = [
            "title" => "Product Videotron",
            "datavideotron" => $this->products->getData(2),
        ];
        return Inertia::render("Dashboard/products/videotron/Page", $data);
    }
    public function show($slug)
    {
        $data = [
            "data" => $this->products->getData($slug),
        ];
        return Inertia::render("Product/videotron/Detail", $data);
    }
    // function new () {
    //     $data = [
    //         "title" => "Create Product Videotron",
    //     ];
    //     return Inertia::render("Dashboard/products/videotron/Create", $data);
    // }
    // public function store(Request $request)
    // {
    //     $slug = Str::slug($request->input('nama'));
    //     $messages = [
    //         'required' => ':attribute Harus Diisi !',
    //         'dimensions' => "Gambar Harus Berukuran 200x200 PX",
    //     ];
    //     $this->validate($request, [
    //         'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048|dimensions:max_width=200,max_height=200',
    //     ], $messages);
    //     if ($request->has('photo')) {
    //         $image_name = time() . '.' . $request->photo->getClientOriginalExtension();

    //         $request->photo->move(public_path('uploads'), $image_name);
    //     }
    //     $data = [
    //         "nama" => $request->input('nama'),
    //         "deskripsi" => $request->input('deskripsi'),
    //         "harga" => $request->input('harga'),
    //         "jumlah" => $request->input('jumlah'),
    //         "katalog" => $request->input('katalog'),
    //         "kode" => $request->input('kode'),
    //         "slug" => $slug,
    //         "photo" => $image_name,
    //     ];
    //     $req = $this->productVideotron::create($data);
    //     if ($req) {
    //         return response()->json([
    //             "msg" => "Success Create new product CCTV berhasil",
    //         ]);
    //     } else {
    //         return response()->json([
    //             "msg" => "Error",
    //         ]);
    //     }
    // }
    // public function edit($slug)
    // {
    //     $data = [
    //         "title" => "Create Product Videotron",
    //         "data" => $this->productVideotron->getData($slug),
    //     ];
    //     return Inertia::render("Dashboard/product/videotron/Update", $data);
    // }
    // public function update(Request $request, $slug)
    // {

    // }
    // public function destroy($slug)
    // {
    //     $this->productVideotron->getData($slug)->delete();

    // }

}
