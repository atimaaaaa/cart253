class Cherry {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.baseColor = {
      r:255,
      g:0,
      b:0,
    };
    this.captured = false;
    // this.stemColor = {
    //   r:153,
    //   g:255,
    //   b:204,
    // }
  }

  checkCapture(ant){
     let d = dist(ant.x, ant.y, this.x, this.y);
     if (d < ant.size/2 + this.size/2){
       this.captured = true;
       return true;
    }
    return false;
  }

  //Displays cherry on the canvas
  display() {
    push();
    noStroke();
    fill(this.baseColor.r, this.baseColor.g, this.baseColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
