<?php

use App\Http\Controllers\AuthController;
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
Route::get('/signin', [AuthController::class, 'signin'])->name("signin");
Route::post('/signin', [AuthController::class, 'check'])->name("signin");
Route::get('/signup', [AuthController::class, 'signup'])->name("signup");
Route::post('/signup', [AuthController::class, 'new']);
Route::get('/dashboard/products', [ProductsController::class, 'dashboard']);
Route::get('/dashboard/products/new', [ProductsController::class, 'new']);
Route::post('/dashboard/products/store', [ProductsController::class, 'store']);

// Route::get('/dashboard', [ProductVideotronController::class, 'index']);
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

Route::controller(ProductCCTVController::class)->prefix('dashboard/product/cctv')->group(function () {
    Route::get('', 'dashboard');
    Route::get('show/{meta}', 'show');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    Route::put('update/{slug}', 'update');
    Route::patch('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{meta}', 'destroy');
});
Route::controller(ProductPABXController::class)->prefix('dashboard/product/pabx')->group(function () {
    Route::get('', 'dashboard');
    Route::get('show/{meta}', 'show');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    Route::put('update/{slug}', 'update');
    Route::patch('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{meta}', 'destroy');
});
Route::controller(ProductIOTController::class)->prefix('dashboard/product/iot')->group(function () {
    Route::get('', 'dashboard');
    Route::get('show/{meta}', 'show');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    Route::put('update/{slug}', 'update');
    Route::patch('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{meta}', 'destroy');
});
Route::controller(ProjectsController::class)->prefix('dashboard/projects')->group(function () {
    Route::get('', 'dashboard');
    Route::get('show/{meta}', 'show');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    Route::put('update/{slug}', 'update');
    Route::patch('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{meta}', 'destroy');
});
Route::controller(ServicesController::class)->prefix('dashboard/services')->group(function () {
    Route::get('', 'dashboard');
    Route::get('show/{meta}', 'show');
    Route::get('new', 'new');
    Route::get('edit/{slug}', 'edit');
    Route::put('update/{slug}', 'update');
    Route::patch('update/{slug}', 'update');
    Route::post('store', 'store');
    Route::delete('{meta}', 'destroy');
});
Route::controller(ProductVideotronController::class)->prefix('dashboard/product/videotron')->group(function () {
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
