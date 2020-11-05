/**************************************************
Get that bread project
Atima Ng

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
"use strict"

let score = 0;

let coloredTile = {
  size: 60,
  segments: 8,
  spacing:120,
  fill: {
    r: 0,
    g: 0,
    b: 255,
  }
}

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
    let x = random(0, width);
    let y = random(0, height);
    let cherry = new Cherry(x,y);
    object.cherries.push(cherry);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(120);
  //Displays score.
  text(`score - ${score}`, 1000, 50);
  tiling(60,60);
  tiling(120,120);
  tiling(60,180);
  tiling(120,240);
  tiling(60,300);

  antMovement();
  antDisplay();

  // Loop through all the cherries and displays them.
  for (let i = 0; i < object.cherries.length; i++) {
      let cherry = object.cherries[i];
      //Check if the cherry is captured
      if (cherry.captured === false) {
      cherry.display();

      // If ant captures cherry , a new cherry appears.
      if (cherry.checkCapture(ant)) {
        let x = random(0, width);
        let y = random(0, height);
        let cherry = new Cherry(x,y);
        object.cherries.push(cherry);
        score ++;
      }
    }
  }

}

function tiling(x,y) {
  // Draws background tiles

  for (let i = 0; i < coloredTile.segments; i++) {
    push();
    noStroke();
    fill(coloredTile.fill.r, coloredTile.fill.g, coloredTile.fill.b);
    rect(x,y, coloredTile.size);
    x = x + coloredTile.spacing;
    pop();
  }
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

function antDisplay() {
    // Ant movement.
    ant.x += ant.vx;
    ant.y += ant.vy;

    // Draws ant.
    push();
    // Draws three ellipses for the ant body.
    fill(0);
    noStroke();
    ellipse(ant.x, ant.y, ant.size,ant.size);
    ellipse(ant.x + ant.spacing, ant.y, ant.size,ant.size);
    ellipse(ant.x - ant.spacing, ant.y, ant.size,ant.size);
    pop();
}
