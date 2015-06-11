<?php

require_once __DIR__ . '/../vendor/autoload.php';

$app = new Silex\Application();

/**
 * Load all configuration files on every modules
 */
foreach(glob(__DIR__ . '/src/**/Config/*.php') as $c) {
    require_once $c;
}

return $app;
