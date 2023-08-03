<?php

namespace App\Http\Controllers;

use App\Models\ClientsModel;
use Illuminate\Http\Request;
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
        ];
        return Inertia::render('Clients/Page', $data);
    }
    public function dashboard()
    {
        $data = [
            "title" => "Clients Page | Nuansa Inti Persada",
            "data" => $this->client->getData(),
        ];
        return Inertia::render('Dashboard/clients/Page', $data);
    }
    function new () {
        $data = [
            "title" => "Clients Page | Nuansa Inti Persada",
        ];
        return Inertia::render('Dashboard/clients/CreateClients', $data);
    }
    public function store(Request $request)
    {
        $data = [
            "nama" => $request->input("nama"),
            "from_year" => $request->input("from_year"),
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
}
