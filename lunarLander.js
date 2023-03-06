function scenery() {
  background(0);
}

function startButton(x, y) {
  fill(255);
  ellipse(x, y, 150, 75);
  fill(0);
  textSize(20);
  text(sentence1, x - 20, y + 5);
}

function mousePressed() {
  if (mouseX > 310 && mouseX < 460 && mouseY > 110 && mouseY < 190) {
    gameIsActive = true;
    spaceshipY = 50;
    spaceshipX = 375;
  }
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

function lose() {
  fill(255);
  text(sentence3, 345, 250);
}

function win() {
  fill(255);
  text(sentence4, 350, 250);
}

function restartButton(x, y) {
  fill(255);
  ellipse(x, y, 150, 75);
  fill(0);
  textSize(20);
  text(sentence2, x - 35, y + 5);
}

function mousePressed() {
  if (mouseX > 310 && mouseX < 460 && mouseY > 110 && mouseY < 190) {
    gameIsActive = true;
    spaceshipY = 50;
    spaceshipX = 375;
    velocity = 0.5;
    acceleration = 0.02;
  }
}

gameIsActive = false;

let spaceshipX = 375;
let spaceshipY = 50;
let velocity = 0.5;
let acceleration = 0.02;

let sentence1 = "Start";
let sentence2 = "Restart";
let sentence3 = "You lose!";
let sentence4 = "You win!";

function draw() {
  scenery();
  planets(350, 450, 1);
  spaceship(spaceshipX, spaceshipY, 0.7);

  // action when game is on
  if (gameIsActive === true) {
    spaceshipY = spaceshipY + velocity;
    velocity = velocity + acceleration;

    if (keyIsDown(40)) {
      flame(spaceshipX, spaceshipY, 0.7);
      spaceship(spaceshipX, spaceshipY, 0.7);
      velocity = velocity - 0.04;
    }
    if (keyIsDown(39)) {
      spaceshipX = spaceshipX + 1.3;
    }
    if (keyIsDown(37)) {
      spaceshipX = spaceshipX - 1.3;
    }
  } else {
    startButton(width / 2, 150);
  }

  // landing on planets
  if (
    spaceshipY > 320 &&
    spaceshipY < 350 &&
    spaceshipX > 310 &&
    spaceshipX < 390
  ) {
    if (velocity <= 2) {
      gameIsActive = false;
      win();
      restartButton(width / 2, 150);
    } else {
      gameIsActive = false;
      lose();
      restartButton(width / 2, 150);
    }
  }
  if (
    spaceshipY > 420 &&
    spaceshipY < 450 &&
    spaceshipX > 175 &&
    spaceshipX < 225
  ) {
    if (velocity <= 2) {
      gameIsActive = false;
      win();
      restartButton(width / 2, 150);
    } else {
      gameIsActive = false;
      lose();
      restartButton(width / 2, 150);
    }
  }
  if (
    spaceshipY > 270 &&
    spaceshipY < 300 &&
    spaceshipX > 445 &&
    spaceshipX < 500
  ) {
    if (velocity <= 2) {
      gameIsActive = false;
      win();
      restartButton(width / 2, 150);
    } else {
      gameIsActive = false;
      lose();
      restartButton(width / 2, 150);
    }
  }
  if (
    spaceshipY > 355 &&
    spaceshipY < 375 &&
    spaceshipX > 75 &&
    spaceshipX < 120
  ) {
    if (velocity <= 2) {
      gameIsActive = false;
      win();
      restartButton(width / 2, 150);
    } else {
      gameIsActive = false;
      lose();
      restartButton(width / 2, 150);
    }
  }
  if (
    spaceshipY > 375 &&
    spaceshipY < 395 &&
    spaceshipX > 605 &&
    spaceshipX < 640
  ) {
    if (velocity <= 2) {
      gameIsActive = false;
      win();
      restartButton(width / 2, 150);
    } else {
      gameIsActive = false;
      lose();
      restartButton(width / 2, 150);
    }
  }
  if (
    spaceshipY > 460 &&
    spaceshipY < 470 &&
    spaceshipX > 534 &&
    spaceshipX < 560
  ) {
    if (velocity <= 2) {
      gameIsActive = false;
      win();
      restartButton(width / 2, 150);
    } else {
      gameIsActive = false;
      lose();
      restartButton(width / 2, 150);
    }
  }
  if (
    spaceshipY > 485 &&
    spaceshipY < 495 &&
    spaceshipX > 35 &&
    spaceshipX < 60
  ) {
    if (velocity <= 2) {
      gameIsActive = false;
      win();
      restartButton(width / 2, 150);
    } else {
      gameIsActive = false;
      lose();
      restartButton(width / 2, 150);
    }
  }
  if (
    spaceshipY > 485 &&
    spaceshipY < 495 &&
    spaceshipX > 285 &&
    spaceshipX < 310
  ) {
    if (velocity <= 2) {
      gameIsActive = false;
      win();
      restartButton(width / 2, 150);
    } else {
      gameIsActive = false;
      lose();
      restartButton(width / 2, 150);
    }
  }
  if (
    spaceshipY > 465 &&
    spaceshipY < 475 &&
    spaceshipX > 685 &&
    spaceshipX < 710
  ) {
    if (velocity <= 2) {
      gameIsActive = false;
      win();
      restartButton(width / 2, 150);
    } else {
      gameIsActive = false;
      lose();
      restartButton(width / 2, 150);
    }
  }

  // getting to the bottom
  if (spaceshipY > 550) {
    gameIsActive = false;
    lose();
    restartButton(width / 2, 150);
  }
}
