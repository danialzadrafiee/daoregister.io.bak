<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContractRequest;
use App\Http\Requests\UpdateContractRequest;
use App\Models\Contract;
use Inertia\Inertia;

class ContractController extends Controller
{
    public function create()
    {
        return  Inertia::render('Contract/Create/ContractCreate');
    }
}
