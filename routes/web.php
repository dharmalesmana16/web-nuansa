<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CarouselController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\CategoryProductController;
use App\Http\Controllers\ClientsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServicesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
Route::get('/', [HomeController::class, 'index']);
Route::get('/product', [ProductsController::class, 'index']);
Route::get('/news', [NewsController::class, 'index']);
Route::get('/news/{slug}', [NewsController::class, 'show']);
Route::get('/signin', [AuthController::class, 'signin'])->name("signin");
Route::post('/signin', [AuthController::class, 'check'])->name("signin");
Route::get('/signup', [AuthController::class, 'signup'])->name("signup");
Route::post('/signup', [AuthController::class, 'new']);
Route::post('/signout', [AuthController::class, 'signout'])->middleware('auth');
Route::get('/clients', [ClientsController::class, 'index']);
Route::get('/gallery', [GalleryController::class, 'index']);
Route::get('/service', [ServicesController::class, 'index']);
Route::get('/service/{slug}', [ServicesController::class, 'show']);
Route::get('/contactus', [ContactController::class, 'index']);
Route::get('/download/product/{slug}', [ProductsController::class, 'download']);
Route::get('/client/show/{id}', [ClientsController::class, 'detail']);

Route::post('/data/getcatalog', [DataController::class, 'getDataCatalog']);
Route::get('/data/getService', [DataController::class, 'getService']);
Route::post('/data/getCatalogByCategory', [DataController::class, 'getCatalogByCategory']);
Route::get('/data/link/product', [DataController::class, 'getLinkProduct']);
Route::get('/data/link/service', [DataController::class, 'getLinkService']);
Route::controller(ProductsController::class)->prefix('dashboard/products')->middleware(['auth', 'admin'])->group(function () {
    Route::get('', 'dashboard');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    // Route::put('update/{slug}', 'update');
    Route::post('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{slug}', 'destroy');

});
Route::controller(GalleryController::class)->prefix('dashboard/gallery')->middleware(['auth', 'admin'])->group(function () {
    Route::get('', 'dashboard');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    // Route::put('update/{slug}', 'update');
    Route::post('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{slug}', 'destroy');

});
Route::controller(ClientsController::class)->prefix('dashboard/clients')->middleware(['auth', 'admin'])->group(function () {
    Route::get('', 'dashboard');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    // Route::put('update/{slug}', 'update');
    Route::post('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{slug}', 'destroy');

});

Route::controller(CatalogController::class)->prefix('dashboard/catalog')->middleware(['auth', 'admin'])->group(function () {
    Route::get('', 'dashboard');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');

    // Route::put('update/{slug}', 'update');
    Route::post('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{slug}', 'destroy');

});

Route::controller(ClientsController::class)->prefix('dashboard/clients')->middleware(['auth', 'admin'])->group(function () {
    Route::get('', 'dashboard');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');

    // Route::put('update/{slug}', 'update');
    Route::post('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{slug}', 'destroy');
});

Route::controller(CategoryProductController::class)->prefix('dashboard/products/category')->middleware(['auth', 'admin'])->group(function () {
    Route::get('', 'dashboard');
    Route::get('new', 'new');
    Route::post('store', 'store');
    Route::get('edit/{slug}', 'edit');
    Route::post('update/{id}', 'update');
    Route::delete('{slug}', 'destroy');
});

Route::get('/product/{id}', [ProductsController::class, 'show']);
Route::get('/product/show/{id}', [ProductsController::class, 'detail']);

Route::controller(NewsController::class)->prefix('dashboard/news')->middleware('auth')->group(function () {
    Route::get('', 'dashboard');
    Route::get('show/{meta}', 'show');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    Route::post('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{meta}', 'destroy');
});
Route::controller(ServicesController::class)->prefix('dashboard/services')->middleware('auth')->group(function () {
    Route::get('', 'dashboard');
    Route::get('show/{meta}', 'show');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    Route::post('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{id}', 'destroy');
});
Route::controller(CarouselController::class)->prefix('dashboard/carousel')->middleware('auth')->group(function () {
    Route::get('', 'dashboard');
    Route::get('show/{meta}', 'show');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    Route::post('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{meta}', 'destroy');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/DashboardHome');
})->middleware(['auth', 'admin']);
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
