<?php

namespace App\Http\Controllers;

use App\Models\GalleryModel;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class GalleryController extends Controller
{
    protected $gallery;
    public function __construct()
    {
        $this->gallery = new GalleryModel;
    }

    public function index()
    {
        $data = [
            "title" => "Product | Nuansa Inti Persada",
            "data_gal" => DB::table('gallery')->join('clients', 'gallery.client_id', "=", "clients.id")
                ->select('gallery.*', 'clients.*')->paginate(9),
        ];
        return Inertia::render('Gallery/GalleryPage', $data);
    }
    public function dashboard()
    {
        $data = [
            "title" => "Product | Nuansa Inti Persada",
            "data" => DB::table('products')->join('category_products', 'products.category_id',
                '=', 'category_products.id')->select('products.nama', 'products.deskripsi', 'products.harga',
                'products.photo', 'products.kode', 'products.jumlah', 'products.slug', 'category_products.nama as namaKategori')->get(),
        ];
        return Inertia::render('Dashboard/gallery/Page', $data);
    }

    function new () {
        $data = [
            "title" => "Create New Gallery",
            "dataGallery" => $this->gallery->getData(),
        ];
        return Inertia::render('Dashboard/gallery/CreateGallery', $data);
    }
}
