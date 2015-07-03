var app = angular.module('TwitchApp', []);
var url = "https://api.twitch.tv/kraken/streams/freecodecamp";
// var url = "http://www.w3schools.com/angular/customers.php";

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $http.get(url).
        success(function(data) {
            $scope.data = data;
        }).
        error(function(err) {
            $scope.error = 'No data received';
        });
}]);