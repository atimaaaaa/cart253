/**************************************************
E6: Make Some Noise
Atima Ng


**************************************************/

// the array of balls
let balls = [];

// F-minor
let notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F4`];

//creates canvas
function setup() {
  createCanvas(600,600);
  userStartAudio();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
  push();
  textSize(16);
  fill(255);
  textAlign(CENTER);
  text(`press anywhere to add a ball`, width/2, height/2);
  pop();
}

function mousePressed() {
  createBall(mouseX,mouseY);
}

function createBall(x,y) {
  let note = random(notes);
  let ball = new Ball(x,y,note);
  balls.push(ball);
}
