function rand() {
  return Math.round(Math.random() * 1000);
}

let target = document.getElementById("target");
target.addEventListener("click", function () {
  console.log(rand());
  const top = rand();
  const left = rand();
  target.style = `top: ${top}%; left: ${left}; transform: translate(-${top}%, -${left}%);`;
});
