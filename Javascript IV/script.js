var canvas = document.getElementById("bounce");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var startdraw = canvas.getContext("2d");

var x = 0;
var y = 0;
var increment = 4;

function greenRect() {
  startdraw.fillStyle = "green";
  startdraw.fillRect(x, 20, 200, 150);
}

function blueSquare() {
  startdraw.fillStyle = "blue";
  startdraw.fillRect(0, y, 200, 200);
}

function redRect() {
  startdraw.fillStyle = "red";
  startdraw.fillRect(x, y, 400, 200);
}

function drawthebox() {
  startdraw.clearRect(0, 0, canvas.width, canvas.height);
  greenRect();
  blueSquare();
  redRect();

  while (x + increment > canvas.width || x + increment < 0) {
    increment = -increment;
  }

  while (y + increment > canvas.height || y + increment < 0) {
    increment = -increment;
  }

  x += increment;
  y += increment;
}

setInterval(drawthebox, 10);
