//
//
// let bg = 0;
//
// function setup() {
//   createCanvas(500,500);
//
// }
//
// function draw(){
//   background(bg);
//
//   textAlign(CENTER, CENTER);
//   textSize(64);
//   fill(255);
//   text(keyCode, width/2,height/2);
//
// }
//
// function keyPressed(){
//     if (keyCode === UP_ARROW) {
//       bg = bg + 10;
//       bg = constrain (bg, 0,255);
//     }
//     else if(keyCode === DOWN_ARROW) {
//       bg = bg - 10;
//       bg = constrain(bg,0,255);
//     }
// }



let circle = {
  x:250,
  y:250,
  size:100,
  vx:0,
  vy:0,
  speed:10
};

function setup() {
  createCanvas(500,500);
}

function draw(){
  background(0);

  handleImput();
  move();
  display();
  }

function handleImput() {
   if (keyIsDown(LEFT_ARROW)) {
     circle.vx = -circle.speed;

   }
   else if(keyIsDown(RIGHT_ARROW)) {
     circle.vx = circle.speed;
   }
   else {
     circle.vx = 0;
   }
   if (keyIsDown(UP_ARROW)) {
     circle.vy = -circle.speed;
   }
   else if (keyIsDown(DOWN_ARROW)) {
     circle.vy = circle.speed;
   }
   else {
     circle.vy = 0;
   }
 }

 function move(){
   circle.x = circle.x + circle.vx;
   circle.y = circle.y + circle.vy;
 }

 function display() {
   fill(150);
   ellipse(circle.x, circle.y, circle.size);
 }
