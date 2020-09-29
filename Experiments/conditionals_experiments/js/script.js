let caterpillar = {
  x: 100,
  y: 250,
  segmentSize: 50
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);
  noStroke();
  fill(100,200,100);

  // let x = caterpillar.x; // Where will I sart drawing?
  // let numSegment = 10; // How many segments to draw?
  // let segmentsDrawn = 0; // How many have been drawn?
  //
  // while(segmentsDrawn< numSegment){
  //   ellipse(x, caterpillar.y, caterpillar.segmentSize);
  //   x = x + 40;
  //   segmentsDrawn = segmentsDrawn + 1;
  // }

  let x = caterpillar.x;
  let numSegments = 10;

  for (let segmentsDrawn = 0; segmentsDrawn < numSegments; segmentsDrawn++){
        ellipse(x, caterpillar.y, caterpillar.segmentSize);
        x = x + 30;
      }
  }

We need to know how many stars we want to draw in the sky
let numStars = 200;

function setup() {
  createCanvas(500, 500);
  // White stroke because we're using point() on black
  stroke(255);
}

function draw() {
  // Black sky
  background(0);
  // randomSeed() lets us make random() predictable: it will generate the same sequence of numbers
  // each time draw() is called
  randomSeed(0);
  // Our for loop counts from 0 to numStars
  for (let i = 0; i < numStars; i++) {
    // Choose a random x an0d y position on the canvas
    let x = random(0, width);
    let y = random(0, height);
    // Draw a point (star) there
    point(x, y);
  }
}
