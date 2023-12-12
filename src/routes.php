<?php

use POS\Router;
use POS\Controllers\UserController;

$router = new Router();
$router->addRoute('/', UserController::class, 'index');

$uri = $_SERVER['REQUEST_URI'];
$router->dispatch($uri);