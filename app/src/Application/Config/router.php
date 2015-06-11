<?php
/**
 * Define all routes related to this module
 */
use Application\Controllers\DefaultController;

$app['default.controller'] = $app->share(function() use ($app) {
   return new DefaultController($app);
});

$app->get('/', 'default.controller:indexAction');