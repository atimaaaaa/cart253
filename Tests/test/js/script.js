"use strict";

// Our array of lines from one of Hamlet's soliloquys (a sequence
// where he essentially talks to himself). We will want to display
// each line one after the other as the user clicks.
let soliloquy = [
  `To be, or not to be`,
  `That is the question.`,
  `Whether 'tis nobler in the mind`,
  `To suffer the slings and arrows`,
  `Of outrageous fortune`,
  `Or to take arms`,
  `Against a sea of sorrows`,
  `And by opposing end them.`
];

let currentFortune = 0;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
}

function draw() {
  background(0);

  let dialog = soliloquy[currentFortune];
  text(dialog, width / 2, height / 2);
}

function mousePressed() {
  currentFortune = currentFortune + 1;
  if (currentFortune === soliloquy.length) {
    currentFortune = soliloquy.length - 1;
  }
}
