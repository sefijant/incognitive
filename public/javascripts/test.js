var app = angular.module('Incognitive', []);
app.controller('ctr', function($scope) {
    $scope.imgInput="Enter URL";
    $scope.doMagic=function() {
        $scope.imgInput = "Clicked";
    };
});