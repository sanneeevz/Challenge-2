//get current hours
var hours = new Date().getHours();

hours = 8;

function startTime() {
  var today = new Date();
  var curHr = today.getHours()
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var d = today.getDate();
  var x = today.getMonth() +1;
  var y = today.getFullYear();
  
  m = checkTime(m);
  s = checkTime(s);
  x = checkTime(x);

  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  document.getElementById('day').innerHTML = d + " - " + x + " - " + y;  
  
  var t = setTimeout(startTime, 500);

  if (curHr < 12) {
    console.log('good morning')
  } else if (curHr < 18) {
    console.log('good afternoon')
  } else {
    console.log('good evening')
  }

  // var d = new Date();
  // var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  // document.getElementById("demo").innerHTML = months[d.getMonth()];
} 

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function sayHello() {
  var greeting;

  if (hours < 10) {
    greeting = "Good morning";
  } else if (hours < 20) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("hello").innerHTML = greeting;
}

function showImages() {

  if (hours < 10) {
    document.getElementById("image").innerHTML  = "<img src='img/morning.png' id=\"shine\">";
    moveShineImage();

  } else if (hours < 20) {
    document.getElementById("image").innerHTML  = "<img src='img/afternoon.png' id=\"sun\">";
    moveSunImage();

  } else {
    document.getElementById("image").innerHTML  = "<img src='img/night.png' id=\"moon\">";
    moveMoonImage();
  }
}

function moveShineImage(){
  //TweenMax.to("#image img", 6 {x:600, rotation:360, scale:0.5});
  var shine = document.getElementById("shine");
  TweenMax.to(shine, 2, {x:window, rotation:360, scale:0.5, repeat:-1, yoyo:true});
}

function moveSunImage(){
  //TweenMax.to("#image img", 6 {x:600, rotation:360, scale:0.5});
  var sun = document.getElementById("sun");
  TweenMax.to(sun, 2, {x:window.innerWidth/2, rotation:360, scale:0.5, repeat:-1, yoyo:true, ease:Linear.easeNone});
}

function moveMoonImage(){
  //TweenMax.to("#image img", 6 {x:600, rotation:360, scale:0.5});
  var moon = document.getElementById("moon");
  TweenMax.to(moon, 2, {x:window.innerWidth/2, scale:0.5, repeat:-1, yoyo:true, ease:Sine.easeInOut});
}

sayHello();
startTime();
showImages();
