<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Gate for the admin area: per-account authorization on top of the `auth`
 * guard. Registered as the `admin` middleware alias in bootstrap/app.php —
 * routes that manage form submissions / reviews must always be behind
 * Route::middleware(['auth', 'admin']).
 */
class EnsureUserIsAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        abort_unless(
            (bool) $request->user()?->is_admin,
            Response::HTTP_FORBIDDEN,
            'Admin access required.',
        );

        return $next($request);
    }
}
