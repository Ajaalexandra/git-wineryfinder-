angular.module('myApp').service('yelpApiService', function($http){

this.test = "hello world";

this.cityQuery;

this.changeCity = function(city) {
  this.cityQuery = city;
}

var client_secret = 'client_secret= PmJ8zLhWQ82TlRjnqrvmzkZm6KMO5dVlTcAtQ6sxifLL9BHCxJDax6WiylZe2WaS';
  var client_id = 'client_id=vGZGeVRetP7WWU9j6tldtg';
  var access_token = 'Bearer RehEk749c5b_QbSf4hxDvAQBMknl6k-SzzFLnfQDcnnTdomCUAkWwFUuWuKSwjnXiNuI8s-CgQdYfLe7Wffdznr_Z1YDriCPSxfAPxz3If04YhqU_riVqL11sje4WXYx';

  this.getYelpData = function(zip) {
    this.position = zip;

    return $http.post('http://dogcompanydtx.com/api/proxyServer', {
      base_url: 'https://api.yelp.com/v3/businesses/search?',
      query_string:
        client_secret + '&' + client_id + '&location=' + zip + '&term=wineries',
      access_token: access_token
    });
  };


  this.getYelpData().then(function(response){
    console.log('yelp response:', response);
  })


////////// Yelp Reviews
this.getYelpReviews = function(YelpBusinessId){
  console.log('test123');

  return $http.post('http://dogcompanydtx.com/api/proxyServer', {
    base_url: 'https://api.yelp.com/v3/businesses/'+ YelpBusinessId + '/reviews?',
    query_string:
      client_secret + '&' + client_id,
    access_token: access_token
  });
  // return $http.get('https://api.yelp.com/v3/businesses/' + id + '/reviews')
}

// this.getYelpReviews().then(function(response){
//   console.log('hello aja');
//   console.log(response)
// })














});
// });