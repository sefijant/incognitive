var app = angular.module('Incognitive', []);
app.controller('ctr', function($scope, $http) {
    $scope.result = "";
    $scope.imgInput="Enter URL";
    $scope.doMagic=function() {
        $http({
            url: 'http://incognitive.azurewebsites.net/trump/detect',
            method: "POST",
            data: { 'ur' : $scope.imgInput }
        })
        .then(function(response) {
            $scope.result = response.data;
        }, 
        function(response) { // optional
            $scope.result = "err";
        });
            // var reqq = {
            //     method: 'POST',
            //     url: 'http://incognitive.azurewebsites.net/trump/identify',
            //     data: { "bdy": bd }
            // }
            // $http(reqq).then(function(data){
            //     $scope.result=data.data;
            // });
    };
});