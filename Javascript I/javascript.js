console.log("Hmmmm.....What are you doing here");

document.getElementById("header").innerHTML = "HIIIII!!!!!!";

var newnum;

newnum = 7;

var newvar;

newvar = newnum + 5;

document.getElementById("coolerheader").innerHTML =
  newnum + " and " + newvar + " are my two favorite numbers";

var first = prompt("Hello user. I'm thinking of a number from 1-100. Can you guess what I'm thinking of?");

while (newnum === 7) {
  if (first === "69") {
    alert("Wow you're pretty smart. For that, here's my social security number...1234 56 7891");
    break;
  } 
  
  else {
    let x = prompt("Sorry try again");
    
    if (x === "69") {
      alert("Finally you got it");
      break;
    }
  }
}
