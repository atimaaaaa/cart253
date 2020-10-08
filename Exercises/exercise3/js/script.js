/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
let ness = {
  x: 100,
  y: 300,
  size:100,
  vx:0,
  vy:0,
  speed:5,
  image: undefined
};

let paula = {
  x: 500,
  y: 300,
  size: 100,
  vx:0,
  vy:0,
  speed:2,
  image: undefined
};

let lucas = {
  x: 500,
  y: 300,
  size: 100,
  vx:0,
  vy:0,
  speed:2,
  image: undefined
};

let state =  `title`; // Possible states include title, love, no love, alternativeLove and simulation.

function preload(){
  ness.image = loadImage("assets/images/ness.png");
  paula.image = loadImage("assets/images/paula.png");
  lucas.image = loadImage("assets/images/lucas.png");
}

function setup() {
  createCanvas(1000,500);
  textSize(64);
  textAlign(CENTER,CENTER);

  //Paula speed
  paula.vx = random(-paula.speed, paula.speed);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state ===  `love`) {
    love();
  }
  else if (state === `noLove`) {
    noLove();
  }
  else if (state ===`alternativeLove`) {
    gayLove();
  }

// Press space to make Paula run away.
  if (keyIsDown(32)) {
    paula.vx = paula.vx + 0.2 ;
  }
}

function title() {
  push();
  fill(255,0,0);
  text(`LoveBound`, width/2, height/2);
  pop();
}

function simulation(){
    movement();
    checkOffScreen();
    checkOverlap();
    display();
    alternativeOverlap();
}

function love(){
  push();
  fill(255,50,50);
  text(`LOVE EXISTS`, width/2, height/2);
  pop();
}

function noLove(){
  push();
  fill(0,50,255);
  text(`NO LOVE EXISTS`, width/2, height/2);
  pop();
}

function gayLove(){
  push();
  fill(0,255,0);
  text(`ALL LOVE EXISTS`, width/2, height/2);
  pop();
}

function mousePressed(){
  if (state ===`title`){
    state = `simulation`;
  }
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

  ness.x = ness.x + ness.vx;
  ness.y = ness.y + ness.vy;

  paula.x = paula.x + paula.vx;
  paula.y = paula.y + paula.vy;
}

function checkOffScreen() {
  // Check if Ness and paula are going off the canvas
  if (ness.x > width || ness.x < 0 || paula.x > width || paula.x < 0) {
    state = `noLove`;
  }
}

function checkOverlap(){
  // Check if Ness and Paula are overlapping and fall in LOVE.
  let d = dist(ness.x, ness.y, paula.x, paula.y);
    if(d < ness.size/2 + paula.size/2){
      state = `love`;
    }
}

function alternativeOverlap(){
  // Check if Ness and Paula are overlapping and fall in LOVE.
  let d = dist(ness.x, ness.y, lucas.x, lucas.y);
    if(d < ness.size/2 + lucas.size/2){
      state = `alternativeLove`;
    }
}

function display(){
    // Display Ness and Paula
    imageMode(CENTER);
    image(ness.image, ness.x, ness.y, ness.size);
    image(paula.image, paula.x, paula.y, 140,140);
    image(lucas.image, lucas.x, lucas.y, 100,140);
}
