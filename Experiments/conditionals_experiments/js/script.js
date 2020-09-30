let clownImage;

function preload() {
  clownImage = loadImage("assets/images/clown.png");
}

function setup() {
  createCanvas(500,500);

}

function draw() {
  background(0);

  imageMode(CENTER);
  image(clownImage,mouseX,mouseY,400,10);
}
