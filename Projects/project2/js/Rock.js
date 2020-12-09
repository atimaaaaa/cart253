class Rock extends Food {
  //constructor
  //
  //Sets the rock up from the food superclass.
  constructor(x,y) {
    super(x,y);
    this.width = 30;
    this.height = 10;
    this.speed = 2;
    this.baseColor = {
      r:135,
      g:109,
      b:100,
    };
  }

  //Displays rock on the canvas
  display() {
    super.display();
    //Displays rock
    push();
    noStroke();
    fill(this.baseColor.r, this.baseColor.g, this.baseColor.b);
    ellipse(this.x, this.y, this.width,this.height);
    pop();
  }
}
