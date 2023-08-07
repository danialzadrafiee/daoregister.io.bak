<?php

namespace Database\Seeders;

use App\Models\Dao;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class DaoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $daoData = [
            "name" => "Developerpie",
            "symbol" => "DPI",
            "describe" => "innacle transvaluation endless virtues horror. War spirit truth against burying strong oneself christian contradict christianity. Faithful evil self pinnacle noble christianity. Transvaluation abstract inexpedient depths overcome sexuality abstract.",
            "features" => json_encode(["Automation", "Contracts"]),
            "fileUrl" => "http://localhost:8000/uploads/dao/photo-1558433916-90a36b44753f.jpg",
            "avatar" => "x",
            "token" => 2010011864173149,
            "created_at" => "2023-08-03 20:40:07",
            "updated_at" => "2023-08-03 20:40:07",
        ];

        $dao = Dao::create($daoData);

        // Create Members
        $membersData = [
            [
                "id" => 702612,
                "email" => "subdanial@gmail.com",
                "role" => "Creator",
                "share" => 50,
            ],
            [
                "id" => 702613,
                "email" => "adler@gmail.com",
                "role" => "ShareHolder",
                "share" => 50,
            ],
            [
                "id" => 702614,
                "email" => "info@bnic.io",
                "role" => "ShareHolder",
                "share" => null,
            ],
        ];

        foreach ($membersData as $memberData) {
            $member = User::find($memberData['id']);
            try {
                $dao->members()->attach($member, [
                    'email' => $memberData['email'],
                    'role' => $memberData['role'],
                    'share' => $memberData['share'],
                ]);
            } catch (\Exception $e) {
                Log::error('Error attaching member: ' . $e->getMessage());
            }
        }
    }
}
