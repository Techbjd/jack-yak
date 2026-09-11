<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Demo login profile — credentials live in .env (DEMO_USER_*).
        User::updateOrCreate(
            ['email' => env('DEMO_USER_EMAIL', 'jackyak.demo@gmail.com')],
            [
                'name' => env('DEMO_USER_NAME', 'Demo Traveler'),
                'password' => Hash::make(
                    env('DEMO_USER_PASSWORD', 'Demo12345!')
                ),
                'email_verified_at' => now(),
            ]
        );
    }
}
