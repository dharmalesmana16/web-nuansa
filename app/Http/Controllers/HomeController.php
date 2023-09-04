<?php

namespace App\Http\Controllers;

use App\Models\CarouselModel;
use App\Models\categoryProduct;
use App\Models\ClientsModel;
use App\Models\NewsModel;
use App\Models\serviceModel;
use Inertia\Inertia;

class HomeController extends Controller
{
    protected $ServiceModel;
    protected $news;
    protected $dataProduct;
    protected $client;
    protected $carousel;
    public function __construct()
    {
        $this->ServiceModel = new serviceModel();
        $this->news = new NewsModel();
        $this->carousel = new CarouselModel();
        $this->client = new ClientsModel();
        $this->dataProduct = new categoryProduct();
    }
    public function index()
    {

        $data = [
            "title" => "Homepage",
            "Deskripsi" => "Ini Homes",
            "DataService" => $this->ServiceModel->getData(),
            "news" => $this->news->getData(),
            "dataprojects" => $this->news->getData(),
            "dataclients" => $this->client->showOnHome("TRUE"),
            "dataProduct" => $this->dataProduct->showOnHome("TRUE"),
            "dataProduks" => $this->dataProduct->getData(),
            "carousel" => $this->carousel->getData(),
        ];
        return Inertia::render('Homepage', $data);
    }
}
