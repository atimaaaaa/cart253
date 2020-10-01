/**************************************************
Exercise 2: Dodge-Em
Atima Ng

Here is a description of this template p5 project.
**************************************************/

let thomp = {
   x:250,
   y:0,
   size:100,
   vx:0,
   vy:0,
   speed: 5,
   image: undefined
}

let coin = {
  x:250,
  y:0,
  size:100,
  vx:0,
  vy:0,
  speed: 1,
  image: undefined
}

let user = {
  x:250,
  y:250,
  size: 100,
  image: undefined
}

let tube = {
  x: 600,
  y: 750,
  size:100,
  image: undefined,
  bg: {
    r:0,
    g:255,
    b:0
  }
}

// preload()
//
// These will be the images loaded into the exercise.
function preload(){
  user.image = loadImage("assets/images/mario.png");
  thomp.image = loadImage("assets/images/thomp.png");
  coin.image = loadImage("assets/images/coin.png");
  tube.image = loadImage("assets/images/tube.png");
}

// setup()
//
// This is where initial positions of images will be placed.
function setup() {
  createCanvas(800,800);

  //Thomp Position
  thomp.x = random(0, width);
  thomp.vy = thomp.speed;

  //Coin Position
  coin.x = random(0, width);
  coin.y = random(0, 700);


  noCursor();
}
// // draw()
// //
// // Description of draw() goes here.
function draw() {
  background(0);
  noStroke();

  //Thomp movement
  thomp.x = thomp.x + thomp.vx;
  thomp.y = thomp.y + thomp.vy;

  if(thomp.y > height) {
    thomp.y = 0;
    thomp.x = random(0, width);
  }

  // user movement
  user.x = mouseX;
  user.y = mouseY;

  //Action when thomp catches mario (user)
  let d = dist (thomp.x, thomp.y, user.x, user.y);
  if (d < thomp.size/2 + user.size/3) {
    noLoop();
    background(255,0,0); // Red background
  }

  // Action when user touches the coin.
  let dCoin = dist (coin.x, coin.y, user.x, user.y);
  // let bg = {
  //   r: random(0,255),
  //   g: random(0,255),
  //   b: random(0,255),
  // }

  if (dCoin < coin.size/2 + user.size/2 && mouseIsPressed) {
    coin.x = mouseX;
    coin.y = mouseY;
    }


  // Action when coin touches the tube.
  let dTube = dist (coin.x, coin.y, tube.x, tube.y);
  if (dTube < tube.size/2 + coin.size/2) {
    coin.x = random(0, width);
    coin.y = random(0, 700);
    background(tube.bg.r, tube.bg.g, tube.bg.b);
  }

  // Displaying thomp character.
  imageMode(CENTER);
  image(thomp.image, thomp.x, thomp.y);

  // Displaying coins.

  imageMode(CENTER);
  image(coin.image, coin.x, coin.y);

  // Displaying tube
    image(tube.image, tube.x, tube.y);

// Displaying user
  imageMode(CENTER);
  image(user.image, user.x, user.y,50,50);
}
