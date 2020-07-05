let time = 0;
window.onload = startTimer;

function startTimer() {
  timerVar = setInterval(timer, 1000);
}

function timer() {
  time += 1;
  document.getElementById("time").innerHTML = time;
  if (time === 30) {
    clearInterval(timerVar);
    timerVar = null;
  }
}
