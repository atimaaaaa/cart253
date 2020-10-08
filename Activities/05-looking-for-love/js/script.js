/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
let circle1 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy:0,
  speed: 5
};

let circle2 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy:0,
  speed: 5
};

let state = `title`; // can be title, simulation, love, sadness.

function setup() {
  createCanvas(500,500);
  setupCircles();
  textSize(64);
  textAlign(CENTER,CENTER);
}

function setupCircles(){
  circle1.x = width/3;
  circle2.x = 2 * width/3;

  circle1.vx = random(-circle1.speed, circle.speed);
  circle1.vy = random(-circle1.speed, circle.speed);

  circle2.vx = random(-circle1.speed, circle.speed)
  circle2.vy = random(-circle1.speed, circle.speed)
}

function draw() {
  background(0);

  if (state ===`title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `love`) {
    love();
  }
  else if (state === `sadness`) {
    sadness();
  }
}

function mousePressed(){
  if (state ===`title`){
    state = `simulation`;
  }
}

function title() {
  push();
  fill(200,100,200);
  text(`LOVE?`, 250, 250);
  pop();
}

function simulation() {
  move();
  checkOffScreen();
  checkOverlap();
  display();
}

function love(){
  push();
  fill(255,10,10);
  text(`:D`, 250, 250);
  pop();
}

function sadness(){
  push();
  fill(0,10,250);
  text(`D:`, 250, 250);
  background(255,0,0);
  pop();
}

function move(){
  // Moving circles
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

function checkOffScreen() {
  // Check if circles are going off the screen
  if(circle1.x < 0 || circle1.x > width || circle2.x < 0 || circle2.x > width || circle1.y < 0 || circle1.y > height || circle2.y < 0 || circle2.y > height) {
    state = `sadness`;
  }
}

function checkOverlap() {
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if(d < circle1.size/2 + circle2.size/2) {
      state = `love`;
    }
}

function display(){
  // Display circles
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}
