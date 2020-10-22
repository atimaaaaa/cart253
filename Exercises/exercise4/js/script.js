/**************************************************
Activity 4: Age of aquariums
Atima Ng

Big Opportunities
**************************************************/
"use strict";

let state = `title`;
let timer = 30;
let group = []; // Empty array with the fish
let groupSize = 1;
let numStars = 10;
let user = {
  x: 300,
  y: 300,
  vx: 0,
  vy: 0,
  speed: 5,
  size: 50,
  image: undefined
};

// Load images.
function preload() {
  user.image = loadImage("assets/images/star.png");
}

// Setup the opportunities.
function setup() {
  createCanvas(600, 600);
  stroke(255); // display stars
  noCursor();
  opportunitiesDisplay();
  textAlign(CENTER, CENTER);
  textSize(20);
}

function opportunitiesDisplay() {
  // Create opportunities.
  for (let i = 0; i < groupSize; i++) {
    group[i] = createOpportunity(random(0, width), random(0, height));
  }
}

// Look of the opportunities
function createOpportunity(x, y) {
  let opportunity = {
    x: x,
    y: y,
    size: random(20, 70),
    vx: 0,
    vy: 0,
    speed: 2
  };
  return opportunity;
}

// Displays opportunities movement and user ad star background
function draw() {
  if (state === `title`) {
    title();
  } else if (state === `animation`) {
    animation();
  } else if (state === `win`) {
    win();
  } else if (state === `lose`) {
    lose();
  }
}

function title() {
  push();
  background(254, 254, 187);
  text(`Big Opportunities`, width / 2, height / 2);
  pop();

  push();
  text(
    `Help Starry catch all the opportunities of the galaxy!
  Move Starry with the mouse.
  Click the mouse to catch the opportunities
  Good luck!`,
    width / 2,
    (height * 2) / 3
  );
  pop();
}
function animation() {
  background(0);
  opportunitiesMovement();
  displayUser();
  drawStars();
  timerText();

  if (timer > 0 && group.length === 0) {
    state = `win`;
  } else if (timer <= 0) {
    state = `lose`;
  }
}

function win() {
  push();
  background(0);
  text(`You win!`, width / 2, height / 2);
  pop();
}

function lose() {
  push();
  background(0);
  text(`You lose! Try again.`, width / 2, height / 2);
  pop();
}

// Displays opportunities
function opportunitiesMovement() {
  for (let i = 0; i < group.length; i++) {
    moveGroup(group[i]);
    displayGroup(group[i]);
  }
}

// Movement of the opportunities.
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

// Display of the opportunties
function displayGroup(opportunity) {
  push();
  fill(254, 254, 187); // Yellow stars
  noStroke();
  ellipse(opportunity.x, opportunity.y, opportunity.size);
  pop();
}

// Static star background
function drawStars() {
  for (let i = 0; i < numStars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    point(x, y);
  }
}

function timerText() {
  textAlign(CENTER, CENTER);
  textSize(50);
  text(timer, width / 2, height / 2);
  fill(255);
  if (frameCount % 60 === 0 && timer > 0) {
    timer--;
  }
  if (timer === 0) {
    text(`GAME OVER`, width / 2, height * 0.7);
  }
}

// When user clicks with the mouse, an opportunity is taken away!
function mousePressed() {
  for (let i = 0; i < group.length; i++) {
    let opportunity = group[i];
    let d = dist(user.x, user.y, opportunity.x, opportunity.y);
    if (d < opportunity.size / 2) {
      group.splice(i, 1);
      break;
    }
  }

  // Transition from title to animation
  if (state === `title`) {
    state = `animation`;
  }
}

function displayUser() {
  user.x = mouseX;
  user.y = mouseY;
  user.x = constrain(user.x, 0, width);
  user.y = constrain(user.y, 0, height);

  imageMode(CENTER, CENTER);
  image(user.image, user.x, user.y, user.size, user.size);
}
