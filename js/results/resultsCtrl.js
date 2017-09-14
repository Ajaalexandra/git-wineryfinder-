angular.module('myApp').controller('resultsCtrl', function($scope, $stateParams, yelpApiService){


  console.log("params:",$stateParams.location);

  var address = $stateParams.location
  // var map = new google.maps.Map(document.getElementById('map'), {
  //         zoom: 14,
  //         center: new google.maps.LatLng(32.777641, -96.795974)
  //       });
  //       (function mapMaker(response) {
  //         let center = {
  //           lat: 32.777641,
  //           lng: -96.795974
  //         }
  //
  //        var marker = new google.maps.Marker({
  //           position: center,
  //           map: map,
  //           label: 'here'
  //         });
  // })();
  var infoWindow;
  var geocoder = new google.maps.Geocoder();
  var map = new window.google.maps.Map(document.getElementById('map'), {
				center: {
					lat: 32.7,
					lng: -96.8
				},
				zoom: 15
			})
			infoWindow = new google.maps.InfoWindow;
		// });
		var pos;
    var lat = '';
    var lng = '';
    var address = yelpApiService.position;
    geocoder.geocode( { 'address': $stateParams.location}, function(results, status) {
      // console.log('location:', $stateParams.location);
      if (status == google.maps.GeocoderStatus.OK) {
         lat = results[0].geometry.location.lat();
         lng = results[0].geometry.location.lng();
         pos = {
           lat: lat,
           lng: lng
         }
         console.log(pos);
       } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });



		if (!Object.keys(navigator.geolocation).length) {
			console.log('geolocation whatever');
	          navigator.geolocation.getCurrentPosition(function(position) {
	            // pos = {
	            //   lat: position.coords.latitude,
	            //   lng: position.coords.longitude
	            // };
	            map.setCenter(pos);
	            // infowindow = new google.maps.InfoWindow();
		        var service = new google.maps.places.PlacesService(map);
		        service.nearbySearch({
		          location: pos,
		          radius: 500,
		          keyword: 'wineries'
		        }, callback);

	            infoWindow.setPosition(pos);
	            infoWindow.setContent(yelpApiService.position);
	            infoWindow.open(map);
	            map.setCenter(pos);
	          }, function() {
	            handleLocationError(true, infoWindow, map.getCenter());
	          });
	        } else {
	          // Browser doesn't support Geolocation
	          handleLocationError(false, infoWindow, map.getCenter());
	        }
		      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
		        infoWindow.setPosition(pos);
		        infoWindow.setContent(browserHasGeolocation ?
		                              'Error: The Geolocation service failed.' :
		                              'Error: Your browser doesn\'t support geolocation.');
		        infoWindow.open(map);
		      }
	var markers = [];


	function callback(results, status) {
		if (status === google.maps.places.PlacesServiceStatus.OK) {
		  for (var i = 0; i < results.length; i++) {
		    createMarker(results[i]);
		  }
		}
	}

	function createMarker(place) {
		var placeLoc = place.geometry.location;
		var marker = new google.maps.Marker({
		  map: map,
		  title: place.name,
		  animation: google.maps.Animation.DROP,
		  position: placeLoc
		});
		var infowindow = new window.google.maps.InfoWindow();

		google.maps.event.addListener(marker, 'click', function() {
			if (place.opening_hours.open_now !== undefined && place)
			{var openNow = place.opening_hours.open_now ? 'Currently Open' : "Currently Closed"}
		  infowindow.setContent(place.name + '<br>' + place.vicinity + '<br>' + (openNow || ''));
		  infowindow.open(map, this);
		});
	}

  $scope.getYelpData = yelpApiService.getYelpData($stateParams.location)
    .then(function(response){
      console.log('response of each winery', response);
        $scope.wineries = response.data.businesses;
        //console.log(wineries);
        })






})
