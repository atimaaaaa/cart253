/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
let music;

let clownImage = {
  x: -400,
  y: 350,
  vx: 2,
  vy: 0,
  size:300,
  image: undefined,
};

let bg = {
  r:0,
  g:0,
  b:0
}


function preload() {
  music = loadSound(`assets/sounds/Never Gonna Give You Up Original.mp3`);
  clownImage.image = loadImage(`assets/images/clown.png`);
}

function setup() {
   createCanvas(1000,700);
   bg.r = random(0,255);
   bg.g = random(0,255);
   bg.b = random(0,255);

}

function draw() {
  background(0);
  clownMovement();
}


function mousePressed() {
  tryMusic();
  bgFlashing();
  clownMovement();
}

function keyPressed() {
  tryMusic();
  bgFlashing();
  clownMovement();
}

function tryMusic() {
  if(!music.isPlaying()) {
    music.loop();
  }
}

function clownMovement() {
  bgFlashing();
  clownImage.x = clownImage.x + clownImage.vx;
  imageMode(CENTER);
  image(clownImage.image, clownImage.x, clownImage.y, clownImage.size,clownImage.size);
}

function bgFlashing() {
  bg.r = random(0,255);
  bg.g = random(0,255);
  bg.b = random(0,255);

  background(bg.r, bg.g,bg.b);
}
