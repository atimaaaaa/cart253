/**************************************************
"I like to move it move it!" Exercise
Atima Ng

An exercise on practicing using map() and constrain(). This will draw a blue and orange circle growing to the size of the canvas. The cursor will hold a square that will change color depending on its position.
**************************************************/
let backgroundShade = 100; // Draws black background.

// Declaring left circle
let circle1 = {
  x: 50,
  y: 400,
  size: 100,
  speed: 1.25,
  growthRate: 0.3,
  fill: {
    r: 38,
    g: 203,
    b: 224,
  } // blue circle
}

//Declaring right circle
let circle2 = {
  x: 1000,
  y: 400,
  size: 100,
  speed: -1,
  ratio: 1.5,
  fill: {
    r:240,
    g:137,
    b:125,
  } // White circle
}

// Declaring square.
let square1 = {
  x: 0,
  y: 0,
  size: 100,
  fill: {
    r: 0,
    g: 0,
    b: 0 // Black square.
  }
}

// setup()
//
// Setting the canvas size.
function setup() {
  createCanvas(1000, 800);
  noStroke();
}

// draw()
//
// Draws one orange circle, one blue circle and one square that will change color depending on the position of the mouse on the canvas.
function draw() {
  background(backgroundShade);

  //Drawing growing left blue circle1
  circle1.x += circle1.speed;
  circle1.x = constrain(circle1.x, 0, 200);
  circle1.size += circle1.growthRate
  circle1.size = constrain(circle1.size, 0, 400);
  fill(circle1.fill.r, circle1.fill.g, circle1.fill.b);
  ellipse(circle1.x, circle1.y, circle1.size); // Drawing the left blue circle

  // Drawing right circle2 growing.
  circle2.x += +circle2.speed;
  circle2.x = constrain(circle2.x, 700, 900);
  circle2.size = circle1.size * circle2.ratio;
  circle2.size = constrain(circle2.size, 0, 600);
  fill(circle2.fill.r, circle2.fill.g, circle2.fill.b);
  ellipse(circle2.x, circle2.y, circle2.size); // drawing the right orange circle.

  // Drawing growing square.
  rectMode(CENTER);
  square1.fill.r = map(mouseX, 0, width, 0, 255);
  square1.fill.g = map(mouseY, 0, width, 0, 255);
  square1.fill.b = map(mouseX, 0, width, 0, 255);
  fill(square1.fill.r, square1.fill.g, square1.fill.b);
  square(mouseX, mouseY, square1.size);
}
