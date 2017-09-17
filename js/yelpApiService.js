angular.module('myApp').service('yelpApiService', function($http){

this.test = "hello world";

var cityQuery = '';

this.setSearchLocation = function(userInput) {
  console.log('set search location', userInput)
  cityQuery = userInput;
}


this.changeCity = function(city) {
  cityQuery = city;
}

this.getCity = function() {
  return cityQuery;
}

var id= '';
var winery = '';
this.changeid = function(userInput) {
    id = userInput.id;
    console.log(userInput.name);
    winery = userInput.name;
}

this.getWinery = function() {
  return winery;
}

this.getid = function() {
  return id;
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
  })


////////// Yelp Reviews
this.getYelpReviews = function(YelpBusinessId){

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
