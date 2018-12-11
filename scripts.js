alert("This is a test message");


$(document).ready(function(){
    $("btn-twitter").mouseenter(function(){
        $("btn-twitter").css("background-color", "yellow");
    });
    $("btn-twitter").mouseleave(function(){
        $("btn-twitter").css("background-color", "lightgray");
    });
});
$(document).ready(function(){
    $("btn-facebook").mouseenter(function(){
        $("btn-facebook").css("background-color", "yellow");
    });
    $("btn-facebook").mouseleave(function(){
        $("btn-facebook").css("background-color", "lightgray");
    });
});
$(document).ready(function(){
    $("btn-pinterest").mouseenter(function(){
        $("btn-pinterest").css("background-color", "yellow");
    });
    $("btn-pinterest").mouseleave(function(){
        $("btn-pinterest").css("background-color", "lightgray");
    });
});

$('#heart').ready(function(event) {
    $.mouseenter(function(){
      $.css("background-color", "red");
    });
}
$(document).ready(function(){
    $("#heart").mouseenter(function(){
        $("#heart").css("background-color", "red");
    });
    $("#heart").mouseleave(function(){
        $("#heart").css("background-color", "orange");
    });

    function initMap() {
      // The location of Uluru
      var uluru = {lat: -25.344, lng: 131.036};
      // The map, centered at Uluru
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 4, center: uluru});
      // The marker, positioned at Uluru
      var marker = new google.maps.Marker({position: uluru, map: map});
    }
