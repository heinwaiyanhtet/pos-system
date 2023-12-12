FROM php:8.2-apache

WORKDIR /var/www/html

COPY . .

RUN apt-get update && \
    apt-get install -y libpng-dev && \
    docker-php-ext-install pdo pdo_mysql gd

EXPOSE 80

CMD ["apache2-foreground"]


# docker build -t pos-system .
# docker run -p 8080:80 pos-system

