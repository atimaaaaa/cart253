class Food {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.width = undefined;
    this.height = undefined;
    this.vx = 0;
    this.vy = 0;
    this.speed = undefined;
    // The border of the background grid.
    this.borderLeft = 90;
    this.borderRight = 960;
    this.borderTop = 90;
    this.borderBottom = 630;

    this.eaten = false;
  }

  move(){
    this.x += this.vx;
    this.y += this.vy;
  }

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
