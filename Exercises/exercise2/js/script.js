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
   speed: 5
}

let user = {
  x:250,
  y:250,
  size: 100,
  image: undefined,
}

function preload(){
  user.image = loadImage("assets/images/mario.png");
}

function setup() {
  createCanvas(800,800);

  //Thomp movement
  thomp.x = random(0, width);
  thomp.vy = thomp.speed;

}
//
// // draw()
// //
// // Description of draw() goes here.
function draw() {
  background(255);
  noStroke();

  // Thomp movement
  thomp.x = thomp.x + thomp.vx;
  thomp.y = thomp.y + thomp.vy;

  if(thomp.y >height){
    thomp.y = 0;
    thomp.x = random(0, width);
  }

  // user movement
  user.x = mouseX;
  user.y = mouseY;


  //Action when thomp catches mario (user)
  let d = dist (thomp.x, thomp.y, user.x, user.y);
  if (d < thomp.size/2 + user.size/2){
    noLoop();
  }


  // Displaying thomp character.
  fill(155);
  ellipse(thomp.x, thomp.y, thomp.size);


// display user
  imageMode(CENTER);
  image(user.image, user.x, user.y, 50,50);
}
