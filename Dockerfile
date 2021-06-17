FROM devilbox/php-fpm-7.4:latest

RUN docker-php-ext-install pdo_mysql mysqli && docker-php-ext-enable mysqli
