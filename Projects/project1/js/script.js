/**************************************************
Project 1: Catastrophy
Atima Ng

Here is a description of this template p5 project.
**************************************************/
"use strict";

let pillow = {
  x: 0,
  y: 0,
  sizeWidth: 230,
  sizeHeight: 60,
  image: undefined
};

let cat1 = {
  x: 0,
  y: -100,
  sizeWidth:150,
  sizeHeight: 100,
  vx:0,
  vy: 2,
  caught: false,
  image: undefined
}

let cat2 = {
  x: 0,
  y: -400,
  sizeWidth:150,
  sizeHeight: 100,
  vx:0,
  vy: 2,
  caught: false,
  image: undefined
}

let cat3 = {
  x: 0,
  y: -900,
  sizeWidth:150,
  sizeHeight: 100,
  vx:0,
  vy: 2,
  caught: false,
  image: undefined
}

let cat4 = {
  x: 0,
  y: -1100,
  sizeWidth:150,
  sizeHeight: 100,
  vx:0,
  vy: 2,
  caught: false,
  image: undefined
}

let cat5 = {
  x: 0,
  y: -1300,
  sizeWidth:150,
  sizeHeight: 100,
  vx:0,
  vy: 2,
  caught: false,
  image: undefined
}

let cloud1 = {
  x: 0,
  y: 200,
  sizeWidth: 180,
  sizeHeight: 120,
  vx:1,
  vy:0,
  image: undefined
}

let cloud2 = {
  x: 0,
  y: 600,
  sizeWidth: 250,
  sizeHeight: 180,
  vx: 1.5,
  vy:0,
  image: undefined
}

let cloud3 = {
  x: 0,
  y: 300,
  sizeWidth: 300,
  sizeHeight: 220,
  vx: 1,
  vy:0,
  image: undefined
}

let title = {
  fill: {
    r: 239,
    g: 140,
    b: 125
  }
}

let bg = {
  fill: {
    r: 173,
    g: 216,
    b: 230
  }
}

let state = `title`; // Possible states: 'title', 'simulation', 'happy ending' and 'sad ending'.

let titleFont;

let catcher = pillow;

function preload() {
  // Cat image source: https://www.pngfind.com/mpng/ixbiwiJ_kawaii-cute-cat-cat-playing-with-yarn-hd/
  // Pillow image source: https://www.freepik.com/premium-vector/colorful-pillow-pyramid-slide-cartoon-set-home-interior-textile-soft-color-square-pillow_7714773.htm#page=1&query=cushion&position=7

  titleFont = loadFont("assets/typography/LuckiestGuy-Regular.ttf");

  pillow.image = loadImage("assets/images/pillow.png");
  cat1.image = loadImage("assets/images/catHappy_v2.png");
  cat2.image = loadImage("assets/images/catHappy_v2.png");
  cat3.image = loadImage("assets/images/catHappy_v2.png");
  cat4.image = loadImage("assets/images/catHappy_v2.png");
  cat5.image = loadImage("assets/images/catHappy_v2.png");
  cloud1.image = loadImage("assets/images/cloud.png");
  cloud2.image = loadImage("assets/images/cloud.png");
  cloud3.image = loadImage("assets/images/cloud.png");
}

// setup()
//
// Creating the canvas size as well as positioning the initial positions of the cats, clouds and thw pillow.
function setup() {
  createCanvas(1000,1000);
  initial();

}

function initial() {
  // Initial positions
  pillow.y = height - 200;
  cat1.x = random(50,width - 50);
  cat2.x = random(50,width - 50);
  cat3.x = random(50,width - 50);
  cat4.x = random(50,width - 50);
  cat5.x = random(50,width - 50);
  cloud1.x = random(50,width - 50);
  cloud2.x = random(50,width - 50);
  cloud3.x = random(50,width - 50);

// Initial typography
  textAlign(CENTER,CENTER);
  textSize(30);
  fill(title.fill.r, title.fill.g, title.fill.b);
  textFont(titleFont);
}

// draw()
//
// This section will display the clouds, cats and pillow (the catcher). When the cats overlap with the pillow and with each othher, they will stack up on top of the x position of the catcher. The clouds are in the background floating away.
function draw() {
  background(0);

  if (state ===  `title`) {
    titleScreen();
  }

  if (state ===  `instruction`) {
    instructionScreen();
  }

  if (state === `simulation`) {
    simulation();
  }

  if (state === `win`) {
    win();
  }

  if (state ===  `lose`) {
    lose();
  }
}

function mousePressed() {
  if (state === `title`) {
    state = `instruction`;
  }
  else if (state === `instruction`) {
    state = `simulation`;
  }
}


function simulation() {
  catsMoving();
  catsOverlap();
  cloudsMovement();
  noStackCats();
  stackCats();
  display();
}

function titleScreen() {
  push();
  background(121, 144, 247);
  textAlign(CENTER,CENTER);
  textSize(220);
  textFont(titleFont);
  text(`CATcher`, width / 2, height / 3);
  pop();

  push();
  fill(255);
  text(`Click anywhere to continue`, width / 2, height - 300);
  pop();
}

function instructionScreen() {
  push();
  background(121, 144, 247);
  fill(255);

  text(`There is a catastrophy
  Cats are falling from the sky
  and they need to be protected at all cost`, width / 2, height / 3);
  pop();

  push();
  fill(title.fill.r, title.fill.g, title.fill.b);
  text(`Control the safety pillow with the mouse.
    Catch all cats to win!`, width / 2, height -300);
  pop();
}

function win() {
  push();
  background(121, 144, 247);
  textAlign(CENTER,CENTER);
  textSize(64);

  text(`WINNER :)`, 500, 500);
  pop();
}

function lose() {
  push();
  background(121, 144, 247);
  text(`LOSER :(`, width / 2, height / 2);
  pop();
}

// User wins when the fifth cat is stacked.
function stackCats() {
  if (cat4.x === cat5.x && !cat3.x===cat5.x && !cat2.x===cat5.x && !cat1.x===cat5.x) {
    state = `win`;
  }
}

function noStackCats() {
  if (cat1.x === cat5.x || cat2.x === cat5.x || cat3.x === cat5.x || pillow.x === cat5.x || cat5.y > height) {
    state = `lose`;
  }
}

// Movement of the cats
function catsMoving() {
  moveCat(cat1);
  moveCat(cat2);
  moveCat(cat3);
  moveCat(cat4);
  moveCat(cat5);
}

// Checking which cats overlap
function catsOverlap() {
  checkCatch(cat1);
  checkCatch(cat2);
  checkCatch(cat3);
  checkCatch(cat4);
  checkCatch(cat5);
}

function moveCat(cat) {
  // Movement of cats falling down.
  if (cat.caught) {
    cat.x = pillow.x;
  }
  else {
    cat.y = cat.y + cat.vy;
  }
}

function checkCatch(cat) {
 // Check if anything is touching. If cat touches the base, the cat sits on top of the base. If cat touches another cat, it will sit on top of the the initial cat.
  let d = dist(catcher.x, catcher.y, cat.x,cat.y);
    if(!cat.caught && d < catcher.sizeHeight / 3 + cat.sizeHeight / 2) {
      cat.vy = 0;
      cat.caught = true;
      catcher = cat;
    }
  }

// Which clouds are moving.
function cloudsMovement() {
  cloudsFloating(cloud1);
  cloudsFloating(cloud2);
  cloudsFloating(cloud3);
}

// Movement of the clouds.
function cloudsFloating(cloud) {
  cloud.x = cloud.x + cloud.vx;

  if (cloud.x > width) {
    cloud.x = 0;
    cloud.y = random(0,height-300);
  }
}

function display(){
  // Display base and cats.
  pillow.x = mouseX;
  noStroke();

  // Sky blue background
  background(bg.fill.r, bg.fill.g, bg.fill.b);

  // Display clouds
  imageMode(CENTER)
  image(cloud1.image, cloud1.x, cloud1.y, cloud1.sizeWidth, cloud1.sizeHeight);
  image(cloud2.image, cloud2.x, cloud2.y, cloud2.sizeWidth, cloud2.sizeHeight);
  image(cloud3.image, cloud3.x, cloud3.y, cloud3.sizeWidth, cloud3.sizeHeight);

  // Display pillow
  rectMode(CENTER);
  image(pillow.image, pillow.x, pillow.y, pillow.sizeWidth, pillow.sizeHeight);

  // Display cats
  imageMode(CENTER)
  image(cat1.image, cat1.x, cat1.y, cat1.sizeWidth, cat1.sizeHeight);
  image(cat2.image, cat2.x, cat2.y, cat2.sizeWidth, cat2.sizeHeight);
  image(cat3.image, cat3.x, cat3.y, cat3.sizeWidth, cat3.sizeHeight);
  image(cat4.image, cat4.x, cat4.y, cat4.sizeWidth, cat4.sizeHeight);
  image(cat5.image, cat5.x, cat5.y, cat5.sizeWidth, cat5.sizeHeight);
}
