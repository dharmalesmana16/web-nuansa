<?php

namespace App\Http\Controllers;

use App\Models\NewsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class NewsController extends Controller
{
    protected $news;
    public function __construct()
    {
        $this->news = new NewsModel;
    }

    public function index()
    {
        $data = [
            "title" => "News",
            "news" => DB::table('news')->selectRaw("*,DATE_FORMAT(created_at,'%d %M %Y') as tanggal")->paginate(12),
        ];
        return Inertia::render('NewsPage', $data);
    }

    public function dashboard()
    {
        $data = [
            "title" => "News Page Dashboard",
            "news" => DB::table('news')->paginate(12),
        ];
        return Inertia::render('Dashboard/News/DashboardNewsPage', $data);
    }
    public function show($slug)
    {
        $dataProject = $this->news->getData($slug);
        $data = [
            "title" => "Berita Terkini",
            "toptitle" => "Berita",
            "data" => DB::table('news')->selectRaw("*,DATE_FORMAT(created_at,'%d %M %Y') as tanggal")->whereRaw("slug = '$slug'")->first(),
        ];
        return Inertia::render("DetailNews", $data);
    }
    public function new ()
    {
        $data = [
            "title" => "Create News",
        ];
        return Inertia::render("Dashboard/News/CreateNews", $data);
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
            Storage::disk('news')->put($imageName, file_get_contents($request->photo));
        }
        $data = [
            "nama" => $request->input("nama"),
            "description" => $request->input("description"),
            "photo" => $imageName,
            "user_id" => $request->input("user_id"),
            "slug" => Str::slug($request->input("nama")),

        ];
        $res = $this->news->create($data);
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
            "data" => $this->news->getData($slug),
        ];
        return Inertia::render("Dashboard/News/UpdateNews", $data);
    }
    public function update(Request $request, $id)
    {
        $news = $this->news::find($id);

        if ($request->photo) {

            $exists = Storage::disk('news')->exists("{$news->photo}");
            if ($exists) {
                Storage::disk('news')->delete("{$news->photo}");
            }

            // photo name
            $image_name = time() . "." . $request->photo->getClientOriginalExtension();
            $news->photo = $image_name;

            // photo save in public folder
            Storage::disk('news')->put($image_name, file_get_contents($request->photo));
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
        $res = $this->news->getData($slug);
        if ($res->photo) {
            $exists = Storage::disk('news')->exists("{$res->photo}");
            if ($exists) {
                Storage::disk('news')->delete("{$res->photo}");
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
