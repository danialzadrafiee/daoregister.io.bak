<?php

namespace Database\Seeders;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Document;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Testing\Fakes\Fake;

class DatabaseSeeder extends Seeder
{

    public function run(): void
    {
        $this->call(UserSeeder::class);
        $this->call(DaoSeeder::class);
        $this->call(ContractSeeder::class);
    }
}
