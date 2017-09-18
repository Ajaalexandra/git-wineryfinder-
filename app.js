angular.module('myApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider){
$urlRouterProvider.otherwise('/');
$stateProvider
.state('home', {
  url:'/',
  templateUrl: 'js/home/home.html',
  controller: 'homeCtrl'
})
.state('results', {
  url: '/results/:location',
  templateUrl: 'js/results/results.html',
  controller:'resultsCtrl'
})
//
.state('details', {
  url: '/details/:winePlace',
  templateUrl: 'js/details/details.html',
  controller:'detailsCtrl'
})











})
