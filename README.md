# Ansari's Famous Cendol

## Production deployment

1. Copy `backend/.env.production.example` to `backend/.env`, set a unique `APP_KEY` with `php artisan key:generate`, and set the real HTTPS domain in `APP_URL` and `CORS_ALLOWED_ORIGINS`.
2. Build and start the application: `docker compose up --build -d`.
3. Run migrations and idempotent seed data once after each release: `docker compose exec backend php artisan migrate --force && docker compose exec backend php artisan db:seed --force`.
4. Create the first moderator account interactively: `docker compose exec backend php artisan admin:create admin@example.com --name="Site Admin"`.

The production compose setup serves the React app through nginx and PHP through PHP-FPM. SQLite data and uploaded memory photos live in named Docker volumes; back them up before infrastructure changes. Do not commit `.env`, private keys, generated frontend output, or dependency directories.
