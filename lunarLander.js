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
  noStroke();
  fill(122, 122, 122);
  rect(x, y, 20 * s, 15 * s);
  triangle(x, y, x - 10 * s, y + 7.5 * s, x, y + 15 * s);
  triangle(x + 20 * s, y, x + 30 * s, y + 7.5 * s, x + 20 * s, y + 15 * s);
  fill(0, 255, 255);
  beginShape();
  vertex(x - 2 * s, y + 5 * s);
  bezierVertex(
    x - 2,
    y - 15 * s,
    x + 22 * s,
    y - 15 * s,
    x + 22 * s,
    y + 5 * s
  );
  bezierVertex(
    x + 22 * s,
    y + 10 * s,
    x - 2 * s,
    y + 10 * s,
    x - 2 * s,
    y + 5 * s
  );
  endShape();
  fill(225);
  ellipse(x + 18 * s, y + 3 * s, 3 * s, 6 * s);
  ellipse(x + 17 * s, y - 2 * s, 3 * s);
}

function flame(x, y, s) {
  noStroke();
  fill(255, 255, 255, 180);
  beginShape();
  vertex(x + 7 * s, y + 10 * s);
  vertex(x, y + 30 * s);
  vertex(x + 20 * s, y + 30 * s);
  vertex(x + 13 * s, y + 10 * s);
  vertex(x + 7 * s, y + 10 * s);
  endShape();
  fill(255);
  beginShape();
  vertex(x + 8 * s, y + 10 * s);
  vertex(x + 3 * s, y + 32 * s);
  vertex(x + 17 * s, y + 32 * s);
  vertex(x + 12 * s, y + 10 * s);
  vertex(x + 8 * s, y + 10 * s);
  endShape();
}

function draw() {
  scenery();
  planets(350, 450, 1);
  flame(400, 50, 1);
  spaceship(400, 50, 1);
}
