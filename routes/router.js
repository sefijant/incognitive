angular.module('route', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/process', {
            template: 'process.html',
            controller: 'processCtrl'
        })
        .when('/err', {
            template: 'error.html',
            controller: 'errCtrl'
        })
        .otherwise({ redirectTo: '/' });
});


function MainCtrl($scope) {
    $scope.test = "123";
}