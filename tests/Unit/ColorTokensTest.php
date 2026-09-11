<?php

// Guards the color system: hex values live in resources/js/config/colors.ts
// (COLORS) and must be mirrored as --color-* vars in resources/css/app.css
// (@theme) plus the `color:` list in resources/js/lib/utils.ts (tailwind-merge).
// A newcomer adding a color to only one place fails here, not in production.

function colorTokens(): array
{
    // Unit suite doesn't boot the app — resolve from the test file location.
    $root = dirname(__DIR__, 2);
    $colorsTs = file_get_contents($root.'/resources/js/config/colors.ts');
    $css = file_get_contents($root.'/resources/css/app.css');
    $utilsTs = file_get_contents($root.'/resources/js/lib/utils.ts');

    // COLORS entries: 4-space indented `key: '#rrggbb'` (interface has no hex, so excluded).
    preg_match_all("/^ {4}([a-z_]+):\s*'(#[0-9a-fA-F]{6})'/m", $colorsTs, $ts);
    $fromTs = array_combine($ts[1], array_map('strtolower', $ts[2]));

    preg_match_all('/--color-([a-z-]+):\s*(#[0-9a-fA-F]{6})/', $css, $cssVars);
    $fromCss = array_combine(
        array_map(fn ($k) => str_replace('-', '_', $k), $cssVars[1]),
        array_map('strtolower', $cssVars[2])
    );

    preg_match_all("/'([a-z-]+)',/", $utilsTs, $utilColors);
    $fromUtils = array_map(fn ($k) => str_replace('-', '_', $k), $utilColors[1]);

    return [$fromTs, $fromCss, $fromUtils, $cssVars[1]];
}

test('every COLORS token has a matching --color-* var with the same hex', function () {
    [$fromTs, $fromCss] = colorTokens();

    $missing = array_diff_key($fromTs, $fromCss);
    expect($missing)->toBeEmpty('in COLORS but missing from app.css @theme: '.implode(', ', array_keys($missing)));

    foreach ($fromTs as $key => $hex) {
        expect($fromCss[$key])->toBe($hex, "--color-{$key} drifted between colors.ts and app.css");
    }
});

test('every --color-* var is registered in tailwind-merge (lib/utils.ts)', function () {
    [, $fromCss, $fromUtils] = colorTokens();

    $missing = array_diff(array_keys($fromCss), $fromUtils);
    expect($missing)->toBeEmpty('missing from the color: list in lib/utils.ts: '.implode(', ', $missing));
});

test('no duplicate --color-* definitions in app.css', function () {
    [, , , $cssKeys] = colorTokens();

    expect($cssKeys)->toHaveCount(count(array_unique($cssKeys)), 'duplicate --color-* var in app.css @theme');
});
