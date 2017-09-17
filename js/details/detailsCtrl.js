angular.module('myApp').controller('detailsCtrl', function($scope, yelpApiService ){


var id = yelpApiService.getid();

console.log(id)

$scope.winery = yelpApiService.getWinery();
console.log(yelpApiService.getWinery());
console.log($scope.winery);


yelpApiService.getYelpReviews(id).then(function(response){
  console.log('getting yelp reviews');
  console.log('detailsCtrl response:', response.data.reviews);
  console.log(response.data);
  $scope.reviews = response.data.reviews;
  console.log($scope.reviews);
})
$scope.cityQuery = yelpApiService.getCity();



})
