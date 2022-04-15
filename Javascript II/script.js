var canvas = document.getElementById("shapes");
var startdraw = canvas.getContext("2d");

dpi = window.devicePixelRatio;

function fix_dpi() {

  let style = {
    height() {
      return +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    },
    width() {
      return +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    }
  };

  canvas.setAttribute("width", style.width() * dpi);
  canvas.setAttribute("height", style.height() * dpi);
}

function draw() {
  var canvas = document.getElementById("shapes");
  if (canvas.getContext) {
    
    fix_dpi();

    var stardraw = canvas.getContext("2d");
    
    var universalwidth = 27
    var bordery = 500
    
    startdraw.fillStyle = "rgba(255, 0, 0)";
    startdraw.fillRect(0, 0, 370, bordery-13);
    
    //Big red rectangle
    startdraw.lineWidth = universalwidth;
    startdraw.beginPath(); // Start a new path
    startdraw.moveTo(381, 0); // Move the pen to ( x1, y1 )
    startdraw.lineTo(381, 960); // Draw a line to (x2, y2)
    startdraw.stroke(); // Render the path
    
    //Line right below the red rectangle
    startdraw.lineWidth = universalwidth;
    startdraw.beginPath(); 
    startdraw.moveTo(0, bordery-13); 
    startdraw.lineTo(381, bordery-13);
    startdraw.stroke();
    
    //Line in the middle
    startdraw.lineWidth = universalwidth;
    startdraw.beginPath(); 
    startdraw.moveTo(27, bordery-13); 
    startdraw.lineTo(920, bordery-13);
    startdraw.stroke();
    
    //Line next to the blue rectangle
    startdraw.lineWidth = universalwidth;
    startdraw.beginPath(); 
    startdraw.moveTo(826, bordery-13); 
    startdraw.lineTo(826, 900);
    startdraw.stroke();
    
    //Blue rectangle
    startdraw.fillStyle = "rgba(0, 0, 255)";
    startdraw.fillRect(839, bordery, 81, 140);
    
    //Thick line
    startdraw.lineWidth = universalwidth + 10;
    startdraw.beginPath(); 
    startdraw.moveTo(839, 622); 
    startdraw.lineTo(920, 622);
    startdraw.stroke();
  
    var rectdimension1 = 600
    var rectdimension2 = 210
    
    //Line on top of yellow rectangle  
    startdraw.lineWidth = universalwidth;
    startdraw.beginPath(); 
    startdraw.moveTo(rectdimension1-rectdimension2, 700); 
    startdraw.lineTo(830, 700);
    startdraw.stroke();
    
    
    //Yellow rectangle
    startdraw.fillStyle = "rgba(255, 255, 0)";
    startdraw.fillRect(rectdimension1-rectdimension2, 713, 230, 140);
    
    //Line between yellow rectangle and black rectangle
    startdraw.lineWidth = universalwidth;
    startdraw.beginPath(); 
    startdraw.moveTo(609, 700); 
    startdraw.lineTo(609, 900);
    startdraw.stroke();
    
    startdraw.fillStyle = "rgba(0, 0, 0)";
    startdraw.fillRect(623, 713, 189, 120);
    
    //The line to the right
    startdraw.lineWidth = universalwidth;
    startdraw.beginPath(); 
    startdraw.moveTo(920, 0); 
    startdraw.lineTo(920, 900);
    startdraw.stroke();
   
    
    
    requestAnimationFrame(draw);
  }
}

requestAnimationFrame(draw);
