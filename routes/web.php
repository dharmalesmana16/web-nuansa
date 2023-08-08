<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\CategoryProductController;
use App\Http\Controllers\ClientsController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductCCTVController;
use App\Http\Controllers\ProductIOTController;
use App\Http\Controllers\ProductPABXController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProductVideotronController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectsController;
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
Route::get('/project', [ProjectsController::class, 'index']);
Route::get('/project/{slug}', [ProjectsController::class, 'show']);
Route::get('/signin', [AuthController::class, 'signin'])->name("signin");
Route::post('/signin', [AuthController::class, 'check'])->name("signin");
Route::get('/signup', [AuthController::class, 'signup'])->name("signup");
Route::post('/signup', [AuthController::class, 'new']);
Route::post('/signout', [AuthController::class, 'signout'])->middleware('auth');
Route::get('/clients', [ClientsController::class, 'index']);
Route::get('/gallery', [GalleryController::class, 'index']);
Route::get('/client/show/{id}', [ClientsController::class, 'detail']);

Route::post('/data/getcatalog', [DataController::class, 'getDataCatalog']);
Route::get('/data/link/product', [DataController::class, 'getLinkProduct']);
Route::controller(ProductsController::class)->prefix('dashboard/products')->middleware('auth')->group(function () {
    Route::get('', 'dashboard');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    // Route::put('update/{slug}', 'update');
    Route::post('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{slug}', 'destroy');

});
Route::controller(GalleryController::class)->prefix('dashboard/gallery')->middleware('auth')->group(function () {
    Route::get('', 'dashboard');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    // Route::put('update/{slug}', 'update');
    Route::post('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{slug}', 'destroy');

});
Route::controller(ClientsController::class)->prefix('dashboard/clients')->middleware('auth')->group(function () {
    Route::get('', 'dashboard');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    // Route::put('update/{slug}', 'update');
    Route::post('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{slug}', 'destroy');

});

Route::controller(CatalogController::class)->prefix('dashboard/catalog')->middleware('auth')->group(function () {
    Route::get('', 'dashboard');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');

    // Route::put('update/{slug}', 'update');
    Route::post('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{slug}', 'destroy');

});

Route::controller(ClientsController::class)->prefix('dashboard/clients')->middleware('auth')->group(function () {
    Route::get('', 'dashboard');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');

    // Route::put('update/{slug}', 'update');
    Route::post('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{slug}', 'destroy');
});

Route::controller(CategoryProductController::class)->prefix('dashboard/products/category')->middleware('auth')->group(function () {
    Route::get('', 'dashboard');
    Route::get('new', 'new');
    Route::post('store', 'store');
    Route::get('edit/{slug}', 'edit');
    Route::post('update/{id}', 'update');
    Route::delete('{slug}', 'destroy');
});

Route::get('/product/{id}', [ProductsController::class, 'show']);
Route::get('/product/show/{id}', [ProductsController::class, 'detail']);

Route::controller(ProductCCTVController::class)->prefix('product/cctv')->group(function () {
    Route::get('', 'index');
    Route::get('{slug}', 'show');
});

Route::controller(ProductVideotronController::class)->prefix('product/videotron')->group(function () {
    Route::get('', 'index');
    Route::get('{slug}', 'show');
});

Route::controller(ProductPABXController::class)->prefix('product/pabx')->group(function () {
    Route::get('', 'index');
    Route::get('{slug}', 'show');
});

Route::controller(ProductIOTController::class)->prefix('product/iot')->group(function () {
    Route::get('', 'index');
    Route::get('{slug}', 'show');
});

Route::controller(ProjectsController::class)->prefix('dashboard/projects')->middleware('auth')->group(function () {
    Route::get('', 'dashboard');
    Route::get('show/{meta}', 'show');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    Route::put('update/{slug}', 'update');
    Route::patch('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{meta}', 'destroy');
});
Route::controller(ServicesController::class)->prefix('dashboard/services')->middleware('auth')->group(function () {
    Route::get('', 'dashboard');
    Route::get('show/{meta}', 'show');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    Route::put('update/{slug}', 'update');
    Route::patch('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{meta}', 'destroy');
});
Route::controller(ProductVideotronController::class)->prefix('dashboard/product/videotron')->middleware('auth')->group(function () {
    Route::get('', 'dashboard');
    Route::get('show/{meta}', 'show');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    Route::put('update/{meta}', 'update');
    Route::post('store', 'store');
    Route::delete('{meta}', 'delete');
});

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard/Index');
// })->middleware(['auth']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/DashboardHome');
})->middleware('auth');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
