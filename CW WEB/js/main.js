
window.onload = function () {
  window.setInterval(function () {
    var d = new Date();
    var hour = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    if (hour < 10) hour = "0" + hour;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    var result = hour + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerHTML = result;
  }, 1000);
}

