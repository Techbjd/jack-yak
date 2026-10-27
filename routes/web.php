<?php

use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\HandleGoogleCallback;
use App\Http\Controllers\Auth\Login;
use App\Http\Controllers\Auth\Logout;
use App\Http\Controllers\Auth\RedirectToGoogle;
use App\Http\Controllers\Auth\Register;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\AvailabilityController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\QuizSubmissionController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\RobotsController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/home')->name('root');

Route::get('/sitemap.xml', SitemapController::class)->name('sitemap');
Route::get('/robots.txt', RobotsController::class)->name('robots');

Route::inertia('/home', 'Home')->name('home');
Route::inertia('/destinations', 'Destination')->name('destinations');
Route::inertia('/view-all', 'ViewAll')->name('view-all');
Route::inertia('/guide', 'Guide')->name('guide');
Route::inertia('/about', 'About')->name('about');
Route::inertia('/itinerary', 'Itinerary')->name('itinerary');
Route::inertia('/form', 'Quiz')->name('form');

Route::middleware('guest')->group(function (): void {
    Route::get('/login', [Login::class, 'show'])->name('login');
    Route::post('/login', Login::class)->middleware('throttle:5,1')->name('login.store');
    Route::get('/register', [Register::class, 'show'])->name('register');
    Route::post('/register', Register::class)->middleware('throttle:5,1')->name('register.store');
    Route::get('/forgot-password', [ForgotPasswordController::class, 'create'])->name('password.request');
    Route::post('/forgot-password', [ForgotPasswordController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('password.email');
    Route::get('/reset-password/{token}', [ResetPasswordController::class, 'create'])->name('password.reset');
    Route::post('/reset-password', [ResetPasswordController::class, 'store'])->name('password.update');
});

Route::post('/logout', Logout::class)->middleware('auth')->name('logout');

Route::middleware('auth')->group(function (): void {
    Route::get('/user', UserController::class)->name('user');
});

Route::post('/availability', AvailabilityController::class)->middleware('throttle:20,1')->name('availability.store');
Route::post('/reviews', ReviewController::class)->middleware('throttle:20,1')->name('reviews.store');
Route::post('/quiz', QuizSubmissionController::class)->middleware('throttle:20,1')->name('quiz.store');
Route::post('/newsletter', NewsletterController::class)->middleware('throttle:20,1')->name('newsletter.store');

Route::get('/auth/google', RedirectToGoogle::class)->middleware('throttle:10,1')->name('google.redirect');
Route::get('/auth/google/callback', HandleGoogleCallback::class)->middleware('throttle:10,1')->name('google.callback');

// for the newsletter subscription form
Route::post('/newsletter', NewsletterController::class)->middleware('throttle:10,1')->name('newsletter.store');
