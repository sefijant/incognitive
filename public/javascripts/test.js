var app = angular.module('Incognitive', []);
app.controller('ctr', function($scope, $http) {
    $scope.result = "";
    $scope.imgInput="Enter URL";
    $scope.doMagic=function() {
        var req = {
            method: 'POST',
            url: 'http://incognitive.azurewebsites.net/trump/detect',
            data: { "ur": $scope.imgInput }
        }
        $http(req).then(function(bd){
            $scope.result = bd.data;
            // var reqq = {
            //     method: 'POST',
            //     url: 'http://incognitive.azurewebsites.net/trump/identify',
            //     data: { "bdy": bd }
            // }
            // $http(reqq).then(function(data){
            //     $scope.result=data.data;
            // });
        });
    };
});