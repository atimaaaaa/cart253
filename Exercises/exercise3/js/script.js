/**************************************************
Exercise 3: Looking for love
Atima Ng

This is a program to help Ness find love. Control his movements by pressing the arrow keys. There might be a special bonus if you press down the space bar!
**************************************************/

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
  x: 700,
  y: 300,
  size: 100,
  vx:0,
  vy:0,
  speed:1,
  acceleration: 0.05,
  image: undefined
};

let grass = {
  x: 0,
  y: 370,
  width: 1000,
  height:200,
  fill : {
    r:0,
    g:255,
    b:0,
  }
};

let state =  `title`; // Possible states include title, love, no love, alternativeLove and simulation.

// preload()
//
// This is where my images and fonts will be loading.
function preload(){
  ness.image = loadImage("assets/images/ness.png");
  paula.image = loadImage("assets/images/paula.png");
  lucas.image = loadImage("assets/images/lucas.png");

  myFont = loadFont('assets/font/twoson.ttf');
}

// setup()
//
// To create my canvas size and st initial states.
function setup() {
  createCanvas(1000,500);
  initial();
}

function initial() {
  // Initial positions
  paula.x = random(400,750);
  ness.x = random(50,400);
  paula.vx = random(-paula.speed, paula.speed);

  textFont(myFont);
  textSize(64);
  textAlign(CENTER,CENTER);
}

// draw()
//
// The game is divided into 5 sections: title, simumlation, love, noLove and the surprise ending, alternativeLove.
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

// Press space to make Lucas attracted to you.
  if (keyIsDown(32)) {
    let dx = lucas.x - ness.x;
    if (dx < 0){
      lucas.vx = lucas.speed + lucas.acceleration;
    }
    else if (dx > 0) {
      lucas.vx = -lucas.speed - lucas.acceleration;
    }
  }
}
 // Title sequence
function title() {
  push();
  fill(255,0,0);
  text(`LoveBound`, width/2, height/2 -40);
  fill(255);
  textSize(25);
  text(`Help Ness find true love! Navigate with the`, width/2, 330);
  text(`left and right arrows. Good luck!`, width/2, 360);
  pop();
}

// Main simulation for the game
function simulation(){
    movement();
    checkOffScreen();
    checkOverlap();
    display();
    alternativeOverlap();
}

// Act when Ness finds love
function love(){
  push();
  fill(255,50,50);
  text(`LOVE EXISTS`, width/2, height/2);
  pop();
}

// Act when Ness does not find love
function noLove(){
  push();
  fill(0,50,255);
  text(`NO LOVE EXISTS`, width/2, height/2);
  pop();
}

// Act when Ness finds love with Lucas
function gayLove(){
  push();
  fill(0,255,0);
  text(`ALL LOVE EXISTS`, width/2, height/2);
  pop();
}

function mousePressed(){
  // `Title` state to `simulation`
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

  lucas.x = lucas.x + lucas.vx;
  lucas.y = lucas.y + lucas.vy;
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
    background(255,0,0);
    state = `alternativeLove`;

  }
}

function display(){
    // Display Ness and Paula and Lucas
    imageMode(CENTER);
    image(ness.image, ness.x, ness.y, ness.size);
    image(paula.image, paula.x, paula.y, 140,140);
    image(lucas.image, lucas.x, lucas.y, 100,140);

    rect(grass.x, grass.y, grass.width, grass.height);
    fill(grass.fill.r, grass.fill.g, grass.fill.b);
}
