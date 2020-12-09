/**************************************************
Get that Bread!
By Atima Ng

All art and code by Atima Ng.
Audio and music by Etienne Dube.

In this game, help Antonio the Ant to gather as much food from the picnic blanket to the Princess before time runs out. Antonio knows the princess' favorite food are cherries, and especially fluffy pieces of bread. This game simulates retro games of the 90's, especially in th character tile movement and art style.

INSTRUCTIONS:
Use the arrow keys to guide Antonio the ant towards the foods: cherries and bread. Be careful to avoid those pesky rocks along the way as those damage the internal organ system of Ants. Gather as much food for the princess before time runs out!
**************************************************/

//Let's create some variables!
//
//Create initial state
"use strict"
let state = `title`; // Possible states: title, simulation, win and lose.
let introState = 0;
let gameStarted = false;

//Create score and timer
let score = 0;
let timer = 100;

//Create brown typography color
let breadFill = {
  r:245,
  g: 190,
  b: 90
}

//Create ant and foods: Items appearing on canvas.
let ant;
let foods = [];
let numCherries = 3;
let numRocks = 25;
let numBread = 3;

//Create background tiles.
//Blue tiles
let tileBlue = {
  size: 60,
  segmentsX: 8,
  segmentsY: 10,
  spacingX: 120,
  spacingY: 60,
  columns: 16,
  rows: 10,
  fill: {
    r: 46,
    g: 137,
    b: 178,
  }
}
//White tiles
let tileWhite = {
  size: 60,
  segmentsX: 8,
  segmentsY: 10,
  spacingX: 120,
  spacingY: 60,
  fill: {
    r: 237,
    g: 233,
    b: 225,
  }
}

//Images variables
let imgIntro1;
let imgIntro2;
let imgIntro3;

//Audio variables
let bgMusic;
let cherrySFX;
let breadSFX;
let rockSFX;

//preload()
//
//Preload images, food items, canvas size, and audio.
function preload() {
  //Intro images
  imgIntro1 = loadImage('assets/images/intro1_final.png');
  imgIntro2 = loadImage('assets/images/intro2_final.png');
  imgIntro3 = loadImage('assets/images/intro3_final.png');

  //AUDIO
  //Load all audio files
  bgMusic = loadSound('assets/sounds/ANT_v2.mp3');
  cherrySFX = loadSound('assets/sounds/cherry.mp3');
  breadSFX = loadSound('assets/sounds/bread.mp3');
  rockSFX = loadSound('assets/sounds/rock.mp3');
}

//setup()
//
//Set up the window and screen
function setup() {
  //Canvas
  createCanvas(1350,840);
  //Create Antonio the ant.
  let x = floor(random(0, tileBlue.columns))* tileBlue.size + tileBlue.size/2;
  let y = floor(random(0,tileBlue.rows))* tileBlue.size + tileBlue.size/2;
  ant = new Ant(x,y);
  //Create food items by counting up to the number of food specified
  //Cherries
  for (let i = 0; i < numCherries; i++) {
    let x = floor(random(0, tileBlue.columns))* tileBlue.size + tileBlue.size/2;
    let y = floor(random(0,tileBlue.rows))* tileBlue.size + tileBlue.size/4;
    let cherry = new Cherry(x,y);
    foods.push(cherry);
  }
  //Rocks
  for (let i = 0; i < numRocks; i++) {
    let x = floor(random(0, tileBlue.columns))* tileBlue.size + tileBlue.size/2;
    let y = floor(random(0,tileBlue.rows))* tileBlue.size + tileBlue.size/2;
    let rock = new Rock(x,y);
    foods.push(rock);
  }
  // Bread
  for (let i = 0; i < numBread; i++) {
    let x = floor(random(0, tileBlue.columns))* tileBlue.size + tileBlue.size/2;
    let y = floor(random(0,tileBlue.rows))* tileBlue.size + tileBlue.size/2;
    let bread = new Bread(x,y);
    foods.push(bread);
  }
}

// draw()
//
// Displays the different states when called.
function draw() {
  background(45,194,112);
  //Calling states
  if (state ===`title`) {
    title();
  }
  if (state ===`simulation`) {
    simulation();
  }
  if (state ===`win`) {
    win();
  }
  if (state ===`lose`) {
    lose();
  }
}

//Function title()
//
//Function to displaying the title state.
function title() {
  handleGameIntro();
}

//Function simulation
//
//Function to display elements of th main game.
function simulation() {
  //Display tiling
  push();
  translate(60,120);
  tilingBlue();
  tilingWhite();
  pop();
  //Display design elements
  displayTimer();
  displayScore();
  displayTitle();
  //Display Antonio the ant.
  ant.wrap();
  ant.display();
  //Display loop of foods
  for (let i = 0; i < foods.length; i++) {
    let food = foods[i];
    food.move();
    food.wrap();
    food.display();
    ant.checkEat(food);
  }
  //Change to win state
  if (score >= 50){
    state = `win`;
  }
  //Change to LOSE state
  if (timer === 0 || score < -100){
    state = `lose`;
  }
}

//Function win()
//
// Displays text when user wins!
function win() {
  displayText(`YOU HAVE GATHERED ALL
    THE BREAD. CONGRATS!`);
}
//Function lose()
//
// Displays text when user loses!
function lose() {
  displayText(`YOU DIED. VERY SAD! TRY AGAIN?`);
}

//handleGameIntro()
//
//Runs introduction images in order. If the music is loaded, it plays!
function handleGameIntro(){
  //Intro title 1
  if (introState === 0) {
    displayIntroTitle();
  }
  else if(introState === 1) {
    image(imgIntro1, 0, 0,1360,840);
    //Play background music
    bgMusic.play();
  }
  else if(introState === 2) {
    image(imgIntro2, 0, 0,1360,840);
  }
  else if(introState === 3) {
    image(imgIntro3, 0, 0,1360,840);
  }
  else {
    state =`simulation`;
  }
}

//Displays introduction title and instructions
function displayIntroTitle(){
  push();
  textFont(`Blenny`);
  textAlign(CENTER,CENTER);
  textSize(140);
  fill(breadFill.r, breadFill.g, breadFill.b);
  text(`get this bread`, width/2, height/2);
  pop();
  push();
  textFont(`Blenny`);
  textAlign(CENTER,CENTER);
  textSize(40);
  fill(255);
  text(`press anywhere to continue`, width/2, height/1.5);
  pop();
}

//Displays timer on the canvas.
function displayTimer(){
  push();
  textFont(`Blenny`);
  fill(245,190,90); // bread brown color
  textSize(24);
  text(`${timer} seconds left`, 1050, 190);

  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width, height);
  }
    pop();
  }

  //Displays score on the canvas.
  function displayScore(){
    push();
    textFont(`Blenny`);
    fill(breadFill.r, breadFill.g, breadFill.b);
    textSize(40);
    text(`${score} points`, 1050, 150);
    pop();
  }

//Display the title name on the simulation state
function displayTitle(){
  push();
  textFont(`Blenny`);
  textSize(70);
  fill(breadFill.r, breadFill.g, breadFill.b);
  textLeading(53);
  text(`GET\nTHAT\nBREAD`, 1050, 612);
  pop();
}

// Display string of text in win() and lose() state
function displayText(string){
  push();
  textFont(`Blenny`);
  textAlign(CENTER,CENTER);
  textSize(60);
  fill(breadFill.r, breadFill.g, breadFill.b);
  text(string, width/2, height/2);
  pop();
}

// Draws blue background tiles
function tilingBlue() {
  let x = 0;
  let y = 0; // before y = 60

    for (let i = 0; i < tileBlue.segmentsY; i++) {
      if (i % 2 === 0) {
      x = 0; // before x = 90;
      }
    else {
      x = 60; //before x = 150;
    }
    // Draws horizontal tiles
    for (let j = 0; j < tileBlue.segmentsX; j++) {
      push();
      noStroke();
      fill(tileBlue.fill.r, tileBlue.fill.g, tileBlue.fill.b);
      rect(x,y, tileBlue.size);
      x = x + tileBlue.spacingX;
      pop();
    }
    y = y + tileBlue.spacingY;
  }
}

// Draws white background tiles
function tilingWhite() {
  let x = 60;
  let y = 0; // before y = 60

    for (let i = 0; i < tileWhite.segmentsY; i++) {
      if (i % 2 === 0) {
      x = 60; // before x = 90;
      }
    else {
      x = 0; //before x = 150;
    }
    // Draws horizontal tiles
    for (let j = 0; j < tileWhite.segmentsX; j++) {
      push();
      noStroke();
      fill(tileWhite.fill.r, tileWhite.fill.g, tileWhite.fill.b);
      rect(x,y, tileWhite.size);
      x = x + tileWhite.spacingX;
      pop();
    }
    y = y + tileWhite.spacingY;
  }
}

//mouseClicked()
//
//Run whenever the user clicks the mouse
function mouseClicked(){
  if (gameStarted === false) {
    introState += 1;
  }
  if (introState >= 4){
    gameStarted = true;
    simulation();
  }
}

//keyPressed()
//
//Run whenever the user presses on a key.
function keyPressed(){
  if (state === `simulation`) {
    ant.keyPressed();
    ant.move();
  }
  if (state === `lose`) {
    score.reset();
    timer.reset();
  }
}
