function checkForm () {
  removeError();
  //document.getElementById('error-name').remove();
  if(document.getElementById('name').value === "") {
    document.getElementById('error-name').innerHTML = "Enter a name or no food for you!";
    document.getElementById('error-name').style.color = "red"; 
    document.getElementById('error-name').style.display = "block";
    document.getElementById('name').style.border = "solid red";
  } 
}


/*function removeError () {
  document.getElementById('name').on(focus, function() {
    document.getElementById('error-name').innerHTML = "";
  })
}
*/

function removeError () {
  document.getElementById('name').addEventListener('focus', function () {
    document.getElementById('error-name').innerHTML = "";
    document.getElementById('name').style.border = "none";
  })
}




// initialize the configuration of map
function initMap() {

  // use JS's built-in Navigator to get user's lat/lng coordinates
  navigator.geolocation.getCurrentPosition(function(position) {
    // create an object to store lat/lng data
    var userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
      
    var map = new google.maps.Map(document.getElementById('map'), {
 center: {lat: 40.8054491, lng: -73.9654415},
 zoom: 11,
 scrollwheel: false,
 // style map
  styles: [
  {elementType: 'geometry', stylers: [{color: '#f2d2e9'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#c8edc2'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#3e86c4'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#c2d4ef'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
    ]
});
    var marker = new google.maps.Marker({
      position: {lat: 40.8054491, lng: -73.9654415},
      map: map,
      title: "Monk's Cafe"
    });
});
}

initMap();

/*
// Directions Code
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var mapDirection;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom:7,
    center: chicago
  }
  mapDirection = new google.maps.Map(document.getElementById('directions-map'), mapOptions);
  directionsDisplay.setMap(mapDirection);
}

function calcRoute() {
   navigator.geolocation.getCurrentPosition(function(position) {
    // create an object to store lat/lng data
    var userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
  });
  var start = userLocation;
  //var end = document.getElementById('end').value;
  var request = {
    origin: start,
    destination: {lat: 40.8054491, lng: -73.9654415},
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}
*/



