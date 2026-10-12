<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $urls = collect([
            'home',
            'destinations',
            'view-all',
            'guide',
            'about',
            'itinerary',
        ])->map(function (string $name): array {
            return [
                'loc' => route($name),
                'lastmod' => today()->toDateString(),
                'changefreq' => 'weekly',
                'priority' => $name === 'home' ? '1.0' : '0.8',
            ];
        });

        $entries = $urls->map(fn (array $url): string => '    <url>'.PHP_EOL.
            '        <loc>'.e($url['loc']).'</loc>'.PHP_EOL.
            '        <lastmod>'.e($url['lastmod']).'</lastmod>'.PHP_EOL.
            '        <changefreq>'.e($url['changefreq']).'</changefreq>'.PHP_EOL.
            '        <priority>'.e($url['priority']).'</priority>'.PHP_EOL.
            '    </url>')->implode(PHP_EOL);

        $xml = '<?xml version="1.0" encoding="UTF-8"?>'.PHP_EOL.
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'.PHP_EOL.
            $entries.PHP_EOL.
            '</urlset>';

        return response($xml)->header('Content-Type', 'text/xml');
    }
}
