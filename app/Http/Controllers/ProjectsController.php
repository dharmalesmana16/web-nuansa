<?php

namespace App\Http\Controllers;

use App\Models\projectModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    protected $dataprojects;
    public function __construct()
    {
        $this->dataprojects = new projectModel();
    }

    public function index()
    {
        $data = [
            "title" => "Product | Nuansa Inti Persada",
            "dataproject" => DB::table('projects')->paginate(12),
        ];
        return Inertia::render('Project/Index', $data);
    }

    public function dashboard()
    {
        $data = [
            "title" => "Product | Nuansa Inti Persada",
            "dataprojects" => $this->dataprojects->getData(),
        ];
        return Inertia::render('Dashboard/projects/Page', $data);
    }
    public function show($slug)
    {
        $dataProject = $this->dataprojects->getData($slug);
        $data = [
            "title" => $dataProject["id"],
            "data" => $dataProject,
        ];
        return Inertia::render("Project/DetailProject", $data);
    }
    public function new () {
        $data = [
            "title" => "Create New Project",
        ];
        return Inertia::render("Dashboard/projects/Create", $data);
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
            Storage::disk('public')->put($imageName, file_get_contents($request->photo));
        }
        $data = [
            "nama" => $request->input("nama"),
            "description" => $request->input("description"),
            "photo" => $imageName,
            "slug" => Str::slug($request->input("nama")),

        ];
        $res = $this->dataprojects->create($data);
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
            "dataprojects" => $this->dataprojects->getData($slug),
        ];
        return Inertia::render("Dashboard/projects/Update", $data);
    }
    public function update(Request $request, $id)
    {
        $project = $this->dataprojects::find($id);

        if ($request->photo) {

            $exists = Storage::disk('public')->exists("{$project->photo}");
            if ($exists) {
                Storage::disk('public')->delete("{$project->photo}");
            }

            // photo name
            $image_name = time() . "." . $request->photo->getClientOriginalExtension();
            $project->photo = $image_name;

            // photo save in public folder
            Storage::disk('public')->put($image_name, file_get_contents($request->photo));
        }
        $project->nama = $request->input('nama');
        $project->description = $request->input('deskripsi');
        $project->slug = Str::random(4);
        $res = $project->save();

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
        $res = $this->dataprojects->getData($slug)->delete();
        if ($res->photo) {
            $exists = Storage::disk('public')->exists("{$res->photo}");
            if ($exists) {
                Storage::disk('public')->delete("{$res->photo}");
            }
        }
        if ($res) {
            return response()->json([
                "msg" => "success",
            ]);
        }
    }
}
