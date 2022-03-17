console.log("Hmmmm.....What are you doing here");

document.getElementById("header").innerHTML = "HIIIII!!!!!!";

var newnum;

newnum = 7;

var newvar;

newvar = newnum + 5;

document.getElementById("coolerheader").innerHTML =
  newnum + " and " + newvar + " are my two favorite numbers";

var first = prompt("Say something.................................'hello' ");

while (newnum === 7) {
  if (first === "hello") {
    alert("Wow you're pretty smart. For that, here's my social security number...1234 56 7891");
    break;
  } 
  
  else {
    prompt("Sorry try again");
  }
}
