<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContractRequest;
use App\Http\Requests\UpdateContractRequest;
use App\Models\Contract;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContractController extends Controller
{
    public function create($dao_id)
    {
        return Inertia::render('Contract/Create/ContractCreate', ["dao_id" => $dao_id]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'describe' => 'required|string',
            'signatureType' => 'required|string|in:owner,majority,both',
            'members' => 'required|array',
            'members.*.email' => 'required|email',
            'members.*.role' => 'required|in:Creator,Signatory',
            'contract' => 'required|array',
            'fileUrl' => 'nullable|url',
        ]);

        // Handle the storage of the data here. For example:
        $data = $request->all();
        $prefix_token = 201002;
        $data['token'] = $prefix_token . rand(1000000000, 9999999999);
        $contract = Contract::create([
            'name' => $data['name'],
            'describe' => $data['describe'],
            'contract' => json_encode($data['contract']),
            'signatureType' => $data['signatureType'],
            'fileUrl' => $data['fileUrl'],
            'token' => $data['token'],
            'dao_id' => $data['dao_id'],
        ]);

        foreach ($data['members'] as $memberData) {
            $user = User::where(['email' => $memberData['email']])->first();
            $contract->members()->attach($user->id, ['role' => $memberData['role']]);
        }

        $contract->contract = $data['contract']; // You may need to handle this according to your database structure

        return response()->json(['message' => 'Successfully created!'], 201);
    }
    public function show($contract_id)
    {

        $contract = Contract::find($contract_id);
        $contract->load('members');


        return Inertia::render('Contract/Show/ContractShow', ["contract" => $contract]);
    }
}
