let circle = {
  x:250,
  y:250,
  size:100
}

function setup(){
  createCanvas(500,500);
}

function draw(){
  background(0);

  if (mouseX < width/2) {
    console.log("Mouse is to the left...");
    fill(255,0,0);
  }
  else {
    console.log("Mouse is to the right...");
    fill(0,255,0);
}

ellipse(circle.x,circle.y, circle.size);
}
