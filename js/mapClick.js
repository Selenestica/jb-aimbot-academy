let misses = 0;
let map = document.getElementById("map");
map.addEventListener("click", function () {
  misses += 1;
  document.getElementById("misses").innerHTML = misses;
});
