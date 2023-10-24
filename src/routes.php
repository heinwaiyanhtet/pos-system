<?php

use POS\Router;
use POS\Controllers\UserController;

$router = new Router();

$router->addRoute('/', UserController::class, 'index');
    