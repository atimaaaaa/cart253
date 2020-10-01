/**************************************************
Exercise 2: Dodge-Em
Atima Ng

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
let thomp = {
  x:250,
  y:0,
  size:100,
  vx:0,
  vy:0,
  speed:10,
}

function setup() {
  createCanvas(800,800);

  thomp.x = random (0, width);
  thomp.vx = thomp.speed;

  noCursor();
}

// draw()
//
// Description of draw() goes here.
function draw() {

}
