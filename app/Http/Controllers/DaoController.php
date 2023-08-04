<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDaoRequest;
use App\Http\Requests\UpdateDaoRequest;
use App\Models\Dao;
use App\Models\Feature;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Inertia\Inertia;

class DaoController extends Controller
{
    public function index()
    {
        $daos = Dao::all()->each(function ($dao) {
            $dao->load('members');
        });
        return Inertia::render("Dao/Index/DaoIndex", ["daos" => $daos]);
    }
    public function create()
    {
        return Inertia::render("Dao/Create/DaoCreate");
    }
    public function dashboard($dao_id)
    {
        $dao = Dao::find($dao_id);
        $dao->load('members');
        return Inertia::render("Dao/Dashboard/DaoDashboard", ["dao" => $dao]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|alpha_num|min:3|max:100',
            'symbol' => 'required|alpha_num|min:2|max:100',
            'describe' => 'required|string|min:5|max:320',
            'features' => 'array|min:1',
            'members' => 'required|array|min:2',
            'members.*.email' => 'required|email',
            'members.*.role' => 'required|string',
            'members.*.share' => 'nullable|numeric',
            'fileUrl' => 'nullable|url',
        ]);

        $daoData = Arr::except($validatedData, ['members']);
        $daoData['features'] = json_encode($validatedData['features']);
        $prefix_dao = 201001;
        $daoData['token'] = $prefix_dao . rand(1000000000, 9999999999);
        $daoData['avatar'] = 'x';
        $dao = Dao::create($daoData);
        foreach ($validatedData['members'] as $member) {
            $user = User::where(['email' => $member['email']])->first();
            $dao->members()->attach($user->id, [
                'email' => $member['email'],
                'role' => $member['role'],
                'share' => $member['share'],
            ]);
        }

        return response()->json(['message' => 'DAO created successfully!']);
    }
    public function show($dao_id)
    {
        $dao = Dao::with('members')->find($dao_id);

        if (!$dao) {
            return redirect()->route('dao.index')->with('error', 'DAO not found!');
        }

        return Inertia::render('Dao/Show/DaoShow', ['dao' => $dao]);
    }
}
