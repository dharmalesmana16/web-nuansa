<?php

namespace App\Http\Controllers;

use App\Models\products;
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
            "datacctv" => $this->products->getData("1"),
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
            "data" => $this->products->getData($slug),
        ];
        return Inertia::render("Product/cctv/Detail", $data);
    }

    // function new () {
    //     $data = [
    //         "title" => "Product CCTV",
    //     ];
    //     return Inertia::render("Dashboard/products/cctv/Create", $data);
    // }
    // public function store(Request $request)
    // {
    //     $slug = Str::slug($request->input('nama'));
    //     $messages = [
    //         'required' => ':attribute Harus Diisi    !',
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
    //     $req = $this->products::create($data);
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
    //         "data" => $this->products->getData($slug),
    //     ];
    //     return Inertia::render("Dashboard/products/cctv/Update", $data);
    // }
    // public function update(Request $request, $slug)
    // {
    //     $messages = [
    //         'required' => ':attribute Harus Diisi!',
    //         'dimensions' => "Gambar Harus Berukuran 200x200 PX",
    //     ];
    //     $imageName = time() . "." . $request->photo->getClientOriginalExtension();
    //     $request->photo->move(public_path('uploads'), $imageName);
    //     $data = [
    //         "nama" => $request->input('nama'),
    //         "deskripsi" => $request->input('deskripsi'),
    //         "harga" => $request->input('harga'),
    //         "jumlah" => $request->input('jumlah'),
    //         "katalog" => $request->input('katalog'),
    //         "kode" => $request->input('kode'),
    //         "slug" => $request->input('nama'),
    //         "photo" => $imageName,
    //     ];
    //     $req = $this->products::where('slug', $slug)->update($data);

    // }
    // public function destroy($slug)
    // {
    //     $res = $this->products->getData($slug)->delete();
    //     if ($res) {
    //         return response()->json([
    //             "msg" => "Service Deleted",
    //         ]);
    //     } else {
    //         return response()->json([
    //             "msg" => "Fail",
    //         ]);
    //     }
    // }
}
