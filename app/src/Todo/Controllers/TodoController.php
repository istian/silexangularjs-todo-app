<?php namespace Todo\Controllers;

use Silex\Application;
use Application\Controllers\BaseController;
use Todo\Models\Todo;
use Symfony\Component\HttpFoundation\JsonResponse;

class TodoController extends BaseController
{
    public function indexAction() {
        $ngApp = 'todoApp';
        return $this->render("Todo/index", compact('ngApp'));
    }

    public function listAction() {
        $todos = Todo::all();
        return new JsonResponse(array(
            "success" => true,
            "data" => $todos->toArray()
        ));
    }
}