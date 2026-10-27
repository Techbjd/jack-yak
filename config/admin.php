<?php

return [

    /*
    |--------------------------------------------------------------------------
    | First Admin Account
    |--------------------------------------------------------------------------
    |
    | The admin gate (EnsureUserIsAdmin) needs at least one admin user to be
    | useful. Set these in your .env / Railway variables and the DatabaseSeeder
    | promotes (or creates) that user on `php artisan migrate:fresh --seed`
    | and on every deploy reseed. Leave ADMIN_EMAIL empty and nothing happens —
    | safe defaults, promotion is always opt-in.
    |
    */

    'email' => env('ADMIN_EMAIL'),

    'password' => env('ADMIN_PASSWORD'),

];
