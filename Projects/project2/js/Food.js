class Food {
  //constructor
  //
  //Sets any of the food up
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.width = undefined;
    this.height = undefined;
    this.vx = 0;
    this.vy = 0;
    this.speed = undefined;
    // The border of the background grid. Acts like a wrapper
    this.borderLeft = 90;
    this.borderRight = 1100;
    this.borderTop = 150;
    this.borderBottom = 900;

    this.eaten = false;
  }

  move(){
    this.x += this.vx;
    this.y += this.vy;
  }

  //Wraps the food inside the grid.
  wrap() {
    if (this.x > this.borderRight) {
      this.x = this.borderRight;
    }
    else if (this.x < this.borderLeft) {
      this.x = this.borderLeft;
    }
    if (this.y > this.borderBottom) {
      this.y = this.borderBottom;
    }
    else if (this.y < this.borderTop){
      this.y = this.borderTop;
    }
  }

  display(){
  }
}
