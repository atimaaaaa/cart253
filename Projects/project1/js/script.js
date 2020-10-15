/**************************************************
Project 1: Catastrophy
Atima Ng

CATCHER is a simulation consisting of saving falling cats and bringing them to safety. These cats are falling at a random x position and the goal is to catch all five cats on the magical pillow. If unsucessful, the cats will die and you will need to restart. Will you be able to catch them all?

The images used are from these sources:
Cat image : https://www.pngfind.com/mpng/ixbiwiJ_kawaii-cute-cat-cat-playing-with-yarn-hd/
Pillow image : https://www.freepik.com/premium-vector/colorful-pillow-pyramid-slide-cartoon-set-home-interior-textile-soft-color-square-pillow_7714773.htm#page=1&query=cushion&position=7

**************************************************/
"use strict";

// Variables for the initial position for the pillow which is controlled by the user.
let pillow = {
  x: 0,
  y: 0,
  sizeWidth: 230,
  sizeHeight: 60,
  image: undefined
};

// Variables for the initial position for the five falling cats.
let cat1 = {
  x: 0,
  y: -100,
  sizeWidth: 150,
  sizeHeight: 100,
  vx: 0,
  vy: 2,
  caught: false,
  image: undefined
}

let cat2 = {
  x: 0,
  y: -400,
  sizeWidth: 150,
  sizeHeight: 100,
  vx: 0,
  vy: 2,
  caught: false,
  image: undefined
}

let cat3 = {
  x: 0,
  y: -900,
  sizeWidth: 150,
  sizeHeight: 100,
  vx: 0,
  vy: 2,
  caught: false,
  image: undefined
}

let cat4 = {
  x: 0,
  y: -1100,
  sizeWidth: 150,
  sizeHeight: 100,
  vx: 0,
  vy: 2,
  caught: false,
  image: undefined
}

let cat5 = {
  x: 0,
  y: -1500,
  sizeWidth: 150,
  sizeHeight: 100,
  vx: 0,
  vy: 2,
  caught: false,
  image: undefined
}

// Variables for the initial position for the clouds. They float from left to right.
let cloud1 = {
  x: 0,
  y: 200,
  sizeWidth: 180,
  sizeHeight: 120,
  vx: 1,
  vy: 0,
  image: undefined
}

let cloud2 = {
  x: 0,
  y: 600,
  sizeWidth: 250,
  sizeHeight: 180,
  vx: 1.5,
  vy: 0,
  image: undefined
}

let cloud3 = {
  x: 0,
  y: 300,
  sizeWidth: 300,
  sizeHeight: 220,
  vx: 1,
  vy: 0,
  image: undefined
}

// Initial color for the title typography.
let title = {
  fill: {
    r: 239,
    g: 140,
    b: 125
  }
}

// Background color for the title, instruction and ending screen.
let bg = {
  fill: {
    r: 173,
    g: 216,
    b: 230
  }
}

let catcher = pillow; // initially, the pillow will be the catcher.
let state = `title`; // Possible states: 'title', 'simulation', 'happy ending' and 'sad ending'.
let titleFont; // Declaring the font variable.
let music; // Declaring the background music variable.
let meowSFX; // Declaring the cat meowing sound effect music variable.

// preload()
//
// Loads all typography, music and images.
function preload() {

  // Typography
  titleFont = loadFont("assets/typography/LuckiestGuy-Regular.ttf");

  // Music & sfx
  music = loadSound(`assets/sounds/Stack_Cats.mp3`);
  meowSFX = loadSound(`assets/sounds/meowSFX.wav`);

  // Images
  pillow.image = loadImage("assets/images/pillow.png");
  cat1.image = loadImage("assets/images/catHappy_v2.png");
  cat2.image = loadImage("assets/images/catHappy_v2.png");
  cat3.image = loadImage("assets/images/catHappy_v2.png");
  cat4.image = loadImage("assets/images/catHappy_v2.png");
  cat5.image = loadImage("assets/images/catHappy_v2.png");
  cloud1.image = loadImage("assets/images/cloud.png");
  cloud2.image = loadImage("assets/images/cloud.png");
  cloud3.image = loadImage("assets/images/cloud.png");
}

// setup()
//
// Creating the canvas size as well as positioning the initial positions of the cats, clouds and the pillow.
function setup() {
  createCanvas(1000, 1000);
  initial();
}

// Initial positions for the pillow, cats and clouds.
function initial() {
  // Pillow
  pillow.y = height - 200;
  // Cats
  cat1.x = random(100, width - 100);
  cat2.x = random(100, width - 100);
  cat3.x = random(100, width - 100);
  cat4.x = random(100, width - 100);
  cat5.x = random(100, width - 100);
  // Clouds
  cloud1.x = random(50, width - 50);
  cloud2.x = random(50, width - 50);
  cloud3.x = random(50, width - 50);
  // Initial typography
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255);
  textFont(titleFont);
}

// draw()
//
// This section will display the clouds, cats and pillow (the catcher). When the cats overlap with the pillow and with each other, they will stack up on top of the x position of the catcher. The clouds are in the background floating away.
function draw() {
  // No background color. Avoids elements drawing on top of each other.
  background(0);
  // Displays title screen if the user is in the title state.
  if (state === `title`) {
    titleScreen();
  }
  // Displays instructions screen if the user is in the instruction state.
  if (state === `instruction`) {
    instructionScreen();
  }
  // Displays simulation if the user is in the simulation state.
  if (state === `simulation`) {
    simulation();
  }
  // Displays win screen if the user is in the win state.
  if (state === `win`) {
    win();
  }
  // Displays losing screen if the user is in the lose state.
  if (state === `lose`) {
    lose();
  }
}

// States change if the mouse is pressed
function mousePressed() {
  // When user clicks in title state, they will be redirected to istructions screen. The background music will start playing in a loop.
  if (state === `title`) {
    state = `instruction`;
    music.loop();
  }
  // When user clicks in instructions state, they will be redirected to simulation state.
  else if (state === `instruction`) {
    state = `simulation`;
  }
  // When user clicks in win or lose state, the page will refresh, therefore restarting the game.
  else if (state === `win` || state === `lose`) {
    reset();
  }
}

// Function to reload the page.
function reset() {
  location.reload();
}

// Functions running when the simulation is running.
function simulation() {
  catsMoving();
  catsOverlap();
  cloudsMovement();
  stackCats();
  noStackCats();
  display();
}

//The introduction screen.
function titleScreen() {
  push();
  background(121, 144, 247);
  fill(title.fill.r, title.fill.g, title.fill.b);
  textSize(220);
  text(`CATcher`, width / 2, height / 3);
  pop();

  push();
  text(`Click anywhere to continue`, width / 2, height - 300);
  pop();
}

//The instructions screen displaying an introduction and how to play instructions.
function instructionScreen() {
  push();
  background(121, 144, 247);
  fill(title.fill.r, title.fill.g, title.fill.b);
  text(`There is a catastrophy
  Cats are falling from the sky
  and they need to be protected at all cost`, width / 2, height / 3);
  pop();

  push();
  fill(255);
  text(`Catch all cats to win!
    Control the safety pillow with the mouse.`, width / 2, height - 300);
  pop();
}

// The win screen when the user wins! They will be asked if they want to play again by clicking on the screen.
function win() {
  push();
  background(121, 144, 247);
  textAlign(CENTER, CENTER);
  textSize(64);
  text(`YOU WIN!`, 500, 500);
  pop();

  push();
  text(`You caught all the cats to safety.
    Press the mouse to save the cats once again!`, width / 2, height - 300);
  pop();
}

// The losing screen. They will be asked if they want to play again by clicking on the screen.
function lose() {
  push();
  background(121, 144, 247);
  text(`YOU LOSE!`, width / 2, height / 2);

  fill(255);
  text(`You did not bring all the cats to safety.
    Press the mouse to try again!`, width / 2, height - 300);
  pop();

}

// If fifth cat lands on the fourth cat, the user wins and is redirected to the win screen.
function stackCats() {
  if (cat4.x === cat5.x && !(cat4.x !== cat3.x)) {
    state = `win`;
  }
}

// If the user does not catch all five cats, they are redirected to the lose screen.
function noStackCats() {
  if (cat1.y > height || cat2.y > height || cat3.y > height || cat4.y > height || cat5.y > height) {
    state = `lose`;
  }
}

// Movement of the five cats
function catsMoving() {
  moveCat(cat1);
  moveCat(cat2);
  moveCat(cat3);
  moveCat(cat4);
  moveCat(cat5);
}

// Checking which cats overlap
function catsOverlap() {
  checkCatch(cat1);
  checkCatch(cat2);
  checkCatch(cat3);
  checkCatch(cat4);
  checkCatch(cat5);
}

// When a cat is caught, they are stacked on the pillow (user) and the cat becomes the catcher. I am aware when you catch a cat on its side, the program registers as a successful catch.
function moveCat(cat) {
  if (cat.caught) {
    cat.x = pillow.x;
  } else {
    cat.y = cat.y + cat.vy;
  }
}

// Check if anything is touching. If cat touches the base, the cat sits on top of the base. If cat touches another cat, it will sit on top of the the initial cat.
function checkCatch(cat) {
  let d = dist(catcher.x, catcher.y, cat.x, cat.y);
  if (!cat.caught && d < catcher.sizeHeight / 3 + cat.sizeHeight / 2) {
    cat.vy = 0;
    cat.caught = true;
    catcher = cat;
    meowSounds();
  }
}

// Cats meowing sound effect.
function meowSounds() {
  if (state === `simulation`) {
    meowSFX.play();
  }
}

// Which clouds are moving.
function cloudsMovement() {
  cloudsFloating(cloud1);
  cloudsFloating(cloud2);
  cloudsFloating(cloud3);
}

// Movement of the clouds.
function cloudsFloating(cloud) {
  cloud.x = cloud.x + cloud.vx;

  if (cloud.x > width) {
    cloud.x = 0;
    cloud.y = random(0, height - 300);
  }
}

// Display images of the pillow, cats ad clouds.
function display() {
  // The user controls the pillow by moving the mouse.
  pillow.x = mouseX;
  noStroke();

  background(bg.fill.r, bg.fill.g, bg.fill.b); // Sky blue background

  // Display clouds
  imageMode(CENTER)
  image(cloud1.image, cloud1.x, cloud1.y, cloud1.sizeWidth, cloud1.sizeHeight);
  image(cloud2.image, cloud2.x, cloud2.y, cloud2.sizeWidth, cloud2.sizeHeight);
  image(cloud3.image, cloud3.x, cloud3.y, cloud3.sizeWidth, cloud3.sizeHeight);

  // Display pillow
  rectMode(CENTER);
  image(pillow.image, pillow.x, pillow.y, pillow.sizeWidth, pillow.sizeHeight);

  // Display cats
  imageMode(CENTER)
  image(cat1.image, cat1.x, cat1.y, cat1.sizeWidth, cat1.sizeHeight);
  image(cat2.image, cat2.x, cat2.y, cat2.sizeWidth, cat2.sizeHeight);
  image(cat3.image, cat3.x, cat3.y, cat3.sizeWidth, cat3.sizeHeight);
  image(cat4.image, cat4.x, cat4.y, cat4.sizeWidth, cat4.sizeHeight);
  image(cat5.image, cat5.x, cat5.y, cat5.sizeWidth, cat5.sizeHeight);
}
