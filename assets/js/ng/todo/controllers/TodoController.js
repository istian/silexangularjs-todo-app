var getObject = require('getobject');

var TodoController = ['$scope', '$http', function ($scope, $http) {
    $scope.Todo = {};
    $scope.init = function () {
        var promise = $http.get('/todo/list');
        promise.then(function (successPayload) {
            var data = getObject.get(successPayload, 'data');
            if (data.success) {
                $scope.Todo = data.data;
            }
        }, function (errorPayload) {

        })
    }
}];

module.exports = TodoController;