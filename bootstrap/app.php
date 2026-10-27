<?php

use App\Http\Middleware\EnsureUserIsAdmin;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Exceptions\ThrottleRequestsException;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);

        $middleware->alias([
            'admin' => EnsureUserIsAdmin::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->shouldRenderJsonWhen(
            fn (Request $request) => $request->is('api/*') || $request->expectsJson(),
        );

        // Friendly lockout: instead of the raw 429 page, send auth forms back
        // with an inline error so the user stays on the same page.
        $exceptions->respond(function (Response $response, Throwable $e, Request $request) {
            if ($e instanceof ThrottleRequestsException
                && $request->is('login', 'register', 'forgot-password', 'reset-password')) {
                $retry = (int) ($e->getHeaders()['Retry-After'] ?? 60);

                return back()->withErrors([
                    'email' => 'Too many attempts. Try again in '.$retry.' seconds.',
                ]);
            }

            return $response;
        });
    })->create();
