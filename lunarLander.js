function scenery() {
  background(0);
}

function planets(x, y, s) {
  fill(255);
  ellipse(x * s, y - 100 * s, 100 * s);
  ellipse(x - 150 * s, y * s, 80 * s);
  ellipse(x + 125 * s, y - 150 * s, 80 * s);
  ellipse(x - 250 * s, y - 75 * s, 60 * s);
  ellipse(x + 275 * s, y - 50 * s, 60 * s);
  ellipse(x - 300 * s, y + 50 * s, 45 * s);
  ellipse(x + 200 * s, y + 25 * s, 45 * s);
  ellipse(x - 50 * s, y + 50 * s, 35 * s);
  ellipse(x + 350 * s, y + 25 * s, 35 * s);
}

function draw() {
  scenery();
  planets(350, 450, 1);
}
