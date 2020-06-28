let score = 0;
let map = document.getElementById("map");
map.addEventListener("click", function () {
  score += 1;
  document.getElementById("score").innerHTML = score;
});
