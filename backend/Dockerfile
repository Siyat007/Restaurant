FROM php:8.4-cli-alpine

# Install system dependencies
RUN apk add --no-cache \
    sqlite-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    zip \
    libzip-dev \
    unzip \
    git \
    bash

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_sqlite zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Copy existing application directory contents
COPY . .

EXPOSE 8000

# Startup script to ensure DB file exists, migrations are run, seeders are populated, and server boots
CMD bash -c "mkdir -p database && touch database/database.sqlite && php artisan migrate --force && php artisan db:seed --force && php artisan serve --host=0.0.0.0 --port=8000"
