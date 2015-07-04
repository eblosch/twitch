var app = angular.module('TwitchApp', []);
var url = "https://api.twitch.tv/kraken/streams/freecodecamp?callback=?";
// var url = "http://www.w3schools.com/angular/customers.php";

app.controller('MainController', ['$scope', '$http', function($scope, $http) {

//    var streams = ['freecodecamp', 'medrybw'];
//    $scope.streams = streams;

    // $http.get(url).
    //     success(function(data, status) {
    //         $scope.data = data;
    //         $scope.status = status;
    //     }).
    //     error(function(err) {
    //         $scope.error = 'No data received';
    //     });
}]);