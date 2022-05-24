var canvas = document.getElementById("bouncy");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var startdraw = canvas.getContext("2d");

var x = 0;
var y = 0;
var increment = 3;
var loop = true;

var rightanswer = prompt(
  "Before proceeding to this website, what is 123 * 486?"
);

while (loop === true) {
  if (rightanswer === "59778") {
    alert("Good job you got it first try! Proceed on to the website");
    break;
  } 
  
  else {
    var output = prompt("Sorry. Try again ;) (123 * 486)");
    
    if (output === "59778") {
      alert("Finally you got it! Go on enjoy the website.");
      break;
    }
  }
}

function buildcircle() {
  startdraw.beginPath();
  startdraw.arc(x, y, 50, 0, 2 * Math.PI);
  startdraw.fillStyle = "red";
  startdraw.fill();
  startdraw.stroke();
}

function bigboy_square() {
  startdraw.fillStyle = "green";
  startdraw.fillRect(x, 100, x, 100);
}

function drawthebox() {
  startdraw.clearRect(0, 0, canvas.width, canvas.height);
  startdraw.font = "40px Roboto";
  startdraw.fillStyle = "green";
  startdraw.fillText("I'm moving!😱", 20, y);
  startdraw.fillText("Wheeeeeeeeeeeeeeeeeeeeeeee!", x, 40);
  startdraw.fillText(
    "MORE MOVING TEXT!!!!!!! I LOVE DONUTS🍩🍩🍩!",
    200,
    y - 50
  );

  buildcircle();
  bigboy_square();

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
