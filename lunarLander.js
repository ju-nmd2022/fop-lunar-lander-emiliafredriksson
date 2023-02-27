function scenery() {
  background(0);
}

function planets(x, y, s) {
  noStroke();
  fill(255, 128, 0);
  ellipse(x * s, y - 100 * s, 100 * s);

  fill(102, 204, 0);
  ellipse(x - 150 * s, y * s, 80 * s);

  fill(204, 204, 0);
  ellipse(x + 125 * s, y - 150 * s, 80 * s);

  fill(255, 255, 153);
  ellipse(x - 250 * s, y - 75 * s, 60 * s);

  fill(0, 102, 204);
  ellipse(x + 275 * s, y - 50 * s, 60 * s);

  fill(153, 76, 0);
  ellipse(x - 300 * s, y + 50 * s, 45 * s);

  fill(0, 204, 204);
  ellipse(x + 200 * s, y + 25 * s, 45 * s);

  fill(255, 51, 51);
  ellipse(x - 50 * s, y + 50 * s, 35 * s);

  fill(255, 204, 53);
  ellipse(x + 350 * s, y + 25 * s, 35 * s);
}

function spaceship(x, y, s) {
  // noStroke();
  beginShape();
  stroke(255);
  vertex(x, y);
  vertex(x - 20, y + 10);
}

function draw() {
  scenery();
  planets(350, 450, 1);
  spaceship(400, 50, 4);
}
