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

function setup(){
  createCanvas(1200,800);
}

function draw() {
  background(0);
  createColoredTiles(60,60);
}

function createColoredTiles(x,y){
    for (let i = 0; i < 8; i++) {
    noStroke();
    fill(255);
    rectMode(CENTER);
    // We can still use x and y as variables
    rect(x, y, 60, 60);
    // Including changing x inside our loop
    x = x + 120;
  }
}
