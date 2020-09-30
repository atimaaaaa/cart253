let covid = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 10,
    fill: {
      r: 255,
      g: 0,
      b: 0
    }
}

let user = {
  x: 0,
  y: 0,
  size: 100,
  fill: 255
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  covid.y = random(0,height);
  covid.vx = covid.speed;
}

function draw(){
  background(0);
  noStroke();

//Display static

for (let i = 0; i < 1000; i++) {
  let x = random (0,width);
  let y = random (0,height);
  stroke(255);
  point(x,y);
}

//Covid  movement.
  covid.x = covid.x + covid.vx;
  covid.y = covid.y + covid.vy;

  if (covid.x > width) {
    covid.x = 0;
    covid.y = random (0,height);
  }

// User movement.
  user.x = mouseX;
  user.y = mouseY;

// Check for catching covid

  let d = dist(covid.x, covid.y, user.x, user.y);
    if (d < user.size/2 + covid.size/2){
      noLoop();
    }

//Displays covid
  fill(covid.fill.r, covid.fill.g, covid.fill.b);
  ellipse(covid.x,covid.y, covid.size);

//Displays user
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
}
