<?php

use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TranslationController;
use App\Http\Controllers\UserController;

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

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::get('/user', [UserController::class, 'user']);
Route::post('/login', [UserController::class, 'postLogin']);
Route::post('/logout', [UserController::class, 'logout']);


Route::get('/translation/{locale}/{namespace}', [TranslationController::class, 'index'])
    ->where('locale', '.+')
    ->where('namespace', '.+');

Route::get('/{any}', [HomeController::class, 'index'])->where('any', '.*')->name('home');
