var app = angular.module('Incognitive', []);
app.controller('ctr', function($scope, $http) {
    $scope.result = "";
    $scope.imgInput="Enter URL";
    $scope.doMagic=function() {
        var req = {
            method: 'POST',
            url: 'http://incognitive.azurewebsites.net/trump/check',
            data: { "url": $scope.imgInput }
        }
        $http(req).then(function(data){$scope.result = data.data});
    };
});