<?php

namespace App\Http\Controllers;

use App\Models\ClientsModel;
use App\Models\projectModel;
use App\Models\serviceModel;
use Inertia\Inertia;

class HomeController extends Controller
{
    protected $ServiceModel;
    protected $dataProject;
    protected $client;
    public function __construct()
    {
        $this->ServiceModel = new serviceModel();
        $this->dataProject = new projectModel();
        $this->client = new ClientsModel();
    }
    public function index()
    {
        $data = [
            "title" => "Homepage",
            "Deskripsi" => "Ini Homes",
            "DataService" => $this->ServiceModel->getData(),
            "dataprojects" => $this->dataProject->getData(),
            "dataclients" => $this->client->showOnHome("TRUE"),
        ];
        return Inertia::render('Homepage', $data);
    }
}
