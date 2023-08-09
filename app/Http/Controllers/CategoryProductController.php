<?php

namespace App\Http\Controllers;

use App\Models\categoryProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CategoryProductController extends Controller
{
    public function dashboard()
    {
        $data = [
            "title" => "Product | Nuansa Inti Persada",
            "data" => categoryProduct::all(),
        ];
        return Inertia::render('Dashboard/categoryproduct/Page', $data);
    }
    public function new () {
        $data = [
            "title" => "Create New Category Product",
        ];
        return Inertia::render('Dashboard/categoryproduct/CreateCategory', $data);
    }
    public function edit($slug)
    {

        $data = [
            "title" => "Update Product",
            "data" => categoryProduct::where("slug", $slug)->first(),
        ];
        return Inertia::render("Dashboard/categoryproduct/UpdateCategory", $data);
    }
    public function update(Request $request, $id)
    {
        $cat = categoryProduct::find($id);
        if ($request->photo) {

            $exists = Storage::disk('public')->exists("{$cat->photo}");
            if ($exists) {
                Storage::disk('public')->delete("{$cat->photo}");
            }

            // photo name
            $image_name = time() . "." . $request->photo->getClientOriginalExtension();
            $cat->photo = $image_name;

            // photo save in public folder
            Storage::disk('public')->put($image_name, file_get_contents($request->photo));
        }
        $cat->nama = $request->nama;
        $cat->showonhome = $request->showonhome;
        $cat->slug = Str::slug($request->nama);

        $res = $cat->save();
        if ($res) {
            return response()->json([
                "msg" => "Update Category Product Successfully",
            ]);

        } else {
            return response()->json([
                "msg" => "Update Category Product Failed",
            ]);

        }

    }
    public function store(Request $request)
    {
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
            "showonhome" => $request->input('showonhome'),
            "photo" => $image_name,
            "slug" => Str::slug($request->input('nama')),
        ];
        $req = categoryProduct::create($data);
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
    public function destroy($slug)
    {
        $res = categoryProduct::where('slug', $slug)->delete();
        if ($res) {
            return response()->json([
                "msg" => "Create new product, Success !",
            ]);
        } else {
            return response()->json([
                "msg" => "Error",
            ]);
        }
    }
}
