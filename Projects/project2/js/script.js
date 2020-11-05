/**************************************************
Get that bread project
Atima Ng

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
"use strict"


let object = {
  cherries:[],
  numCherries: 3,
}

let ant = {
  x: 500,
  y: 500,
  size: 20,
  vx: 0,
  vy: 0,
  speed: 5,
  spacing:15,
}

function setup() {
  createCanvas(1200,800);

  // Creates cherries by counting up to the number of cherries
  for (let i = 0; i < object.numCherries; i++) {
    // Create variables for the cherry argument
    let x = random (0, width);
    let y = random (0, height);
    let cherry = new Cherry();
    object.cherries.push(cherry);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  antMovement();

  // Loop through all the cherries and displays them.
  for (let i = 0; i < object.cherries.length; i++) {

      let cherry = object.cherries[i];
      cherry.display();

      //Check if the cherry is captured
      if (cherry.capture = false) {
      cherry.checkCapture();
    }
  }

  // Ant movement
  ant.x += ant.vx;
  ant.y += ant.vy;

  // Draws ant
  fill(255);
  noStroke();
  ellipse(ant.x, ant.y, ant.size,ant.size);
  ellipse(ant.x + ant.spacing, ant.y, ant.size,ant.size);
  ellipse(ant.x + 2 * ant.spacing, ant.y, ant.size,ant.size);
}


function antMovement(){
  //Horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    ant.vx = -ant.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    ant.vx = ant.speed;
  }
  // No movement if left or right arrow are pressed.
  else {
    ant.vx = 0;
  }

  //Vertical movement
  if (keyIsDown(UP_ARROW)) {
    ant.vy = -ant.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    ant.vy = ant.speed;
  }
  // No movement if up or bottom arrow are pressed.
  else {
    ant.vy = 0;
  }
}
