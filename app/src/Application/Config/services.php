<?php

# This is where we register all the services we will be using with
# Silex's dependency injection.  These are some common services.

// Controller Service Provider
$app->register(new Silex\Provider\ServiceControllerServiceProvider());

// Twig
$viewDirectories = glob(dirname(dirname(__DIR__)) . '/**/Views');
$app->register(new Silex\Provider\TwigServiceProvider(), array('twig.path' => $viewDirectories));

// Url Generator
$app->register(new Silex\Provider\UrlGeneratorServiceProvider());

// eloquent orm via capsule
$app->register(new Ziadoz\Silex\Provider\CapsuleServiceProvider, [
   'capsule.connection' => [
       'driver' => 'mysql',
       'host' => '127.0.0.1',
       'database' => 'silexangular_development',
       'username' => 'root',
       'password' => getenv('IAMIST_DATABASE_PASSWORD'),
       'charset' => 'utf8',
       'collation' => 'utf8_unicode_ci',
       'logging' => true
   ]
]);

// Custom service example
/*$app['example_service'] = function() {
    return new \Services\ExampleService();
};*/

// Doctrine MySQL
# $app->register(new Silex\Provider\DoctrineServiceProvider(), $app['app.db_settings']);

// Session Service Provider
# $app->register(new Silex\Provider\SessionServiceProvider());
# $app['session']->start();