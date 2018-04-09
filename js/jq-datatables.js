


$(document).ready(function() {



  for(var i = 0; i < Object.keys(skiData).length; i ++){
    console.log(skiData[i].name);
    if(skiData[i].name == "Welch Village"){
      console.log("true i=" + i);
      count = i;
      break;
    }
  }

  // var skiTable = $('#resort-specs').DataTable({
  //
  // });
  // $.getJSON("/ski-resort-finder/js/ski-resorts.json", function(data) {
  //   $.each(data, function(index, value) {
  //     console.log(value);
  //   });
  // });



});
