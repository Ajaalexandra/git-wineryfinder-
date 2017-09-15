angular.module('myApp').controller('homeCtrl', function($scope, yelpApiService){
  $scope.blah = yelpApiService.test;
  $scope.splash ='/WineCountryGrapesVineyard.jpg';
  $scope.changeCity = yelpApiService.changeCity;

  $scope.setSearchLocation = yelpApiService.setSearchLocation




})
