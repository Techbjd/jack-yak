<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Demo User
    |--------------------------------------------------------------------------
    |
    | Credentials for the demo login profile used for local testing.
    | Values live in .env (DEMO_USER_*) so config caching keeps working.
    |
    */

    'name' => env('DEMO_USER_NAME', 'Demo Traveler'),
    'email' => env('DEMO_USER_EMAIL', 'jackyak.demo@gmail.com'),
    'password' => env('DEMO_USER_PASSWORD', 'Demo12345!'),

];
