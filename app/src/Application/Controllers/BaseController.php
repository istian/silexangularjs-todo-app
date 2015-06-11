<?php
/**
 * This is the base controller for all modules
 */
namespace Application\Controllers;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Silex\Application;

class BaseController
{
    private $app;

    /**
     * Assign $app var from DI
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function render($template, array $data = array()) {
        return $this->app['twig']->render($template . '.html.twig', $data);
    }
}