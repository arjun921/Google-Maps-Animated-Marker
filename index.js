// This example adds an animated symbol to a polyline.

speed = 1
function initMap() {
  let start = document.getElementById('starting_point').value
  let end = document.getElementById('ending_point').value
  let animated_icon = document.getElementById('animated_icon').value
  let icon_color = document.getElementById('icon_color').value
  let path_color = document.getElementById('path_color').value
  // let icon_flip = document.getElementById('icon_flip').value


  speed = document.getElementById('speed').value
  map = new google.maps.Map(document.getElementById('map'), {
    // center: {
    //   lat: 8.443556,
    //   lng: 76.994161
    // },
    zoom: 13,
    mapTypeId: 'terrain'
  });

  geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': start }, function (results, status) {
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
  if (animated_icon == "circle") {
    var myMarker = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: icon_color
    };
  } else if (animated_icon == 'forward_arrow') {
    var myMarker = {
      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
      scale: 3,
      strokeColor: icon_color,
    };

  }
  else if (animated_icon == 'backward_arrow') {
    var myMarker = {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 3,
      strokeColor: icon_color,
    };

  }
  else if (animated_icon == 'forward_bike') {
    var myMarker = {
      // path: "M422,256c-12.318,0-25.604,3.001-36.872,8.101l-13.685-20.407C390.901,232.431,413.343,226,437,226c8.291,0,15-6.709,15-15v-30c0-57.891-47.109-105-105-105h-30c-8.291,0-15,6.709-15,15s6.709,15,15,15h15v30h-45 c-5.01,0-9.697,2.505-12.48,6.68L258.972,166h-125.95l-7.529-11.294C117.686,142.987,104.619,136,90.557,136H15 c-8.291,0-15,6.709-15,15c0,38.54,29.224,70.386,66.665,74.546l20.499,30.742C38.875,257.827,0,297.343,0,346  c0,49.629,40.371,90,90,90c38.383,0,72.081-24.646,84.635-60h90.231c19.951,0,37.28-14.209,41.177-33.765l2.124-10.62 c5.524-27.609,19.885-51.478,39.382-69.717l12.708,18.95C342.058,298.1,332,321.951,332,346c0,48.426,40.715,90,90,90 c49.629,0,90-40.371,90-90C512,296.371,471.629,256,422,256z M90,375.9h51.855C131.336,393.973,111.793,406,90,406 c-33.091,0-60-26.909-60-60s26.909-60,60-60c6.667,0,13.081,1.32,19.265,3.431l5.242,7.863 C122.314,309.013,135.381,316,149.443,316H90c-16.569,0-30,13.431-30,30C60,362.569,73.431,375.9,90,375.9z M422,406c-32.501,0-60-27.297-60-60c0-13.865,4.856-27.697,15.397-39.593l32.151,47.943c4.563,6.833,13.904,8.752,20.801,4.102c6.885-4.614,8.716-13.931,4.102-20.801l-32.161-47.955C409.529,287.163,414.363,286,422,286c33.091,0,60,26.909,60,60 S455.091,406,422,406z",
      // scale: 0.05,
      path: "M3875 10894 c-336 -42 -538 -95 -803 -210 -314 -135 -577 -318 -832 -580 -386 -396 -627 -880 -717 -1436 -16 -100 -18 -180 -18 -683 l0 -570 28 -56 c32 -67 119 -152 182 -180 52 -23 172 -39 295 -39 263 0 689 -85 990 -198 179 -67 500 -220 500 -238 0 -3 -315 -480 -326 -493 -2 -2 -52 15 -112 37 -295 111 -519 152 -822 152 -359 -1 -669 -72 -979 -225 -239 -119 -397 -231 -584 -414 -196 -192 -332 -379 -452 -624 -158 -322 -225 -616 -225 -987 0 -270 32 -474 111 -715 73 -221 238 -524 382 -700 66 -81 236 -252 318 -320 192 -162 487 -326 724 -404 139 -46 317 -85 463 -101 154 -18 487 -8 633 19 715 131 1331 600 1649 1256 150 310 220 614 220 965 0 573 -202 1090 -595 1523 -44 49 -84 94 -89 101 -6 8 41 87 144 241 l153 229 117 -120 c239 -248 431 -518 583 -823 151 -301 219 -508 302 -915 25 -122 55 -248 66 -281 117 -328 368 -565 714 -672 l90 -28 1221 -3 1220 -2 33 -83 c180 -445 499 -826 906 -1082 270 -170 610 -288 938 -326 133 -15 494 -6 612 15 410 74 778 243 1074 491 82 68 252 239 318 320 127 156 283 429 356 625 43 114 89 288 114 425 26 145 26 587 -1 730 -61 333 -174 619 -351 884 -373 561 -1004 934 -1673 990 -56 4 -105 11 -108 14 -3 3 107 173 244 379 l249 373 128 23 c495 87 940 381 1229 812 123 182 224 428 273 659 23 108 27 151 27 306 1 165 -1 184 -21 228 -31 66 -115 152 -182 184 l-56 28 -1055 3 c-724 2 -1075 -1 -1120 -8 -159 -27 -323 -96 -451 -190 -107 -80 -201 -188 -326 -375 l-116 -175 -1567 0 -1567 0 -203 305 c-211 317 -262 378 -347 418 -48 22 -52 22 -665 25 l-618 3 0 374 0 374 243 3 c224 3 245 5 290 25 66 31 152 115 184 182 25 51 28 66 28 166 0 100 -3 115 -28 166 -32 67 -118 151 -184 182 -47 22 -54 22 -588 23 -297 1 -553 0 -570 -2z m-1396 -5270 c70 -13 238 -59 249 -69 2 -2 -180 -276 -403 -609 -223 -333 -416 -627 -428 -653 -17 -39 -22 -67 -22 -143 0 -82 4 -103 27 -152 37 -80 107 -152 187 -191 60 -29 74 -32 161 -32 82 0 103 4 152 27 100 46 136 91 418 513 147 220 330 493 407 607 l141 208 61 -80 c133 -171 223 -358 279 -577 25 -101 27 -121 27 -323 0 -199 -2 -223 -27 -320 -74 -293 -204 -525 -409 -729 -314 -314 -719 -468 -1156 -439 -198 12 -370 60 -558 153 -409 204 -703 587 -802 1047 -26 119 -26 458 0 578 114 533 492 959 1002 1129 222 73 477 94 694 55z m8276 5 c170 -22 371 -89 518 -173 409 -234 681 -623 754 -1080 19 -125 13 -413 -12 -526 -135 -613 -623 -1078 -1234 -1176 -124 -20 -345 -19 -468 1 -299 50 -590 201 -808 420 -98 98 -213 241 -231 288 -6 16 38 17 679 17 731 0 753 1 878 50 162 64 315 205 392 362 60 123 77 198 77 338 0 139 -17 215 -75 335 -74 151 -189 266 -340 340 -160 77 -130 75 -951 76 -627 1 -720 3 -664 14 93 19 183 50 275 97 173 87 298 205 440 416 l89 132 62 20 c198 61 403 77 619 49z",
      scale: 0.005,
      fillColor: icon_color,
      fillOpacity: 1,
      rotation: 90,
      anchor: new google.maps.Point(90, 100)
    };

  } else if (animated_icon == 'backward_bike') {
    var myMarker = {
      path: "M0,346c0,49.6,40.4,90,90,90c49.3,0,90-41.6,90-90c0-24-10.1-47.9-28.3-65.2l12.7-19c19.5,18.2,33.9,42.1,39.4,69.7 l2.1,10.6c3.9,19.6,21.2,33.8,41.2,33.8h90.2c12.6,35.4,46.3,60,84.6,60c49.6,0,90-40.4,90-90c0-48.7-38.9-88.2-87.2-89.7 l20.5-30.7c37.4-4.2,66.7-36,66.7-74.5c0-8.3-6.7-15-15-15h-75.6c-14.1,0-27.1,7-34.9,18.7L379,166H253l-15.5-23.3 c-2.8-4.2-7.5-6.7-12.5-6.7h-45v-30h15c8.3,0,15-6.7,15-15s-6.7-15-15-15h-30c-57.9,0-105,47.1-105,105v30c0,8.3,6.7,15,15,15 c23.7,0,46.1,6.4,65.6,17.7l-13.7,20.4C115.6,259,102.3,256,90,256C40.4,256,0,296.4,0,346z M452,346c0-16.6-13.4-30-30-30h-59.4 c14.1,0,27.1-7,34.9-18.7l5.2-7.9c6.2-2.1,12.6-3.4,19.3-3.4c33.1,0,60,26.9,60,60s-26.9,60-60,60c-21.8,0-41.3-12-51.9-30.1H422 C438.6,375.9,452,362.6,452,346z M30,346c0-33.1,26.9-60,60-60c7.6,0,12.5,1.2,19.7,3.7l-32.2,48c-4.6,6.9-2.8,16.2,4.1,20.8 c6.9,4.7,16.2,2.7,20.8-4.1l32.2-47.9c10.5,11.9,15.4,25.7,15.4,39.6c0,32.7-27.5,60-60,60C56.9,406,30,379.1,30,346z",
      scale: 0.07,
      fillColor: icon_color,
      fillOpacity: 1,
      rotation: 90,
      anchor: new google.maps.Point(200, 300)
    };

  } else if (animated_icon == 'forward_car') {
    var myMarker = {
      path: "M120,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,120,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,120,312Z M408,236a52,52,0,1,0,52,52A52.059,52.059,0,0,0,408,236Zm0,76a24,24,0,1,1,24-24A24,24,0,0,1,408,312Z M477.4,193.04,384,176l-79.515-65.975A44.109,44.109,0,0,0,276.526,100H159.38a43.785,43.785,0,0,0-34.359,16.514L74.232,176H40A36.04,36.04,0,0,0,4,212v44a44.049,44.049,0,0,0,44,44h9.145a64,64,0,1,1,125.71,0h162.29a64,64,0,1,1,125.71,0H472a36.04,36.04,0,0,0,36-36V228.632A35.791,35.791,0,0,0,477.4,193.04ZM180,164a12,12,0,0,1-12,12H115.245a6,6,0,0,1-4.563-9.9l34.916-40.9A12,12,0,0,1,154.724,121H168a12,12,0,0,1,12,12Zm60,56H224a12,12,0,0,1,0-24h16a12,12,0,0,1,0,24Zm94.479-43.706-114.507-.266a12,12,0,0,1-11.972-12V133a12,12,0,0,1,12-12h57.548a12,12,0,0,1,7.433,2.58l53.228,42A6,6,0,0,1,334.479,176.294Z",
      scale: 0.07,
      fillColor: icon_color,
      fillOpacity: 1,
      rotation: 90,
      anchor: new google.maps.Point(50, 190)
    };

  } else if (animated_icon == 'backward_car') {
    var myMarker = {
      path: "M340,288c0,28.7,23.3,52,52,52s52-23.3,52-52s-23.3-52-52-52C363.3,236,340,259.3,340,288z M368,288c0-13.3,10.7-24,24-24c13.3,0,24,10.7,24,24s-10.7,24-24,24C378.7,312,368,301.3,368,288z M52,288c0,28.7,23.3,52,52,52s52-23.3,52-52s-23.3-52-52-52C75.3,236,52,259.3,52,288z M80,288c0-13.3,10.7-24,24-24s24,10.7,24,24s-10.7,24-24,24S80,301.3,80,288z M4,228.6V264c0,19.9,16.1,36,36,36h1.1c-1.5-8-1.5-16.1,0-24.1c6.7-34.7,40.2-57.5,74.9-50.8c34.7,6.7,57.5,40.2,50.8,74.9h162.3c-1.5-8-1.5-16.1,0-24.1c6.7-34.7,40.2-57.5,74.9-50.8s57.5,40.2,50.8,74.9h9.1c24.3,0,44-19.7,44-44v-44c0-19.9-16.1-36-36-36h-34.2L387,116.5c-8.3-10.5-21-16.5-34.4-16.5H235.5c-10.2,0-20.1,3.6-28,10L128,176l-93.4,17C17,195.6,3.9,210.8,4,228.6z M332,133c0-6.6,5.4-12,12-12h13.3c3.5,0,6.8,1.5,9.1,4.2l34.9,40.9c0.9,1.1,1.4,2.5,1.4,3.9c0,3.3-2.7,6-6,6H344c-6.6,0-12-5.4-12-12V133z M260,208c0-6.6,5.4-12,12-12h16c6.6,0,12,5.4,12,12s-5.4,12-12,12h-16C265.4,220,260,214.6,260,208z M172.8,174c-2.1-2.6-1.6-6.4,1-8.4l53.2-42c2.1-1.7,4.7-2.6,7.4-2.6H292c6.6,0,12,5.4,12,12v31c0,6.6-5.4,12-12,12l-114.5,0.3C175.7,176.3,173.9,175.5,172.8,174z",
      scale: 0.07,
      fillColor: icon_color,
      fillOpacity: 1,
      rotation: 90,
      anchor: new google.maps.Point(50, 190)
    };
  } else if (animated_icon == 'backward_truck') {
    var myMarker = {
      path: "M512,121H150v30H45.252L0,252.817V361h62.58c6.192,17.458,22.865,30,42.42,30s36.228-12.542,42.42-30h187.16 c6.192,17.458,22.865,30,42.42,30c11.517,0,22.032-4.354,30-11.495c7.968,7.142,18.483,11.495,30,11.495c24.813,0,45-20.187,45-45 c0-15.114-7.498-28.502-18.961-36.667H512V121z M38.081,241l26.667-60H100v60H38.081z M105,361c-8.271,0-15-6.729-15-15 s6.729-15,15-15s15,6.729,15,15S113.271,361,105,361z M332,331H180v-21.667h152V331z M377,361c-8.271,0-15-6.729-15-15 s6.729-15,15-15s15,6.729,15,15S385.271,361,377,361z M437,361c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15 S445.271,361,437,361z",
      scale: 0.07,
      fillColor: icon_color,
      fillOpacity: 1,
      rotation: 90,
      anchor: new google.maps.Point(50, 190)
    };
  }
  else if (animated_icon == 'forward_truck') {
    var myMarker = {
      path: "M0,309.3h49c-11.5,8.2-19,21.6-19,36.7c0,24.8,20.2,45,45,45c11.5,0,22-4.4,30-11.5c8,7.1,18.5,11.5,30,11.5 c19.6,0,36.2-12.5,42.4-30h187.2c6.2,17.5,22.9,30,42.4,30s36.2-12.5,42.4-30H512V252.8L466.7,151H362v-30H0L0,309.3z M412,241 v-60h35.3l26.7,60H412z M392,346c0-8.3,6.7-15,15-15s15,6.7,15,15s-6.7,15-15,15S392,354.3,392,346z M180,309.3h152V331H180V309.3 z M120,346c0-8.3,6.7-15,15-15s15,6.7,15,15s-6.7,15-15,15S120,354.3,120,346z M60,346c0-8.3,6.7-15,15-15s15,6.7,15,15 s-6.7,15-15,15S60,354.3,60,346z",
      scale: 0.07,
      fillColor: icon_color,
      fillOpacity: 1,
      rotation: 90,
      anchor: new google.maps.Point(50, 190)
    };
  }

  else {
    var myMarker = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 5,
      strokeColor: icon_color
    };
  }


  var directionsService = new google.maps.DirectionsService();


  var method = 'DRIVING';
  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.DirectionsTravelMode[method]
  };

  directionsService.route(request, function (response, status) {
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
        strokeColor: path_color,
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
      animateMarker(line);
      var marker = new google.maps.Marker({
        position: response.routes[0].overview_path[0],
        map: map,
        title: 'Starting point'
      });
      total_points = response.routes[0].overview_path.length
      if (total_points % 2 == 0) {

      } else {

      }
      var marker = new google.maps.Marker({
        position: response.routes[0].overview_path[response.routes[0].overview_path.length - 1],
        map: map,
        title: 'Ending point'
      });
    }
  });
}

function animateMarker(line) {
  var count = 0;
  window.setInterval(function () {
    count = (count + 1) % 200;
    var icons = line.get('icons');
    // icons[1].offset = (count / 2) + '%';
    icons[1].offset = (count / 2) + '%'; //+++++++++++++++++++++User this line for non dotted path and comment above line.
    line.set('icons', icons);
  }, 100 / speed);
}


// function goFullScreen(){

//   var elem = document.getElementById('map');

//   if(elem.requestFullscreen){
//       elem.requestFullscreen();
//   }
//   else if(elem.mozRequestFullScreen){
//       elem.mozRequestFullScreen();
//   }
//   else if(elem.webkitRequestFullscreen){
//       elem.webkitRequestFullscreen();
//   }
//   else if(elem.msRequestFullscreen){
//       elem.msRequestFullscreen();
//   }
// }