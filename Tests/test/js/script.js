let rectangle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
  scale: 1,
  angle: 0
};

function setup() {
  createCanvas(500, 500);
  rectangle.vx = rectangle.speed;
}

function draw() {
  background(0);

  // Move the rectangle according to its velocirty
  rectangle.x = rectangle.x + rectangle.vx;
  rectangle.y = rectangle.y + rectangle.vy;

  // Increase the rectangle's scale and angle
  rectangle.scale = rectangle.scale + 0.01;
  rectangle.angle = rectangle.angle + 0.05;

  // Display the rectangle
  push();
  rectMode(CENTER); // Centered
  translate(rectangle.x, rectangle.y); // Translate to rectangle position
  scale(rectangle.scale); // Apply scale
  rotate(rectangle.angle); // Apply rotation
  rect(0, 0, rectangle.size, rectangle.size); // Draw rectangle at 0,0 because of translate()
  pop();
}
