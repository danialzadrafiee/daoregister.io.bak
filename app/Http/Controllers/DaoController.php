<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDaoRequest;
use App\Http\Requests\UpdateDaoRequest;
use App\Models\Dao;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DaoController extends Controller
{
    public function index()
    {
        return Inertia::render("Dao/Index/DaoIndex");
    }
    public function create()
    {
        return Inertia::render("Dao/Create/DaoCreate");
    }
    public function dashboard($dao_id)
    {
        $dao = Dao::find($dao_id);
        return Inertia::render("Dao/Dashboard/DaoDashboard", ["dao" => $dao]);
    }

    public function store(Request $request)
    {
        return $request;
    }
}
