<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/home', 'Home')->name('home');
Route::inertia('/destinations', 'Destination')->name('destinations');
Route::inertia('/view-all', 'ViewAll')->name('view-all');
Route::inertia('/guide', 'Guide')->name('guide');
Route::inertia('/login', 'Login')->name('login');
Route::inertia('/form', 'Quiz')->name('form');
