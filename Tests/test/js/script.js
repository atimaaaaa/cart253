"use strict";

// Garden with red flowers
let redGarden = [];
let redGardenSize = 0;

// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(600, 600);

  // Create red garden
  for (let i = 0; i < redGardenSize; i++) {
    redGarden[i] = createFlower(random(0, width), random(0, height));
  }
}

function createFlower(x, y) {
  let redFlower = {
    x: x,
    y: y,
    size: 30,
    petalThickness: 10,
    // Color information
    petalColor: {
      r: 255,
      g: 50,
      b: 50
    },
    centreColor: {
      r: 50,
      g: 0,
      b: 0
    }
  };
  return redFlower;
}

// draw()
// Displays our flowers
function draw(redFlower) {
  background(0);
  // Add flowers to garden
  for (let i = 0; i < redGarden.length; i++) {
    displayFlowers(redGarden[i]);
  }
}

function mousePressed() {
  let redFlower = createFlower(mouseX, mouseY);
  redGarden.push(redFlower); // Add red flower to our array
}

function displayFlowers(redFlower) {
  push();
  strokeWeight(redFlower.petalThickness);
  fill(
    redFlower.centreColor.r,
    redFlower.centreColor.g,
    redFlower.centreColor.b
  );
  stroke(
    redFlower.petalColor.r,
    redFlower.petalColor.g,
    redFlower.petalColor.b
  );
  ellipse(redFlower.x, redFlower.y, redFlower.size);
  pop();
}
