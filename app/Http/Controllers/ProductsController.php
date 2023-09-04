<?php

namespace App\Http\Controllers;

use App\Models\categoryProduct;
use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

//php artisan storage:link = php artisan storage:link = http://127.0.0.1:8000/storage/1.jpg
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
            "data_cat" => DB::table('category_products')->paginate(12),
        ];
        return Inertia::render('Product/ProductPage', $data);
    }
    public function dashboard()
    {
        $data = [
            "title" => "Product | Nuansa Inti Persada",
            "datas" => DB::table('products')->join('category_products', 'products.category_id',
                '=', 'category_products.id')->select('products.nama', 'products.deskripsi', 'products.harga',
                'products.photo as mainphoto', 'products.kode', 'products.jumlah', 'products.slug', 'category_products.nama as namaKategori')->paginate(24),
        ];
        return Inertia::render('Dashboard/products/DashboardProductPage', $data);
    }
    public function newCategory()
    {
        $data = [
            "title" => "Create New Category Product",
        ];
        return Inertia::render('Dashboard/products/CreateCategory', $data);
    }
    function new () {
        $data = [
            "title" => "Create New Product",
            "data_cat" => $this->categoryProduct->getData(),
        ];
        return Inertia::render('Dashboard/products/CreateProduct', $data);
    }
    public function show($slug)
    {
        $datas = DB::table('products')
            ->join('category_products', 'products.category_id', '=', 'category_products.id')
            ->join('catalog', 'products.catalog_id', '=', 'catalog.id')
            ->select('products.*', 'products.nama as namaproduct', 'products.photo as gambar',
                'products.slug as slugProduct', 'category_products.*', 'category_products.nama as name', "catalog.nama as namaKatalog")->whereRaw("category_products.slug = '$slug'")->paginate(9);
        $data = [
            "title" => "Page",
            "data" => $datas,
        ];
        return Inertia::render('Product/ShowProduct', $data);
    }
    public function detail($slug)
    {
        $data = [
            "title" => "page",
            "data" => DB::table('products')->join('category_products', 'products.category_id', '=', 'category_products.id')
                ->select('products.*', 'products.nama as names', 'products.photo as gambar', 'category_products.slug as slugProduct', 'products.deskripsi as description',
                    'products.harga as price', 'category_products.*', 'category_products.nama as name')->whereRaw("products.slug = '$slug'")->first(),
        ];
        return Inertia::render("Product/DetailProduct", $data);
    }
    public function store(Request $request)
    {
        $slug = Str::slug($request->input('nama'));
        $messages = [
            'required' => ':attribute Harus Diisi    !',
            'dimensions' => "Gambar Harus Berukuran 200x200 PX",
        ];
        $this->validate($request, [
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|',
        ], $messages);
        if ($request->has('photo')) {
            $image_name = time() . '.' . $request->photo->getClientOriginalExtension();

            Storage::disk('public')->put($image_name, file_get_contents($request->photo));
        }
        $data = [
            "nama" => $request->input('nama'),
            "deskripsi" => $request->input('deskripsi'),
            "harga" => $request->input('harga'),
            "jumlah" => $request->input('jumlah'),
            "catalog_id" => $request->input('katalog'),
            "kode" => $request->input('kode'),
            "category_id" => $request->input('category_id'),
            "slug" => $slug,
            "photo" => $image_name,
        ];
        $req = $this->product::create($data);
        if ($req) {
            return response()->json([
                "msg" => "Success Create new product !",
            ]);
        } else {
            return response()->json([
                "msg" => "Error",
            ]);
        }
    }
    public function edit($slug, products $dataProduct)
    {
        $data = [
            "title" => "Update Product",
            "data" => DB::table('products')->where('slug', $slug)->first(),
            "data_cat" => $this->categoryProduct->getData(),
        ];
        return Inertia::render("Dashboard/products/UpdateProduct", $data);
    }
    public function update(Request $request, $id)
    {
        # code...
        $product = $this->product::find($id);

        if ($request->photo) {

            $exists = Storage::disk('public')->exists("{$product->photo}");
            if ($exists) {
                Storage::disk('public')->delete("{$product->photo}");
            }

            // photo name
            $image_name = time() . "." . $request->photo->getClientOriginalExtension();
            $product->photo = $image_name;

            // photo save in public folder
            Storage::disk('public')->put($image_name, file_get_contents($request->photo));
        }
        // $messages = [
        //     'required' => ':attribute Harus Diisi    !',
        //     'dimensions' => "Gambar Harus Berukuran 200x200 PX",
        // ];
        // $this->validate($request, [
        //     'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        // ], $messages);

        $product->nama = $request->input('nama');
        $product->deskripsi = $request->deskripsi;
        $product->harga = $request->harga;
        $product->jumlah = $request->jumlah;
        $product->catalog_id = $request->catalog_id;
        $product->kode = strtoupper($request->kode);
        $product->category_id = $request->category_id;
        $product->slug = Str::slug($request->nama);

        $res = $product->save();

        if ($res) {
            return response()->json([
                "msg" => "Update Product Successfully !",
            ]);
        } else {
            return response()->json([
                "msg" => "Update Product Failed !",
            ]);
        }
    }

    public function destroy($slug)
    {
        $project = $this->product->getDataBySlug($slug);
        if ($project->photo) {
            $exists = Storage::disk('public')->exists("{$project->photo}");
            if ($exists) {
                Storage::disk('public')->delete("{$project->photo}");
            }
        }
        $project->delete();
    }
}
