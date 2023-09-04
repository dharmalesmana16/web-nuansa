<?php

namespace App\Http\Controllers;

use App\Models\CarouselModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CarouselController extends Controller
{
    protected $carousel;
    public function __construct()
    {
        $this->carousel = new CarouselModel;
    }

    public function dashboard()
    {
        $data = [
            "title" => "Splash Screen",
            "data" => DB::table('carousel')->paginate(12),
        ];
        return Inertia::render('Dashboard/Carousel/DashboardCarouselPage', $data);
    }

    public function new ()
    {
        $data = [
            "title" => "Create News",
        ];
        return Inertia::render("Dashboard/Carousel/CreateCarousel", $data);
    }
    public function store(Request $request)
    {
        $messages = [
            'required' => ':attribute Harus Diisi    !',
            'dimensions' => "Gambar Harus Berukuran 200x200 PX",
        ];
        $this->validate($request, [
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ], $messages);
        if ($request->has('photo')) {
            $imageName = time() . "." . $request->photo->getClientOriginalExtension();
            Storage::disk('carousel')->put($imageName, file_get_contents($request->photo));
        }
        $data = [
            "nama" => $request->input("nama"),
            "description" => $request->input("description"),
            "photo" => $imageName,
            "slug" => Str::slug($request->input("nama")),

        ];

        $res = $this->carousel->create($data);
        if ($res) {
            return response()->json([
                "msg" => "Success",
            ]);
        } else {
            return response()->json([
                "msg" => "Error",
            ]);
        }
    }
    public function edit($slug)
    {
        $data = [
            "title" => "Create New Project",
            "data" => $this->carousel->getData($slug),
        ];
        return Inertia::render("Dashboard/Carousel/UpdateCarousel", $data);
    }
    public function update(Request $request, $id)
    {
        $news = $this->carousel::find($id);

        if ($request->photo) {

            $exists = Storage::disk('carousel')->exists("{$news->photo}");
            if ($exists) {
                Storage::disk('carousel')->delete("{$news->photo}");
            }

            // photo name
            $image_name = time() . "." . $request->photo->getClientOriginalExtension();
            $news->photo = $image_name;

            // photo save in public folder
            Storage::disk('carousel')->put($image_name, file_get_contents($request->photo));
        }
        $news->nama = $request->input('nama');
        $news->description = $request->input('description');
        $news->slug = Str::random(4);
        $res = $news->save();

        if ($res) {
            return response()->json([
                "msg" => "Update Project Successfully",
            ]);
        } else {
            return response()->json([
                "msg" => "Update Project Failed ",
                "subMsg" => "Ada yang Error, Hubungi Admin ! ",
            ]);
        }
    }
    public function destroy($slug)
    {
        $res = $this->carousel->getData($slug);
        if ($res->photo) {
            $exists = Storage::disk('carousel')->exists("{$res->photo}");
            if ($exists) {
                Storage::disk('carousel')->delete("{$res->photo}");
            }
        }
        $response = $res->delete();
        if ($response) {
            return response()->json([
                "msg" => "success",
            ]);
        }
    }
}
