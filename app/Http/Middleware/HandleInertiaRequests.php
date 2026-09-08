<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'auth' => [
                'user' => $request->user(),
            ],
            'colors' => [
                'navy' => config('colors.navy'),
                'navy_light' => config('colors.navy_light'),
                'navy_gradient' => config('colors.navy_gradient'),
                'teal' => config('colors.teal'),
                'orange' => config('colors.orange'),
                'blue_icon' => config('colors.blue_icon'),
                'ember' => config('colors.ember'),
                'text_primary' => config('colors.text_primary'),
                'text_white' => config('colors.text_white'),
                'bg_cream' => config('colors.bg_cream'),
                'bg_warm' => config('colors.bg_warm'),
                'bg_placeholder' => config('colors.bg_placeholder'),
                'progress' => config('colors.progress'),
            ],
        ];
    }
}
