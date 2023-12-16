FROM php:8.2-apache

WORKDIR /var/www/html

COPY . .

RUN apt-get update && \
    apt-get install -y libpng-dev && \
    docker-php-ext-install pdo pdo_mysql gd

COPY apache-config/000-default.conf /etc/apache2/sites-available/000-default.conf

# Enable necessary Apache modules
RUN a2enmod rewrite
RUN a2enmod headers

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

RUN service apache2 restart

EXPOSE 80

CMD ["apache2-foreground"]


# docker build -t pos-system .
# docker run pos-system

