<?php

namespace App\Http\Controllers;

use App\Models\projectModel;
use Illuminate\Http\Request;
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
            "dataproject" => $this->dataprojects->getData(),
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
            "dataProject" => $dataProject,
        ];
        return Inertia::render("Dashboard/projects/Detail", $data);
    }
    function new () {
        $data = [
            "title" => "Create New Project",
        ];
        return Inertia::render("Dashboard/projects/Create", $data);
    }
    public function store(Request $request)
    {
        if ($request->has('photo')) {
            $imageName = time() . "." . $request->photo->getClientOriginalExtension();
            $request->photo->move(public_path('uploads'), $imageName);
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
    public function update(Request $request, $slug)
    {
        if ($request->hasFile('photo')) {
            $imageName = time() . "." . $request->photo->getClientOriginalExtension();
            $request->photo->move(public_path('uploads'), $imageName);
        }
        $data = [
            "nama" => $request->input('nama'),
            "description" => $request->input('description'),
            "slug" => Str::slug($request->input("nama")),
        ];
        $res = $this->dataprojects::where('slug', $slug)->update($data);
        if ($res) {
            return response()->json([
                "msg" => "success",
            ]);
        } else {
            return response()->json([
                "msg" => "error",
            ]);
        }
    }
    public function destroy($slug)
    {
        $res = $this->dataprojects->getData($slug)->delete();
        if ($res) {
            return response()->json([
                "msg" => "success",
            ]);
        }
    }
}
