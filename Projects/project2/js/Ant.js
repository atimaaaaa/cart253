class Ant {
  //constructor
  //
  //sets the ant up
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
    this.borderLeft = 90;
    this.borderRight = 990;
    this.borderTop = 150;
    this.borderBottom = 660;
  }

  //checkFood()
  //
  //Checks if ant overlaps with one of the foods
  checkEat(food){
    //Check overlap with foods.
    let d = dist(this.x, this.y, food.x, food.y);
    if (d < (this.size*3)/2 + food.width/2){
      //Check overlap between cherry and ant.
      if (food instanceof Cherry) {
        let x = floor(random(0, tileBlue.columns))* tileBlue.size + tileBlue.size/2;
        let y = floor(random(0,tileBlue.rows))* tileBlue.size + tileBlue.size/4;
          // Another cherry appears if they overlap
          food.x = floor(random(0, tileBlue.columns))* tileBlue.size + tileBlue.size/2;
          food.y = floor(random(0,tileBlue.rows))* tileBlue.size + tileBlue.size/4;
          //Add score if ANT and CHERRY overlap
          score+=10;
          //Play sound if ANT AND CHERRY overlap
          cherrySFX.play();
      }
      //Check overlap between bread and ant.
      else if (food instanceof Bread) {
        let x = floor(random(0, tileBlue.columns))* tileBlue.size + tileBlue.size/2;
        let y = floor(random(0,tileBlue.rows))* tileBlue.size + tileBlue.size/2;
        //Add score if ANT and BREAD overlap
        food.x = x;
        food.y = y;
        //Add score if ANT and BREAD overlap
        score+=20;
        //Play sound if ANT AND BREAD overlap
        breadSFX.play();
      }
      //Check overlap between rock and ant.
      else if(food instanceof Rock) {
        let x = floor(random(0, tileBlue.columns))* tileBlue.size + tileBlue.size/2;
        let y = floor(random(0,tileBlue.rows))* tileBlue.size + tileBlue.size/2;
        //Ant respawns randomly if there is overlap
        this.x = 0;
        food.y = 60;
        food.x = x;
        food.y = y;
        //Minus score if ANT and ROCK overlap
        score-= 20;
        //Play sound if ANT AND BREAD overlap
        rockSFX.play();
      }
    }
  }
    //move()
    //Ant movement
    move() {
      this.x += this.vx;
      this.y += this.vy;
    }

    //Wraps the ant to th border of the tiles
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

    //Displays Antonio the ant
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
      push();
      fill(0);
      noStroke();

      rect(this.x + this.spacing, this.y - 15,this.antenaWidth, this.antenaHeight);
      pop();
    }

    //Use arrow keys to move Antonio
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
