/**************************************************
Activity 4: Age of aquariums
Atima Ng

Big Opportunities
**************************************************/
"use strict";

let group = []; // Empty array with the fish
let groupSize = 15;
let numStars = 10;
let user = {
  x: 300,
  y: 300,
  vx: 0,
  vy: 0,
  speed: 5,
  size: 50
};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);
  stroke(255);

  // Create opportunities.
  for (let i = 0; i < groupSize; i++) {
    group[i] = createOpportunity(random(0, width), random(0, height));
  }
}

function createOpportunity(x, y) {
  let opportunity = {
    x: x,
    y: y,
    size: random(10, 70),
    vx: 0,
    vy: 0,
    speed: 2
  };
  return opportunity;
}

// draw()
//
// Description of draw() goes here.
function draw(opportunity) {
  background(0);

  for (let i = 0; i < group.length; i++) {
    moveGroup(group[i]);
    displayGroup(group[i]);
  }

  displayUser();

  // Static star background
  drawStars();
}

function moveGroup(opportunity) {
  let change = random(0, 1);
  if (change < 0.05) {
    opportunity.vx = random(-opportunity.speed, opportunity.speed);
    opportunity.vy = random(-opportunity.speed, opportunity.speed);
  }

  // Move the opportunity
  opportunity.x = opportunity.x + opportunity.vx;
  opportunity.y = opportunity.y + opportunity.vy;

  // Constrain the opportunity to the canvas
  opportunity.x = constrain(opportunity.x, 0, width);
  opportunity.y = constrain(opportunity.y, 0, height);
}

function displayGroup(opportunity) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(opportunity.x, opportunity.y, opportunity.size);
  pop();
}

function drawStars() {
  // Static star background

  for (let i = 0; i < numStars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    point(x, y);
  }
}

function mousePressed() {
  for (let i = 0; i < group.length; i++) {
    let opportunity = group[i];
    let d = dist(user.x, user.y, opportunity.x, opportunity.y);
    if (d < opportunity.size / 2) {
      group.splice(i, 1);
      break;
    }
  }
}

function displayUser() {
  user.x = mouseX;
  user.y = mouseY;
  user.x = constrain(user.x, 0, width);
  user.y = constrain(user.y, 0, height);

  ellipse(user.x, user.y, user.size);
}
