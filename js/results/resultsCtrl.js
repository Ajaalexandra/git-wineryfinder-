angular.module('myApp').controller('resultsCtrl', function($scope, $stateParams, yelpApiService){
  $scope.getYelpData = yelpApiService.getYelpData($stateParams.location)
    .then(function(response){
        $scope.wineries = response.data.businesses;
        })
})
