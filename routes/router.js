var app = angular.module('inco', []);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/process', {
                templateUrl: 'public/process.html',
                controller: 'processCtrl'
            }).
            when('/err', {
                templateUrl: 'public/error.html',
                controller: 'errCtrl'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);