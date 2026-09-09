<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/home', 'Home')->name('home');
Route::inertia('/destinations', 'Destination')->name('destinations');
Route::inertia('/about', 'About')->name('about');
