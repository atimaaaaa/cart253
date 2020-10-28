"use strict";

// Garden with red flowers
let redGarden = [];
let redGardenSize = 0;

// Our garden
let garden = {
  // An array to store the individual flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 5,
  // An array to our the bees
  bees: [],
  // How many bees in the garden
  numBees: 5,
  // The color of the grass (background)
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};

// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(600, 600);

  // Create our flowers by counting up to the number of the flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    };
    // Create a new flower using the arguments
    let flower = new Flower(x, y, size, stemLength, petalColor);
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
  }

  // Create our bees by counting up to the number of bees
  for (let i = 0; i < garden.numBees; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    // Create a new bee using the arguments
    let bee = new Bee(x, y);
    // Add the bee to the array of bees
    garden.bees.push(bee);
  }

  //Creates red flowers for red garden
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
    stemThickness: 5,
    stemLength: 40,
    // Color information
    petalColor: {
      r: 155,
      g: 16,
      b: 21
    },
    centreColor: {
      r: 50,
      g: 0,
      b: 0
    },
    stemColor: {
      r: 50,
      g: 150,
      b: 50
    }
  };
  return redFlower;
}

// draw()
// Displays our flowers
function draw() {
  // Display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
  // Display the user

  // Loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    // Check if this flower is alive
    if (flower.alive) {
      // Update the flower by shrinking it and displaying it
      flower.shrink();
      flower.display();
    }
  }

  // Loop through all the bees in the array and display them
  for (let i = 0; i < garden.bees.length; i++) {
    let bee = garden.bees[i];
    // Check if this bee is alive
    if (bee.alive) {
      // Update the bee by shrinking, moving and displaying it
      bee.shrink();
      bee.move();
      bee.display();
    }
  }

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
  strokeWeight(redFlower.stemThickness);
  stroke(redFlower.stemColor.r, redFlower.stemColor.g, redFlower.stemColor.b);
  line(
    redFlower.x,
    redFlower.y,
    redFlower.x,
    redFlower.y + redFlower.stemLength
  );
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
