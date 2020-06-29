function rand() {
  return Math.round(Math.random() * 1000);
}

let hits = 0;
let target = document.getElementById("target");
target.addEventListener("click", function (e) {
  const quadrantArray = [1, 2, 3, 4];
  const randomQuadrant =
    quadrantArray[Math.floor(Math.random() * quadrantArray.length)];
  hits += 1;
  document.getElementById("hits").innerHTML = hits;
  const top = rand();
  const left = rand();
  if (randomQuadrant === 1) {
    target.style = `top: ${top}%; left: ${left}; transform: translate(-${top}%, -${left}%);`;
  } else if (randomQuadrant === 2) {
    target.style = `top: -${top}%; left: -${left}; transform: translate(-${top}%, ${left}%);`;
  } else if (randomQuadrant === 3) {
    target.style = `top: -${top}%; left: -${left}; transform: translate(${top}%, ${left}%);`;
  } else if (randomQuadrant === 4) {
    target.style = `top: -${top}%; left: -${left}; transform: translate(${top}%, -${left}%);`;
  }
  e.stopPropagation();
});
