<?php

use App\Controllers\SignUpController;
use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

// POST route for signup
$routes->post('signup', [SignUpController::class, 'signup']);
