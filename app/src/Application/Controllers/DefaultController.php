<?php namespace Application\Controllers;

use Application\Models\Todo;

class DefaultController extends BaseController {

    public function indexAction() {
        return $this->render('Default/index');
    }

}