angular.module('myApp').controller('resultsCtrl', function($scope, yelpApiService, mapsService){

  var map = document.getElementById('map')

  $scope.setSelectedWinery = yelpApiService.setSelectedWinery;

  $scope.getYelpData = function() {
    if( !yelpApiService.getCity()){
      return;
    }

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

  if( yelpApiService.getCity()) {
   mapsService.setMap(map);
  }











})
