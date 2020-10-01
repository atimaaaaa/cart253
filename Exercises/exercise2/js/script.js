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
   speed: 3,
   image: undefined
}

  let coin = {
    x:250,
    y:0,
    size:100,
    vx:0,
    vy:0,
    speed: 10,
    image: undefined
  }

let user = {
  x:250,
  y:250,
  size: 100,
  image: undefined,
}

function preload(){
  user.image = loadImage("assets/images/mario.png");
  thomp.image = loadImage("assets/images/thomp.png");
  coin.image = loadImage("assets/images/coin.png");
}

function setup() {
  createCanvas(800,800);

  //Thomp movement
  thomp.x = random(0, width);
  thomp.vy = thomp.speed;

  //Coin movement
  coin.x = random(0, width);
  coin.vy = coin.speed;
}
// // draw()
// //
// // Description of draw() goes here.
function draw() {
  background(0);
  noStroke();

  // Thomp movement
    thomp.x = thomp.x + thomp.vx;
    thomp.y = thomp.y + thomp.vy;

  if(thomp.y > height) {
    thomp.y = 0;
    thomp.x = random(0, width);
  }

  //Coin movement
for (let i = 0; i < 10; i++){
  coin.x = coin.x + coin.vx;
  coin.y = coin.y + coin.vy;
  }
  if (coin.y > height) {
    coin.y = 0;
    coin.x = random(0,height);
  }


  // user movement
  user.x = mouseX;
  user.y = mouseY;


  //Action when thomp catches mario (user)
  let d = dist (thomp.x, thomp.y, user.x, user.y);
  if (d < thomp.size/2 + user.size/3) {
    noLoop();
  }

  // Action when user catches a coin
  let dcoin = dist (coin.x, coin.y, user.x, user.y);
   if (d < coin.size/2 + user.size/3) {
     background(255,0,0);
   }

  //Action when user click on coin


  // Displaying thomp character.
  for (let i = 0; i < 3; i++){
    imageMode(CENTER);
    image(thomp.image, thomp.x, thomp.y);
  }

  // Displaying coins.

  imageMode(CENTER);
  image(coin.image, coin.x, coin.y);

// display user
  imageMode(CENTER);
  image(user.image, user.x, user.y, 50,50);
}
