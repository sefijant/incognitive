angular.module('route', [], function ($routeProvider, $locationProvider) {
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
angular.module('myapp', ['webcam']);
function MainCtrl($scope) {
    $scope.test = "123";
}