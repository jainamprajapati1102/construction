<?php

use CodeIgniter\Router\RouteCollection;
use App\Controllers\SignUpController;


/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->post('signup', [SignUpController::class, 'signup']);
$routes->post('signin', [SignUpController::class, 'signin']);

// require APPPATH . 'Config/Routes/With-authentication/Routes.php';

