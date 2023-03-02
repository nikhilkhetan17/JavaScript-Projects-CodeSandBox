let button = document.querySelector("#button");
let canvas = document.querySelector("#canvas");

button.addEventListener("click", function () {
  let red = randomColor();
  let green = randomColor();
  let blue = randomColor();

  let changeColor = `rgb(${red}, ${green}, ${blue})`;

  canvas.style.backgroundColor = changeColor;
});

function randomColor() {
  return Math.floor(Math.random() * 256);
}
