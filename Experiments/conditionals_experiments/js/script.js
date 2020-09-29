let circle = {
  x: 250,
  y: 250,
  size:100,
  vx: 2,
  vy: 0,
  speed: 2
}

function setup() {
  createCanvas(500,500);
}

function draw(){
  background(0);

  if (mouseX < circle.x){
    circle.vx = -circle.speed;
  }

  else {
    circle.vx = circle.speed;
  }

  if (mouseY < circle.y){
    circle.vy = -circle.speed;
  }

  else {
    circle.vy = circle.speed;
  }

  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;

  ellipse(circle.x, circle.y, circle.size);
}
