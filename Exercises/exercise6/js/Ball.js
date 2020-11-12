class Ball {

  constructor(x,y,note) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.fill = {
      r: random(200,255),
      g: random(200,255),
      b: random(200,255),
    };
    this.speed = 5;
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
    this.growth = 5;


  //oscillator
  this.oscillator = new p5.Oscillator(440,`sawtooth`);
  this.nearFreq = 220;
  this.farFreq = 660;
  this.oscillator.amp(0.02);
  this.oscillator.start();

  //synth
  this.note = note;
  this.synth = new p5.PolySynth();
}

  move() {
    this.x += this.vx;
    this.y += this.vy;

    //update frequency
    let d = dist(this.x, this.y, width/2, height/2);
    let maxDist = dist(0,0, width/2, height/2);
    let newFreq = map(d,0,maxDist, this.nearFreq, this.farFreq);
    this.oscillator.freq(newFreq);
  }

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

  playNote() {
    this.synth.play(this.note, 0.2, 0, 0.2);
  }

  changeColor() {
    this.fill = {
      r: random(100,255),
      g: random(100,255),
      b: random(100,255),
    };
  }

  grow(){
    this.size = this.size + this.growth;
  }


  display() {
    push();
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
