class Bread extends Food {
  constructor(x,y) {
    super(x,y);
    this.width = 20;
    this.height = 20;
    this.speed = 5;
    this.strokeColor = {
      r:183,
      g:120,
      b:28,
    };
    this.baseColor = {
      r:245,
      g:190,
      b:90,
    };
  }

  //Displays bread on the canvas
  display() {
    super.display();

    //Displays bread
    push();
    strokeWeight(5);
    rectMode(CENTER);
    stroke(this.strokeColor.r, this.strokeColor.g,this.strokeColor.b);
    fill(this.baseColor.r, this.baseColor.g, this.baseColor.b);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
