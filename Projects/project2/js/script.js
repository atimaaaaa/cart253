/**************************************************
Get that bread project
Atima Ng

Help Ant Antonio to grab all the bread before the time runs out!
**************************************************/

// setup()
//
// Description of setup() goes here.
"use strict"

let state = `simulation`;
let score = 0;
let ant;

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

function setup() {
  createCanvas(1200,800);

  //Creates the ant.
  let x = width/2;
  let y = height/2;
  ant = new Ant(x,y);


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

  //Display tiling
  tiling(60,60);
  tiling(120,120);
  tiling(60,180);
  tiling(120,240);
  tiling(60,300);


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

// Displaying the states.
function title() {
  displayText(`GET THAT BREAD`);
}

function simulation() {
  //Display Antonio the ant.
  ant.handleInput();
  ant.move();
  ant.wrap();
  ant.display();
}

function win() {
  displayText(`YOU ARE A HEATHLY ANT`);
}

function lose() {
  displayText(`YOU DIED. VERY SAD!`);
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
}
