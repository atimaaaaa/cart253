/**************************************************
Get that bread project
Atima Ng

Help Antonio the ant to grab all the bread before the time runs out!
**************************************************/

// setup()
//
// Description of setup() goes here.
"use strict"

let state = `simulation`;

let score = 0;

let timer = 100;

let ant;
let foods = [];
let numCherries = 3;
let numRocks = 25;
let numBread = 2;


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

// let object = {
//   cherries:[],
//   numCherries: 3,
// }

function setup() {
  createCanvas(1300,800);

  //Creates ant centered on the tile
  let x = floor(random(0, tileBlue.columns))* tileBlue.size + tileBlue.size/2;
  let y = floor(random(0,tileBlue.rows))* tileBlue.size + tileBlue.size/2;
  ant = new Ant(x,y);


  // Creates cherries by counting up to the number of cherries
  for (let i = 0; i < numCherries; i++) {
    let x = floor(random(0, tileBlue.columns))* tileBlue.size + tileBlue.size/2;
    let y = floor(random(0,tileBlue.rows))* tileBlue.size + tileBlue.size/4;
    let cherry = new Cherry(x,y);
    foods.push(cherry);
  }

  //  Creates rocks by counting up to the number of rocks
  for (let i = 0; i < numRocks; i++) {
    let x = floor(random(0, tileBlue.columns))* tileBlue.size + tileBlue.size/2;
    let y = floor(random(0,tileBlue.rows))* tileBlue.size + tileBlue.size/2;
    let rock = new Rock(x,y);
    foods.push(rock);
  }

  //  Creates bread by counting up to the number of bread
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
  background(120);

  //Calling tates
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

  // // Loop through all the cherries and displays them.
  // for (let i = 0; i < object.cherries.length; i++) {
  //     let cherry = object.cherries[i];
  //     //Check if the cherry is captured
  //     if (cherry.captured === false) {
  //     cherry.display();
  //
  //     // If ant captures cherry , a new cherry appears.
  //     if (cherry.checkCapture(ant)) {
  //       let x = random(0, width);
  //       let y = random(0, height);
  //       let cherry = new Cherry(x,y);
  //       object.cherries.push(cherry);
  //       score ++;
  //     }
  //   }
  // }
}

// Displaying the states.
function title() {
  displayText(`GET THAT BREAD`);
}

function simulation() {
  //Display tiling
  push();
  translate(60,60);
  tilingBlue();
  tilingWhite();
  pop();
  //Display design elements
  displayScore();
  displayTimer();
  displayTitle();
  //Display Antonio the ant.
  ant.wrap();
  ant.display();
  //Check win
  // checkWin();

  //Display foods
  for (let i = 0; i < foods.length; i++) {
    let food = foods[i];
    food.move();
    food.wrap();
    food.display();
    ant.checkEat(food);
  }
}

// function checkWin() {
//   if (bread === 20){
//     state = `win`;
//   }
//   //capture 20 breads, win
// }

function win() {
  displayText(`YOU ARE A HEATHLY ANT`);
}

function lose() {
  displayText(`YOU DIED. VERY SAD!`);
}

// Draws background tiles
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

// Draws background white tiles
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

//Displays score on the canvas.
function displayScore(){
  push();
  textFont(`Blenny`);
  fill(245,190,90); // bread brown color
  textSize(24);
  text(`SCORE - ${score}`, 1100, 80);
  pop();
}
//Displays timer on the canvas.
function displayTimer(){
  push();
  textFont(`Blenny`);
  fill(245,190,90); // bread brown color
  textSize(24);
  text(`timer - ${timer}`, 1100, 120);


  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width, height);
  }
    pop();
  }

//Displays the title.
function displayTitle(){
  push();
  textFont(`Blenny`);
  textSize(50);
  fill(245,190,90); // brown color
  textLeading(45);
  text(`GET\nTHAT\nBREAD`, 1100, 570);
  pop();
}

function displayText(string){
  push();
  textFont(`Blenny`);
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
  text(string, width/2, height/2);
  pop();
}

function keyPressed(){
  if(state === `title`) {
    state = `simulation`;
  }
  if(state === `simulation`) {
    ant.keyPressed();
    ant.move();
  }
}
