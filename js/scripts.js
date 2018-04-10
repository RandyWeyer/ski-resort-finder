var map;
var userLocation = {"lat":45.084722,"lng":-69.905556};
var radius;

function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(userLocation.lat,userLocation.lng),
    zoom:5,
    gestureHandling: 'greedy'

  };

  map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(userLocation),
    map: map,
    draggable:true,
    title: "Your Location"

    });
  //dragend event of marker placement
  google.maps.event.addListener(marker,'dragend',function(){
    console.log(marker.getPosition().lat());
    console.log(marker.getPosition().lng());

  });

  google.maps.event.addListener(map, 'dblclick', function(e) {
        var positionDoubleclick = e.latLng;
        marker.setPosition(positionDoubleclick);
        console.log(marker.getPosition().lat());
        console.log(marker.getPosition().lng());

        // event.stopPropagation(); - the map will not zoom in
      });

  // map.addListener('center_changed', function() {
  //   // 3 seconds after the center of the map has changed, pan back to the marker.
  //   window.setTimeout(function() {
  //     map.panTo(marker.getPosition());
  //   }, 08000);
  // });
  //
  // marker.addListener('click', function() {
  //   map.setZoom(10);
  //   map.setCenter(marker.getPosition());
  // });
}

function geoFindMe() {
  var output = document.getElementById("output");
    if (!navigator.geolocation){
      output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }



  function success(position) {
    userLocation.lat = position.coords.latitude;
    userLocation.lng = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + userLocation.lat + ' <br>Longitude is ' + userLocation.lng + '</p>';
    console.log(userLocation);
  }


  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }
    output.innerHTML = "<p>Locating…</p>";
    navigator.geolocation.getCurrentPosition(success, error);
};

function newLocation(newLat,newLng) {
	map.setCenter({"lat":newLat, "lng":newLng});
}





$(document).ready(function(){
  var radiusBox = document.getElementById("radius");
  radius = radiusBox.options[radiusBox.selectedIndex].value;

  $("#share-location").click(function(event) {
    event.preventDefault();

    geoFindMe();
  });
  $("#change-location").click(function(event) {
    event.preventDefault();
    newLocation(userLocation.lat,userLocation.lng);
  });
});
