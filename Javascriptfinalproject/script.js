var canvas = document.getElementById("finalproject");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

//all them variables
var x = 0;
var y = 0;
var speed = 5;
var y2 = 20;
var loop = true;

var name = prompt("What is your name?");

var ballradius = 10;

var rightanswer = prompt(
  "Before proceeding to this website, do you like donuts?"
);

while (loop === true) {
  if (rightanswer === "yes") {
    alert("Good job, you chose the right answer. Donuts are super tasty 😋!");
    break;
  }

  if (rightanswer === "no") {
    var output = prompt("Try again. We need to hear the right answer ;)");

    if (output === "yes") {
      alert("Finally you got it! Donuts are just good like that 😎");
      break;
    }
  }
}

function createCircles() {
  //a circle or two
  ctx.beginPath();
  ctx.arc(x, y, ballradius, 0, Math.PI * 2, false);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(600 + x, y2, 15, 0, Math.PI * 2, false);
  ctx.fillStyle = "#e3f04e";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(960, y, 30, 0, Math.PI * 2, false);
  ctx.fillStyle = "#e29025";
  ctx.fill();
  ctx.closePath();
}

function defineText() {
  //some text
  ctx.fillStyle = "red";
  ctx.font = "30px Arial";
  ctx.fillText("I'm a moving elementttt!!!", x, 200);

  ctx.fillStyle = "white";
  ctx.font = "50px Montserrat";
  ctx.fillText("Welcome to my page " + name, 360, 360);
}

function makeAtriangle() {
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(x, 300);
  ctx.lineTo(x + 400, 300);
  ctx.closePath();

  ctx.lineWidth = 5;
  ctx.strokeStyle = "#666666";
  ctx.stroke();

  ctx.fillStyle = "red";
  ctx.fill();
}

function square() {
  ctx.fillStyle = "blue";
  ctx.fillRect(360, 550, x, 50);
}

function draw() {
  //black background as black as my dark room
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  createCircles();
  defineText();
  makeAtriangle();
  square();

  //while loop for bouncing objects
  while (x + speed > canvas.width || x + speed < 0) {
    speed = -speed;
  }

  while (y + speed > canvas.height || y + speed < 0) {
    speed = -speed;
  }

  if (600 + x <= canvas.width) {
    y2 += speed;
  }

  x += speed;
  y += speed;
  ballradius += speed;
}

setInterval(draw, 10);
