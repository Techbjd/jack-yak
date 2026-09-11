<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;

test('guests see login page and users page requires auth', function (): void {
    $this->get(route('login'))->assertOk();
    $this->get(route('register'))->assertOk();
    $this->get(route('user'))->assertRedirect(route('login'));
});

test('users can register, login, and logout', function (): void {
    $this->post(route('register.store'), [
        'name' => 'Jane Trekker',
        'email' => 'jane@example.com',
        'password' => 'password123',
        'password_confirmation' => 'password123',
    ])->assertRedirect(route('user'));

    $this->assertAuthenticated();

    $this->post(route('logout'))->assertRedirect(route('home'));

    $this->assertGuest();

    $user = User::factory()->create([
        'email' => 'login@example.com',
        'password' => Hash::make('password123'),
    ]);

    $this->post(route('login.store'), [
        'email' => 'login@example.com',
        'password' => 'password123',
    ])->assertRedirect(route('user'));

    $this->assertAuthenticatedAs($user->fresh());

    $this->post(route('login.store'), [
        'email' => 'login@example.com',
        'password' => 'wrong-password',
    ]);
});

test('login rejects invalid credentials', function (): void {
    User::factory()->create(['email' => 'sam@example.com']);

    $this->post(route('login.store'), [
        'email' => 'sam@example.com',
        'password' => 'wrong-password',
    ])->assertInvalid('email');

    $this->assertGuest();
});

test('availability requests are validated and stored', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)->post(route('availability.store'), [
        'date' => now()->addDay()->toDateString(),
        'travelers' => 2,
        'duration' => '4–7 Days',
        'looking_for' => 'Trekking & Hiking',
    ])->assertRedirect()->assertSessionHas('success');

    $this->assertDatabaseHas('availability_requests', [
        'user_id' => $user->id,
        'travelers' => 2,
    ]);

    $this->post(route('availability.store'), [
        'date' => null,
        'travelers' => 0,
    ])->assertInvalid(['date', 'travelers']);
});

test('reviews are validated and stored', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)->post(route('reviews.store'), [
        'rating' => 5,
        'body' => 'Sunrise over the Himalayas was unforgettable.',
        'place' => 'Mount Everest',
        'visit_date' => now()->subWeek()->toDateString(),
        'name' => 'Jane Trekker',
    ])->assertRedirect()->assertSessionHas('success');

    $this->assertDatabaseHas('reviews', [
        'user_id' => $user->id,
        'rating' => 5,
        'place' => 'Mount Everest',
    ]);

    $this->post(route('reviews.store'), [
        'rating' => 0,
        'body' => '',
        'place' => '',
        'visit_date' => now()->addDay()->toDateString(),
        'name' => '',
    ])->assertInvalid(['rating', 'body', 'place', 'visit_date', 'name']);
});

test('quiz submissions are validated and stored', function (): void {
    $this->post(route('quiz.store'), [
        'name' => 'Alex',
        'email' => 'alex@example.com',
        'answers' => [
            'experience' => 'Trekking & Hiking',
            'companion' => 'Friends',
            'duration' => '4–7 Days',
            'activity' => 'Active',
            'season' => 'Autumn',
        ],
    ])->assertRedirect()->assertSessionHas('success');

    $this->assertDatabaseHas('quiz_submissions', [
        'email' => 'alex@example.com',
    ]);

    $this->post(route('quiz.store'), [
        'name' => '',
        'email' => 'not-an-email',
        'answers' => [],
    ])->assertInvalid(['name', 'email']);
});

test('user page shows stats for authenticated user', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)->get(route('user'))->assertOk();
});
