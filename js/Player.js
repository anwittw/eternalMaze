class Player {
  constructor() {
    this.radius = 8;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
  }

  drawPlayer(x, y) {
    ctx.save();
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }

  draw(ctx) {
    if (game.gameStarted && !game.gameOver && game.mazeInPlace && !game.playerWon) {
      this.drawPlayer(this.x, this.y);
    }
  }
  leftBorder() {
    return this.x - this.radius;
  }
  rightBorder() {
    return this.x + this.radius;
  }
  topBorder() {
    return this.y - this.radius;
  }
  bottomBorder() {
    return this.y + this.radius;
  }

  update() {
    let formerX = this.x;
    let formerY = this.y;

    let nbOfSteps = 10;
    for (let step = 0; step < nbOfSteps; step++) {
      this.x += this.vx / nbOfSteps;
      this.y += this.vy / nbOfSteps;
      if (!this.checkValidPosition()) {
        this.x = formerX;
        this.y = formerY;
        // break; // Leave the for loop
      }
    }
  }
  checkValidPosition() {
    for (let i = 0; i < creators.length; i++) {
      if (
        0 <= this.leftBorder() &&
        this.rightBorder() <= CANVAS_WIDTH &&
        0 <= this.topBorder() &&
        this.bottomBorder()<= CANVAS_HEIGHT
      ) {
        if (
          creators[i].left() <= this.x &&
          this.x <= creators[i].right() &&
          creators[i].top() <= this.y &&
          this.y <= creators[i].bottom()
        ) {
          return true;
        }
      }
    }
    return false;
  }
}
