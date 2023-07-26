<?php

namespace App\Http\Controllers;

use App\Models\projectModel;
use App\Models\serviceModel;
use Inertia\Inertia;

class HomeController extends Controller
{
    protected $ServiceModel;
    protected $dataProject;
    public function __construct()
    {
        $this->ServiceModel = new serviceModel();
        $this->dataProject = new projectModel();
    }
    public function index()
    {
        $data = [
            "title" => "Homepage",
            "Deskripsi" => "Ini Homes",
            "DataService" => $this->ServiceModel->getDataInHome(),
            "dataprojects" => $this->dataProject->getDataInHome(),
        ];
        return Inertia::render('Homepage', $data);
    }
}
