angular.module('myApp').controller('detailsCtrl', function($scope, $stateParams, yelpApiService ){

console.log('winePlace yelp id:', $stateParams.winePlace);

var id = $stateParams.winePlace

yelpApiService.getYelpReviews(id).then(function(response){
  console.log('getting yelp reviews');
  console.log('detailsCtrl response:', response.data.reviews);
  $scope.reviews = response.data.reviews;
})
$scope.cityQuery = yelpApiService.cityQuery;
console.log($scope.cityQuery);



})
