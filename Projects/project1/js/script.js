/**************************************************
Project 1: Catastrophy
Atima Ng

Here is a description of this template p5 project.
**************************************************/
"use strict";

let base = {
  x: 0,
  y: 0,
  size: 100
}

let cat1 = {
  x: 0,
  y:0,
  size:100,
  vx:0,
  vy:2
}

let cat2 = {
  x:250,
  y: -200,
  size:100,
  vx:0,
  vy: 2
}

let cat3 = {
  x:250,
  y: -300,
  size:100,
  vx:0,
  vy: 2
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(1000,1000);
  base.y = height - 200;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  base.x = mouseX;

  moveCat(cat1);
  moveCat(cat2);
  moveCat(cat3);
  checkCatch();
  display();
}

function moveCat(cat) {
  // Movement of cats falling down.
  cat.x = 300;
  cat.y = cat.y + cat.vy;
}

function checkCatch(){

}

function display(){
  // Display base and cats.

  ellipse(cat1.x, cat1.y, cat1.size);
  ellipse(cat2.x, cat2.y, cat2.size);
  ellipse(cat3.x, cat3.y, cat3.size);
  ellipse(base.x, base.y, base.size);
}
