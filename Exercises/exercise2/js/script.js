/**************************************************
Exercise 2: Dodge-Em
Atima Ng

Welcome to dodge-thomp!
The goal is to drag as many coins into the tube before the evil thomp crushes the user who looks very similar to the very known plomber Mario. He is a greedy man who wants as many coins as possible!
**************************************************/

let thomp = {
   x:250,
   y:0,
   size:100,
   vx:0,
   vy:0,
   speed: 10,
   image: undefined,
   bg: {
     r:255,
     g:0,
     b:0,
   }
}

let coin = {
  x:250,
  y:0,
  size: 100,
  vx:0,
  vy:0,
  speed: 1,
  min: 50,
  max: 600,
  image: undefined,
  bg: {
    r:0,
    g:255,
    b:0
  }
}

let user = {
  x:250,
  y:250,
  size: 100,
  image: undefined
}

let tube = {
  x: 600,
  y: 650,
  size:100,
  image: undefined,
  bg: {
    r:0,
    g:255,
    b:0,
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
  createCanvas(800,700);

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
// // This is where the tube, coin, thomp and user will be displayed.

function draw() {
  background(0);
  noStroke();

  // To distract the thomp, if you press a key, the background will be black.
  if (keyIsPressed) {
      background(0);
    }
    else {
      background(0,0,255);
 }
  //Thomp movement. If he reaches the bottom canvas, he returns at a random position at the top.
  thomp.x = thomp.x + thomp.vx;
  thomp.y = thomp.y + thomp.vy;

  if(thomp.y > height) {
    thomp.y = 0;
    thomp.x = random(0, width);
  }

  // User movement is controlled by the position of the mouse.
  user.x = mouseX;
  user.y = mouseY;

  //Action when thomp catches the user. Everything freezes and the background turns into a  scary red color.
  let d = dist (thomp.x, thomp.y, user.x, user.y);
  if (d < thomp.size/1.5 + user.size/1.5) {
    background(thomp.bg.r, thomp.bg.g, thomp.bg.b); // Red background
    noLoop();
  }

  // Action when user touches the coin. The user grabs the coin and is stuck with the coin until he brings it ito the tube.
  let dCoin = dist (coin.x, coin.y, user.x, user.y);
    if (dCoin < coin.size/2 + user.size/2 && mouseIsPressed) {
      coin.x = mouseX;
      coin.y = mouseY;
      background(coin.bg.r, coin.bg.g, coin.bg.b);
    }

  // Action when coin touches the tube. The coin is regenerated at a random position on the screen and the background flashes a green color.
  let dTube = dist (coin.x, coin.y, tube.x, tube.y);
  if (dTube < tube.size/2 + coin.size/2) {
    coin.x = random(coin.min, coin.max);
    coin.y = random(coin.min, coin.max);
    tube.x = random (0,700);
    background(tube.bg.r, tube.bg.g, tube.bg.b); // Green background
  }

  // Displaying the thomp character.
  imageMode(CENTER);
  image(thomp.image, thomp.x, thomp.y);

  // Displaying the coin falling from the sky.
  imageMode(CENTER);
  image(coin.image, coin.x, coin.y);

  // Displaying the static tube.
  image(tube.image, tube.x, tube.y);

// Displaying the user with a Mario icon.
  imageMode(CENTER);
  image(user.image, user.x, user.y,70,80);
}
