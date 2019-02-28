function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);

  var d = new Date();
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  document.getElementById("demo").innerHTML = months[d.getMonth()];

  var d = new Date();
  document.getElementById("day").innerHTML = d.getDate();
} 


function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

