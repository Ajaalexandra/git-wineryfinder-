angular.module('myApp').controller('detailsCtrl', function($scope, yelpApiService ){

$scope.winery = yelpApiService.getWinery();

yelpApiService.getYelpReviews($scope.winery.id).then(function(response){
  console.log('getting yelp reviews');
  console.log(response.data);
  $scope.reviews = response.data.reviews;
  console.log($scope.reviews);
})
$scope.cityQuery = yelpApiService.getCity();



})
