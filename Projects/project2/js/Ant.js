class Ant {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 20;
    this.vx = 0;
    this.vy = 0;
    this.speed = 60;
    this.spacing = 15;
    this.alive = true;
  }

  handleInput() {
      // //Horizontal movement
      // if (keyIsDown(LEFT_ARROW)) {
      //   this.vx = -this.speed;
      // }
      // else if (keyIsDown(RIGHT_ARROW)) {
      //   this.vx = this.speed;
      // }
      // // No movement if left or right arrow are pressed.
      // else {
      //   this.vx = 0;
      // }
      //
      // //Vertical movement
      // if (keyIsDown(UP_ARROW)) {
      //   this.vy = -this.speed;
      // }
      // else if (keyIsDown(DOWN_ARROW)) {
      //   this.vy = this.speed;
      // }
      // // No movement if up or bottom arrow are pressed.
      // else {
      //   this.vy = 0;
      // }
    }

    move() {
      this.x += this.vx;
      this.y += this.vy;
    }

    wrap() {
      if (this.x > width) {
        this.x = width;
      }
      else if (this.x < 0) {
        this.x = 0;
      }
      if (this.y > height) {
        this.y = height;
      }
      else if (this.y < 0) {
        this.y = 0;
      }
    }

    display() {
      push();
      // Draws three ellipses for the ant body.
      fill(0);
      noStroke();
      ellipse(this.x, this.y, this.size,this.size);
      ellipse(this.x + this.spacing, this.y, this.size,this.size);
      ellipse(this.x - this.spacing, this.y, this.size,this.size);
      pop();
    }

    keyPressed() {
      console.log(`example`);
      //Horizontal movement
      if (keyCode === LEFT_ARROW) {
        this.vx = -this.speed;
      }
      else if (keyCode === RIGHT_ARROW) {
        this.vx = this.speed;
      }
      // No movement if left or right arrow are pressed.
      else {
        this.vx = 0;
      }

      //Vertical movement
      if (keyCode === UP_ARROW) {
        this.vy = -this.speed;
      }
      else if (keyCode === DOWN_ARROW) {
        this.vy = this.speed;
      }
      // No movement if up or bottom arrow are pressed.
      else {
        this.vy = 0;
      }
    }

  }
