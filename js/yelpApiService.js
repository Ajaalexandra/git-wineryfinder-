angular.module('myApp').service('yelpApiService', function($http){

this.test = "hellow world";


var client_secret = 'client_secret= PmJ8zLhWQ82TlRjnqrvmzkZm6KMO5dVlTcAtQ6sxifLL9BHCxJDax6WiylZe2WaS';
  var client_id = 'client_id=vGZGeVRetP7WWU9j6tldtg';
  var access_token = 'Bearer RehEk749c5b_QbSf4hxDvAQBMknl6k-SzzFLnfQDcnnTdomCUAkWwFUuWuKSwjnXiNuI8s-CgQdYfLe7Wffdznr_Z1YDriCPSxfAPxz3If04YhqU_riVqL11sje4WXYx';

  this.getYelpData = function(zip) {
    return $http.post('http://dogcompanydtx.com/api/proxyServer', {
      base_url: 'https://api.yelp.com/v3/businesses/search?',
      query_string:
        client_secret + '&' + client_id + '&location=' + zip + '&term=wineries',
      access_token: access_token
    });
  };
this.getYelpData().then(function(response){
  console.log(response);
})









});
// });
