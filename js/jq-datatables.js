


$(document).ready(function() {

  skiData.forEach(function(instance) {
    $("#result").append(
    "<tr><td>" + instance.name + "</td><td>" + instance.nearestTown + "</td><td>" + instance.state + "</td><td>" + instance.baseElevation + "</td><td>" + instance.verticalFeet + "</td><td>" + instance.runs + "</td><td>" + instance.website + "</td></tr>")
  });
  
  var skiTable = $('#resort-specs').DataTable({


  });

 console.log(skiData)

});
