#!/bin/bash

set -e

if [ "$IS_LARAVEL" = "true" ]; then
  # Railpack bakes `php artisan config:cache` at BUILD time, where no .env and no
  # runtime env vars exist. That bakes `app.key => null` and a null `database.host`
  # into bootstrap/cache/config.php, and cached config ignores runtime env vars.
  # Clear it first so migrations and the app boot with the real environment.
  php artisan optimize:clear

  if [ "$RAILPACK_SKIP_MIGRATIONS" != "true" ]; then
    # Run migrations and seeding database ...
    echo "Running migrations and seeding database ..."
    php artisan migrate --force
  fi

  php artisan storage:link

  # Re-cache now that APP_KEY / DB_* are present in the environment.
  php artisan optimize

  echo "Starting Laravel server ..."
fi

# Start the FrankenPHP server
docker-php-entrypoint --config /Caddyfile --adapter caddyfile 2>&1
