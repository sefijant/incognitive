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
            $http({
                url: 'https://westus.api.cognitive.microsoft.com/face/v1.0/identify',
                method: "POST",
                data: { 'personGroupId' : 'incognitive1', 'faceIds':[response],'confidenceThreshold': 0.6 }
            })
            .then(function(dt) {
                $scope.result = dt.data;
            }, 
            function(dt) { // optional
                $scope.result = "err2";
            });
        }, 
        function(response) { // optional
            $scope.result = "err";
        });
    };
});