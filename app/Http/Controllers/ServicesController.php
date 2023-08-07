<?php

namespace App\Http\Controllers;

use App\Models\serviceModel;
use Illuminate\Http\Request;
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
            "dataservice" => $this->dataservices->getData(),
        ];
        return Inertia::render("Dashboard/dataservices/Index", $data);
    }
    function new () {
        $data = [
            "title" => "Add New Data Service ",
        ];
        return Inertia::render("Dashboard/dataservices/Create", $data);
    }

    public function store(Request $request)
    {
        $data = [
            "nama" => $request->input('nama'),
            "description" => $request->input('description'),
            "slug" => Str::slug($request->input('nama')),
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
            "dataservice" => $this->dataservices->getData($slug),
        ];
        return Inertia::render("Dashboard/dataservices/Update", $data);
    }
    public function update(Request $request, $slug)
    {
        $data = [
            "nama" => $request->input('nama'),
            "description" => $request->input('description'),
        ];
        $res = $this->dataservices::where('slug', $slug)->update($data);
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
        $res = $this->dataservices->getData($slug)->delete();
        if ($res) {
            return response()->json([
                "msg" => "Service Deleted",
            ]);
        }
    }
}
