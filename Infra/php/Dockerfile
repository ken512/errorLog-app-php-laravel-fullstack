# PHP_FPM入りのイメージを土台にする
FROM php:8.5-fpm-bookworm

# OSのパッケージ・PHP拡張をインストール
# pdo_mysql PHPからMySqlへ接続する拡張
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        unzip \
        libonig-dev \
        libzip-dev \
    && docker-php-ext-install \
        pdo_mysql \
        mbstring \
        zip \
        bcmath \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer
# コンテナ内でコマンドを実行する場所
WORKDIR /var/www/html