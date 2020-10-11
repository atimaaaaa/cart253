/**************************************************
Project 1: Catastrophy
Atima Ng

Here is a description of this template p5 project.
**************************************************/
"use strict";

let base = {
  x: 0,
  y: 0,
  sizeWidth: 200,
  sizeHeight: 100,
  fill: {
    r:230,
    g: 173,
    b: 216
  }
}

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

let bg = {
  fill: {
    r: 173,
    g: 216,
    b: 230
  }
}

let state = `title`; // Possible states: 'title', 'simulation', 'happy ending' and 'sad ending'.

let catcher = base;

function preload() {
  // Image source: https://www.pngfind.com/mpng/ixbiwiJ_kawaii-cute-cat-cat-playing-with-yarn-hd/
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
// Description of setup() goes here.
function setup() {
  createCanvas(1000,1000);
  initial();
}

function initial() {
  base.y = height - 200;
  cat1.x = random(50,width - 50);
  cat2.x = random(50,width - 50);
  cat3.x = random(50,width - 50);
  cat4.x = random(50,width - 50);
  cat5.x = random(50,width - 50);
  cloud1.x = random(50,width - 50);
  cloud2.x = random(50,width - 50);
  cloud3.x = random(50,width - 50);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  catsMoving();
  catsOverlap();
  cloudsMovement();
  display();
}

function catsMoving() {
  moveCat(cat1);
  moveCat(cat2);
  moveCat(cat3);
  moveCat(cat4);
  moveCat(cat5);
}

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
    cat.x = base.x;
  }
  else {
    cat.y = cat.y + cat.vy;
  }
}

function checkCatch(cat) {
 // Check if anything is touching. If cat touches the base, the cat sits on top of the base. If cat touches another cat, it will sit on top of the the initial cat.
  let d = dist(catcher.x, catcher.y, cat.x,cat.y);
    if(!cat.caught && d < catcher.sizeHeight / 2 + cat.sizeHeight / 2) {
      cat.vy = 0;
      cat.caught = true;
      catcher = cat;
    }
  }

function cloudsMovement() {
  cloudsFloating(cloud1);
  cloudsFloating(cloud2);
  cloudsFloating(cloud3);
}

function cloudsFloating(cloud) {
  cloud.x = cloud.x + cloud.vx;

  if (cloud.x > width) {
    cloud.x = 0;
    cloud.y = random(0,height-300);
  }
}

function display(){
  // Display base and cats.
  base.x = mouseX;
  noStroke();

  //  Sky blue background
  background(bg.fill.r, bg.fill.g, bg.fill.b);

  // Display clouds
  imageMode(CENTER)
  image(cloud1.image, cloud1.x, cloud1.y, cloud1.sizeWidth, cloud1.sizeHeight);
  image(cloud2.image, cloud2.x, cloud2.y, cloud2.sizeWidth, cloud2.sizeHeight);
  image(cloud3.image, cloud3.x, cloud3.y, cloud3.sizeWidth, cloud3.sizeHeight);

  // Display base
  rectMode(CENTER);
  rect(base.x, base.y, base.sizeWidth, base.sizeHeight);
  fill(base.fill.r,base.fill.g,base.fill.b);

  // Display cats
  imageMode(CENTER)
  image(cat1.image, cat1.x, cat1.y, cat1.sizeWidth, cat1.sizeHeight);
  image(cat2.image, cat2.x, cat2.y, cat2.sizeWidth, cat2.sizeHeight);
  image(cat3.image, cat3.x, cat3.y, cat3.sizeWidth, cat3.sizeHeight);
  image(cat4.image, cat4.x, cat4.y, cat4.sizeWidth, cat4.sizeHeight);
  image(cat5.image, cat5.x, cat5.y, cat5.sizeWidth, cat5.sizeHeight);
}
