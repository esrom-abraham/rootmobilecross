let canvas;
let startdraw;

let increment = 0;

let speed = 5;

window.onload = function () {
  canvas = document.getElementById("animation");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  startdraw = canvas.getContext("2d");

  setInterval(draw, 20);
};

function draw() {
  increment = increment + speed;

  startdraw.fillStyle = "green";
  startdraw.fillRect(0, 0, canvas.width, canvas.height);

  startdraw.fillStyle = "rgba(176, 38, 255)";
  startdraw.fillRect(0, increment, 200, 200);

  startdraw.fillStyle = "rgba(173, 224, 98)";
  startdraw.fillRect(increment, 0, 110, 110);

  startdraw.fillStyle = "rgba(221, 34, 48)";
  startdraw.fillRect(10, 10, 10 + increment, 10 + increment);

  startdraw.fillStyle = "rgba(0, 0, 255)";
  startdraw.fillRect(0, 0, canvas.width - increment, canvas.height - increment);
}
