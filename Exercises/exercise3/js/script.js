/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
let ness = {
  x: 400,
  y: 300,
  size:100,
  vx:0,
  vy:0,
  speed:5
};

let paula = {
  x: 500,
  y: 300,
  size:100,
  vx:0,
  vy:0,
  speed:2
};

let state =  `simulation`; // Possible states include title, love, no love and simulation.

function setup() {
  createCanvas(1000,500);

  //Paula speed
  paula.vx = random(-paula.speed, paula.speed);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  simulation();

  

  if (state === `simulation`) {
    simulation();
  }
}

function title() {
  textSize(64);
  textAlign(CENTER,CENTER);
  text(`LoveBound`, width/2, height/2);
}

function simulation(){
    movement();
    checkOffScreen();
    checkOverlap();
    display();
}

function movement() {
  // Ness & Paula movement
  if (keyIsDown(LEFT_ARROW)){
    ness.vx = -ness.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)){
    ness.vx = ness.speed;
  }
  else {
    ness.vx = 0;
  }
}

function checkOffScreen() {
  // Check if Ness and paula are going off the canvas
  if (ness.x < width || ness.x > 0 || paula.x < width || paula.x > 0) {
    //BROKEN HEART ENDING
  }
}

function checkOverlap(){
  // Check if Ness and Paula are overlapping and fall in LOVE.
  let d = dist(ness.x, ness.y, paula.x, paula.y);
    if(d < ness.size/2 + paula.size/2){
      //LOVE EXISTS ENDING
    }
}

function display(){
    // Display Ness and Paula
    ness.x = ness.x + ness.vx;
    ness.y = ness.y + ness.vy;
    paula.x = paula.x + paula.vx;
    paula.y = paula.y + paula.vy;

    ellipse(ness.x, ness.y, ness.size);
    ellipse(paula.x, paula.y, paula.size);

}
