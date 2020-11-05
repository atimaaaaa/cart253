let rover;

//let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  rover = createRoverCam();
  rover.usePointerLock();    // optional; default is keyboard control only
  rover.setState({           // optional
    position: [-500,-150,-200],
    rotation: [0.4,0.3,0],
    sensitivity: 0.1,
    speed: 0.5
  });
}

function draw() {
  background(120);

  //noFill();
  //stroke(0,250,0);
  let dx = mouseX - width/2;
  let dy = mouseY - height/2;
  let v = createVector(dx,dy,0);
  v.normalize();

  ambientLight(0,0,255);
  directionalLight(255,255,0,v);

  //rotateY(angle);

  //sphere(200);

  //box(10,100,50);

  //rectMode(CENTER);
  //rect(0,0,300,300);
  ambientMaterial(255);
  plane(100,100,500,500);

  //angle += 0.01;
};
