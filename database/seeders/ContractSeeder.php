<?php

namespace Database\Seeders;

use App\Models\Contract;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContractSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $contract = Contract::create([
            'id' => '1',
            'dao_id' => '1',
            'token' => '2010023602271278',
            'name' => 'Bulk Servers',
            'describe' => 'Buy 100 servers for mining',
            'signatureType' => 'majority',
            'contract' => '{"time":1691347309260,"blocks":[{"id":"sheNwCUP5A","type":"header","data":{"text":"Contract Title","level":1}},{"id":"sheNXCUP5A","type":"header","data":{"text":"Example contract description","level":4}},{"id":"12iM3lqzcm","type":"paragraph","data":{"text":"Hey. Meet the new Editor. On this page you can see it in action \u2014 try to edit this text."}},{"id":"GcDQu5SpTF","type":"paragraph","data":{"text":"w"}}],"version":"2.27.2"}',
            'nftUri' => null,
            'fileUrl' => 'http://localhost:8000/uploads/contract/photo-1690740551294-50239800ca16.webp',
            'created_at' => '2023-08-06 18:52:50',
            'updated_at' => '2023-08-06 18:52:50',
        ]);
        $userIds = [702612, 702613];
        foreach ($userIds as $userId) {
            $user = User::find($userId);
            if ($user) {
                $contract->members()->attach($user->id, ['role' => 'Member', 'signed' => 0]); // Adjust the role and signed attributes as needed
            }
        }
    }
}
