var $ = require('jquery'),
    angular = require('angular'),
    ngRoute = require('angular-route');

var TodoController = require('./controllers/TodoController');
var TodoApp = angular.module('todoApp', ['ngRoute']);

TodoApp.controller('TodoController', TodoController);

// routes
TodoApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .otherwise({
            templateUrl: '/js/ng/todo/templates/list.html',
            controller: 'TodoController'
        });
}]);