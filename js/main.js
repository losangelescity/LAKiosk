/*
 * Main Javascript
 *
 */

//
// Welcome, Cover and Disclaimer Timmer Controls
//

// Set variables

var wasIdle = false;
var discAccept = false;

// Set click on initial presentation of welcome message and cover.

$("#welcome, #cover").click(function(){
  // console.log("Active");
  $("#welcome").hide(); // Hide Welcome message.
  if (wasIdle == true && discAccept == true) {
    $("#cover").animate({ height: 0, opacity: 0 }, 'slow'); // Remove Cover and show content.
  } else {
    $("#disclaimer").show(); // Show disclaimer form.
  }
});

// Set click event for disclaimer form acceptance.

$("#disclaimer .btn").click(function() {
  $("#disclaimer").hide();
  $("#cover").animate({ height: 0, opacity: 0 }, 'slow');
  discAccept = true;
  $("#welcome h1").html("Touch to Continue");
});

// Show Cover and Welcome message if screen left idle.

document.onIdle = function() {
  // console.log("Idle");
  $("#welcome").show();
  $("#cover").animate({ height: 1920, opacity: 100 }, 'slow');
  $("#disclaimer").hide();
  wasIdle = true;

};

// Reload the page to inital state if away timer is triggered.

document.onAway = function() {
  // console.log("Away");
  location.reload();
};

//
// Slideshow Control
//

$("#slideshow > div:gt(0)").hide();
  setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  30000);

//
// Main Area Draggable
//

$( ".draggable" ).draggable({
  containment: "window"
});
$( ".draggable" ).draggable({
  handle: ".dragbar"
});
$( ".draggable" ).draggable({
  opacity: 0.35
});


//
// Wheel Nav
//



// Instantiate Wheel Nav

// City menu
var piemenuCity = new wheelnav('piemenu-city');
piemenuCity.clockwise = false;
piemenuCity.wheelRadius = piemenuCity.wheelRadius * 0.83;
piemenuCity.navItemsContinuous = true;
piemenuCity.sliceAngle = 36;
piemenuCity.createWheel();

// Local menu
var piemenuLocal = new wheelnav('piemenu-local');
piemenuLocal.clockwise = false;
piemenuLocal.wheelRadius = piemenuLocal.wheelRadius * 0.83;
piemenuLocal.navItemsContinuous = true;
piemenuLocal.sliceAngle = 36;
piemenuLocal.createWheel();



// Wheel Nav Toggle event

var piemenuState = "city"
$("#piemenu-local").css("top","6em");

$("#piemenu-toggle .btn-local").click(function() {
  if (piemenuState == "city") {
    $("#piemenu-city").animate({top:"6em"}, 1000);
    $("#piemenu-local").animate({top:"23em"}, 1000);
    $("#main-iframe").attr('src', "https://www.opentable.com/los-angeles/downtown-los-angeles-restaurants");
    piemenuState = "local";
  }
});

$("#piemenu-toggle .btn-city").click(function() {
   if (piemenuState == "local") {
    $("#piemenu-city").animate({top:"23em"}, 1000);
    $("#piemenu-local").animate({top:"6em"}, 1000);
    $("#main-iframe").attr('src', "map/index.html");
    piemenuState = "city";
  }
});



// Wheel Nav Link and Iframe Control

$("a").click(function(e) {
  e.preventDefault();
  $("#main-iframe").attr('src', $(this).attr('url'));
})


function go(loc) {
  document.getElementById('main-iframe').src = loc;
}
