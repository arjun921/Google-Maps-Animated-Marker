// This example adds an animated symbol to a polyline.

function initMap() {
  let start = prompt('Enter starting point');
  let end = prompt('Enter Destination');

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 8.443556,
      lng: 76.994161
    },
    zoom: 13,
    mapTypeId: 'terrain'
  });

  geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': start }, function(results, status){
    if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
    } else {
        alert("Could not find location: " + location);
    }
});

  var lineSymbol = {
    path: google.maps.SymbolPath.CIRCLE,
    fillOpacity: 1,
    scale: 3
  };

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  var myMarker = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 5,
    strokeColor: '#e53935'
  };

  var directionsService = new google.maps.DirectionsService();

  
  var method = 'DRIVING';
  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.DirectionsTravelMode[method]
  };

  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {


      var line = new google.maps.Polyline({
        path: response.routes[0].overview_path,
        icons: [{
          icon: lineSymbol,
          offset: '100%',
          repeat: '0'
        },
        {
          icon: myMarker,
          offset: '100%'
        }],
        strokeColor: '#0eb7f6',
        map: map
      });

      //+++++++++++++++++++++User this var line for non dotted path

      // var line = new google.maps.Polyline({
      //   path: response.routes[0].overview_path,
      //   icons: [
      //   {
      //     icon: myMarker,
      //     offset: '100%'
      //   }],
      //   strokeColor: '#0eb7f6',
      //   map: map
      // });
      animateCircle(line);
      var marker = new google.maps.Marker({
        position: response.routes[0].overview_path[0],
        map: map,
        title: 'Hello World!'
      });
      var marker = new google.maps.Marker({
        position: response.routes[0].overview_path[response.routes[0].overview_path.length - 1],
        map: map,
        title: 'Hello World!'
      });
    }
  });
}

function animateCircle(line) {
  var count = 0;
  window.setInterval(function() {
    count = (count + 1) % 200;
    var icons = line.get('icons');
    // icons[1].offset = (count / 2) + '%';
    icons[1].offset = (count / 2) + '%'; //+++++++++++++++++++++User this line for non dotted path and comment above line.
    line.set('icons', icons);
  }, 100);
}
