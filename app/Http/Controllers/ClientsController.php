<?php

namespace App\Http\Controllers;

use App\Models\ClientsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ClientsController extends Controller
{
    protected $client;
    public function __construct()
    {
        $this->client = new ClientsModel;
    }
    public function index()
    {
        $data = [
            "title" => "Our Clients",
            "data" => $this->client->getData(),
        ];
        return Inertia::render('ClientPage/Page', $data);
    }
    public function dashboard()
    {
        $data = [
            "title" => "Clients Page | Nuansa Inti Persada",
            "data" => $this->client->getData(),
        ];
        return Inertia::render('Dashboard/Clients/DashboardClientsPage', $data);
    }
    public function new () {
        $data = [
            "title" => "Clients Page | Nuansa Inti Persada",
        ];
        return Inertia::render('Dashboard/Clients/CreateClients', $data);
    }
    public function detail($id)
    {
        $data = [
            "data" => $this->client->getData($id),
        ];
        return Inertia::render("ClientPage/DetailClient", $data);
    }
    public function edit($id)
    {
        $data = [
            "title" => "Update Clients",
            "data" => $this->client->getData($id),
        ];
        return Inertia::render("Dashboard/Clients/UpdateClients", $data);
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
            "nama" => $request->input("nama"),
            "from_year" => $request->input("from_year"),
            "deskripsi" => $request->input("deskripsi"),
            "showonhome" => $request->input("showonhome"),
            "photo" => $image_name,
        ];
        $res = $this->client->create($data);
        if ($res) {
            return response()->json([
                "msg" => "Success Create new Client !",
            ]);
        } else {
            return response()->json([
                "msg" => "Error",
            ]);
        }

    }
    public function update(Request $request, $id)
    {
        $product = $this->client::find($id);

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

        $clients = $this->client::find($id);
        $clients->nama = $request->input('nama');
        $clients->from_year = $request->input('from_year');
        $clients->deskripsi = $request->input('deskripsi');
        $clients->showonhome = $request->input('showonhome');
    }
    public function destroy($id)
    {
        $res = $this->client->getData($id);
        if ($res->photo) {
            $exists = Storage::disk('public')->exists("{$res->photo}");
            if ($exists) {
                Storage::disk('public')->delete("{$res->photo}");
            }
        }
        $res->delete();
    }
}
