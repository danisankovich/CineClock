var myAppModule = angular.module('myApp', [])
.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

$scope.movies = [];
$scope.getFilm = function() {
    console.log("yes");
    var input = $('#movie').val();
    $http.get("http://www.omdbapi.com/?t=" + encodeURI(input) + "&y=&plot=full&r=json").success(function(data) {
      $scope.movies.push(data);
      console.log(data);
      console.log(input);
    });
  console.log($scope.movies);
  };
}]);

//get rotten tomatoes and metacritic and other things as well.

//poster api

// captain%20america:%20civil%20war
