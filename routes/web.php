<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\BackgroundImageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [ImageController::class, 'index']);
Route::post('/upload', [ImageController::class, 'upload'])->name('upload');
Route::post('/api/save-background-image', [BackgroundImageController::class, 'store']);

Route::get('/backgroundImage-path', [BackgroundImageController::class, 'getPath']);
