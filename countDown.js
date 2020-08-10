let end = new Date("Sep 28, 2020 00:00:00");
let endTime = end.getTime();
document.getElementById("remTime").innerHTML = "Time Remaining until: " + end;

let cntDwn = setInterval(function () {
  let currTime = new Date().getTime();
  let diff = endTime - currTime;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (diff <= 0) {
    clearInterval(cntDwn);
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;

    document.getElementById("endMsg").style.visibility = "visible";
  }
}, 1000);
