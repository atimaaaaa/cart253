function setup(){
  createCanvas(500,500);
}

function draw(){
  background(0);

  parallels(100,300,30,100,3,5);
  parallels(300,300,30,100,3,5);
}

function parallels(x,y,numLines,lineWidth,lineHeight,lineSpacing){
  for(let i = 0; i < numLines; i++){
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(x,y,lineWidth,lineHeight);
    y = y + lineSpacing;
  }
}
