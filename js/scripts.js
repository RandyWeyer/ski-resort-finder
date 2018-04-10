var map;
var userLocation = {"lat":45.084722,"lng":-69.905556};
var radius;

function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(userLocation.lat,userLocation.lng),
    zoom:5,
  };
  map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
    position: userLocation,
    map: map,
    title: "Your Location"
  });
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
}

function newLocation(newLat,newLng)
{
	map.setCenter({"lat":newLat, "lng":newLng});
}

function distance(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var radlon1 = Math.PI * lon1/180
        var radlon2 = Math.PI * lon2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="kilometers") { dist = dist * 1.609344 }
        if (unit=="miles") { dist = dist * 0.8684 }
        return dist
}

function buildDataTable() {

  var radiusBox = document.getElementById("radius");
  radius = radiusBox.options[radiusBox.selectedIndex].value;

  // Destroy previous datatables so a new one can be created in its place
  if ( $.fn.DataTable.isDataTable( '#resort-specs' ) ) {
    $("#resort-specs").DataTable().clear();
    $('#resort-specs').DataTable().destroy();
  }

  skiData.forEach(function(instance) {
    if((distance((instance.lat*1),(instance.long*1),(userLocation.lat),(userLocation.lng),"miles"))<radius) {
      $("#result").append(
      "<tr><td>" + instance.name + "</td><td>" + instance.nearestTown + "</td><td>" + instance.state + "</td><td>" + (instance.baseElevation*1) + "</td><td>" + (instance.verticalFeet*1) + "</td><td>" + (instance.runs*1) + "</td><td>" + instance.website + "</td></tr>")
      console.log((distance((instance.lat*1),(instance.long*1),(userLocation.lat),(userLocation.lng),"miles")));
      }
    });
    var skiTable = $('#resort-specs').DataTable({

    });

  };


$(document).ready(function(){

  $("#share-location").click(function(event) {
    event.preventDefault();

    geoFindMe();
  });
  $("#change-location").click(function(event) {
    event.preventDefault();
    newLocation(userLocation.lat,userLocation.lng);
  });

  buildDataTable();

});
