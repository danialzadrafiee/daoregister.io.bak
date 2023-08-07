<?php

use App\Http\Controllers\GatewayController;
use App\Http\Controllers\DashboardController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // return  Inertia::render('Login/Login');
    return to_route('gateway.index');
});
Route::get('/fa', function () {
    $user = User::find(702612);
    Auth::login($user);
    return to_route('dashboard.index');
})->name('gateway.fake');

Route::auto('gateway', 'GatewayController');
/** @see App\Http\Controllers\GatewayController  **/


Route::auto('/dashboard', 'DashboardController', [
    'middleware' => 'auth',
]);


/** @see App\Http\Controllers\DashboardController  **/

Route::auto('dao', 'DaoController', [
    'middleware' => 'auth',
]);
/** @see App\Http\Controllers\DaoController  **/

Route::auto('user', 'UserController', [
    'middleware' => 'auth',
]);
/** @see App\Http\Controllers\UserController  **/

Route::auto('upload', 'UploadController', [
    'middleware' => 'auth',
]);
/** @see App\Http\Controllers\UploadController  **/

Route::auto('contract', 'ContractController', [
    'middleware' => 'auth',
]);
/** @see App\Http\Controllers\ContractController  **/
