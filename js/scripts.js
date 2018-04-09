// map = new google.maps.Map(document.getElementById('map'), {
//   center: {lat: -34.397, lng: 150.644},
//   zoom: 8
// });
function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(45.084722,-69.905556),
    zoom:5,
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

$(document).ready(function(){





});


// $("#map-coordinates").submit(function(event) {
//   event.preventDefault();
//
//
// });
