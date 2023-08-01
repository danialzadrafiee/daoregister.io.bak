<?php

use App\Http\Controllers\GatewayController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // return  Inertia::render('Login/Login');
    return to_route('gateway.index');
});


Route::auto('gateway', 'GatewayController');
/** @see App\Http\Controllers\GatewayController  **/

Route::auto('dashboard', 'DashboardController');
/** @see App\Http\Controllers\DashboardController  **/

Route::auto('dao', 'DaoController');
/** @see App\Http\Controllers\DaoController  **/
