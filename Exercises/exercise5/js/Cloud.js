class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0.5;
    this.vy = 0;
    this.size = 50;
  }
  // Horizontal movement of the clouds.
  move() {
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, width);

    this.x = this.x + this.vx; // Horizontal movement only
    this.y = this.y + this.vy; // No y movement
  }

  display() {
    // Left and rigt cloud puff.
    push();
    fill(255);
    ellipse(this.x - this.size / 2, this.y, this.size / 2);
    ellipse(this.x + this.size / 2, this.y, this.size / 2);
    pop();
  }
}
