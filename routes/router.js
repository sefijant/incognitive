angular.module('route', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainCtrl'
        })

        .when('/process', {
            template: 'views/process.html',
            controller: 'processCtrl'
        })
        .when('/err', {
            template: 'views/error.html',
            controller: 'errCtrl'
        })
        .otherwise({ redirectTo: '/' });

    
});

function MainCtrl($scope) {
    $scope.test = "123";
}