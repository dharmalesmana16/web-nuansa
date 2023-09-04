<?php

namespace App\Http\Controllers;

use App\Models\serviceModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ServicesController extends Controller
{
    protected $dataservices;
    public function __construct()
    {
        $this->dataservices = new serviceModel();
    }
    public function dashboard()
    {
        $data = [
            "title" => "Service Page",
            "data" => DB::table('services')->paginate(6),
        ];
        return Inertia::render("Dashboard/Services/DashboardServicePage", $data);
    }
    public function index()
    {
        $data = [
            "title" => "Service Page",
            "data" => DB::table('services')->get(),
        ];
        return Inertia::render("ServicePage", $data);
    }
    public function show($slug)
    {
        $data = [
            "title" => "Service Page",
            "data" => DB::table('services')->whereRaw("slug = '$slug'")->first(),
        ];
        return Inertia::render("DetailService", $data);
    }
    public function new ()
    {
        $data = [
            "title" => "Add New Data Service ",
        ];
        return Inertia::render("Dashboard/Services/CreateService", $data);
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
            Storage::disk('service')->put($imageName, file_get_contents($request->photo));
        }
        $data = [
            "nama" => $request->input('nama'),
            "description" => $request->input('description'),
            "slug" => Str::slug($request->input('nama')),
            "photo" => $imageName,
        ];
        $res = $this->dataservices->create($data);
        if ($res) {
            return response()->json([
                "msg" => "Success",
            ]);
        }

    }
    public function edit(Request $request, $slug)
    {
        $data = [
            "title" => "Service Page",
            "data" => $this->dataservices->getData($slug),
        ];
        return Inertia::render("Dashboard/Services/UpdateService", $data);
    }
    public function update(Request $request, $id)
    {
        $service = $this->dataservices->find($id);
        if ($request->photo) {

            $exists = Storage::disk('service')->exists("{$service->photo}");
            if ($exists) {
                Storage::disk('service')->delete("{$service->photo}");
            }

            // photo name
            $image_name = time() . "." . $request->photo->getClientOriginalExtension();
            $service->photo = $image_name;

            // photo save in public folder
            Storage::disk('service')->put($image_name, file_get_contents($request->photo));
        }
        $service->nama = $request->input('nama');
        $service->description = $request->input('description');
        $service->slug = Str::slug($service->nama);
        $res = $service->save();
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
        $res = $this->dataservices->getData($slug);
        if ($res->photo) {
            $exists = Storage::disk('service')->exists("{$res->photo}");
            if ($exists) {
                Storage::disk('service')->delete("{$res->photo}");
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
