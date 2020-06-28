function rand() {
  return Math.round(Math.random() * 1000);
}

let hits = 0;
let target = document.getElementById("target");
target.addEventListener("click", function () {
  hits += 1;
  document.getElementById("hits").innerHTML = hits;
  const top = rand();
  const left = rand();
  target.style = `top: ${top}%; left: ${left}; transform: translate(-${top}%, -${left}%);`;
});
