FROM composer:2 AS vendor

WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

FROM php:8.4-fpm-alpine

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
WORKDIR /var/www

COPY . .
COPY --from=vendor /app/vendor ./vendor

RUN mkdir -p database storage/app/public \
    && chown -R www-data:www-data storage bootstrap/cache database

EXPOSE 9000

CMD ["php-fpm", "-F"]
