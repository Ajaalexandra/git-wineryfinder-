angular.module('myApp').controller('resultsCtrl', function($scope, yelpApiService, mapsService){

  var map = document.getElementById('map')

  $scope.setid = yelpApiService.changeid;

  $scope.getYelpData = function() {
    yelpApiService.getYelpData(yelpApiService.getCity())
      .then(function(response){
          $scope.wineries = response.data.businesses;
          //console.log(wineries);
          })
  }

  $scope.getYelpData()

  $scope.setSearchLocation = function(userInput) {
    yelpApiService.setSearchLocation(userInput);
    mapsService.setMap(map)
    $scope.getYelpData()
  }

  var address = yelpApiService.getCity()


mapsService.setMap(map)









})
