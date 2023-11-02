<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usertoken = 10000;
        $danial = [
            'isAdmin' => 1,
            'birthday' => '1993-04-30',
            'country_primary' => 'IR',
            'country_secondary' => 'US',
            'state_primary' => '23',
            'state_secondary' => '1',
            'created_at' => '2023-05-28 10:33:00',
            'cv' => 'Highly skilled and motivated web developer with 5 years of experience in designing and developing responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and various front-end frameworks. Strong problem-solving abilities and a passion for creating user-friendly and visually appealing websites. Committed to delivering high-quality code and meeting project deadlines.',
            'edu_country' => '["BH","BD"]',
            'edu_univercity' => '["Bahrain Polytechnic","City University"]',
            'edu_degree' => '["PHD","GOD"]',
            'edu_field' => '["Psychoanalysis","Math"]',
            'email' => 'subdanial@gmail.com',
            'first_name' => 'danial',
            'gender' => 'male',
            'id' => '702612',
            'language' => '["bh","en"]',
            'last_name' => 'rafiee',
            'profession' => '["psychologist","Developer"]',
            'skill' => '["TA","PHP"]',
            'updated_at' => '2023-05-28 10:33:00',
            'user_type' => 'invidual',
            'wallet' => '0x2835D509d120490807508e498DD06c0eEFbc6597',
            'website' => 'https://www.jamofasyfa.mobi',
            'profile_picture' => "https://api.dicebear.com/6.x/identicon/svg?seed=danialzadrafiee&backgroundType=solid,gradientLinear&backgroundColor=cbe5fe&rowColor=0084ff",
            "token" => ++$usertoken,
            "is_fee_paid" => 1,
        ];
        $adler = [
            'birthday' => '1993-04-30',
            'country_primary' => 'IR',
            'country_secondary' => '0',
            'created_at' => '2023-05-28 10:33:00',
            'cv' => 'Highly skilled and motivated web developer with 5 years of experience in designing and developing responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and various front-end frameworks. Strong problem-solving abilities and a passion for creating user-friendly and visually appealing websites. Committed to delivering high-quality code and meeting project deadlines.',
            'edu_country' => '["AX"]',
            'edu_degree' => '["PHD"]',
            'edu_field' => '["Pianist"]',
            'edu_univercity' => '["NO"]',
            'email' => 'adler@gmail.com',
            'first_name' => 'Adler',
            'gender' => 'male',
            'id' => '702613',
            'language' => '["bh"]',
            'last_name' => 'Velli',
            'profession' => '["Developer"]',
            'skill' => '["Javascript"]',
            'state_primary' => '23',
            'state_secondary' => '0',
            'updated_at' => '2023-05-28 10:33:00',
            'user_type' => 'invidual',
            'wallet' => '0x5A4dDeB3911c24edAe11823123Cd8D7dA57Cafb6',
            'website' => 'https://www.jamofasyfa.mobi',
            'profile_picture' => "https://api.dicebear.com/6.x/identicon/svg?seed=adlervelli&backgroundType=solid,gradientLinear&backgroundColor=cbe5fe&rowColor=0084ff",
            "token" => ++$usertoken,

        ];
        $developerpie = [
            'corp_cat_pri' => 'educational',
            'corp_cat_sec' => 'K-12 Education',
            'corp_country_pri' => 'IR',
            'corp_country_sec' => '0',
            'corp_cv' => "DeveloperPie Web Solutions is a dynamic web development corporation that specializes in creating visually stunning and highly functional websites for businesses of all sizes. With a passion for creativity and a focus on delivering exceptional user experiences, DeveloperPie takes pride in building websites that stand out in today's competitive online landscape.",
            'corp_establishment' => '2021-03-06',
            'corp_form' => 'classic',
            'corp_name' => 'DeveloperPie',
            'corp_state_pri' => '23',
            'corp_state_sec' => '0',
            'corp_type' => 'corporation',
            'created_at' => '2023-05-28 10:47:22',
            'email' => 'info@bnic.io',
            'id' => '702614',
            'updated_at' => '2023-05-28 10:47:22',
            'user_type' => 'corporation',
            'wallet' => '0x63a3E8613ae36e2Cbbb8Dc6f4427BE38C18Bc596',
            'website' => 'https://bnic.io',
            'profile_picture' => "https://api.dicebear.com/6.x/identicon/svg?seed=developerpie&backgroundType=solid,gradientLinear&backgroundColor=cbe5fe&rowColor=0084ff",
            "token" => ++$usertoken,
        ];

        $danial_user = User::create($danial);
        $adler_user = User::create($adler);
        $developerpie_user = User::create($developerpie);
    }
}
