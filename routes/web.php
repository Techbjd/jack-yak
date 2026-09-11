<?php

use App\Http\Controllers\Auth\Login;
use App\Http\Controllers\Auth\Logout;
use App\Http\Controllers\Auth\Register;
use App\Http\Controllers\AvailabilityController;
use App\Http\Controllers\QuizSubmissionController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/home')->name('root');

Route::inertia('/home', 'Home')->name('home');
Route::inertia('/destinations', 'Destination')->name('destinations');
Route::inertia('/view-all', 'ViewAll')->name('view-all');
Route::inertia('/guide', 'Guide')->name('guide');
Route::inertia('/about', 'About')->name('about');
Route::inertia('/form', 'Quiz')->name('form');

Route::middleware('guest')->group(function (): void {
    Route::get('/login', [Login::class, 'show'])->name('login');
    Route::post('/login', Login::class)->name('login.store');
    Route::get('/register', [Register::class, 'show'])->name('register');
    Route::post('/register', Register::class)->name('register.store');
});

Route::post('/logout', Logout::class)->middleware('auth')->name('logout');

Route::middleware('auth')->group(function (): void {
    Route::get('/user', UserController::class)->name('user');
});

Route::post('/availability', AvailabilityController::class)->name('availability.store');
Route::post('/reviews', ReviewController::class)->name('reviews.store');
Route::post('/quiz', QuizSubmissionController::class)->name('quiz.store');
