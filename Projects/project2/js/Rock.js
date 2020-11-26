class Rock extends Food {
  constructor(x,y) {
    super(x,y);
    this.width = 20;
    this.height = 20;
    this.speed = 2;
    this.baseColor = {
      r:157,
      g:135,
      b:132,
    };
  }

  checkCapture(ant){
     let d = dist(ant.x, ant.y, this.x, this.y);
     if (d < ant.size/2 + this.size/2){
       this.captured = true;
       return true;
    }
    return false;
  }

  //Displays rock on the canvas
  display() {
    super.display();

    //Displays rock
    push();
    noStroke();
    fill(this.baseColor.r, this.baseColor.g, this.baseColor.b);
    ellipse(this.x, this.y, this.width);
    pop();
  }
}
