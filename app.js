angular.module('myApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider){
$urlRouterProvider.otherwise('/');
$stateProvider
.state('home', {
  url:'/',
<<<<<<< HEAD
  templateUrl: './js/home/home.html',
=======
  templateUrl: 'js/home/home.html',
>>>>>>> d84643463a6d037f3528b667921dc97ec0e3b66d
  controller: 'homeCtrl'
})
.state('results', {
  url: '/results/:location',
<<<<<<< HEAD
  templateUrl: './js/results/results.html',
=======
  templateUrl: 'js/results/results.html',
>>>>>>> d84643463a6d037f3528b667921dc97ec0e3b66d
  controller:'resultsCtrl'
})
//
.state('details', {
  url: '/details/:winePlace',
  templateUrl: 'js/details/details.html',
  controller:'detailsCtrl'
})











})
