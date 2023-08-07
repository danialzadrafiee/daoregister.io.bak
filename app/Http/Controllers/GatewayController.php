<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GatewayController extends Controller
{
    public function index($error = null)
    {
        return Inertia::render('Login/Login', ["error" => $error]);
    }

    public function login($wallet)
    {

        $user = User::where('wallet', $wallet)->first();
        if ($user) {
            if ($user->user_type == "invidual") {
                Auth::login($user);
                return to_route('dashboard.index');
            } else {
                return to_route('gateway.index', ['error' => 'This version only support invidual users']);
            }
        } else {
            return 'false';
        }
    }

    public function logout()
    {
        Auth::logout();
    }
}
