/**************************************************
"I like to move it move it!" Exercise
Atima Ng

An exercise on practicing using map() and constrain()
**************************************************/
let backgroundShade = 100;

let circle1 = {
  x: 250,
  y: 400,
  //speed: 1,
  size: 100,
  //growthRate: 0.5,
  fill: {
    r:38,
    g:203,
    b:224,
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

  //Circle1 movement
  //circle1.x = circle1.x + circle.speed;
  //circle1.x = constrain(circle.x, 0, width/2);
  //circle1.size = circle1.size + circle.growthRate;
  //circle.size = constrain(circle.size, 0, width);
  fill(circle1.fill.r, circle1.fill.g,circle1.fill.b,);
  ellipse(circle1.x, circle1.y, circle1.size);
}
