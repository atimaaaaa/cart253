/**************************************************
E6: Make Some Noise
Atima Ng


**************************************************/

// the array of balls
let balls = [];
let squares = [];

// F-minor
let notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F4`];

//Creates canvas
function setup() {
  createCanvas(600,600);
  userStartAudio();
}

// draw()
//
// Draws expanding circles and squares.
function draw() {
  background(0);

  // Draw circles
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }

// Draws squares
for (let i = 0; i < squares.length; i++) {
  let square = squares[i];
  square.move();
  square.bounce();
  square.display();
  }
  displayText();
}

// Displays instructions text
function displayText(){
  push();
  textSize(16);
  fill(255);
  textAlign(CENTER);
  text(`press anywhere to add a ball
press space to add a square`, width/2, height/2);
  pop();
}

//Press mouse to create a new ball from the mouse position
function mousePressed() {
  createBall(mouseX,mouseY);
}
//Creates the circle
function createBall(x,y) {
  let note = random(notes);
  let ball = new Ball(x,y,note);
  balls.push(ball);
}

//Press any key to create square
function keyPressed() {
  createSquare(width/2, height/2);
}

// Creates the squares
function createSquare(x,y){
  let note = random(notes);
  let square = new Square(x,y,note);
  squares.push(square);
}
