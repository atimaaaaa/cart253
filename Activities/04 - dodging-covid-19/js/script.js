/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.

let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy:0,
  speed: 5,
  fill: {
    r:255,
    g:0,
    b:0
  }
}

let user = {
  x: 250,
  y: 250,
  size: 100,
  fill: 150
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  covid19.y = random(0,height);
  covid19.vx = covid19.speed;

  noCursor();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // display static
  for (let i = 0; i < 1000; i++) {
    let x = random(0,width);
    let y = random(0,height);
    stroke(255);
    point(x,y);
  }

  // covid19 movement
  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

  if (covid19.x > width){
    covid19.x = 0;
    covid19.y = random(0,height);
  }

  // user movement
  user.x = mouseX;
  user.y = mouseY;

  // Check for catching covid19
  let d = dist(user.x, user.y, covid19.x, covid19.y);
  if (d < covid19.size/2 + user.size/2) {
    noLoop();
  }

  // Display covid19
  fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
  noStroke();

  ellipse(covid19.x, covid19.y, covid19.size);

  // Display user
  fill(user.fill);
  ellipse(user.x, user.y, user.size);

}
