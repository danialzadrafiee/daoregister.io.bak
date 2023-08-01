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
        // Validate the request
        $validatedData = $request->validate([
            'name' => 'required|string|max:100',
            'symbol' => 'required|string|max:3',
            'describe' => 'required|string|max:300',
            'feautures' => 'required|array',
            'feautures.*' => 'string', // Validate each feature in the array
            'members' => 'required|array',
            'members.*.email' => 'required|email', // Validate each member's email
            'members.*.role' => 'required|string', // Validate each member's role
            'members.*.share' => 'required|string', // Validate each member's share
        ]);

        // Store the data in the database (assuming you have a Dao model)
        $dao = new Dao();
        $dao->name = $validatedData['name'];
        $dao->symbol = $validatedData['symbol'];
        $dao->describe = $validatedData['describe'];
        $dao->feautures = json_encode($validatedData['feautures']); // Store as a JSON string

        return $dao;
        // $dao->save();


        // Return a response
        // return response()->json(['message' => 'Data saved successfully!']);
    }
}
