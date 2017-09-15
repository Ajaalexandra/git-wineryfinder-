angular.module('myApp').controller('detailsCtrl', function($scope, yelpApiService ){


var id = yelpApiService.getid();

console.log(id)



yelpApiService.getYelpReviews(id).then(function(response){
  console.log('getting yelp reviews');
  console.log('detailsCtrl response:', response.data.reviews);
  $scope.reviews = response.data.reviews;
})
$scope.cityQuery = yelpApiService.getCity();



})
