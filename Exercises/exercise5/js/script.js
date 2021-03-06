"use strict";

let state = `title`; // Other states include instructions, simulation, win, lose
// Garden array with red flowers
let redGarden = [];
// Initial red flowers.
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
  },
  // An array of clouds floating in the sky
  clouds: [],
  // How many clouds present in the sky
  numClouds: 2
};

// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(24);

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

  // Create our clouds by counting up to the number of numClouds
  for (let i = 0; i < garden.numClouds; i++) {
    // Variables added cor clarity
    let x = random(0, width);
    let y = random(50, 200);
    // Create new bees using arguments
    let cloud = new Cloud(x, y);
    garden.clouds.push(cloud);
  }

  //Creates red flowers for red garden
  for (let i = 0; i < redGardenSize; i++) {
    redGarden[i] = createFlower(random(0, width), random(0, height));
  }
}

// Creates rrd flowers on mouse pressed
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
      r: 200,
      g: 0,
      b: 0
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
  // Title
  if (state === `title`) {
    title();
  } else if (state === `instructions`) {
    instructions();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `win`) {
    win();
  } else if (state === `lose`) {
    lose();
  }
}
// Title screen
function title() {
  background(141, 242, 109);
  fill(255);
  text(
    `Gardenia
Click to continue`,
    width / 2,
    height / 2
  );
}

// Instructions screen
function instructions() {
  // Instructions
  background(141, 242, 109);
  fill(255);
  text(
    `Can you plant 30 flowers
    before all the bees or flowers die?
    Click anywhere to plant a flower.`,
    width / 2,
    height / 2
  );
}

// Win state
function win() {
  background(141, 242, 109);
  fill(255);
  text(`You win! :-)`, width / 2, height / 2);
}

// Lose state
function lose() {
  background(141, 242, 109);
  fill(255);
  text(`You lose :-()`, width / 2, height / 2);
}

// States of the game.
function mousePressed() {
  if (state === `title`) {
    state = `instructions`;
  } else if (state === `instructions`) {
    state = `simulation`;
  } else if (state === `simulation`) {
    let redFlower = createFlower(mouseX, mouseY);
    redGarden.push(redFlower); // Add red flower to our array
  } else if (state === `win` || state === `lose`) {
    reset();
  }
}

// Function to reload the game at the end of the simulation.
function reset() {
  location.reload();
}

// What happens during the simulation
function simulation() {
  displaySimulation();
  checkWin();
  checkLose();
}

function displaySimulation() {
  // Display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

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

  // Loop through all the clouds in the array and display them
  for (let i = 0; i < garden.clouds.length; i++) {
    let cloud = garden.clouds[i];
    // Update the cloud by moving and displaying it
    cloud.move();
    cloud.display();
  }

  for (let i = 0; i < redGarden.length; i++) {
    displayFlowers(redGarden[i]);
  }
}

function checkWin() {
  if (state === `simulation` && redGarden.length === 30) {
    state = `win`;
  }
}

function checkLose() {
  if (state === `simulation` && redGarden.length < 30 && garden.bees <= 0) {
    state = `lose`;
  }
}

// Displays red flowers
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
