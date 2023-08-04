<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GatewayController extends Controller
{
    public function index()
    {
        return Inertia::render('Login/Login');
    }

    public function login($wallet)
    {

        $user = User::where('wallet', $wallet)->first();
        if ($user) {
            Auth::login($user);
            return to_route('dashboard.index');
        } else {
            return 'false';
        }
    }
}
