<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function get_user_by_auth()
    {
        return Auth::user();
    }
    public function get_user_by_id($id)
    {
        return User::find($id);
    }
    public function get_users_by_term($term = null)
    {
        if (empty($term)) {
            return User::get();
        }
        $users = User::where('first_name', 'LIKE', '%' . $term . '%')
            ->orWhere('last_name', 'LIKE', '%' . $term . '%')
            ->orWhere('corp_name', 'LIKE', '%' . $term . '%')
            ->orWhere('email', 'LIKE', '%' . $term . '%')
            ->get();
        return $users;
    }
}
