


$(document).ready(function() {

  var skiTable = $('#resort-specs').DataTable({


  });


  // var lengthOfSki = Object.keys(skiData).length
  // for(var i = 0; i < lengthOfSki; i ++){
    skiData.forEach(function(instance) {
      $("#result").append(
      "<tr><td>" + instance.name + "</td><td>" + instance.nearestTown + "</td><td>" + instance.state + "</td><td>" + instance.baseElevation + "</td><td>" + instance.verticalFeet + "</td><td>" + instance.runs + "</td><td>" + instance.website + "</td></tr>")
    });



 console.log(skiData)




});
