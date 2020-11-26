class Bread extends Food {
  constructor(x,y) {
    super(x,y);
    this.width = 30;
    this.height = 30;
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

  checkCapture(ant){
     let d = dist(ant.x, ant.y, this.x, this.y);
     if (d < ant.size/2 + this.size/2){
       this.captured = true;
       return true;
    }
    return false;
  }

  //Displays bread on the canvas
  display() {
    super.display();

    //Displays bread
    push();
    strokeWeight(5);
    stroke(this.strokeColor.r, this.strokeColor.g,this.strokeColor.b);
    fill(this.baseColor.r, this.baseColor.g, this.baseColor.b);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
