/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
// let coloredTile = []
// let coloredTileSize = 8;
//
//
// function setup() {
//   createCanvas(1200,800);
//
//   for (let i = 0; i < coloredTileSize; i++){
//     coloredTile[i] = createColoredTile(random())
//   }
// }
//
// function createTile(x,y){
//   let tile = {
//     x: x,
//     y: y,
//     size: 60,
//     segments: 8,
//     spacing:120,
//     fill: {
//       r: 0,
//       g: 0,
//       b: 255,
//     }
//   }
//   return tile;
// }
//
// // draw()
// //
// // Description of draw() goes here.
// function draw() {
//   background(120);
//
//   displayTile(tile1);
//   displayTile(tile2);
// }
//
// function displayTile(tile) {
//   // push();
//   // noStroke();
//   // fill(tile.fill.r, tile.fill.g, tile.fill.b);
//   // rect(tile.x,tile.y, tile.size);
//   // // tile.x = tile.x + tile.spacing;
//   // pop();
//
//   for (let i = 0; i < tile.segments; i++) {
//   push();
//   noStroke();
//   fill(tile.fill.r, tile.fill.g, tile.fill.b);
//   rect(tile.x,tile.y, tile.size);
//   tile.x = tile.x + tile.spacing;
//   pop();
// }
// }
"use strict";
let mic;
let ghost = {
  x: 0,
  y:0,
  vx: 0,
  vy:0,
  img: undefined,
};

function preload() {
  ghost.image = loadImage(`assets/images/clown.png`);
}

function setup(){
  createCanvas(600,600);

  ghost.x = width/2;
  ghost.y = height/2;

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);

  // tremblinb
  ghost.x = ghost.x + random(-1,1);
  ghost.y = ghost.y + random(-1,1);

  //get volume into microphone
  let level = mic.getLevel();

  // check if ghost is scared
  if (level > 0.01) {
    // exits to the right
    ghost.vx = 20;
  }

  // move the ghost
  ghost.x = ghost.x + ghost.vx;
  ghost.y = ghost.y + ghost.vy;

  // display the ghost
  push();
  imageMode(CENTER);
  tint(255,50);
  image(ghost.image, ghost.x, ghost.y);
  pop();


}
