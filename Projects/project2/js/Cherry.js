class Cherry {
  constructor() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.size = 20;
    this.baseColor = {
      r:255,
      g:0,
      b:0,
    };
    // this.stemColor = {
    //   r:153,
    //   g:255,
    //   b:204,
    // }
  }

  //Displays cherry on the canvas
  display() {
    push();
    fill(this.baseColor.r, this.baseColor.g, this.baseColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
