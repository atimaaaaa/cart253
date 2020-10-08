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
  x:0,
  y:0,
  size:100,
  vx:0,
  vy:0
}

let cat2 = {
  x:0,
  y:0,
  size:100,
  vx:0,
  vy:0
}

let catcher = base;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(1000,1000);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);


// Display base and cats.



  cat1.x = mouseX;
  cat1.y = height - 150;
  ellipse(cat1.x, cat1.y, cat1.size);



}
