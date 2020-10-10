/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
let clownImage = {
  x: 250,
  y: 250,
  size: 100,
  image: undefined
}

let bg = {
  x: 250,
  y: 250,
  size: 500,
  image: undefined
}

function preload() {
  clownImage.image = loadImage("assets/images/clown.png");
}

function setup(){
  bg.image = loadImage("assets/images/bg.jpg");
  createCanvas(500,500);
}

function draw() {
  background(bg.image);


  clownImage.x = mouseX;
  clownImage.y = mouseY;

  imageMode(CENTER);
  image(clownImage.image, clownImage.x, clownImage.y, clownImage.size, clownImage.size);
  image(bg.image, bg.x, bg.y, bg.size, bg.size);
} // Defined image, position x,
// position y, scale horizontal, scale vertical. Scale is optional
