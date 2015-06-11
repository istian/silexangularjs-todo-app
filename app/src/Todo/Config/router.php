<?php

use Todo\Controllers\TodoController;

$app['todo.controller'] = $app->share(function() use ($app) {
    return new TodoController($app);
});

$app->get('/todo', 'todo.controller:indexAction');
$app->get('/todo/list', 'todo.controller:listAction');