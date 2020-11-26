class Ant {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 15;
    this.vx = 0;
    this.vy = 0;
    this.speed = 60;
    this.spacing = 12;
    this.alive = true;
    //Leg
    this.legWidth = 2;
    this.legHeight = 5;
    this.legSpacing = 2;
    //ANTenna
    this.antenaWidth = 2;
    this.antenaHeight = 10;
    // For the wrap function.
    this.borderLeft = 0;
    this.borderRight = 1000;
    this.borderTop = 0;
    this.borderBottom = 570;
  }

  checkEat(bread){
    let d = dist(this.x, this.y, bread.x, bread.y);
    if (d < (this.size*3)/2 + bread.width/2){
      bread.eaten = true;
    }
    bread.eaten = false;
    score ++
  }

  // If ant captures cherry , a new cherry appears.
 //     if (cherry.checkCapture(ant)) {
 //       let x = random(0, width);
 //       let y = random(0, height);
 //       let cherry = new Cherry(x,y);
 //       object.cherries.push(cherry);
 //       score ++;

  //handleInput() {
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
    //}

    // // Loop through all the cherries and displays them.
    // for (let i = 0; i < object.cherries.length; i++) {
    //     let cherry = object.cherries[i];
    //     //Check if the cherry is captured
    //     if (cherry.captured === false) {
    //     cherry.display();
    //
    //     // If ant captures cherry , a new cherry appears.
    //     if (cherry.checkCapture(ant)) {
    //       let x = random(0, width);
    //       let y = random(0, height);
    //       let cherry = new Cherry(x,y);
    //       object.cherries.push(cherry);
    //       score ++;
    //     }
    //   }
    // }

    move() {
      this.x += this.vx;
      this.y += this.vy;
    }

    wrap() {
      if (this.x >= this.borderRight) {
        this.x = this.borderRight;
      }
      else if (this.x <= this.borderLeft) {
        this.x = this.borderLeft;
      }
      if (this.y >= this.borderBottom) {
        this.y = this.borderBottom;
      }
      else if (this.y <= this.borderTop){
        this.y = this.borderTop;
      }
    }

    display() {
      push();
      fill(0);
      noStroke();
      rectMode(CENTER);
      //Body
      ellipse(this.x, this.y, this.size,this.size);
      ellipse(this.x + this.spacing, this.y, this.size,this.size);
      ellipse(this.x - this.spacing, this.y, this.size,this.size);
      //Legs
        //Middle
      rect(this.x - this.legSpacing, (this.y + 10),this.legWidth, this.legHeight);
      rect(this.x + this.legSpacing, (this.y + 10),this.legWidth, this.legHeight);
        //Far right
      rect(this.x + this.spacing - this.legSpacing, (this.y + 10),this.legWidth, this.legHeight);
      rect(this.x + this.spacing + this.legSpacing, (this.y + 10),this.legWidth, this.legHeight);
        //Far left
      rect(this.x - this.spacing - this.legSpacing, (this.y + 10),this.legWidth, this.legHeight);
      rect(this.x - this.spacing + this.legSpacing, (this.y + 10),this.legWidth, this.legHeight);
      pop();
      //ANTena
      // push();
      // fill(0);
      // noStroke();
      //
      // rect(this.x + this.spacing, this.y - 15,this.antenaWidth, this.antenaHeight);
      // pop();
    }

    keyPressed() {
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
