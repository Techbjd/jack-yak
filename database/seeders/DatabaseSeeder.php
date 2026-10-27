<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

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

        // Demo login profile — credentials live in .env (DEMO_USER_*) via config/demo.php.
        User::updateOrCreate(
            ['email' => (string) config('demo.email', 'jackyak.demo@gmail.com')],
            [
                'name' => (string) config('demo.name', 'Demo Traveler'),
                'password' => Hash::make(
                    (string) config('demo.password', 'Demo12345!')
                ),
                'email_verified_at' => now(),
            ]
        );

        // First admin account — opt-in via ADMIN_EMAIL / ADMIN_PASSWORD env
        // (see config/admin.php). No env set = no admin account created.
        if (config('admin.email')) {
            User::updateOrCreate(
                ['email' => (string) config('admin.email')],
                [
                    'name' => 'Admin',
                    'password' => Hash::make((string) (config('admin.password') ?? 'admin'.Str::random(24).'!A1')),
                    'email_verified_at' => now(),
                    'is_admin' => true,
                ]
            );
        }
    }
}
