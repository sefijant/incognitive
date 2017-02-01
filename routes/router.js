angular.module('route', [], function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/process', {
            template: './public/process.html',
            controller: 'processCtrl'
        })
        .when('/err', {
            template: './public/error.html',
            controller: 'errCtrl'
        })
        .otherwise({ redirectTo: '/' });
});

function MainCtrl($scope) {
    $scope.test = "123";
}