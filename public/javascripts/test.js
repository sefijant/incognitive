var app = angular.module('Incognitive', []);
app.controller('ctr', function($scope, $http) {
    $scope.result = "";
    $scope.imgInput="Enter URL";
    $scope.jsonush = JSON.parse({"ur":$scope.imgInput});
    $scope.doMagic=function() {
        var req = {
            method: 'POST',
            url: 'http://incognitive.azurewebsites.net/trump/detect',
            data: jsonush
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