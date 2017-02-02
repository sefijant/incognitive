

function MainCtrl($scope) {
    $scope.test = "123";
}

var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.

        when('/', {
            templateUrl: 'views/home.html', controller: 'mainCtrl'
        }).
        when('/process', {
            templateUrl: 'views/process.html', controller: 'processCtrl'
        }).

        when('/err', {
            templateUrl: 'views/error.html', controller: 'errCtrl'
        }).

        otherwise({
            redirectTo: '/addStudent'
        });

}]);