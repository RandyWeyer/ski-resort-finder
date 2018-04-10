


$(document).ready(function() {

  skiData.forEach(function(instance) {
    $("#result").append(
    "<tr><td>" + instance.name + "</td><td>" + instance.nearestTown + "</td><td>" + instance.state + "</td><td>" + (instance.baseElevation*1) + "</td><td>" + (instance.verticalFeet*1) + "</td><td>" + (instance.runs*1) + "</td><td>" + instance.website + "</td></tr>")
  });

  var skiTable = $('#resort-specs').DataTable({


  });

 console.log(skiData)

});
