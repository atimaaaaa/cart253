
//let backgroundShade = 0;

//let circle = {
  //x: 0,
//  y: 250,
  //size: 100,
//  speed: 1
let displayCircle = false;

function setup() {
  createCanvas(500,500);
}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(0);

  if (mouseIsPressed) {
    displayCircle = true;
  }

  if (displayCircle) {
    ellipse(250,250,100,100);
  }
}
