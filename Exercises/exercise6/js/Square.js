class Square {

  constructor(x,y,note) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.fill = {
      r: random(100,200),
      g: random(100,200),
      b: random(100,200),
    };
    this.speed = 2;
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
    this.growth = 2;
    this.angle = 0;


  //oscillator
  this.oscillator = new p5.Oscillator(440,`square`);
  this.nearFreq = 220;
  this.farFreq = 440;
  this.oscillator.amp(0.03);
  this.oscillator.start();

  //synth
  this.note = note;
  this.synth = new p5.PolySynth();
}
  // Square movement with oscillator
  move() {
    this.x += this.vx;
    this.y += this.vy;

    //update frequency
    let d = dist(this.x, this.y, width/2, height/2);
    let maxDist = dist(0,0, width/2, height/2);
    let newFreq = map(d,0,maxDist, this.nearFreq, this.farFreq);
    this.oscillator.freq(newFreq);
  }

  // When reaching the end of canvas, the shape bounces back
  bounce() {
    if (this.x - this.size/2 < 0 || this.x + this.size/2 > width) {
      this.vx = -this.vx;
      this.playNote();
      this.changeColor();
      this.grow();
    }
    if (this.y - this.size/2 < 0 || this.y + this.size/2 > height) {
      this.vy = -this.vy;
      this.playNote();
      this.changeColor();
      this.grow();
    }
  }

  // Plays note.
  playNote() {
    this.synth.play(this.note, 0.2, 0, 0.2);
  }

  // The fill color changes to a random color.
  changeColor() {
    this.fill = {
      r: random(100,200),
      g: random(100,200),
      b: random(100,200),
    };
  }
  // The shape size expands.
  grow(){
    this.size = this.size + this.growth;

  }

  // Displays the shape
  display() {
    push();
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    translate(0,0);
    rotate(this.angle);
    rectMode(CENTER);
    rect(this.x, this.y, this.size);
    pop();

    this.angle = this.angle + 0.02;
  }
}
