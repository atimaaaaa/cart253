/**************************************************
"I like to move it move it!" Exercise
Atima Ng

An exercise on practicing using map() and constrain()
**************************************************/
let backgroundShade = 0;

// Defining left circle
let circle1 = {
  x: 20,
  y: 400,
  size: 100,
  speed:1,
  growthRate: 0.5,
  fill: {
    r:38,
    g:203,
    b:224,
  } // blue circle
}

//Defining right circle
let circle2 = {
  x: 700,
  y: 400,
  size: 100,
  ratio:1.5,
  fill: 255, // White circle
}

let square1 = {
  x: 0,
  y:0,
  size: 100,
  fill:{
    r:0,
    g:0,
    b:0,
  }
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(1000,800);
  noStroke();
}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(backgroundShade);

  //Drawing growing left blue circle1
  circle1.x = circle1.x + circle1.speed;
  circle1.x = constrain(circle1.x, 0, 200);
  circle1.size += circle1.growthRate
  circle1.size = constrain(circle1.size, 0, 400);
  fill(circle1.fill.r, circle1.fill.g,circle1.fill.b);
  ellipse(circle1.x, circle1.y, circle1.size); // Drawing blue circle

  // Drawing right circle2 growing.
  circle2.size = circle1.size * circle2.ratio;
  circle2.size = constrain(circle2.size, 0, 600);
  fill(circle2.fill);
  ellipse(circle2.x, circle2.y, circle2.size);

// Drawing growing square.
  rectMode(CENTER);
  square1.fill.r = map(mouseX,0, width, 0, 255);
  square1.fill.g = map(mouseY,0, width, 0, 255);
  square1.fill.b = map(mouseX,0, width, 0, 255);
  fill(square1.fill.r, square1.fill.g, square1.fill.b);
  square(mouseX, mouseY, square1.size);
}
