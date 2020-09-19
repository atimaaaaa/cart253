/**************************************************
Activity 2: alien
Atima Ng

My take on the alien exercise.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(640,480);
  angleMode(DEGREES);

  background(51,51,214);
  noStroke();

// Drawing the body
  fill(152,251,152);
  rectMode(CENTER);
  rect(320,320,106,150);

//Drawing the head
  fill(78,134,67); // Shadow
  square(315,255,185,40);

  fill(152,251,152); // main
  rectMode(CENTER);
  square(320,250,185,40);

// Drawing ears
  rectMode(CENTER);
  rect(320,180,370,17);

  triangle(120,160,150,180,120,200); //Left ear
  triangle(160,160,190,180,160,200);

  triangle(520,160,490,180,520,200); //Right ear
  triangle(480,160,450,180,480,200);

//Drawing the eyes
  fill(78,134,67);
  ellipse(260,280,20,45);
  ellipse(380,280,20,45);


// Drawing bowtie
  fill(180,159,228);
  triangle(305,355,330,365,305,375);
  triangle(335,355,310,365,335,375);




//Drawing spaceship
  fill(255,255,255,20);
  ellipse(320,480,600,900); // clear glass
  fill(224,209,42);
  ellipse(320,480,620,200); //yellow base

  //Drawing windows of the spaceship
  fill(168,157,32);
  ellipse(128,450,35,35);
  ellipse(249,450,35,35);
  ellipse(370,450,35,35);
  ellipse(492,450,35,35);



}

// draw()
//
// Description of draw() goes here.
