function rand() {
  return Math.round(Math.random() * 20) - 10;
}

let target = document.getElementById("target");
target.addEventListener("click", function () {
  const top = 500 + rand();
  const left = 500 + rand();
  target.style = `top: ${top}%; left: ${left}; transform: translate(-${top}%, -${left}%);`;
});
