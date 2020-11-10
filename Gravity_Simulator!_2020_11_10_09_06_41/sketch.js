let fall = 0;
let object;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  object = ellipse(width /2, fall, 20, 20);
  object.fill(255, 255, 0);
  fall += 0.981;
  fall *= 1.1;
}