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

let ant;
let foods = [];
let numCherries = 3;
let numRocks = 6;
let numBread = 2;


let tile = {
  size: 60,
  segmentsX: 8,
  segmentsY: 10,
  spacingX: 120,
  spacingY: 60,
  fill: {
    r: 0,
    g: 0,
    b: 255,
  }
}

// let object = {
//   cherries:[],
//   numCherries: 3,
// }

function setup() {
  createCanvas(1200,800);

  //Creates the ant.
  let x = width/2;
  let y = height/2 - 10;
  ant = new Ant(x,y);


  //  Creates cherries by counting up to the number of cherries
  for (let i = 0; i < numCherries; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let cherry = new Cherry(x,y);
    foods.push(cherry);
  }

  //  Creates rocks by counting up to the number of rocks
  for (let i = 0; i < numRocks; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let rock = new Rock(x,y);
    foods.push(rock);
  }

  //  Creates bread by counting up to the number of bread
  for (let i = 0; i < numBread; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let bread = new Bread(x,y);
    foods.push(bread);
  }
}

// draw()
//
// Description of draw() goes here.
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

  //Displays score.
  text(`score - ${score}`, 1000, 50);

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

  //Display blue tiling
  tiling();

  //Display Antonio the ant.
  ant.wrap();
  ant.display();


  //Display food items
  for (let i = 0; i < foods.length; i++) {
    let food = foods[i];
    food.move();
    food.wrap();
    food.display();
  }
}

function win() {
  displayText(`YOU ARE A HEATHLY ANT`);
}

function lose() {
  displayText(`YOU DIED. VERY SAD!`);
}

// Draws background tiles
function tiling() {
  let x = 0;
  let y = 60;

    for (let i = 0; i < tile.segmentsY; i++) {
      if (i % 2 === 0) {
      x = 90;
      }
    else {
      x = 150;
    }
    // Draws horizontal tiles
    for (let j = 0; j < tile.segmentsX; j++) {
      push();
      noStroke();
      fill(tile.fill.r, tile.fill.g, tile.fill.b);
      rect(x,y, tile.size);
      x = x + tile.spacingX;
      pop();
    }
    y = y + tile.spacingY;
  }
}


function displayText(string){
  push();
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
