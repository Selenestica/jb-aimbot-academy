function changeColor() {
  document.addEventListener("click", function () {
    const map = document.getElementById("map");
    if (map.style === "background-color: red;") {
      map.style = "background-color: blue;";
    } else {
      map.style = "background-color: red;";
    }
  });
}
