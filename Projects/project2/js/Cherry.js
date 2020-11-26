class Cherry extends Food {
  constructor(x,y) {
    super(x,y);
    this.width = 20;
    this.height = 20;
    this.speed = 2;
    this.stemWidth = 3;
    this.stemHeight = 20;
    this.stemColor = {
      r:0,
      g:200,
      b:0,
    };
    this.baseColor = {
      r:255,
      g:0,
      b:0,
    };
  }

  //Displays cherry on the canvas
  display() {
    super.display();
    //Displays cherry stem
    push();
    noStroke();
    fill(this.stemColor.r, this.stemColor.g, this.stemColor.b);
    rect(this.x, this.y,this.stemWidth, this.stemHeight);
    pop();

    //Displays cherry
    push();
    noStroke();
    fill(this.baseColor.r, this.baseColor.g, this.baseColor.b);
    ellipse(this.x, this.y+20, this.width);
    pop();
  }
}
